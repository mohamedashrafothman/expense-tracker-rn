import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
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
			<View style={style.container}>
				<Header
					title={id ? "Update Transaction" : "New Transaction"}
					leftIcon={<BackButton />}
					style={style.header}
				/>
				<ScrollView
					contentContainerStyle={style.content}
					showsVerticalScrollIndicator={false}>
					<View style={style.inputContainer}>
						<Typo style={{ color: colors.neutral200, marginTop: spacingY._10 }}>
							Type
						</Typo>
						<Input
							value="Transaction type"
							placeholder="Enter transaction type"
							autoCapitalize="none"
							returnKeyType="next"
						/>
					</View>
				</ScrollView>
			</View>
			<View style={style.footer}>
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

const style = StyleSheet.create({
	container: { flex: 1, justifyContent: "space-between", paddingHorizontal: spacingX._20 },
	header: { marginBottom: spacingY._20 },
	content: { gap: spacingY._30, marginTop: spacingY._15 },
	inputContainer: { gap: spacingY._10 },
	footer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		paddingHorizontal: spacingX._20,
		gap: verticalScale(20),
		paddingTop: spacingY._20,
		borderTopWidth: 1,
		borderTopColor: colors.neutral700,
		marginBottom: spacingY._5,
	},
});

export default Transaction;
