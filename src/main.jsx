import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/Components/Header.jsx'
import TaskList from './assets/Components/TaskList.jsx'
import Footer from './assets/Components/Footer.jsx'
import './assets/styles/index.css'
import './assets/styles/Tasks.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <TaskList/>
    <Footer/>
  </React.StrictMode>,
)