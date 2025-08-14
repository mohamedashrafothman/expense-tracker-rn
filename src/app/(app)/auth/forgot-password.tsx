import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import { Pressable, StyleSheet, View } from "react-native";

const ForgotPassword = () => {
	const { back } = useRouter();

	return (
		<ScreenWrapper>
			<View style={styles.container}>
				<BackButton iconSize={28} />
				<View style={{ gap: 5, marginTop: spacingX._20 }}>
					<Typo size={30} fontWeight={"800"}>{`Forgot\nPassword`}</Typo>
				</View>
				<View style={styles.form}>
					<Typo size={16} color={colors.textLighter}>
						Enter your email to reset your password
					</Typo>
					<Input
						placeholder="Enter your Email"
						autoComplete="email"
						textContentType="emailAddress"
						keyboardType="email-address"
						autoCapitalize="none"
						returnKeyType="done"
						icon={
							<Icons.At
								size={verticalScale(26)}
								color={colors.neutral300}
								weight="fill"
							/>
						}
					/>
					<Button onPress={() => console.log("submitted")}>
						<Typo size={22} color={colors.neutral900} fontWeight={"600"}>
							Send Email
						</Typo>
					</Button>
				</View>
				<View style={styles.footer}>
					<Pressable onPress={back}>
						<Typo size={15} color={colors.primary} fontWeight={"500"}>
							Back to login
						</Typo>
					</Pressable>
				</View>
			</View>
		</ScreenWrapper>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, gap: spacingY._30, paddingHorizontal: spacingX._20 },
	form: { gap: spacingY._20 },
	forgotPassword: { alignSelf: "flex-end", fontWeight: "500", color: colors.text },
	footer: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 },
	footerText: { textAlign: "center", color: colors.text, fontSize: verticalScale(15) },
});

export default ForgotPassword;
