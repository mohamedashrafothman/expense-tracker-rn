import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { getProfileImage } from "@/utils/common";
import { verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import { Link, type LinkProps } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type AccountOption = {
	title: string;
	icon: React.ReactNode;
	bgColor: string;
	href?: LinkProps["href"] | undefined;
	props?: TouchableOpacityProps | undefined;
};

const Profile = () => {
	const accountOptions: AccountOption[] = [
		{
			title: "Edit Profile",
			icon: <Icons.User size={verticalScale(26)} color={colors.white} weight="fill" />,
			href: "/(app)/(root)/(modal)/profile",
			bgColor: "#6366f1",
		},
		{
			title: "Settings",
			icon: <Icons.GearSix size={verticalScale(26)} color={colors.white} weight="fill" />,
			href: "/(app)/(root)/(modal)/settings",
			bgColor: "#059669",
		},
		{
			title: "Privacy Policy",
			icon: <Icons.Lock size={verticalScale(26)} color={colors.white} weight="fill" />,
			href: "/(app)/(root)/(modal)/privacy-policy",
			bgColor: colors.neutral600,
		},
		{
			title: "Logout",
			icon: <Icons.Power size={verticalScale(26)} color={colors.white} weight="fill" />,
			bgColor: "#e11d48",
			props: {
				// TODO: Implement logout
				onPress: () =>
					Alert.alert("Logout", "Are you sure you want to logout?", [
						{ text: "No, Cancel", style: "cancel" },
						{
							text: "Yes, Logout",
							onPress: () => console.log("Logout"),
							style: "destructive",
						},
					]),
			},
		},
	];

	// ui
	const renderAccountOptionButton = (option: AccountOption) => (
		<TouchableOpacity style={style.accountOptionsButton} {...(option?.props || {})}>
			<View style={[style.accountOptionsItemIcon, { backgroundColor: option.bgColor }]}>
				{option.icon}
			</View>
			<Typo size={18} fontWeight="500" color={colors.neutral100} style={{ flex: 1 }}>
				{option.title}
			</Typo>
			<Icons.CaretRight size={verticalScale(20)} color={colors.white} weight="bold" />
		</TouchableOpacity>
	);

	return (
		<ScreenWrapper>
			<View style={style.container}>
				<Header style={style.header} title="Profile" />
				<View style={style.userInfo}>
					<View style={style.nameContainer}>
						<View style={style.avatarContainer}>
							<Image
								source={getProfileImage("")}
								style={style.avatar}
								contentFit="cover"
								transition={100}
							/>
						</View>
						<Typo size={24} fontWeight="500" color={colors.neutral100}>
							Mohamed Ashraf
						</Typo>
						<Typo size={15} color={colors.neutral400}>
							mohamedashrafothman@gmail.com
						</Typo>
					</View>
				</View>
				<View style={style.accountOptions}>
					{accountOptions.map((accountOption, index) => (
						<Animated.View
							key={accountOption.title}
							entering={FadeInDown.delay(index * 50)
								.springify()
								.damping(14)}
							style={style.accountOptionsItem}>
							{!accountOption?.href ? (
								renderAccountOptionButton(accountOption)
							) : (
								<Link
									href={accountOption.href}
									style={{ width: "100%", flexDirection: "row" }}
									asChild>
									{renderAccountOptionButton(accountOption)}
								</Link>
							)}
						</Animated.View>
					))}
				</View>
			</View>
		</ScreenWrapper>
	);
};

const style = StyleSheet.create({
	container: { flex: 1, paddingHorizontal: spacingX._20 },
	header: { paddingTop: spacingY._10 },
	userInfo: { marginTop: verticalScale(30), alignItems: "center", gap: spacingY._15 },
	avatarContainer: { position: "relative", alignSelf: "center" },
	avatar: {
		alignSelf: "center",
		backgroundColor: colors.neutral300,
		height: verticalScale(135),
		width: verticalScale(135),
		borderRadius: 200,
	},
	nameContainer: { gap: verticalScale(4), alignItems: "center" },
	accountOptions: { marginTop: spacingY._35 },
	accountOptionsItem: { marginBottom: verticalScale(17) },
	accountOptionsButton: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		gap: spacingX._10,
		flexWrap: "nowrap",
	},
	accountOptionsItemIcon: {
		height: verticalScale(40),
		width: verticalScale(40),
		backgroundColor: colors.neutral500,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: radius._15,
		borderCurve: "continuous",
	},
});

export default Profile;
