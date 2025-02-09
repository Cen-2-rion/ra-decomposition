import Card from './Card';
import CardContent from './CardContent';
import cardsContent from '../data/cardsContent.ts';
import Weather from './Weather';
import weatherContent from '../data/weatherContent.ts';


/** набор информационных карточек (погода, карты, онлайн-трансляции, популярные ссылки, телепрограммы) */
const CardsList = () => {
  return (
    <>
      <div className='info-cards'>
      {weatherContent.map((card, index) => (
          <Card key={index} title={card.title}>
            <Weather content={card.content} />
          </Card>
        ))}
        {cardsContent.map((card, index) => (
          <Card key={index} title={card.title} icon={card.icon}>
            <CardContent content={card.content} />
          </Card>
        ))}
      </div>
    </>
  );
}

export default CardsList;
