import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { type RequestEvent } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { z } from 'zod';
import { volunteerSchema } from './schema';

const pb = new PocketBase(env.BACKEND_URL);
pb.autoCancellation(false);

await pb.admins.authWithPassword(env.API_USER, env.API_TOKEN);

export const actions = {
    volunteering: async ({ request }: RequestEvent) => {
        let formData = await request.formData();
        formData = checkVolunteering(formData);
        console.log(formData)

        const formDataEnriched = Object.fromEntries(formData);

        try {
            volunteerSchema.parse(formDataEnriched);
        } catch (err) {
            if (err instanceof z.ZodError) {
                const { fieldErrors: errors } = err.flatten();
                console.log(errors)
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
            // await pb.collection(env.VOLUNTEERING_COLLECTION).create(formDataEnriched);
        } catch (err) {
            //TODO: Find a better way to handle server side errors
            console.log('Server Error');
            console.log(err);
            return {
                data: formDataEnriched,
                error: structuredClone(err)
            };
        }
        throw redirect(303, '/volunteering/success');
    }
};


function checkVolunteering(f: FormData) {

    const volunteerFriday = f.get('volunteer_friday');
    const volunteerSaturday = f.get('volunteer_saturday');
    const volunteerSunday = f.get('volunteer_sunday');
    const volunteerMonday = f.get('volunteer_monday');

    if (volunteerFriday !== null) {
        f.set('volunteer_friday', 'true');
    }

    if (volunteerSaturday !== null) {
        f.set('volunteer_saturday', 'true');

        if (f.get('volunteer_saturday_morning') !== null) {
            f.set('volunteer_saturday_morning', 'true');
        }
        if (f.get('volunteer_saturday_afternoon') !== null) {
            f.set('volunteer_saturday_afternoon', 'true');
        }
        if (f.get('volunteer_saturday_evening') !== null) {
            f.set('volunteer_saturday_evening', 'true');
        }
    }

    if (volunteerSunday !== null) {
        f.set('volunteer_sunday', 'true');

        if (f.get('volunteer_sunday_morning') !== null) {
            f.set('volunteer_sunday_morning', 'true');
        }
        if (f.get('volunteer_sunday_afternoon') !== null) {
            f.set('volunteer_sunday_afternoon', 'true');
        }
        if (f.get('volunteer_sunday_evening') !== null) {
            f.set('volunteer_sunday_evening', 'true');
        }
    }

    if (volunteerMonday !== null) {
        f.set('volunteer_monday', 'true');

        if (f.get('volunteer_monday_morning') !== null) {
            f.set('volunteer_monday_morning', 'true');
        }
        if (f.get('volunteer_monday_afternoon') !== null) {
            f.set('volunteer_monday_afternoon', 'true');
        }
    }
    return f;
}
