/** логотип Яндекса, строка поиска, кнопка, подсказка */
const SearchBar = () => {
  return (
    <>
      <form className='search-form'>
        <img className='search-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yandex_official_logo.svg/100px-Yandex_official_logo.png' alt='Yandex logo'></img>
        <label className='search-label'>
          <input className='search-input' id='search-input' type='text' required />
        </label>
        <button className='search-button' type='submit'>Найти</button>
      </form>
      <span className='search-promt'>
        Найдётся всё. Например,&nbsp;
        <span className='search-example'>
          фаза луны сегодня</span>
      </span>
    </>
  );
}
  
export default SearchBar;
