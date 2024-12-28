import { ReactNode } from 'react';

interface CardProps {
  title: string,
  children: ReactNode,
}

/** заголовок и контент информационной карточки */
const Card = ({ title, children }: CardProps) => {
  return (
    <div className='card'>
      <h3><a className='card-title' href='#'>{title}</a></h3>
      <div className='card-content'>{children}</div>
    </div>
  );
}

export default Card;
