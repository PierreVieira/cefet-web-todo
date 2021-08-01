import {Task} from './utils/task.js'
import {TaskType} from './utils/enums/task-type.js'
import {elements} from './utils/dom/elements.js'
import {EventType} from './utils/enums/event-type.js'

function addTaskInPage(task) {
    elements.listTasks.appendChild(task.getElement())
}

function addTasksInPage(tasks) {
    tasks.forEach(task => addTaskInPage(task))
}

function getTaskTypeFromString(value) {
    switch (value.toUpperCase()) {
        case 'LAZER': return TaskType.LEISURE
        case 'COMPRAS': return TaskType.SHOPPING
        default : return TaskType.STUDIES
    }
}

function clearInput() {
    elements.inputTaskText.value = ''
}

function returnFocus() {
    elements.inputTaskText.focus()
}

function createNewTaskFromInput() {
    const taskText = elements.inputTaskText.value
    const taskType = getTaskTypeFromString(elements.inputTaskOption.value)
    const task = new Task(taskText, taskType)
    addTaskInPage(task)
}

function initializeTasksInPage() {
    const taskStudies = new Task("Fazer o exercício de WEB", TaskType.STUDIES)
    const taskLeisure = new Task("Jogar Devil May Cry 3", TaskType.LEISURE)
    const tasks = [taskStudies, taskLeisure]
    addTasksInPage(tasks)
}

function restartInput() {
    clearInput()
    returnFocus()
}

function setupNewTaskButton() {
    elements.newTaskButton.addEventListener(EventType.CLICK, _ => {
        createNewTaskFromInput()
        restartInput()
    })
}

initializeTasksInPage()
setupNewTaskButton()