<template>
  <div id="app">
    <KanbanBoard v-bind:tasks="tasks" @data="updateData" @newdata="addData"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import KanbanBoard from './components/kanban/KanbanBoard.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    KanbanBoard
  },
  data: function () {
    return{ 
     todoData: [
          {
            id: 1,
            name: "Create a new task 1",
            status: "Todo"
          },
          {
            id: 2,
            name: "Create a new task 2",
            status: "Todo"
          },
          {
            id: 3,
            name: "Create a task 3 ",
            status: "Todo"
          },
          {
            id: 4,
            name: "kanban board in progress",
            status: "In Progress"
          },
          {
            id: 5,
            name: "css completed",
            status: "Completed"
          }
    ],
        
      }
  },
  computed:  {
    tasks: function () {
      let taskList = {
        "Todo": {
          title: "Todo",
          color: this.getColor("Todo"),
          tasks: []
        },
        "In Progress": {
          title: "In Progress",
          color: this.getColor("In Progress"),
          tasks: []
        },
        "Completed": {
          title: "Completed",
          color: this.getColor("Completed"),
          tasks: []
        }
      }
      this.todoData.map(d => {
        if(taskList[d.status]) {
            taskList[d.status]["tasks"].push(d);
        } else {
            let da= {
              title: d.status,
              color: this.getColor(d.status),
              tasks: []
            };
            taskList[d.status] = da;
            // taskList[d.status]["tasks"] = []
            taskList[d.status]["tasks"].push(d);
        }
      });
      return taskList;
    }
  },
  methods: {
    updateData(value) {
      this.todoData.map(d => {
        if(d.id === value.id) {
          d.status = value.updatedTo;
        }
      })
   },
   addData(value) {
      this.todoData.push(value);
   },
   getColor(status) {
     if(status === 'Todo') {
       return "#D7BDE2";
     } else if (status === 'In Progress') {
       return "#2ECC71";
     } else {
       return "#F0B27A";
     }
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
