import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

// TODO: FIX import error
import { type RequestEvent } from '@sveltejs/kit';

const pb = new PocketBase(env.BACKEND_URL);

export const actions = {
	register: async ({ request }: RequestEvent) => {
		let formData = await request.formData();
		formData = checkSafety(formData);
		formData = checkHousing(formData);
		formData = checkVolunteering(formData);

		console.log(formData);

		try {
			await pb.collection(env.REGISTRATION_COLLECTION).create(formData);
		} catch (error) {
			console.log(error);
		}
	}
};

function checkSafety(f: FormData) {
	const safety = f.get('nabio');
	if (safety !== null) {
		f.set('nabio', 'true');
	}
	return f;
}

function checkHousing(f: FormData) {
	const housing = f.get('housing');
	if (housing !== null) {
		f.set('housing', 'true');
	}
	return f;
}

function checkVolunteering(f: FormData) {
	const volunteering = f.get('volunteering');
	if (volunteering !== null) {
		f.set('volunteering', 'true');

		const volunteerFriday = f.get('volunteer_friday');
		const volunteerSaturday = f.get('volunteer_saturday');
		const volunteerSunday = f.get('volunteer_sunday');

		if (volunteerFriday !== null) {
			f.set('volunteer_friday', 'true');
		}

		if (volunteerSaturday !== null) {
			f.set('volunteer_saturday', 'true');
		}

		if (volunteerSunday !== null) {
			f.set('volunteer_sunday', 'true');
		}
	}
	return f;
}
