import Header from './components/header/Header';
import './App.css';
import { useState } from 'react';
import NewItem from './components/NewItem/NewItem';

function App() {
  const [moviesData, setMoviesData] = useState([])
  const pushMovie = (data) => {
    const addedCopy = [...moviesData]
    addedCopy.push(data)
    setMoviesData(addedCopy)
  }
  return (
    <div>
      <Header pushMovie={pushMovie} />
      <NewItem moviesData={moviesData} deleteItem={setMoviesData} />
    </div>
  );
}

export default App;
