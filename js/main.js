const { createApp } = Vue

createApp({
    data() {
        return {
            oggetti: [
                {
                    text: "Finire DooM 93'",
                    done: false               
                },
                {
                    text: "Chiedere spiegazioni al santo del giorno",
                    done: false
                },
                {
                    text: "Riscrivere i vangeli in formato (.txt)",
                    done: false
                },
                {
                    text: "Rubare ai poveri per dare ai ricchi",
                    done: false               
                },
                {
                    text: "Mangiare una pasta col ketchup",
                    done: false
                },
                {
                    text: "Odiarsi a giorni alterni",
                    done: false
                },
            ],
            
            isActive: false
        
    }
},
    methods: {
        getDone(){
            console.log("this is done")
           this.oggetti.done = true

        },
        
    }
}).mount('#app')