import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import useAuth from "./hooks/UserHook";

import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";
import LoginScreen from "./screens/LoginScreen";
import ColorScheme from "./screens/ColorScheme";
import ProfileScreen from "./screens/ProfileScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AboutScreen = () => {
  return<Text style={{ fontFamily: 'Arial', fontSize: 16, lineHeight: 24, textAlign: 'left', marginVertical: 10,padding:20, }}>
  Maulana Abul Ala Maududi (1903–1979) was a renowned Islamic scholar, theologian, philosopher, and political activist from the Indian subcontinent. He was the founder of the Jamaat-e-Islami, a prominent Islamic revivalist movement that aimed to establish an Islamic state based on his interpretation of Islamic principles.

  Born in Aurangabad, India, Maududi developed a deep interest in Islamic studies from a young age. He was a prolific writer and thinker, with over a hundred books and numerous articles to his credit, covering a wide range of topics including theology, jurisprudence, politics, and social issues. His writings often reflected his vision of Islam as a comprehensive way of life that encompassed all aspects of individual and collective existence.
</Text>

}

export default function App() {
  const { user } = useAuth();
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
    <NavigationContainer theme={colorScheme === "light" ? DefaultTheme : DarkTheme}>
      <View style={{ flex: 1 }}>
        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <TouchableOpacity onPress={toggleColorScheme}>
            <Feather name={colorScheme === "light" ? "sun" : "moon"} size={24} color={colorScheme === "light" ? "black" : "white"} />
          </TouchableOpacity>
        </View>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: colorScheme === "light" ? "#942342" : "#000000", //top bar color
              },
              headerTintColor: "white",
              drawerStyle: {
                backgroundColor: colorScheme === "light" ? "#942342" : "#000000", //side menu color
              },
              drawerActiveTintColor: "grey",
              drawerInactiveTintColor: "white",
            }}>
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                drawerIcon: ({ focused, color, size }) => <Feather name="home" size={size} color={color} />,
              }}
            />
            <Drawer.Screen
              name="Store"
              component={StoreScreen}
              options={{title:'Book Store',
                drawerIcon: ({ focused, color, size }) => <Feather name="box" size={size} color={color} />,
              }}
            />
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                drawerIcon: ({ focused, color, size }) => <Feather name="user" size={size} color={color} />,
              }}
            />
            <Drawer.Screen
              name="About"
              component={AboutScreen}
              options={{
                drawerIcon: ({ focused, color, size }) => <Feather name="info" size={size} color={color} />,
              }}
            />
           
          </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}


{
	/* Stack Navigation */
}
{
	/* <Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerMode: "screen",
					headerTintColor: "white",
					headerStyle: { backgroundColor: "#227398" },
				}}>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						title: "Awesome app",
					}}
				/>
				<Stack.Screen
					name='Store'
					component={StoreScreen}
					options={{
						title: "Store",
					}}
				/>
				<Stack.Screen
					name='About'
					component={AboutScreen}
					options={{
						gestureEnabled: false,
					}}
				/>
			</Stack.Navigator> */
}

{
	/* Side Navigation */
}
{
	/* <Drawer.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerStyle: {
						backgroundColor: "#227398",
					},
					headerTintColor: "white",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					drawerStyle: {
						backgroundColor: "#227398",
					},
					drawerActiveTintColor: "tomato",
					drawerInactiveTintColor: "white",
				}}>
				<Drawer.Screen
					name='Home'
					component={HomeScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='home' size={size} color={color} />
						),
					}}
				/>
        <Drawer.Screen
					name='Store'
					component={StoreScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='box' size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name='About'
					component={AboutScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='info' size={size} color={color} />
						),
					}}
				/>
			</Drawer.Navigator> */
}

{
	/* Bottom Navigation */
}
{
	// <Tab.Navigator
				// 	initialRouteName='Home'
				// 	screenOptions={{
				// 		headerStyle: {
				// 			backgroundColor: "#03252e",
				// 		},
				// 		headerTintColor: "white",
				// 		headerTitleStyle: {
				// 			fontWeight: "bold",
				// 		},
				// 		tabBarActiveTintColor: "tomato",
				// 		tabBarInactiveTintColor: "white",
				// 		tabBarStyle: {
				// 			backgroundColor: "#03252e",
				// 			padding: 10,
				// 			height: 80,
				// 		},
				// 		headerRight: () => {
				// 			return <ProfileDropdown />;
				// 		},
				// 	}}>
				// 	<Tab.Screen
				// 		name='Home'
				// 		component={HomeScreen}
				// 		options={{
				// 			tabBarIcon: ({ focused, color, size }) => (
				// 				<Feather name='home' size={size} color={color} />
				// 			),
				// 		}}
				// 	/>
				// 	<Tab.Screen
				// 		name='Store'
				// 		component={StoreScreen}
				// 		options={{
				// 			tabBarIcon: ({ focused, color, size }) => (
				// 				<Feather name='box' size={size} color={color} />
				// 			),
				// 		}}
				// 	/>
				// 	<Tab.Screen
				// 		name='About'
				// 		component={AboutScreen}
				// 		options={{
				// 			tabBarIcon: ({ focused, color, size }) => (
				// 				<Feather name='info' size={size} color={color} />
				// 			),
				// 		}}
				// 	/>
				// </Tab.Navigator>
			
			
}