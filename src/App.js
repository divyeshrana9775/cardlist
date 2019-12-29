import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listitem from './components/listitems';
function App() {
  return (
    <div className='contacts'>
      <Listitem name="Mr.Whiskeron" phone="Phone : (212) 555-1324" email="divyeshrana9775@gmail.com" imgUrl="http://placekitten.com/g/200/300"/>
      <Listitem name="Mr.Rayan" phone="Phone : (212) 555-1324" email="divyeshrana9775@gmail.com" imgUrl="http://placekitten.com/200/300"/>
    </div>
    
      
    
  );
}

export default App;
