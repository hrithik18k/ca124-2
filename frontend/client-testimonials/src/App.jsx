import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TestimonialCard from './components/TestimonialCard'
import './App.css'

function App() {
  const reviews = [
    {review:"very good",name:"hrithik"},
    {review:"not good",name:"mohan"}
  ]
  return(
    <div className='test-list'>
      <h1>Client Reviews</h1>
      {reviews && reviews.map((el,i)=>(
        <TestimonialCard key={i} review={el.review} name={el.name} />
      ))}
    </div>
  )
}

export default App
