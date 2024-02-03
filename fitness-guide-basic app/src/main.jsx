import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Slides = [
  {
    title: "today's workout plan",
    text: "we're gonna do 3 fundamental exercises"
  },
  {
    title: "first 10 pushups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush"
  },
  {
    title: "next 20 squats",
    text: "squats are important. Remember to keep your back straight."
  },
  {
    title: "finally 15 situps",
    text: "Slightly bend your knees.Remember About full range of motion"
  },
  {
    title: "Great Job!",
    text: "You made it, see you next time."
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App slides = {Slides}/>
  </React.StrictMode>,
)
