import ICategory from "@/interfaces/Category.interface";

export default interface Transaction {
	id?: string | undefined;
	type: string;
	amount: number;
	category?: ICategory | string | undefined;
	date: Date | string;
	description?: string | undefined;
	image?: any | undefined;
	uid?: string | undefined;
	walletId: string;
}
