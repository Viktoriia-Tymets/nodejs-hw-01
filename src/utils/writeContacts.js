import { PATH_DB } from '../constants/contacts.js';
const fs = require('node:fs/promises');

export const writeContacts = async (updatedContacts) => {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2))
};
