// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'm3r0vgn82h',
  apiKey: process.env.API_KEY,
});