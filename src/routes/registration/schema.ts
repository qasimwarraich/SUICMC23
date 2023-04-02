import { z } from 'zod';

export const registrationSchema = z.object({
	first_name: z
		.string({ required_error: 'First name is required' })
		.min(2, { message: 'First name must be longer than 1 character' })
		.max(64, { message: 'First name must be shorter than 64 characters' })
		.trim(),
	last_name: z
		.string({ required_error: 'Last name is required' })
		.min(1, { message: 'Last name must be longer than 1 character' })
		.max(64, { message: 'Last name must be shorter than 64 characters' })
		.trim(),
	nick_name: z
		.string()
		.min(1, { message: 'Nickname must be longer than 1 character' })
		.max(64, { message: 'Nickname must be be shorter than 64 characters' })
		.trim()
		.optional(),
	email: z
		.string({ required_error: 'First name is required' })
		.min(1, { message: 'Email must be longer than 1 character' })
		.max(64, { message: 'Email must be be shorter than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
	race_number: z.coerce
		.number({
			required_error: 'A Race Number is required for all participants',
			invalid_type_error: 'Please supply a number'
		})
		.min(0, { message: 'Race number must be in the range 0 - 9999' })
		.max(9999, { message: 'Race number must be in the range 0 - 9999' }),
	city: z
		.string()
		.min(1, { message: 'City must be longer than 1 character' })
		.max(64, { message: 'City must be be shorter than 64 characters' })
		.trim(),
	intended_payment: z.coerce.number().min(30).max(80),
	category: z.string().min(1).max(64).trim(),
	rank_selection: z.string().min(1).max(64).trim(),
	additional_comments: z
		.string()
		.min(0)
		.max(2000, {
			message: 'Your comments should not be exceed than 2000 characters'
		})
		.trim()
		.optional()
});
