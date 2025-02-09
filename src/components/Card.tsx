import { ReactNode } from 'react';

interface CardProps {
  title: string,
  icon?: string,
  children: ReactNode,
}

/** заголовок и контент информационной карточки */
const Card = ({ title, icon, children }: CardProps) => {
  return (
    <div className={`card ${title === 'Эфир' ? 'card-ether' : ''}`}>
      <h3><a className='card-title' href='#'>{title}</a>
        {icon && <img className='card-icon' src={icon} alt='Icon' />}
      </h3>
      <div className='card-content'>{children}</div>
    </div>
  );
}

export default Card;
