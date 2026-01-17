import React, { useState, useEffect } from 'react';

import yelp from '../api/yelp';



export default ():[(term: string) => void, any[], string] => {
     const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=> {
   // searchApi('pasta')
  }, [])


  const searchApi = async (searchTerm:string) => {
    try {
    const response = await yelp.get('/businesses/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
    console.log(response.data)
  }catch(err){
setErrorMessage(err)
console.log(err.toJSON())
  }
  };


  return [searchApi,results, errorMessage]
}