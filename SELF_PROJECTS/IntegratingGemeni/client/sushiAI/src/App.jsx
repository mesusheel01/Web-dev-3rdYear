import React, { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorMsg(null);
    setSearchData(null);

    try {
      const response = await fetch('http://localhost:3000/api/aiSearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }), // Send the query as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchData(data.result);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the query state on input change
          placeholder="Enter your query"
          required
        />
        <button type="submit">Search</button>
      </form>
      
      <div>
        {searchData && <div>{searchData}</div>}
        {errorMsg && <div>Error: {errorMsg}</div>}
      </div>
    </div>
  );
}

export default App;
