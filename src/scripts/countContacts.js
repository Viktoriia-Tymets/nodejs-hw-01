import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const contacts = await readContacts()
    console.log(`${contacts.length} contacts in total`)
 };

console.log(await countContacts());
