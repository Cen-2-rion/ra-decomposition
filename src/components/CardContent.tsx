interface CardsContentProps {
  content: {
    icon?: string,
    text: string,
    time?: string,
    source?: string,
    resource?: string,
  }[],
}

/** содержимое информационной карточки */
const CardContent = ({ content }: CardsContentProps) => {
  return (
    <>
      {content.map((card, index) => (
        <div key={index} className='card-item'>
          {card.icon && <img className='card-icon' src={card.icon} alt='Ether icon' />}
          {card.time && <span className='card-time'>{card.time}</span>}
          {card.resource && <span className='card-resource'>{card.resource}</span>}
          <span className='card-text'>{card.text}</span>
          {card.source && <span className='card-source'>{card.source}</span>}
        </div>
      ))}
    </>
  );
}

export default CardContent;
