import HomeCard from "@/components/HomeCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import TransactionList from "@/components/TransactionList";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import * as Icons from "phosphor-react-native";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const Index = () => (
	<ScreenWrapper>
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={{ gap: 4 }}>
					<Typo size={16} color={colors.neutral400}>
						Hello,
					</Typo>
					<Typo size={20} fontWeight={"500"}>
						Mohamed Ashraf
					</Typo>
				</View>
				<TouchableOpacity style={styles.searchIcon}>
					<Icons.MagnifyingGlass
						size={verticalScale(22)}
						color={colors.neutral200}
						weight="bold"
					/>
				</TouchableOpacity>
			</View>
			{/* Totals card */}
			<ScrollView
				contentContainerStyle={styles.scrollViewContainer}
				showsVerticalScrollIndicator={false}>
				<View>
					<HomeCard />
				</View>
				<TransactionList
					data={[
						{
							type: "expense",
							description: "lorem ipsum",
							category: {
								label: "wallet",
								value: "50",
								icon: Icons.Wallet,
								bgColor: colors.green,
							},
							amount: 100,
							date: new Date(),
							walletId: "1",
						},
						{
							type: "income",
							description: "lorem ipsum",
							category: {
								label: "wallet",
								value: "50",
								icon: Icons.Wallet,
								bgColor: colors.green,
							},
							amount: 500,
							date: new Date(),
							walletId: "1",
						},
						{
							type: "expense",
							description: "lorem ipsum",
							category: {
								label: "wallet",
								value: "50",
								icon: Icons.Wallet,
								bgColor: colors.green,
							},
							amount: 100,
							date: new Date(),
							walletId: "1",
						},
					]}
					emptyListMessage="No recent transactions"
					title="Recent Transactions"
				/>
			</ScrollView>
		</View>
	</ScreenWrapper>
);

export default Index;

const styles = StyleSheet.create({
	container: { flex: 1, paddingHorizontal: spacingX._20, marginTop: verticalScale(8) },
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: spacingY._10,
	},
	searchIcon: {
		backgroundColor: colors.neutral700,
		padding: spacingX._10,
		borderRadius: 50,
	},
	scrollViewContainer: {
		marginTop: spacingY._10,
		gap: spacingY._20,
	},
});
