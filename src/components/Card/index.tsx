import './style.scss'

export const Card: React.FC = () => {
  return (
    <>
      <ul className='column-cards'>
        <li className='column-cards__item'>Пройти курс по React</li>
        <li className='column-cards__item'>Пройти курс по React</li>
        <li className='column-cards__item'>Пройти курс по React</li>
        <li className='column-cards__item'>Отметить день рождения</li>
        <li className='column-cards__item'>
          Записаться на курсы английского языка, чтобы уехать жить в Лондон
        </li>
        <li className='column-cards__item'>Сделать бекенд своего сайта на node.js</li>
        <li className='column-cards__item'>
          Разнообразный и богатый опыт сложившаяся структура организации влечет за собой процесс
          внедрения и модернизации направлений прогрессивного развития.
        </li>
        <li className='column-cards__item'>Собрать портфолио</li>
        <li className='column-cards__item'>Написать первую статью в блог</li>
        <li className='column-cards__item'>
          Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но
          очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут
          хрустиком называть. В общем, хотя бы подумать над этим.
        </li>
        <li className='column-cards__item'>
          Нет, я серьезный человек, иду в мотошколу. Записываюсь!
        </li>
      </ul>
    </>
  )
}
