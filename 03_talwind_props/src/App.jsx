import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
 const myObj= {
    username: "avinash",
    email:'avinashumar@gmail.com',
    age:29
  }
  return (
    <>

    <h1>Test Talwind</h1>
    <div className="flex gap-6 flex-wrap justify-center p-10">
      <Card channel="YouTube" userInfo={myObj}/>
      <Card channel="Twitch"/>
      <Card channel="Netflix"/>
      <Card channel="Hulu"/>
    </div>
    </>
  );
}

export default App
