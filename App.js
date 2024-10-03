import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HelloWorld from "./components/HelloWorld"; // Zmieniono na odkomentowany import

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello World from App.js</Text>
			<HelloWorld />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
