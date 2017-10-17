document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        {text: "testsingtesteststestestesticles", priority: 2 },
        {text: "some stuff", priority: 3},
        {text: "Ch-ch-ch-changes!", priority: 1}
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
          };
          this.tasks.push(newTask);
          this.newTaskText = "";
          this.newTaskPriority = "";
        }
      },
      taskComplete: function(currentTask) {
        var index = this.tasks.indexOf(currentTask);
        this.tasks.splice(index, 1);
      },
      prioritize: function(taskArray) {
        return taskArray.sort(function(a, b) {
          return b.priority - a.priority;
        });
      }
    },
    computed: {

    }
  });
});