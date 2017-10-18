document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        {
          text: "testsingtesteststestestesticles", 
          priority: 2,
          taskCompleted: false
        },
        {
          text: "some stuff",
          priority: 3,
          taskCompleted: false,
        },
        {
          text: "Ch-ch-ch-changes!",
          priority: 1,
          taskCompleted: false,
        }
      ],
      newTaskText: "",
      newTaskPriority: "",
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTaskText !== "" && this.newTaskPriority !== "") {
          let newTask = {
            text: this.newTaskText,
            priority: this.newTaskPriority,
            taskCompleted: false
          };
          this.tasks.push(newTask);
          this.newTaskText = "";
          this.newTaskPriority = "";
        }
      },
      toggleComplete: function(currentTask) {
        currentTask.taskCompleted = !currentTask.taskCompleted;
      },
      prioritize: function(taskArray) {
        return taskArray.sort(function(a, b) {
          return b.priority - a.priority;
        });
      },
      incompleteCounter: function(taskArray) {
        let counter = 0;
        for (task of taskArray) {
          if (!task.taskCompleted) {
            counter++;
          }
        }
        return counter;
      },
      deleteCompleted: function(taskArray) {
        for (var x = 0; x < taskArray.length; x ++) {
          if (taskArray[x].taskCompleted) {
            // let index = taskArray.indexOf(task);
            taskArray.splice(x, 1);
          }
        }
      }
    },
    computed: {

    }
  });
});