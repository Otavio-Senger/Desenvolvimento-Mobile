import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		width: "100%",
	},
	logo: {
		paddingTop: 32.2,
		alignItems: "center",
	},
	text1: {
		fontSize: 36,
		fontWeight: "600",
		color: colors.blue[300],
	},
	text2: {
		fontSize: 36,
		fontWeight: "600",
		color: colors.gray[100],
	},
	texts: {
		alignItems: "center",
	},
});
