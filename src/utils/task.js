export class Task {
    #text
    #type
    #finished
    constructor(text, type, finished = false) {
        this.#text = text
        this.#type = type
        this.#finished = finished
    }
}