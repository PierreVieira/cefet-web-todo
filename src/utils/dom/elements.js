import {ids} from './identifiers/ids.js'

function selectById(id) {
    return document.getElementById(id)
}

export const elements = Object.freeze({
    listTasks: selectById(ids.LIST_TASKS),
    newTaskButton: selectById(ids.INCLUDE_NEW_TASK),
    inputTaskOption: selectById(ids.NEW_TASK_TYPE),
    inputTaskText: selectById(ids.NEW_TASK_TEXT)
})