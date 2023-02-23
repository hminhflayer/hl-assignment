import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import JokeList from './jokes/JokeList.json';

function App() {
  const [indexJoke, setIndexJoke] = useState(0);
  const [cookies, setCookie] = useCookies(['user']);
  const checkCookie = (cookies.Jokes == undefined || cookies.Jokes < JokeList.length)? false : true;
  const [joke, setJoke] = useState(!checkCookie?JokeList[indexJoke].text:"That's all the jokes for today! Come back another day!");
  const [isLastes, setIsLastes] = useState(checkCookie);

  const handleFunny = () => {
    const idxAdd = indexJoke + 1;
    if(idxAdd >= JokeList.length){
      setIsLastes(true);
      setJoke("That's all the jokes for today! Come back another day!");
    }else
    {
      setIndexJoke(idxAdd);
      setJoke(JokeList[idxAdd].text);
    }
    setCookie('Jokes', idxAdd);
  }

  return (
    <div className="App">
        <Navbar/>
        <div className='App-title'>
          <h1>A joke a day keeps the doctor away</h1>
          <span>If you joke wrong way, your teeth have to pay. (Serious)</span>
        </div>
        <header className="App-header">
          <div>
            {joke}
          </div>
          {!isLastes && 
          <div className='App-button'>
            <button className='Button-funny' onClick={handleFunny}>This is Funny!</button>
            <button className='Button-notfunny' onClick={handleFunny}>This is not funny.</button>
          </div>
          }
          
        </header>
        <Footer/>
      </div>
  );
}

export default App;
