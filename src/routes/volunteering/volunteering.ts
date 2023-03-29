export type Form = {
	data: RegData;
	errors: RegError;
};

type RegError = {
	first_name: string[];
	last_name: string[];
	pronouns: string[];
    telephone: string[];
	email: string[];
	additional_comments: string[];
};

type RegData = {
	first_name: string;
	last_name: string;
	pronouns: string;
    telephone: string;
	email: string;
    additional_comments?: string | undefined;
};
