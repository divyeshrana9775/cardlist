import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listitem from './components/listitems';
import jokesData from './components/jokesdata';
function App() {
  const name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const double = name.map(function (name) {
    return name * 2
  })
  console.log(double)
  const jokescomponents = jokesData.map(joke => <Listitem key={joke.id} phone={joke.question} email={joke.punchLine} imgUrl={joke.imgUrl}/>)
  return (
    <div className='contacts'>
      <Listitem phone="Phone : (212) 555-1324" email="divyeshrana9775@gmail.com" imgUrl="http://placekitten.com/g/200/300"/>
      <Listitem name="Mr.Whiskeron" phone="Phone : (212) 555-1324" email="divyeshrana9775@gmail.com" imgUrl="http://placekitten.com/g/200/300"/>
      <Listitem name="Mr.Rayan" phone="Phone : (212) 555-1324" email="divyeshrana9775@gmail.com" imgUrl="http://placekitten.com/200/300" />
      {jokescomponents}
    </div>
    
      
    
  );
}

export default App;
