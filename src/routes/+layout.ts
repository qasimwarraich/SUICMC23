import { FootNotes } from '$lib/data/footer';
import type { PageLoad } from './$types';
import './styles.css';

export type Quote = {
    text: String;
};

export const load: PageLoad = () => {
    const RandomQuote: String = FootNotes[Math.floor(Math.random() * FootNotes.length)];
    const data: Quote = {
        text: RandomQuote
    };

    return data;
}
