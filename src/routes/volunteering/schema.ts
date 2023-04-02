import { z } from 'zod';

export const volunteerSchema = z.object({
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
	email: z
		.string({ required_error: 'First name is required' })
		.min(1, { message: 'Email must be longer than 1 character' })
		.max(64, { message: 'Email must be be shorter than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
	telephone: z
		.string({ required_error: 'Telphone is required' })
		.min(1, { message: 'Telephone must be longer than 1 character' })
		.max(20, { message: 'Telephone must be be shorter than 20 characters' }),
	additional_comments: z
		.string()
		.min(0)
		.max(2000, {
			message: 'Your comments should not be exceed than 2000 characters'
		})
		.trim()
		.optional()
});
