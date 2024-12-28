import Category from './Category.tsx';
import searchCategories from '../data/searchCategories';

/** навигационное меню над строкой поиска  */
const SearchList = () => {
  return (
    <nav className='search-categories'>
      {searchCategories.map((category, index) => (
        <Category key={index} link={category.link} text={category.text} />
      ))}
    </nav>
  );
}

export default SearchList;
