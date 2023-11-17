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
        
        doneClass: "done",
        
    }
},
    methods: {
        getDone(){
            if(this.done == false){
                this.done = true
                this.doneClass = "done"
                console.log("done class è: " this.doneClass)
                

            }else{
                this.done = false
                this.doneClass = null
            }
            console.log(this.done)
        },
     
    }
}).mount('#app')