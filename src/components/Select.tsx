import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type Props = {} & React.ComponentProps<typeof Dropdown>;

const Select = ({
	style,
	activeColor,
	placeholderStyle,
	selectedTextStyle,
	iconStyle,
	itemTextStyle,
	itemContainerStyle,
	containerStyle,
	...rest
}: Props) => (
	<Dropdown
		style={[styles.dropdownContainer, style]}
		activeColor={activeColor || colors.neutral700}
		placeholderStyle={[styles.dropdownPlaceholder, placeholderStyle]}
		selectedTextStyle={[styles.dropdownSelectedText, selectedTextStyle]}
		iconStyle={[styles.dropdownIcon, iconStyle]}
		itemTextStyle={[styles.dropdownItemText, itemTextStyle]}
		itemContainerStyle={[styles.dropdownItemContainer, itemContainerStyle]}
		containerStyle={[styles.dropdownListContainer, containerStyle]}
		maxHeight={300}
		{...rest}
	/>
);

export default Select;

const styles = StyleSheet.create({
	dropdownContainer: {
		height: verticalScale(54),
		borderWidth: 1,
		borderColor: colors.neutral300,
		paddingHorizontal: spacingX._15,
		borderRadius: radius._15,
		borderCurve: "continuous",
	},
	dropdownItemText: { color: colors.white },
	dropdownSelectedText: { color: colors.white, fontSize: verticalScale(14) },
	dropdownListContainer: {
		backgroundColor: colors.neutral900,
		borderRadius: radius._15,
		borderCurve: "continuous",
		paddingVertical: spacingY._7,
		top: 5,
		borderColor: colors.neutral500,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
	},
	dropdownPlaceholder: { color: colors.white },
	dropdownItemContainer: { borderRadius: radius._15, marginHorizontal: spacingX._7 },
	dropdownIcon: { height: verticalScale(30), tintColor: colors.neutral300 },
});
