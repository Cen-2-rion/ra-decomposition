/** боковой виджет рядом со списком новостей */
const Widget = () => {
  return (
    <div className='widget'>
      <img className='widget-image' src='/ra-decomposition/images/green-ball.png' alt='Green ball' />
      <h3><a className='widget-title' href='#'>Работа над ошибками</a></h3>
      <p>Смотрите на Яндексе и запоминайте</p>
    </div>
  );
}

export default Widget;
