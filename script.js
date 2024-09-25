class ContactList {
    
    constructor() {
        this.contacts = [];
    }
    

    //  finds a contact by email
    findContactByEmail(email) {
        return this.contacts.find(contact => contact.email === email);
    }

    // Function to add a contact
    
    add(contact) { 
        
        // Checks if the contact has both name and email
        if (!contact.name || !contact.email) {
            console.log("Missing fields");
            return;
        }

        // Checks if the email is already in the contact list
        if (this.findContactByEmail(contact.email)) {
            console.log("Duplicate was found");
            return;
        }

        // Adds contact to the list
        this.contacts.push({
            name: contact.name,
            email: contact.email,
            phoneNumber: contact.phoneNumber || null,
            company: contact.company || null
        });
        console.log(`${contact.name} was added`);
        myContacts.add({ name: "Anna Valsdóttir", email: "anna@tskoli.is", phoneNumber: "123456789", company: "TSK" });
        myContacts.get("anna@tskoli.is");
        myContacts.edit("jon@tskoli.is", { phoneNumber: "987654321", company: "TSK" });
        myContacts.remove("hildur@tskoli.is");
        myContacts.clear();
    }

    // Function to remove a contact by email
    remove(email) {
        const contactIndex = this.contacts.findIndex(contact => contact.email === email);
        
        if (contactIndex === -1) {
            console.log("Contact not found");
            return;
        }

        const removedContact = this.contacts.splice(contactIndex, 1)[0];
        console.log(`${removedContact.name} was removed`);
    }

    // Function to edit a contact by email
    edit(email, newData) {
        const contact = this.findContactByEmail(email);

        if (!contact) {
            console.log("Contact not found");
            return;
        }

        // Update contact with new data
        if (newData.name) contact.name = newData.name;
        if (newData.email) contact.email = newData.email;
        if (newData.phoneNumber) contact.phoneNumber = newData.phoneNumber;
        if (newData.company) contact.company = newData.company;

        console.log(`${contact.name} was updated`);
    }

    // Function to get a contact by email
    get(email) {
        const contact = this.findContactByEmail(email);

        if (!contact) {
            console.log("Contact not found");
            return;
        }

        console.log(`Name: ${contact.name}
Email: ${contact.email}
Phone number: ${contact.phoneNumber || "N/A"}
Company: ${contact.company || "N/A"}`);
    }

    // Function to list all contacts
    listAll() {
        if (this.contacts.length === 0) {
            console.log("No contacts available");
            return;
        }

        const contactList = this.contacts.map(contact => `${contact.name} ${contact.email}`).join(', ');
        console.log(contactList);
    }

    // Function to clear the contact list
    clear() {
        this.contacts = [];
        console.log("The contact list was cleared");
    }
}

//  A FEW Examples to add a new contact:
const myContacts = new ContactList();

myContacts.add({ name: "Anna Valsdóttir", email: "anna@tskoli.is", phoneNumber: "123456789", company: "TSK" });
myContacts.add({ name: "Jón Jónsson", email: "jon@tskoli.is" });
myContacts.add({ name: "Hildur Eriksdóttir", email: "hildur@tskoli.is", company: "ISK" });

myContacts.listAll(); // List all contacts
myContacts.get("anna@tskoli.is"); // Get details of a contact
myContacts.edit("jon@tskoli.is", { phoneNumber: "987654321", company: "TSK" }); // Edit a contact
myContacts.remove("hildur@tskoli.is"); // Remove a contact
myContacts.clear(); // Clear all contacts
