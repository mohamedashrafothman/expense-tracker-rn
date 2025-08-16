import Typo from "@/components/Typo";
import { colors, radius, spacingX } from "@/constants/theme";
import ITransaction from "@/interfaces/Transaction.interface";
import { verticalScale } from "@/utils/styling";
import * as Icons from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = { item: ITransaction; handleClick: Function };

const TransactionItem = ({ item, handleClick }: Props) => {
	const category =
		(typeof item.category !== "string" &&
			typeof item.category !== "undefined" &&
			item.category) ||
		null;
	const Icon = category && category?.icon ? category.icon : Icons.Wallet;

	return (
		<TouchableOpacity style={styles.row} onPress={() => handleClick(item)}>
			<View
				style={[
					styles.icon,
					{
						backgroundColor:
							typeof item.category !== "string" && item.category
								? item.category.bgColor
								: colors.green,
					},
				]}>
				<Icon size={verticalScale(25)} weight="fill" color={colors.white} />
			</View>
			<View style={styles.categoryDes}>
				{category?.label && <Typo size={17}>{category.label}</Typo>}
				<Typo size={12} color={colors.neutral400} textProps={{ numberOfLines: 1 }}>
					{item.description}
				</Typo>
			</View>
			<View style={styles.amount}>
				<Typo fontWeight="500" color={item.type === "expense" ? colors.rose : colors.green}>
					{`${item.type === "expense" ? "-" : "+"} $${item.amount}`}
				</Typo>
				<Typo size={13} color={colors.neutral400}>
					12 Jan 25
				</Typo>
			</View>
		</TouchableOpacity>
	);
};

export default TransactionItem;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: spacingX._12,
		marginBottom: spacingX._12,
		backgroundColor: colors.neutral800,
		padding: spacingX._10,
		borderRadius: radius._17,
	},
	icon: {
		height: verticalScale(44),
		aspectRatio: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: radius._12,
		borderCurve: "continuous",
	},
	categoryDes: { flex: 1, gap: 2.5 },
	amount: { alignItems: "flex-end", gap: 3 },
});
