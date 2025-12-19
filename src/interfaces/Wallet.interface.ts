export default interface Wallet {
	id?: string | undefined;
	name: string;
	amount?: number | undefined;
	totalIncome?: number | undefined;
	totalExpenses?: number | undefined;
	image: any;
	uid?: string | undefined;
	created?: Date | undefined;
}
