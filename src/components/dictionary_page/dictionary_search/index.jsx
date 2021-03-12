import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

function DictionarySearch() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <SearchBar
        onChange={e => setSearch(e.target)}
        value={search}
        onRequestSearch={() => console.log(search)}
        style={{
          margin: '0 auto',
          minWidth: 1
        }}
      />
    </div>
  )
}

export default DictionarySearch;
