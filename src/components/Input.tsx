import { colors, radius, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";

type Props = {
	icon?: React.ReactNode | undefined;
	containerStyle?: ViewStyle | undefined;
	inputStyle?: TextStyle | undefined;
	inputRef?: React.RefObject<TextInput> | undefined;
	//   label?: string;
	//   error?: string;
} & TextInputProps;

const Input = ({ icon, containerStyle, inputStyle, inputRef, ...rest }: Props) => (
	<View style={[styles.container, containerStyle]}>
		{icon && icon}
		<TextInput
			style={[styles.input, inputStyle]}
			placeholderTextColor={colors.neutral400}
			ref={inputRef}
			{...rest}
		/>
	</View>
);

export default Input;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: verticalScale(54),
		alignItems: "center",
		justifyContent: "center",
		gap: spacingX._10,
		borderWidth: 1,
		borderColor: colors.neutral300,
		borderRadius: radius._17,
		borderCurve: "continuous",
		paddingHorizontal: spacingX._15,
	},
	input: { flex: 1, color: colors.white, fontSize: verticalScale(14) },
});
