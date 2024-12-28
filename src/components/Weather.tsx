interface weatherContentProps {
  content: {
    temperature: string,
    morningTemp: string,
    dayTemp: string,
    iconSrc: string,
  }[],
}

/** информация о погоде */
const Weather = ({ content }: weatherContentProps) => {
  return (
    <>
      {content.map((card, index) => (
        <div key={index} className='weather-item'>
          <div className='weather-info'>
            <img className='weather-icon' src={card.iconSrc} alt='Cloud icon' />
            <span className='temperature'>{card.temperature}</span>
            <div className='details'>
              <span className='details-info'>Утром {card.morningTemp},<br /> днём {card.dayTemp}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Weather;
