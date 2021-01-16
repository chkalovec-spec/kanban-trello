import addIcon from 'assets/addIcon.svg'
import closeIcon from 'assets/closeIcon.svg'
import { useState } from 'react'
import './style.scss'

export const AddForm: React.FC = () => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false)

  const showFormHandler = () => {
    setIsShowForm(!isShowForm)
  }

  return (
    <>
      {isShowForm ? (
        <div className='add-form'>
          <textarea
            className='textarea add-form__textarea'
            placeholder='Введите название карточки'
            autoFocus
          />
          <div className='add-panel'>
            <button className='add-panel__title btn'>Добавить карточку</button>
            <img className='add-panel__icon' src={closeIcon} alt='add' onClick={showFormHandler} />
          </div>
        </div>
      ) : (
        <div className='add-btn' onClick={showFormHandler}>
          <img className='add-btn__icon' src={addIcon} alt='add' />
          <button className='add-btn__title btn'>Добавить еще одну карточку</button>
        </div>
      )}
    </>
  )
}
