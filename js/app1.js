//使用let声明变量
let tasks = [];
let currentFilter = "all";

//使用const声明变量
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const statusElement = document.getElementById("stats")

//使用数值类型示例


function addTask() {
    const currentTaskCount = tasks.length + 1;
    if (taskInput.value === "") {
        alert("任务不能为空");
    }

    const newTask = {
        id: Date.now(),

    }
}