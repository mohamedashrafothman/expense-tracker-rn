import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Header from "@/components/Header";
import ImageUpload from "@/components/ImageUpload";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { type ImagePickerSuccessResult } from "expo-image-picker";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Wallet = () => {
	const [walletIconState, setWalletIconState] = useState<
		ImagePickerSuccessResult["assets"][0] | null
	>(null);

	return (
		<ScreenWrapper isModal>
			<View style={style.container}>
				<Header title="New Wallet" leftIcon={<BackButton />} style={style.header} />
				<ScrollView contentContainerStyle={style.content}>
					<View style={style.inputContainer}>
						<Typo style={{ color: colors.neutral200, marginTop: spacingY._10 }}>
							Name
						</Typo>
						<Input
							value="Wallet name"
							placeholder="Enter wallet name"
							autoCapitalize="none"
							autoComplete="name"
							returnKeyType="next"
						/>
					</View>
					<View style={style.inputContainer}>
						<Typo style={{ color: colors.neutral200, marginTop: spacingY._10 }}>
							Wallet Icon
						</Typo>
						<ImageUpload
							placeholder="Upload Wallet Icon"
							file={walletIconState}
							onSelect={setWalletIconState}
							onClear={() => setWalletIconState(null)}
						/>
					</View>
				</ScrollView>
			</View>
			<View style={style.footer}>
				<Button
					style={{ width: "100%" }}
					onPress={() => console.log("Created")}
					loading={false}>
					<Typo color={colors.neutral900} fontWeight={"600"}>
						Add Wallet
					</Typo>
				</Button>
			</View>
		</ScreenWrapper>
	);
};

const style = StyleSheet.create({
	container: { flex: 1, justifyContent: "space-between", paddingHorizontal: spacingX._20 },
	header: { marginBottom: spacingY._20 },
	content: { gap: spacingY._30, marginTop: spacingY._15 },
	inputContainer: { gap: spacingY._10 },
	footer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		paddingHorizontal: spacingX._20,
		gap: verticalScale(20),
		paddingTop: spacingY._20,
		borderTopWidth: 1,
		borderTopColor: colors.neutral700,
		marginBottom: spacingY._5,
	},
});

export default Wallet;
