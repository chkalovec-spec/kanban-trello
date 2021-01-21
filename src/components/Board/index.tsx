import React from 'react'
import { Draggable, DroppableProvided } from 'react-beautiful-dnd'

import { TaskType } from 'data/types'
import './style.scss'

type TasksPropsType = {
  title: string
  tasks: TaskType[]
  boardId: string
  dropProvided: DroppableProvided
}

export const Board: React.FC<TasksPropsType> = ({ title, tasks, dropProvided }) => {
  return (
    <>
      <p className='board-title'>{title}</p>
      <div className='board-tasks'>
        {tasks.map(({ id, text }, index) => (
          <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
              <div
                key={id}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={
                  snapshot.isDragging ? 'board-tasks__item--dragging' : 'board-tasks__item'
                }
              >
                {text}
              </div>
            )}
          </Draggable>
        ))}
        {dropProvided.placeholder}
      </div>
    </>
  )
}
