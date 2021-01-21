import { Dispatch, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addBoard, addTask, BoardsActions } from 'store/Boards/actions'

import { addFormConstants } from '../../constants'

import addIcon from 'assets/addIcon.svg'
import closeIcon from 'assets/closeIcon.svg'
import './style.scss'

type AddFormProps = {
  empty?: boolean
  boardId?: string
}

export const AddForm: React.FC<AddFormProps> = ({ empty, boardId }) => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false)
  const [textAreaValue, setTextAreaValue] = useState<string>('')
  const dispatch = useDispatch<Dispatch<BoardsActions>>()

  const showFormHandler = useCallback(() => {
    setIsShowForm(!isShowForm)
    setTextAreaValue('')
  }, [isShowForm])

  const onAddHandler = useCallback(() => {
    if (empty) dispatch(addBoard(textAreaValue))
    if (boardId) dispatch(addTask({ boardId, text: textAreaValue }))
    showFormHandler()
  }, [empty, textAreaValue, boardId, showFormHandler, dispatch])

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) setTextAreaValue(e.target.value)
  }, [])

  const onKeyPressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.charCode === 13 && e.ctrlKey) {
        onAddHandler()
      }
    },
    [onAddHandler]
  )

  return (
    <>
      {isShowForm ? (
        <div className='add-form'>
          <textarea
            className='textarea add-form__textarea'
            placeholder={empty ? addFormConstants.EMPTY_PLACEHOLDER : addFormConstants.PLACEHOLDER}
            value={textAreaValue}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            autoFocus
          />
          <div className='add-panel'>
            <button
              className='add-panel__title btn'
              onClick={onAddHandler}
              disabled={!textAreaValue}
            >
              {empty ? addFormConstants.ACTIVE_EMPTY_TITLE : addFormConstants.ACTIVE_TITLE}
            </button>
            <img className='add-panel__icon' src={closeIcon} alt='add' onClick={showFormHandler} />
          </div>
        </div>
      ) : (
        <div className='add-btn' onClick={showFormHandler}>
          <img className='add-btn__icon' src={addIcon} alt='add' />
          <button className='add-btn__title btn'>
            {empty ? addFormConstants.EMPTY_TITLE : addFormConstants.TITLE}
          </button>
        </div>
      )}
    </>
  )
}
