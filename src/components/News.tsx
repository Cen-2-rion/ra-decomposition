interface newsContentProps {
  icon: string,
  text: string,
}

/** иконка и текст новости */
const News = ({ icon, text }: newsContentProps) => {
  return (
    <div className='news'>
      <img className='news-icon' src={icon} alt='News icon' />
      <span className='news-text'>{text}</span>
    </div>
  );
}

export default News;
