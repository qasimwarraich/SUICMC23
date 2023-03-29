export type Form = {
	data: RegData;
	errors: RegError;
};

type RegError = {
	first_name: string[];
	last_name: string[];
	nick_name: string[];
	pronouns: string[];
	email: string[];
	race_number: string[];
	city: string[];
	intended_payment: string[];
	team?: string[];
	category: string[];
	rank_selection: string[];
};

type RegData = {
	nick_name?: string | undefined;
	additional_comments?: string | undefined;
	first_name: string;
	last_name: string;
	pronouns: string;
	email: string;
	race_number: number;
	cargo_race?: string;
	nabio?: string;
	volunteering?: string;
	pre_event?: string;
	city: string;
	team?: string;
	intended_payment: number;
	payment_method: string;
	category: string;
	tshirt_size: string;
};
