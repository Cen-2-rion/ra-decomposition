import NewsList from './components/NewsList';
import CurrencyRates from './components/CurrencyRates';
import Widget from './components/Widget';
import SearchList from './components/SearchList';
import SearchBar from './components/SearchBar';
import Advertisement from './components/Advertisement';
import CardsList from './components/CardsList';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-wrapper'>
          <div className='header-info'>
            <NewsList />
            <CurrencyRates />
          </div>
            <Widget />
        </div>
      </div>
      <div className='main'>
        <SearchList />
        <SearchBar />
        <Advertisement />
      </div>
      <div className='footer'>
        <CardsList />
      </div>
    </div>
  );
}

export default App;
