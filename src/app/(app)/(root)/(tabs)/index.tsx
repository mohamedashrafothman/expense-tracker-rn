import Button from "@/components/Button";
import HomeCard from "@/components/HomeCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import TransactionList from "@/components/TransactionList";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Link } from "expo-router";
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
				{/* Balance Card */}
				<HomeCard />

				{/* Transaction List */}
				<TransactionList
					data={[
						{
							id: "1",
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
							id: "2",
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
							id: "3",
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
							id: "4",
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
							id: "5",
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
							id: "6",
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
							id: "7",
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
							id: "8",
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
							id: "9",
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

			{/* Floating Button */}
			<Link href="/(app)/(root)/(modal)/transaction" asChild>
				<Button style={styles.floatingButton}>
					<Icons.Plus color={colors.black} weight="bold" size={verticalScale(24)} />
				</Button>
			</Link>
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
	floatingButton: {
		height: verticalScale(40),
		width: verticalScale(40),
		borderRadius: 100,
		position: "absolute",
		bottom: verticalScale(20),
		right: verticalScale(20),
	},
});
