import { writable } from 'svelte/store';

export const styleStore = writable({ theme: 'code' });
