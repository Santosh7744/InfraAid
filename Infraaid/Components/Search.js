import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchbar}
    />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
   searchbar:{
    padding:5,
    borderWidth:1,
    margin:7,
    borderColor:'#edf1f5'
   }
})