import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./style";

export default function Index() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("@/assets/Background.png")}
			>
                <View  style = {styles.logo}>
                <Image source={require('@/assets/Vector.png')}/>
                </View>

            <View style={styles.texts}>
			<Text style={styles.text1}>CodeCraft</Text>
            <Text style={styles.text2}>Summit 2025</Text>
            </View>
            </ImageBackground>
		</View>
	);
}
