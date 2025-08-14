import CustomTabs from "@/components/CustomTabs";
import { Tabs } from "expo-router";

const TabsLayout = () => (
	<Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
		<Tabs.Screen name="index" />
		<Tabs.Screen name="statistics" />
		<Tabs.Screen name="wallets" />
		<Tabs.Screen name="profile" />
	</Tabs>
);

export default TabsLayout;
