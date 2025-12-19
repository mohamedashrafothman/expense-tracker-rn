import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import Select from "@/components/Select";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useLocalSearchParams } from "expo-router";
import * as Icons from "phosphor-react-native";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

const Transaction = () => {
	// route Hooks
	const { id = undefined }: { id?: string | undefined } = useLocalSearchParams();

	// event handler
	const onDeleteTransaction = () =>
		Alert.alert(
			"Confirm",
			"Are you sure you want to delete this transaction? this action can't be undone.",
			[
				{ text: "No, Cancel", style: "cancel" },
				{
					text: "Yes, Delete",
					onPress: () => console.log("Deleted"),
					style: "destructive",
				},
			]
		);

	return (
		<ScreenWrapper isModal>
			<View style={styles.container}>
				<Header
					title={id ? "Update Transaction" : "New Transaction"}
					leftIcon={<BackButton />}
					style={styles.header}
				/>
				<ScrollView
					contentContainerStyle={styles.form}
					showsVerticalScrollIndicator={false}>
					{/* Transaction Type */}
					<View style={styles.inputContainer}>
						<Typo color={colors.text} size={16}>
							Transaction Type
						</Typo>
						<Select
							placeholder="Select Transaction Type..."
							data={[
								{ label: "Expense", value: "expense" },
								{ label: "Income", value: "income" },
							]}
							labelField="label"
							valueField="value"
							value="expense"
							onChange={(item) => console.log(item)}
						/>
					</View>

					{/* Wallet */}
					<View style={styles.inputContainer}>
						<Typo color={colors.text} size={16}>
							Wallet
						</Typo>
						<Select
							placeholder="Select Wallet..."
							data={[
								{ label: "Wallet Name 1 ($12,000)", value: "wallet-1" },
								{ label: "Wallet Name 2 ($10,000)", value: "wallet-2" },
							]}
							labelField="label"
							valueField="value"
							value="wallet 1"
							onChange={(item) => console.log(item)}
						/>
					</View>

					{/* Expense Categories */}
					{/* TODO: make it visible only when transaction type is expense */}
					<View style={styles.inputContainer}>
						<Typo color={colors.text} size={16}>
							Expense Categories
						</Typo>
						<Select
							placeholder="Select Categories..."
							data={[
								{ label: "Category name 1", value: "category-1" },
								{ label: "Category name 2", value: "category-2" },
							]}
							labelField="label"
							valueField="value"
							value="category-1"
							onChange={(item) => console.log(item)}
						/>
					</View>
				</ScrollView>
			</View>
			<View style={styles.footer}>
				{id && (
					<Button
						style={{
							paddingHorizontal: spacingX._15,
							flexShrink: 0,
							backgroundColor: colors.rose,
						}}
						onPress={() => onDeleteTransaction()}
						loading={false}>
						<Icons.Trash size={verticalScale(24)} weight="bold" color={colors.white} />
					</Button>
				)}
				<Button
					style={{ paddingHorizontal: spacingX._15, flexGrow: 1 }}
					onPress={() => console.log("Created")}
					loading={false}>
					<Typo color={colors.neutral900} fontWeight={"600"}>
						{id ? "Update Transaction" : "Add New Transaction"}
					</Typo>
				</Button>
			</View>
		</ScreenWrapper>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, paddingHorizontal: spacingY._20 },
	header: { marginBottom: spacingY._10 },
	footer: {
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: spacingY._5,
		paddingHorizontal: spacingX._10,
		gap: spacingX._10,
		justifyContent: "flex-end",
		borderTopWidth: 1,
		marginTop: spacingY._10,
	},
	form: { gap: spacingY._20, marginTop: spacingY._5 },
	inputContainer: { gap: spacingY._10 },
	dateInput: {
		paddingVertical: spacingY._7,
		paddingHorizontal: spacingX._15,
		borderRadius: radius._10,
		justifyContent: "center",
		alignItems: "flex-start",
		marginBottom: spacingY._10,
		height: verticalScale(54),
		borderWidth: 1,
		borderCurve: "continuous",
	},
	androidDatePicker: { marginTop: spacingY._5, borderRadius: radius._15, padding: spacingY._10 },
	flexRow: { flexDirection: "row", alignItems: "center", gap: spacingX._5 },
});

export default Transaction;
