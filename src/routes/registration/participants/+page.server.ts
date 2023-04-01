/** @type {import('./$types').PageLoad} */
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

const pb = new PocketBase(env.BACKEND_URL);
pb.autoCancellation(false);

await pb.admins.authWithPassword(env.API_USER, env.API_TOKEN);

export const load = async () => {
    const participants = await pb.collection(env.REGISTRATION_COLLECTION).getFullList();

    const participantArray = [];

    for (const p of participants) {
        const res = {
            first_name: p.first_name,
            nick_name: p.nick_name,
            race_number: p.race_number,
            city: p.city,
        }
        participantArray.push(res);
    }
    
    return {
        participants: participantArray
    }
}

