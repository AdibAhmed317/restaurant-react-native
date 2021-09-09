import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const base = ['pasta', 'burger', 'pizza', 'fish'];
    const randomTerm = Math.floor(Math.random() * base.length);
    const baseSearch = base[randomTerm];

    searchAPI(baseSearch);
  }, []);

  const searchAPI = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something Went Wrong');
    }
  };

  return [searchAPI, results, errorMessage];
};
