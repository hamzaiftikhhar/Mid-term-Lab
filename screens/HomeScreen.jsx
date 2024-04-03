import React from "react";
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  const deviceColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(deviceColorScheme || "light");

  useEffect(() => {
    setColorScheme(deviceColorScheme || "light");
  }, [deviceColorScheme]);

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  };
  return (
    <View style={[styles.container, { backgroundColor: colorScheme === "light" ? "white" : "black" }]}>
      {/* <Text style={styles.h1}>Home</Text>
      <Text>Navigate to the Details screen</Text> */}
      <Text style={{color:'red'}}>This Page will change its color
      
      </Text>
      {/* Toggle button */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleColorScheme}>
        <Feather name={colorScheme === "light" ? "moon" : "sun"} size={24} color={colorScheme === "light" ? "black" : "white"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "violet",
    marginTop: 10,
    padding: 10,
  },

  h1: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 40,
  },

  buttonText: {
    color: "white",
  },

  // Toggle button styles
  toggleButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
};
