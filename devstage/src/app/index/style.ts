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
	logoIMG: {
		width: 87,
		height: 24,
	},
	logo: {
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 32,
		paddingBottom: 20,
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
	sobreAndLogin: {
		backgroundColor: colors.gray[700],
		borderRadius: 15,
		padding: 24,
		marginHorizontal: 16,
		marginTop: 40,
	},
	titleAndIcon: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: 24,
	},
	titleSobre: {
		color: colors.gray[200],
		fontSize: 20,
		fontWeight: "600",
	},
	textAoVivo: {
		fontSize: 12,
		color: colors.purple[300],
	},
	aoVivo: {
		flexDirection: "row",
		gap: 8,
	},
	textSobre: {
		color: colors.gray[300],
		fontSize: 14,
		fontWeight: "400",
	},
});
