const app = Vue.createApp({
    data() {
        return {
            display: "all",
            contacts: [],
            contact: {
                name: "",
                phone: "",
                email: ""
            },
            search: ""
        }
    },
    methods: {
        handleTabs(tab) {
            this.display = tab;
        },
        addContact() {
            this.contacts.push(this.contact);
            this.contact = {};
            this.display = "all";
            toastr.success('کاربر اضافه شد');
        },
        deleteContact(email) {
            console.log(email);
            this.contacts = this.contacts.filter((item) => item.email !== email);
        }
    },
    computed: {
        contactsWithFilter() {
            if (this.search == "")
                return [];

            return this.contacts.filter((item) => item.email.includes(this.search))
        }
    }
});

app.mount("#app");