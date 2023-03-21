type ActionType = {
  type: TaskAction,
  payload: {
    data: {
      id?: string,
      newTask?: TaskType
    }
  }
}
export type TaskType = {
  id: string,
  task: string,
  isCompleted: boolean,
}

export enum TaskAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  COMPLETE = 'COMPLETE',
  RESTORE = 'RESTORE'
}

export function TasksReducer(state: TaskType[], action: any) {
  switch (action.type) {
    case TaskAction.ADD:
      return [...state, action.payload.data.newTask]
    case TaskAction.REMOVE:
      return state.filter(task => task.id !== action.payload.data.id)
    case TaskAction.COMPLETE:
      return state.map(task => {
        if (task.id === action.payload.data.id) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
    case TaskAction.RESTORE:
      return action.payload.data.tasks
    default:
      return state
  }
}