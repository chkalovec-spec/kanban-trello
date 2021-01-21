import { BoardType, DataType } from 'data/types'
import produce, { Draft } from 'immer'

import { boardsData } from 'data'
import { BoardsActions, BoardsActionTypes } from './actions'
import { generate } from 'shortid'

export interface BoardsStateType {
  data: DataType
}

export const boardsState: BoardsStateType = {
  data: boardsData,
}

export const boards = produce(
  (draft: Draft<BoardsStateType>, action: BoardsActions): BoardsStateType => {
    const getBoard = (id: string): BoardType => {
      return draft.data.find(i => i.id === id)!
    }

    switch (action.type) {
      case BoardsActionTypes.ADD_BOARD: {
        draft.data.push({
          id: generate(),
          title: action.payload,
          tasks: [],
        })
        return draft
      }
      case BoardsActionTypes.ADD_TASK: {
        const currentBoard = getBoard(action.payload.boardId)
        if (currentBoard) {
          currentBoard.tasks.push({
            id: generate(),
            text: action.payload.text,
          })
        }
        return draft
      }
      case BoardsActionTypes.REORDER_TASK: {
        if (action.payload.sourceId === action.payload.destinationId) {
          const currentBoard = getBoard(action.payload.sourceId)
          if (currentBoard) {
            const [removed] = currentBoard.tasks.splice(+action.payload.sourceIndex, 1)
            currentBoard.tasks.splice(action.payload.destinationIndex, 0, removed)
          }
          return draft
        } else {
          const sourceBoard = getBoard(action.payload.sourceId)
          const destinationBoard = getBoard(action.payload.destinationId)
          if (sourceBoard && destinationBoard) {
            const [removed] = sourceBoard.tasks.splice(+action.payload.sourceIndex, 1)
            destinationBoard.tasks.splice(action.payload.destinationIndex, 0, removed)
          }

          return draft
        }
      }
      default:
        return draft
    }
  },
  boardsState
)
