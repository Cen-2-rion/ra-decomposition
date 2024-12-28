interface CategoryProps {
  link: string,
  text: string,
}

/** текст-ссылка (категории новостей и поиска) */
const Category = ({ link, text }: CategoryProps) => {
  return (
    <a className='category-item' href={link}>{text}</a>
  );
}

export default Category;
