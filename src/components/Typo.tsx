import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

type Props = {
	size?: number | undefined;
	color?: string | undefined;
	fontWeight?: TextStyle["fontWeight"] | undefined;
	children: any | null;
	style?: TextStyle | undefined;
	textProps?: TextProps | undefined;
};

const Typo = ({
	size = 18,
	color = colors.text,
	fontWeight = "400",
	children,
	style,
	textProps = {},
}: Props) => (
	<Text style={[{ fontWeight, color, fontSize: verticalScale(size) }, style]} {...textProps}>
		{children}
	</Text>
);

export default Typo;
