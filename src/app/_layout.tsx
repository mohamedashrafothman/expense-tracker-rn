import Provider from "@/components/Provider";
import { Slot, SplashScreen } from "expo-router";
export { ErrorBoundary } from "expo-router";

// Ensure any route can link back to `/`
export const unstable_settings = { initialRouteName: "(root)" };
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Layout = () => (
	<Provider>
		<Slot />
	</Provider>
);

export default Layout;
