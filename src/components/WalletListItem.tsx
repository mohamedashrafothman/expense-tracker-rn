import Typo from "@/components/Typo";
import { colors, radius, spacingX } from "@/constants/theme";
import IWallet from "@/interfaces/Wallet.interface";
import { verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import { Link, Router } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
	item?: IWallet | undefined;
	router?: Router | undefined;
};

const WalletListItem = ({ item }: Props) => (
	<Link
		href={{ pathname: "/(app)/(root)/(modal)/wallet", params: { id: item?.id || "" } }}
		asChild>
		<TouchableOpacity style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={{ flex: 1 }}
					source={item?.image}
					contentFit="cover"
					transition={100}
				/>
			</View>
			<View style={styles.nameContainer}>
				<Typo size={16} fontWeight="500">
					Savings
				</Typo>
				<Typo size={14} color={colors.neutral400}>
					$123
				</Typo>
			</View>
			<Icons.CaretRight size={verticalScale(20)} color={colors.white} weight="bold" />
		</TouchableOpacity>
	</Link>
);

export default WalletListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: verticalScale(17),
	},
	imageContainer: {
		height: verticalScale(45),
		width: verticalScale(45),
		backgroundColor: colors.neutral800,
		borderWidth: 1,
		borderColor: colors.neutral600,
		borderRadius: radius._17,
		borderCurve: "continuous",
		overflow: "hidden",
	},
	nameContainer: {
		flex: 1,
		gap: 2,
		marginLeft: spacingX._10,
	},
});
