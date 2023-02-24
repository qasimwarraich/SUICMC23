import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

// TODO: FIX import error
import { type RequestEvent } from '@sveltejs/kit';

const pb = new PocketBase(env.BACKEND_URL);
pb.autoCancellation(false);

export const load = async () => {
    const participants = await pb.collection(env.REGISTRATION_COLLECTION).getFullList();
    return {
        participants: structuredClone(participants)
    }
}
