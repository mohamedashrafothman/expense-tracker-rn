import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
	const isAuthenticated = true; // TODO: Add the logic to check if the user is authenticated.

	if (isAuthenticated) return <Redirect href="/" />;

	return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
