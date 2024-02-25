const app = Vue.createApp({
    data() {
        return {
            display: "all"
        }
    },
    methods: {
        handleTabs(tab){
            this.display = tab;
        }
    },
});

app.mount("#app");