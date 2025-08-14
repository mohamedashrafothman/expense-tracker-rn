import { Icon } from "phosphor-react-native";
import React from "react";
import { ViewStyle } from "react-native";

export type ModalWrapperProps = {
	style?: ViewStyle;
	children: React.ReactNode;
	bg?: string;
};

export type IconComponent = React.ComponentType<{
	height?: number;
	width?: number;
	strokeWidth?: number;
	color?: string;
	fill?: string;
}>;

export type IconProps = {
	name: string;
	color?: string;
	size?: number;
	strokeWidth?: number;
	fill?: string;
};

export type TransactionType = {
	id?: string;
	type: string;
	amount: number;
	category?: string;
	date: Date | string;
	description?: string;
	image?: any;
	uid?: string;
	walletId: string;
};

export type CategoryType = {
	label: string;
	value: string;
	icon: Icon;
	bgColor: string;
};
export type ExpenseCategoriesType = {
	[key: string]: CategoryType;
};

export type TransactionListType = {
	data: TransactionType[];
	title?: string;
	loading?: boolean;
	emptyListMessage?: string;
};

export type TransactionItemProps = {
	item: TransactionType;
	index: number;
	handleClick: Function;
};

export type UserType = {
	uid?: string;
	email?: string | null;
	name: string | null;
	image?: any;
} | null;

export type UserDataType = {
	name: string;
	image?: any;
};

export type AuthContextType = {
	user: UserType;
	setUser: Function;
	login: (email: string, password: string) => Promise<{ success: boolean; msg?: string }>;
	register: (
		email: string,
		password: string,
		name: string
	) => Promise<{ success: boolean; msg?: string }>;
	updateUserData: (userId: string) => Promise<void>;
};

export type ResponseType = {
	success: boolean;
	data?: any;
	msg?: string;
};
