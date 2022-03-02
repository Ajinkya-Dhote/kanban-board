<template>
    <div class="flex-container">
        <div v-for="task in tasks" v-bind:key="task.title" class="">
            <div class="kanban-task-title" v-bind:style="{'background-color': task.color}">
                {{task.title}}
            </div>
            <div class="task-conatiner kanban-tasks" v-on:drop="(ev) => drop(ev, task.title)" v-on:dragover="allowDrop">
                <div 
                    class="task"
                    v-bind:style="{'background-color': task.color}"
                    v-for="t in task.tasks"
                    v-bind:key="t.name"
                    draggable="true"
                    v-on:dragstart="(ev) => drag(ev, t)"
                > 
                    {{t.name}}
                </div>
                <div class="new-task" v-on:click="() => addNewTask(task.title)">
                    <span> Add new Task </span>
                </div>
              
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'KanbanBoard',
  props: {
    msg: String,
    tasks: Object
  },
  methods: {
        drag: function(ev, t) {
          
           ev.dataTransfer.setData("Object", JSON.stringify(t));
        },

        allowDrop: function(ev) {
            ev.preventDefault();
        },

        drop: function(ev, title) {
            ev.preventDefault();
            var data = JSON.parse(ev.dataTransfer.getData("Object"));
            data['updatedTo'] = title;
            console.log(data);
            this.$emit('data', data);
        },
        addNewTask: function(title) {
            const id = gen.next().value;
            const data = {
            id: id,
            name: "new task - " + id,
            status: title,
            updatedTo: title
          }
            this.$emit('newdata', data);
        }
  }
}

function* generator() {
  var index = 10;
  while (true)
    yield index++;
}
const gen = generator();
</script>

<style>
    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .kanban-tasks {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
       
    }

    .task-conatiner {
        max-height: 500px;
        height: 500px;
        overflow-y: auto;
    }

    .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        /* padding: 20px; */
        font-size: 30px;
    }
    @media (max-width: 800px) {
        .flex-container {
            flex-direction: column;
        }
    }

    .kanban-task-title {
        /* background-color: blue; */
        padding: 10px;
        color: white
    }

    .task {
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
        transition: 0.3s;     
    }

    .task:hover{
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2);
    }

    .new-task{
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        background-color: #212F3C;
        color:white;
        font-size: 1rem;
    }

    .new-task:hover{
        background-color: #58D68D;
        color:#212F3C;
         box-shadow: 0 6px 6px 0 #212F3C;
    }

    
</style>
