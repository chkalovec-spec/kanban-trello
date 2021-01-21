import React from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { AddForm } from 'components/AddForm'
import { Board } from 'components/Board'

import { DataType } from 'data/types'
import './style.scss'

type BoardWrapperType = {
  boards: DataType
  onDragEnd: (result: DropResult) => void
}

export const BoardWrapper: React.FC<BoardWrapperType> = ({ boards, onDragEnd }) => {
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='boards-wrapper'>
          {boards.map(({ id, title, tasks }) => (
            <Droppable droppableId={id} key={id}>
              {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className='board'>
                  <React.Fragment>
                    <Board tasks={tasks} title={title} boardId={id} dropProvided={provided} />
                    <AddForm boardId={id} />
                  </React.Fragment>
                </div>
              )}
            </Droppable>
          ))}
          <div className='board'>
            <AddForm empty />
          </div>
        </div>
      </DragDropContext>
    </>
  )
}
