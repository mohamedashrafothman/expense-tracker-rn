import Loading from "@/components/Loading";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";

type Props = {
	style?: ViewStyle | undefined;
	loading?: boolean | undefined;
	children: React.ReactNode;
} & TouchableOpacityProps;

const Button = ({ style, loading, children, disabled, ...rest }: Props) => {
	if (loading)
		return (
			<View style={[styles.button, styles.disabled, style]}>
				<Loading color={colors.black} />
			</View>
		);

	return (
		<TouchableOpacity
			style={[styles.button, style, disabled && styles.disabled]}
			disabled={disabled}
			{...rest}>
			{children}
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: radius._17,
		borderCurve: "continuous",
		height: verticalScale(52),
		justifyContent: "center",
		alignItems: "center",
	},
	disabled: { opacity: 0.5 },
});
