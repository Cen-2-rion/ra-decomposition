import News from './News';
import Category from './Category';
import newsCategories from '../data/newsCategories.ts';
import newsContent from '../data/newsContent.ts';

/** список новостных категорий и новостей */
const NewsList = () => {
  return (
    <>
      <nav className='news-categories'>
        {newsCategories.map((category, index) => (
          <Category key={index} link={category.link} text={category.text} />
        ))}
        <span className='news-categories-datetime'>31 июля, среда 02 32</span>
      </nav>
      <div className='news-list'>
        {newsContent.map((news, index) => (
          <News key={index} icon={news.icon} text={news.text} />
        ))}
      </div>
    </>
  );
}

export default NewsList;
