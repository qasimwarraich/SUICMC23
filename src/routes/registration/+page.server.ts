import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

// TODO: FIX import error
import { type RequestEvent } from '@sveltejs/kit';

const pb = new PocketBase(env.BACKEND_URL);

export const actions = {
	register: async ({ request }: RequestEvent) => {
		const formData = await request.formData();

		const safety = formData.get('nabio');
		if (safety !== null) {
			formData.set('nabio', 'true');
		}

		try {
			await pb.collection(env.REGISTRATION_COLLECTION).create(formData);
		} catch (error) {
			console.log(error);
		}
	}
};
