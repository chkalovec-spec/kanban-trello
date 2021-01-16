import { AddForm } from 'components/AddForm'
import { Card } from 'components/Card'
import './style.scss'

export const Column: React.FC = () => {
  return (
    <>
      <div className='column-wrapper'>
        <p className='column__title'>Планы на месяц</p>
        <Card />
        <AddForm />
      </div>
    </>
  )
}
