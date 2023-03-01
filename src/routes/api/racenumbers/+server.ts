import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function GET() {
    const raceNumbers = await fetch(`${env.BACKEND_URL}/api/race-numbers`);
    return json(await raceNumbers.json());
}
