import { writable } from 'svelte/store';
import type { Settings } from '../types';

export const settings = writable<Settings>(undefined);

export * from './actions';
