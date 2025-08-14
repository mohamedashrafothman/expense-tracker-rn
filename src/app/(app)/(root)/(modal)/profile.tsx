import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { getProfileImage } from "@/utils/common";
import { verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { type ImagePickerSuccessResult } from "expo-image-picker";
import * as Icons from "phosphor-react-native";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const Profile = () => {
	const [profileImageState, setProfileImageState] = useState<
		ImagePickerSuccessResult["assets"][0]["uri"] | null
	>(null);

	// event handlers
	const onPickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			aspect: [1, 1],
			quality: 0.5,
		});

		if (result.canceled) return;

		setProfileImageState(result.assets[0].uri);
	};

	return (
		<ScreenWrapper isModal>
			<View style={style.container}>
				<Header title="Update Profile" leftIcon={<BackButton />} style={style.header} />
				<ScrollView contentContainerStyle={style.content}>
					<View style={style.avatarContainer}>
						<Image
							source={getProfileImage(profileImageState)}
							style={style.avatar}
							contentFit="cover"
							transition={100}
						/>
						<TouchableOpacity onPress={onPickImage} style={style.editBtn}>
							<Icons.Pencil size={verticalScale(20)} color={colors.neutral800} />
						</TouchableOpacity>
					</View>
					<View style={style.inputContainer}>
						<Typo style={{ color: colors.neutral200, marginTop: spacingY._10 }}>
							Name
						</Typo>
						<Input
							value="Mohamed Ashraf"
							placeholder="Enter your Name"
							autoCapitalize="none"
							autoComplete="name"
							returnKeyType="next"
						/>
						<Typo style={{ color: colors.neutral200, marginTop: spacingY._10 }}>
							Email
						</Typo>
						<Input
							value="mohamedashrafothman@gmail.com"
							placeholder="Enter your Email"
							autoComplete="email"
							textContentType="emailAddress"
							keyboardType="email-address"
							autoCapitalize="none"
							returnKeyType="next"
						/>
					</View>
				</ScrollView>
			</View>
			<View style={style.footer}>
				<Button
					style={{ width: "100%" }}
					onPress={() => console.log("updated")}
					loading={false}>
					<Typo color={colors.neutral900} fontWeight={"600"}>
						Update
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
	avatarContainer: { position: "relative", alignSelf: "center" },
	avatar: {
		alignSelf: "center",
		backgroundColor: colors.neutral300,
		height: verticalScale(135),
		width: verticalScale(135),
		borderRadius: 200,
	},
	editBtn: {
		position: "absolute",
		bottom: spacingY._5,
		right: spacingX._5,
		padding: spacingX._5,
		backgroundColor: colors.neutral100,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 4,
	},
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

export default Profile;
