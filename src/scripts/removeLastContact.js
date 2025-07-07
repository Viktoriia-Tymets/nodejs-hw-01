import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();
    if (contacts.legth === 0) {
        console.log("Don't have contacts")
        return
    }

    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact has been deleted')
 };

await removeLastContact();
