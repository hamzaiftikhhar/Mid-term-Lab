import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, Button, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native';

const MyComponent = () => {
  const navigation = useNavigation();

  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(colorScheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  };

  const backgroundColor = currentTheme === 'dark' ? 'black' : 'white';
  const buttonLabel = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <View style={styles.container}>
     
      
      <View style={{ width:380,flex: 3, backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
        <Button title={buttonLabel} onPress={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
