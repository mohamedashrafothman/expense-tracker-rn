import { Redirect, Stack } from "expo-router";

const RootLayout = () => {
	const isAuthenticated = true; // TODO: Add the logic to check if the user is authenticated.

	// Ensure non-authenticated users are redirected to authentication screen
	if (!isAuthenticated) return <Redirect href="/auth" />;

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" />
			<Stack.Screen name="(modal)/privacy-policy" options={{ presentation: "modal" }} />
			<Stack.Screen name="(modal)/profile" options={{ presentation: "modal" }} />
			<Stack.Screen name="(modal)/settings" options={{ presentation: "modal" }} />
			<Stack.Screen name="(modal)/wallet" options={{ presentation: "modal" }} />
		</Stack>
	);
};

export default RootLayout;
