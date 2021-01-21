export enum BoardsActionTypes {
  ADD_BOARD = 'ADD_BOARD',
  ADD_TASK = 'ADD_TASK',
  REORDER_TASK = 'REORDER_TASK',
}

export type AddBoardActionType = {
  type: BoardsActionTypes.ADD_BOARD
  payload: string
}

export type AddTaskType = {
  type: BoardsActionTypes.ADD_TASK
  payload: {
    boardId: string
    text: string
  }
}

export type ReorderTaskType = {
  type: BoardsActionTypes.REORDER_TASK
  payload: {
    destinationId: string
    destinationIndex: number
    sourceId: string
    sourceIndex: number
  }
}

export const addBoard = (payload: AddBoardActionType['payload']): AddBoardActionType => ({
  type: BoardsActionTypes.ADD_BOARD,
  payload,
})

export const addTask = (payload: AddTaskType['payload']): AddTaskType => ({
  type: BoardsActionTypes.ADD_TASK,
  payload,
})

export const reorderTask = (payload: ReorderTaskType['payload']): ReorderTaskType => ({
  type: BoardsActionTypes.REORDER_TASK,
  payload,
})

export type BoardsActions = AddBoardActionType | AddTaskType | ReorderTaskType
