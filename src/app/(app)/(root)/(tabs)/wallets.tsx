import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import WalletListItem from "@/components/WalletListItem";
import { colors, radius, spacingY } from "@/constants/theme";
import IWallet from "@/interfaces/wallet.interface";
import { verticalScale } from "@/utils/styling";
import { Link } from "expo-router";
import * as Icons from "phosphor-react-native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Wallets = () => {
	const wallets: IWallet[] = [
		{ id: "1", name: "Savings", image: require("@/assets/images/icon.png") },
		{ id: "2", name: "Deposit", image: require("@/assets/images/icon.png") },
		{ id: "3", name: "Loan", image: require("@/assets/images/icon.png") },
	];

	return (
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

				{/* Wallets View */}
				<View style={styles.wallets}>
					{/* Wallets Header View */}
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

					{/* Loading View */}
					{/* <Loading /> */}

					{/* Wallets List View */}
					<FlatList
						data={wallets}
						renderItem={({ item, index }) => (
							<Animated.View
								entering={FadeInDown.delay(index * 200)
									.springify()
									.damping(13)}>
								<WalletListItem item={item} />
							</Animated.View>
						)}
						contentContainerStyle={styles.listStyle}
					/>
				</View>
			</View>
		</ScreenWrapper>
	);
};

export default Wallets;

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
