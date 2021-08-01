import {Task} from './utils/task.js'
import {TaskType} from './utils/enums/task-type.js'
import {elements} from './utils/enums/dom/elements.js'

const tasks = [
    new Task("Fazer o exercício de WEB", TaskType.STUDIES),
    new Task("Jogar Devil May Cry 3", TaskType.LEISURE)
]

function addInPage(task) {
    elements.listTasks.appendChild(task.getElement())
}

tasks.forEach(task => addInPage(task))