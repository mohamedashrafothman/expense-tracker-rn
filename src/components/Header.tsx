import Typo from "@/components/Typo";
import React, { ReactNode } from "react";
import { StyleSheet, View, type ViewStyle } from "react-native";

type Props = {
	title?: string | undefined;
	style?: ViewStyle | undefined;
	leftIcon?: ReactNode | undefined;
	rightIcon?: ReactNode | undefined;
};

const Header = ({ style, title, leftIcon, rightIcon }: Props) => (
	<View style={[styles.container, style]}>
		{leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
		{title && (
			<Typo
				size={22}
				fontWeight={"600"}
				style={{
					textAlign: "center",
					width: leftIcon && rightIcon ? "60%" : leftIcon || rightIcon ? "80%" : "100%",
				}}>
				{title}
			</Typo>
		)}
		{rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
	</View>
);

export default Header;

const styles = StyleSheet.create({
	container: { width: "100%", alignItems: "center", flexDirection: "row" },
	leftIcon: { alignSelf: "flex-start" },
	rightIcon: { alignSelf: "flex-end" },
});
