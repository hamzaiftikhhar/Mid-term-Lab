import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { surahNames } from './QuranData'; // Import surahNames array

const ProfileScreen = () => {
	const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  
  // Filter surahNames based on searchText
  const filteredSurahs = surahNames.filter(surah => surah.english.toLowerCase().includes(searchText.toLowerCase()));
  
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 ,borderRadius:20,padding:20,}}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Search Surah"
      />
      <FlatList
        data={filteredSurahs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("DetailScreen", { surah: item })}>
            <View>
              <Text style={styles.title}>{item.english}</Text>
              <Text style={styles.subtitle}>{item.arabic}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20
	,
	
    marginVertical: 8,
    
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileScreen;
