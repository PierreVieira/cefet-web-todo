import {TaskType} from './enums/task-type.js'

export class ListTasks extends Array {
    applyClassFilter(taskType) {
        this.map(task => task.setRetainedInTheFilter(taskType !== TaskType.NO_SPECIFIED && task.getType() !== taskType))
    }
}