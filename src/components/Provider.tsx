import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = PropsWithChildren<{}>;

const Provider = ({ children }: Props) => {
	const colorScheme = useColorScheme();
	const [fontsLoaded, fontError] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Callback function to hide the splash screen when layout is triggered
	const onLayout = useCallback(() => {
		SplashScreen.hideAsync();
	}, []);

	// effect hooks
	useEffect(() => {
		// Expo Router uses Error Boundaries to catch errors in the navigation tree.
		if (fontError) throw fontError;
	}, [fontError]);

	useEffect(() => {
		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded]);

	// render UI
	if (!fontsLoaded) return null;

	return (
		<>
			{/* Render the SafeAreaView and AppNavigator when fonts and state are loaded */}
			{fontsLoaded && (
				<GestureHandlerRootView onLayout={onLayout} style={{ flex: 1 }}>
					{/* Set the status bar style based on the color scheme */}
					<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
					{children}
					<FlashMessage position="top" duration={5000} />
				</GestureHandlerRootView>
			)}
		</>
	);
};

export default Provider;
