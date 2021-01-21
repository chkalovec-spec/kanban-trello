import React, { Dispatch, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DropResult } from 'react-beautiful-dnd'

import { selectBoards } from 'store/Boards/selectors'
import { reorderTask, ReorderTaskType } from 'store/Boards/actions'

import { BoardWrapper } from 'components/BoardWrapper'

export const DashBoardContainer: React.FC = () => {
  const boards = useSelector(selectBoards)
  const dispatch = useDispatch<Dispatch<ReorderTaskType>>()

  const reorderTasksHandler = useCallback(({ destination, source }: DropResult) => {
    if (destination && source) {
      dispatch(
        reorderTask({
          destinationId: destination.droppableId,
          destinationIndex: destination.index,
          sourceId: source.droppableId,
          sourceIndex: source.index,
        })
      )
    }
  }, [])

  return (
    <>
      <BoardWrapper boards={boards} onDragEnd={reorderTasksHandler}></BoardWrapper>
    </>
  )
}
