import { colors, radius } from "@/constants/theme";
import { getFilePath } from "@/utils/common";
import { scale, verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { type ImagePickerSuccessResult } from "expo-image-picker";
import * as Icons from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Typo from "./Typo";

type Props = {
	file?: string | ImagePickerSuccessResult["assets"][0] | undefined | null;
	onSelect: (file: any) => void;
	onClear: () => void;
	containerStyle?: ViewStyle | undefined;
	imageStyle?: ViewStyle | undefined;
	placeholder?: string | undefined;
};

const ImageUpload = ({
	file = null,
	onSelect,
	onClear,
	containerStyle,
	imageStyle,
	placeholder = "",
}: Props) => {
	// event handlers
	const onPickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			aspect: [1, 1],
			quality: 0.5,
		});

		if (result.canceled) return;

		onSelect(result.assets[0]);
	};

	return (
		<View>
			{!file && (
				<TouchableOpacity
					style={[styles.inputContainer, containerStyle && containerStyle]}
					onPress={onPickImage}>
					<Icons.UploadSimple color={colors.neutral200} />
					{placeholder && <Typo size={15}>{placeholder}</Typo>}
				</TouchableOpacity>
			)}
			{file && (
				<View style={[styles.image, imageStyle && imageStyle]}>
					<Image
						style={{ flex: 1 }}
						source={getFilePath(file)}
						contentFit="cover"
						transition={100}
					/>
					<TouchableOpacity style={styles.deleteIcon} onPress={onClear}>
						<Icons.XCircle
							size={verticalScale(20)}
							weight="fill"
							color={colors.white}
						/>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default ImageUpload;

const styles = StyleSheet.create({
	inputContainer: {
		height: verticalScale(54),
		backgroundColor: colors.neutral700,
		borderRadius: radius._15,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		borderWidth: 1,
		borderColor: colors.neutral500,
		borderStyle: "dashed",
	},
	image: {
		height: scale(150),
		width: scale(150),
		borderRadius: radius._15,
		borderCurve: "continuous",
		overflow: "hidden",
	},
	deleteIcon: {
		position: "absolute",
		top: scale(6),
		right: scale(6),
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 1,
		shadowRadius: 10,
	},
});
