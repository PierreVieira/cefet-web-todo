import {classes} from './enums/dom/classes.js'

export class Task {
    #text
    #type
    #finished

    constructor(text, type, finished = false) {
        this.#text = text
        this.#type = type
        this.#finished = finished
    }

    getElement() {
        const taskClasses = this.#getTaskClasses()
        return this.#createTaskElement(taskClasses)
    }

    #getTaskClasses() {
        const taskClasses = [`categoria-${this.#type}`, classes.ITEM_TASK]
        if (this.#finished) {
            taskClasses.push(classes.MARKED_TASK)
        }
        return taskClasses
    }

    #createTaskElement(taskClasses) {
        const taskElement = document.createElement('li')
        taskElement.innerHTML = `${this.#text}`
        taskClasses.forEach(value => taskElement.classList.add(value))
        return taskElement
    }
}