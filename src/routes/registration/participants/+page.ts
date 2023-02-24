/** @type {import('./$types').PageLoad} */

export async function load({ parent }) {
	const { a } = await parent();
	return a;
}
