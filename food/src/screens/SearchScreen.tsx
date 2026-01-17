import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResturantResult from '../hooks/useResturantResult';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResturantResult();
 
  const filterResultByPrice = (price:string) => {
    // price === $ || $$ || $$$
    return results.filter((result)=>{
      return result.price === price
    });
  }

  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
     <ResultList title={"Cost Effective"} results={filterResultByPrice('$')} />
     <ResultList title={"Bit pricer"} results={filterResultByPrice('$$')} />
     <ResultList title={"Most pricer"} results={filterResultByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
