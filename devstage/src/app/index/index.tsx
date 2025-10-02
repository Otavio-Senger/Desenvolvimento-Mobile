import { Input } from "@/components/Inputs";
import { Mail, User } from "lucide-react-native";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./style";

export default function Index() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("@/assets/Background.png")}
			>
				<View style={styles.logo}>
					<Image
						source={require("@/assets/Vector.png")}
						style={styles.logoIMG}
					/>
				</View>

				<View style={styles.texts}>
					<Text style={styles.text1}>CodeCraft</Text>
					<Text style={styles.text2}>Summit 2025</Text>
				</View>
				{/* 
				<View style={styles.sobreAndLogin}>
					<View style={styles.titleAndIcon}>
						<Text style={styles.titleSobre}>Sobre o evento</Text>
						<View style={styles.aoVivo}>
							<Radio size={20} color={colors.purple[300]} />
							<Text style={styles.textAoVivo}>ao vivo</Text>
						</View>
					</View>
					<Text style={styles.textSobre}>
						Um evento feito por e para pessoas desenvolvedoras apaixonadas por
						criar soluções inovadoras e compartilhar conhecimento. Vamos
						mergulhar nas tendências mais recentes em desenvolvimento de
						software, arquitetura de sistemas e tecnologias emergentes, com
						palestras, workshops e hackathons.
					</Text>
					<Text style={[styles.textSobre, { paddingTop: 16 }]}>
						Dias 15 a 17 de março | Das 18h às 21h
					</Text>
				</View> */}

				<View style={styles.sobreAndLogin}>
					<Text style={styles.titleSobre}>Inscrição</Text>
					<Input iconName={User} placeholder="Nome completo" />
					<Input iconName={Mail} placeholder="E-mail" />
				</View>
			</ImageBackground>
		</View>
	);
}
