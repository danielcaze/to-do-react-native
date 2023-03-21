import { TaskAction, TaskType } from "./reducer";

export function handleAddNewTaskAction(newTask: TaskType) {
  return { type: TaskAction.ADD, payload: { data: { newTask } } }
}

export function handleDeleteTaskAction(id: string) {
  return { type: TaskAction.REMOVE, payload: { data: { id } } }
}

export function handleCompleteTaskAction(id: string) {
  return { type: TaskAction.COMPLETE, payload: { data: { id } } }
}

export function handleSetInitialState(tasks: TaskType[]) {
  return { type: TaskAction.RESTORE, payload: { data: { tasks } } }
}