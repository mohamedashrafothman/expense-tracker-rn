import Loading from "@/components/Loading";
import TransactionListItem from "@/components/TransactionListItem";
import Typo from "@/components/Typo";
import { colors, spacingY } from "@/constants/theme";
import ITransaction from "@/interfaces/Transaction.interface";
import { verticalScale } from "@/utils/styling";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
	data: ITransaction[];
	title?: string | undefined;
	loading?: boolean | undefined;
	emptyListMessage?: string | undefined;
};

const TransactionList = ({ data = [], title, loading, emptyListMessage }: Props) => (
	<View style={styles.container}>
		{title && (
			<Typo size={20} fontWeight={"500"}>
				{title}
			</Typo>
		)}

		{loading ? (
			<View style={{ top: verticalScale(100) }}>
				<Loading />
			</View>
		) : data.length > 0 ? (
			<View style={styles.list}>
				<FlashList
					data={data}
					renderItem={({ item, index }) => (
						<Animated.View
							entering={FadeInDown.delay(index * 70)
								.springify()
								.damping(14)}>
							<TransactionListItem item={item} />
						</Animated.View>
					)}
					estimatedItemSize={200}
				/>
			</View>
		) : (
			emptyListMessage && (
				<Typo
					size={15}
					color={colors.neutral400}
					style={{ alignSelf: "center", marginTop: spacingY._15 }}>
					{emptyListMessage}
				</Typo>
			)
		)}
	</View>
);

export default TransactionList;

const styles = StyleSheet.create({
	container: { gap: spacingY._17 },
	list: { minHeight: 3 },
	row: {},
	icon: {},
});
