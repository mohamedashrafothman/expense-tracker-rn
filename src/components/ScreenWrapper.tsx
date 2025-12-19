import { colors, spacingY } from "@/constants/theme";
import React from "react";
import { Dimensions, KeyboardAvoidingView, Platform, StyleSheet, ViewStyle } from "react-native";

type Props = {
	style?: ViewStyle | undefined;
	children: React.ReactNode;
	isModal?: boolean | undefined;
};

const IS_IOS = Platform.OS === "ios";

const ScreenWrapper = ({ style, children, isModal }: Props) => (
	<KeyboardAvoidingView
		style={[
			{
				paddingTop: IS_IOS
					? isModal
						? spacingY._15
						: Dimensions.get("window").height * 0.06
					: 50,
				paddingBottom: isModal ? (IS_IOS ? spacingY._20 : spacingY._10) : 0,
			},
			styles.container,
			style,
		]}>
		{children}
	</KeyboardAvoidingView>
);

export default ScreenWrapper;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: colors.neutral900,
	},
});
