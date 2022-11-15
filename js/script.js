const obj = new Vue ({
    el: "#root",
    data: {
        todos: [
            {
                text: "comprare stendino",
                done: true,
            },
            {
                text: "lavare i piatti",
                done: false,
            },
            {
                text: "lavare i panni",
                done: true,
            },
        ],
        newTodo: "",
        
    },

    methods: {
        addTodo(){
            this.todos.push(this.newTodo);
            console.log(this.newTodo);
            this.newTodo = "";
        },

        deleteTodo(index){
            this.todos.splice(index, 1);
            // let arrExecuted = [];
            // let arrExecuteder = this.todos.splice(index, 1);
            // arrExecuted.push(arrExecuteder[this.todos])
            // console.log(arrExecuted);
            // if(arrExecuted.length != 0) {
            //     let del = document.querySelector(".delete")
            //     let ulList = document.createElement("ul");
            //     let liList = document.createElement("li");
            //     liList = arrExecuted;
            //     ulList.append(liList);
            //     del.append(ulList);
            // }
        },
    }
}) 

