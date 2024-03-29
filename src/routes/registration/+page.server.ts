import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { type RequestEvent } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { z } from 'zod';
import { registrationSchema } from './schema';

const pb = new PocketBase(env.BACKEND_URL);
pb.autoCancellation(false);

await pb.admins.authWithPassword(env.API_USER, env.API_TOKEN);

export const actions = {
	register: async ({ request }: RequestEvent) => {
		let formData = await request.formData();
		formData = checkSafety(formData);
		formData = checkCargo(formData);
		formData = checkHousing(formData);
		formData = checkVolunteering(formData);
		formData = checkPreEvent(formData);

		const formDataEnriched = Object.fromEntries(formData);

		try {
			registrationSchema.parse(formDataEnriched);
		} catch (err) {
			if (err instanceof z.ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return {
					data: formDataEnriched,
					errors
				};
			} else {
				// Not a Zod error
				console.log('Something very bad happened');
				console.log(err);
			}
		}
		try {
			await pb.collection(env.REGISTRATION_COLLECTION).create(formDataEnriched);
		} catch (err) {
			//TODO: Find a better way to handle server side errors
			console.log('Server Error');
			console.log(err);
			return {
				data: formDataEnriched,
				error: structuredClone(err)
			};
		}
		throw redirect(303, '/cream');
	}
};

function checkSafety(f: FormData) {
	const safety = f.get('nabio');
	if (safety !== null) {
		f.set('nabio', 'true');
	}
	return f;
}

function checkPreEvent(f: FormData) {
	const preEvent = f.get('pre_event');
	if (preEvent !== null) {
		f.set('pre_event', 'true');
	}
	return f;
}

function checkCargo(f: FormData) {
	const cargo = f.get('cargo_race');
	if (cargo !== null) {
		f.set('cargo_race', 'true');
	}
	return f;
}

function checkHousing(f: FormData) {
	const housing = f.get('housing');
	if (housing !== null) {
		f.set('housing', 'true');
	}
	const housingFriday = f.get('housing_friday');
	if (housingFriday !== null) {
		f.set('housing_friday', 'true');
	}
	const housingSaturday = f.get('housing_saturday');
	if (housingSaturday !== null) {
		f.set('housing_saturday', 'true');
	}
	const housingSunday = f.get('housing_sunday');
	if (housingSunday !== null) {
		f.set('housing_sunday', 'true');
	}
	return f;
}

function checkVolunteering(f: FormData) {
	const volunteering = f.get('volunteering');
	if (volunteering !== null) {
		f.set('volunteering', 'true');
	}
	return f;
}
