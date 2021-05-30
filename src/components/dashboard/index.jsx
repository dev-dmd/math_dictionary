import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import db from '../../config/firebase';
import { FormControl, Grid, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UsersList from './UsersList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: '5px'
  },
  iconButton: {
    padding: 10,
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    showPassword: false,
    timestamp: db.firestore.FieldValue.serverTimestamp()
  });
  
  useEffect(() => {
    db.firestore().collection('users').onSnapshot(snapshot => {
      if (snapshot !== null) {
        console.log([...snapshot.docs.map(doc => doc.data())]);
        setUsers(snapshot.docs.map(doc => doc.data()));
      }
    })
  }, [])

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setInputs({ ...inputs, showPassword: !inputs.showPassword });
  };

  const onRequestSetUser = (e) => {
      e.preventDefault();
      delete inputs.showPassword;
      delete inputs.timestamp;
      setUsers([...users, inputs]);
      db.firestore().collection('users').add({
        name: inputs.name,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password  
      });
      setInputs({
        name: '',
        lastName: '',
        email: '',
        password: '',
        showPassword: false,
      });
  }
  
  console.log(users)
  console.log(inputs)
  return (
    <div>
      <Paper component="form" onSubmit={onRequestSetUser} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControl required className={`${classes.margin} ${classes.textField}`} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                <OutlinedInput
                  id="name"
                  name="name"
                  type="text"
                  value={inputs.name}
                  onChange={handleChange('name')}
                  aria-describedby="your name"
                  labelWidth={50}
                />
              </FormControl>
            </Paper>     
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControl required className={`${classes.margin} ${classes.textField}`} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-lastName">Last Name</InputLabel>
                <OutlinedInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={inputs.lastName}
                  onChange={handleChange('lastName')}
                  aria-describedby="your last name"
                  labelWidth={70}
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControl required className={`${classes.margin} ${classes.textField}`} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  id="email"
                  name="email"
                  type="text"
                  value={inputs.email}
                  onChange={handleChange('email')}
                  aria-describedby="your email"
                  labelWidth={70}
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControl required className={`${classes.margin} ${classes.textField}`} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={inputs.showPassword ? 'text' : 'password'}
                value={inputs.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {inputs.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <IconButton type="submit" className={classes.iconButton} aria-label="submit">
                <SendIcon />
              </IconButton>              
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <UsersList data={users} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}


// Push to realtime database

// const onRequestSetUser = (e) => {
  //   e.preventDefault();    
  //   const usersRef = db.database().ref("User");
  //   delete users.showPassword;
  //   const user = users;
  //   usersRef.push(user);
  // }


  // control multiole inputs fields
  // one way up there is another way
   // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setUsers({
  //     ...users,
  //     [e.target.name]: value
  //   });
  // };