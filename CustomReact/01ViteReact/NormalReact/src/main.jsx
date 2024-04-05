import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser = " Ghouse"
const ReactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click this link to visit Google search',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
  // <App />
)
