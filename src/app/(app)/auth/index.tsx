import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Link } from "expo-router";
import * as Icons from "phosphor-react-native";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

const Index = () => (
	<ScreenWrapper>
		<View style={styles.container}>
			<BackButton iconSize={28} />
			<View style={{ gap: 5, marginTop: spacingX._20 }}>
				<Typo size={30} fontWeight={"800"}>{`Welcome\nBack`}</Typo>
			</View>
			<View style={styles.form}>
				<Typo size={16} color={colors.textLighter}>
					Login now to track your expenses
				</Typo>
				<Input
					placeholder="Enter your Email"
					autoComplete="email"
					textContentType="emailAddress"
					keyboardType="email-address"
					autoCapitalize="none"
					returnKeyType="next"
					icon={
						<Icons.At
							size={verticalScale(26)}
							color={colors.neutral300}
							weight="fill"
						/>
					}
				/>
				<Input
					placeholder="Enter your Password"
					returnKeyType="done"
					secureTextEntry
					icon={
						<Icons.Lock
							size={verticalScale(26)}
							color={colors.neutral300}
							weight="fill"
						/>
					}
				/>
				<Link href="/(app)/auth/forgot-password" asChild>
					<TouchableOpacity style={styles.forgotPassword}>
						<Typo color={colors.text} size={14}>
							Forgot Password
						</Typo>
					</TouchableOpacity>
				</Link>
				<Button onPress={() => console.log("submitted")}>
					<Typo size={22} color={colors.neutral900} fontWeight={"600"}>
						Login
					</Typo>
				</Button>
			</View>
			<View style={styles.footer}>
				<Typo size={15}>Don't have an account?</Typo>
				<Link href="/(app)/auth/register" asChild>
					<Pressable>
						<Typo size={15} color={colors.primary} fontWeight={"500"}>
							Sign up
						</Typo>
					</Pressable>
				</Link>
			</View>
		</View>
	</ScreenWrapper>
);

export default Index;

const styles = StyleSheet.create({
	container: { flex: 1, gap: spacingY._30, paddingHorizontal: spacingX._20 },
	form: { gap: spacingY._20 },
	forgotPassword: { alignSelf: "flex-end", fontWeight: "500", color: colors.text },
	footer: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 },
	footerText: { textAlign: "center", color: colors.text, fontSize: verticalScale(15) },
});
