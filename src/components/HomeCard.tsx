import Typo from "@/components/Typo";
import { colors, spacingX } from "@/constants/theme";
import { scale, verticalScale } from "@/utils/styling";
import { ImageBackground } from "expo-image";
import * as Icons from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const HomeCard = () => (
	<ImageBackground
		source={require("../assets/images/card.png")}
		resizeMode="stretch"
		style={styles.bgImage}>
		<View style={styles.container}>
			{/* Total Ballance */}
			<View style={styles.totalBallanceRow}>
				<Typo color={colors.neutral800} size={17} fontWeight={"800"}>
					Total Ballance
				</Typo>
				<TouchableOpacity>
					<Icons.DotsThreeOutline
						size={verticalScale(23)}
						color={colors.black}
						weight="fill"
					/>
				</TouchableOpacity>
			</View>
			{/* Total Expense and Income */}
			<View style={styles.stats}>
				<View style={{ gap: verticalScale(5) }}>
					<View style={styles.incomeExpense}>
						<View style={styles.stateIcon}>
							<Icons.ArrowUp
								size={verticalScale(15)}
								color={colors.black}
								weight="bold"
							/>
						</View>
						<Typo size={16} color={colors.neutral700} fontWeight="500">
							Income
						</Typo>
					</View>
					<View style={{ alignSelf: "center" }}>
						<Typo size={17} color={colors.green} fontWeight="700">
							$1234
						</Typo>
					</View>
				</View>
				<View style={{ gap: verticalScale(5) }}>
					<View style={styles.incomeExpense}>
						<View style={styles.stateIcon}>
							<Icons.ArrowDown
								size={verticalScale(15)}
								color={colors.black}
								weight="bold"
							/>
						</View>
						<Typo size={16} color={colors.neutral700} fontWeight="500">
							Expense
						</Typo>
					</View>
					<View style={{ alignSelf: "center" }}>
						<Typo size={17} color={colors.rose} fontWeight="700">
							$1234
						</Typo>
					</View>
				</View>
			</View>
		</View>
	</ImageBackground>
);

export default HomeCard;

const styles = StyleSheet.create({
	bgImage: { height: scale(200), width: "100%" },
	container: {
		padding: spacingX._20,
		paddingHorizontal: scale(23),
		height: "88%",
		width: "100%",
		justifyContent: "space-between",
	},
	totalBallanceRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: spacingX._5,
	},
	stats: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	stateIcon: { backgroundColor: colors.neutral350, padding: spacingX._5, borderRadius: 500 },
	incomeExpense: { flexDirection: "row", alignItems: "center", gap: spacingX._7 },
});
