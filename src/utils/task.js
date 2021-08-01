import {classes} from './dom/identifiers/classes.js'
import {EventType} from './enums/event-type.js'

export class Task {
    #text
    #type
    #finished
    #retainedInTheFilter

    constructor(text, type, finished = false) {
        this.#text = text
        this.#type = type
        this.#finished = finished
        this.#retainedInTheFilter = false
    }

    getElement() {
        const taskClasses = this.#getTaskClasses()
        return this.#createTaskElement(taskClasses)
    }

    getType() {
        return this.#type
    }

    setRetainedInTheFilter(retainedInTheFilter) {
        this.#retainedInTheFilter = retainedInTheFilter
    }

    #toggleFinish() {
        this.#finished = !this.#finished
    }

    #getTaskClasses() {
        const taskClasses = [`categoria-${this.#type}`, classes.ITEM_TASK]
        if (this.#finished) {
            taskClasses.push(classes.MARKED_TASK)
        }
        if (this.#retainedInTheFilter) {
            taskClasses.push(classes.RETAINED_IN_THE_FILTER)
        }
        return taskClasses
    }

    #createTaskElement(taskClasses) {
        const taskElement = document.createElement('li')
        taskElement.innerHTML = `${this.#text}`
        taskClasses.forEach(value => taskElement.classList.add(value))
        taskElement.addEventListener(EventType.CLICK, e => this.#finishedTaskControl(e))
        return taskElement
    }

    #finishedTaskControl(e) {
        this.#toggleFinish()
        if (this.#finished) {
            e.currentTarget.classList.add(classes.MARKED_TASK)
        } else {
            e.currentTarget.classList.remove(classes.MARKED_TASK)
        }
    }
}