import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);



  const checkURL = async () => {
    try {
      setLoading(true);
      
      const post_array = [
        {
          "url": "https://dataforseo.com/blog",
          "enable_javascript": true,
          "enable_browser_rendering":true,	
          "custom_js": "meta = {}; meta.url = document.URL; meta"
        },
      ];

      const response = await axios.post(
        'https://api.dataforseo.com/v3/on_page/instant_pages',
        post_array,
        {
          auth: {
            username: 'prince7052363645@gmail.com',
            password: '4e010c558a2fbb68',
          },
         
        }
      );

      // Check the API response for errors and process the data
      if (response.data.status === 'error') {
        setResult(`Error: ${response.data.error_message}`);
      } else {
        setResult(JSON.stringify(response.data, null, 2));
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="widget-container">
      <h1 className="widget-title">URL Checker Widget</h1>
      <input
        className="url-input"
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="check-button"
        onClick={checkURL}
        disabled={loading}
      >
        Check URL
        {loading && <span className="loading-indicator">Loading...</span>}
      </button>
      {result && (
        <div className="result-container">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}
  
export default App;

