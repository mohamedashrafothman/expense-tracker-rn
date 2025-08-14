import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const Index = () => (
	<ScreenWrapper>
		<View style={styles.container}>
			<View>
				<Animated.View entering={FadeInDown.duration(500)}>
					<Link href="/(app)/auth" asChild>
						<TouchableOpacity style={styles.loginButton}>
							<Typo fontWeight={"500"}>Sign in</Typo>
						</TouchableOpacity>
					</Link>
				</Animated.View>
				<Animated.Image
					entering={FadeIn.duration(1500)}
					source={require("../assets/images/welcome.png")}
					style={styles.welcomeImage}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.footer}>
				<Animated.View
					entering={FadeInDown.duration(500).springify().damping(12)}
					style={{ alignItems: "center" }}>
					<Typo size={30} fontWeight={"800"} style={{ textAlign: "center" }}>
						{`Always take control \nof your finances`}
					</Typo>
				</Animated.View>
				<Animated.View
					entering={FadeInDown.duration(500).delay(100).springify().damping(12)}
					style={{ alignItems: "center" }}>
					<Typo size={17} color={colors.textLight} style={{ textAlign: "center" }}>
						{`Finance must be arranged to set a better \nlifestyle in the future`}
					</Typo>
				</Animated.View>
				<Animated.View
					entering={FadeInDown.duration(500).delay(200).springify().damping(12)}
					style={styles.buttonContainer}>
					<Link href="/(app)/auth/register" asChild>
						<Button>
							<Typo size={22} color={colors.neutral900} fontWeight={"600"}>
								Get Started
							</Typo>
						</Button>
					</Link>
				</Animated.View>
			</View>
		</View>
	</ScreenWrapper>
);

export default Index;

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "space-between", paddingTop: spacingY._7 },
	loginButton: { alignSelf: "flex-end", marginRight: spacingX._20 },
	welcomeImage: {
		width: "100%",
		height: verticalScale(300),
		alignSelf: "center",
		marginTop: verticalScale(100),
	},
	footer: {
		backgroundColor: colors.neutral900,
		paddingTop: verticalScale(30),
		paddingBottom: verticalScale(45),
		gap: spacingY._20,
		shadowColor: "white",
		shadowOffset: { width: 0, height: -10 },
		elevation: 10,
		shadowRadius: 25,
		shadowOpacity: 0.15,
	},
	buttonContainer: { width: "100%", paddingHorizontal: spacingX._25 },
});
