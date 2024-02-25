Vue.createApp({
    data() {
        return {
        percentage: 0,
        start: true,
        center: false,
        end: false    
        }
    },
    methods: {
        increase(){
            this.percentage === 100 ? null : this.percentage++;
            if(this.percentage <= 30){
                this.start = true;
                this.center = false;
                this.end = false;
            }
            if( this.percentage > 30 && this.percentage <= 70){
                this.start = false;
                this.center = true;
                this.end = false;
            }
            if( this.percentage > 70){
                this.start = false;
                this.center = false;
                this.end = true;
            }
        },
        decrease(){
            this.percentage === 0 ? null : this.percentage--;
            if(this.percentage <= 30){
                this.start = true;
                this.center = false;
                this.end = false;
            }
            if( this.percentage > 30 && this.percentage <= 70){
                this.start = false;
                this.center = true;
                this.end = false;
            }
            if( 70 < this.percentage){
                this.start = false;
                this.center = false;
                this.end = true;
            }
        }
    },
}).mount("#app")