import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contacts = await readContacts();
    const newContact = await createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);
    console.log('Added 1 contact')
 };

addOneContact();
