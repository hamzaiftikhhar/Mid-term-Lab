import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/UserHook";

const RegisterScreen = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signUp } = useAuth();

	const handleRegister = () => {
		if (!email || !password) {
			return alert("Please fill in all fields");
		}

		try {
			signUp(email, password);
		} catch (error) {
			console.error("Error registering user:", error);
			return alert(
				"Error registering user: " + error.message || "An error occurred"
			);
		}

		setEmail("");
		setPassword("");

		// navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create an Account</Text>
			<TextInput
				style={styles.input}
				placeholder='Email'
				value={email}
				onChangeText={setEmail}
				autoCapitalize='none'
				keyboardType='email-address'
			/>
			<TextInput
				style={styles.input}
				placeholder='Password'
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TouchableOpacity style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Register</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonSecondary}
				onPress={() => navigation.navigate("Login")}>
				<Text>Already have an account? Log in</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		fontSize: 16,
	},
	button: {
		width: "80%",
		height: 50,
		backgroundColor: "#007bff",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
	},
	buttonSecondary: {
		marginTop: 20,
	},
});

export default RegisterScreen;
