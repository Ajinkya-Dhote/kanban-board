<template>
  <div>
      <h1>This is home page</h1>
      <b-tabs v-model="activeTab">
            <b-tab-item label="Kanban">
               <KanbanBoard v-bind:tasks="tasks" @data="updateData" @newdata="addData"/>
            </b-tab-item>

            <b-tab-item label="Music">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>

          

            <b-tab-item label="Videos" >
                Nunc nec velit nec libero vestibulum eleifend.
                Curabitur pulvinar congue luctus.
                Nullam hendrerit iaculis augue vitae ornare.
                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
            </b-tab-item>
        </b-tabs>
       
  </div>
</template>

<script>
import KanbanBoard from './kanban/KanbanBoard.vue'


export default {
  name: 'Home',
  components: {
      KanbanBoard
  },
  data() {
            return {
                activeTab: 1,
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

</style>
