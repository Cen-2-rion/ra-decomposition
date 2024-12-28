import currencyRates from '../data/currencyRates.ts';

/** курсы валют и нефти под разделом новостей */
const CurrencyRates = () => {
  return (
    <div className='currency-rates'>
      {currencyRates.map((rate, index) => (
        <div key={index} className='rate'>
          <span className='rate-name'>{rate.name}</span>
          <span className='rate-value'>{rate.value}</span>
          <span className='rate-change'>{rate.change}</span>
        </div>
      ))}
    </div>
  );
}

export default CurrencyRates;
