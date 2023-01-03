// Import the PocketBase JS library
import PocketBase from 'pocketbase';

// Init the PocketBase instance with the correct URL.
const client = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

export default client;
