import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LawyerMenu = ({ onSelectOption }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for lawyers
  const lawyers = [
    'Criminal Lawyer',
    'Business Lawyer',
    'Family Lawyer',
    'Marriage Lawyer',
    'Divorce Lawyer',
    'Immigration Lawyer',
    'Immigration Lawyer',
    'Immigration Lawyer',
    'Immigration Lawyer',
    'Immigration Lawyer',
    'Immigration Lawyer',
    'Immigration Lawyer',
  ];

  // Function to filter lawyers based on search query
  const filteredLawyers = lawyers.filter(lawyer =>
    lawyer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderLawyerItem = (lawyer, index) => (
    <TouchableOpacity
      key={index}
      style={styles.option}
      onPress={() => onSelectOption(lawyer)}>
      <Text style={styles.optionText}>{lawyer}</Text>
    </TouchableOpacity>
  );

  const renderLawyerPairs = () => {
    const pairs = [];
    for (let i = 0; i < filteredLawyers.length; i += 2) {
      const pair = (
        <View key={i} style={styles.pairContainer}>
          {renderLawyerItem(filteredLawyers[i], i)}
          {filteredLawyers[i + 1] && renderLawyerItem(filteredLawyers[i + 1], i + 1)}
        </View>
      );
      pairs.push(pair);
    }
    return pairs;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Lawyer List</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Search'
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
          <FontAwesome name='search' style={styles.searchIcon} size={24} color={'black'} />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {renderLawyerPairs()}
        <View style={{marginTop:100}}></View>
      </ScrollView>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden', // Ensure content does not overflow outside the container
  },
  headerContainer: {
    backgroundColor: 'grey',
    padding: 20,
    alignItems: 'center',
    flex: 0.2,
    borderRadius: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  pairContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  option: {
    flex: 0.48, // Adjusted width to fit two options in each row effectively
    height: 200,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default LawyerMenu;
