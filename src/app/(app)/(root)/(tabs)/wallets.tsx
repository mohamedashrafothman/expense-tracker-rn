import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Link } from "expo-router";
import * as Icons from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Wallets = () => (
	<ScreenWrapper style={{ backgroundColor: colors.black }}>
		<View style={styles.container}>
			{/* Ballance View */}
			<View style={styles.ballanceView}>
				<View style={{ alignItems: "center" }}>
					<Typo size={45} fontWeight="500">
						{`$${Number(2390).toFixed(2)}`}
					</Typo>
					<Typo size={16} color={colors.neutral300}>
						Total Ballance
					</Typo>
				</View>
			</View>
			{/* Wallets */}
			<View style={styles.wallets}>
				<View style={styles.flexRow}>
					<Typo size={20} fontWeight="500">
						My Wallets
					</Typo>
					<Link href="/(app)/(root)/(modal)/wallet" asChild>
						<TouchableOpacity>
							<Icons.PlusCircle
								weight="fill"
								color={colors.primary}
								size={verticalScale(33)}
							/>
						</TouchableOpacity>
					</Link>
				</View>
			</View>
		</View>
	</ScreenWrapper>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	ballanceView: {
		height: verticalScale(160),
		backgroundColor: colors.black,
		justifyContent: "center",
		alignItems: "center",
	},
	wallets: {
		flex: 1,
		backgroundColor: colors.neutral900,
		borderTopRightRadius: radius._30,
		borderTopLeftRadius: radius._30,
		padding: spacingY._20,
		paddingTop: spacingY._30,
	},
	flexRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: spacingY._20,
	},
	listStyle: { paddingVertical: spacingY._20, paddingTop: spacingY._20 },
});

export default Wallets;
