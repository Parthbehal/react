import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement=(
    <a href="https://google.com" target='_blank'> Visit google </a>
)

// const raectElement=React.createElement(
//    'a',
//   {href:'https://google.com',target:'_blank'},
//   'click me  to visit google'
  
// )
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  reactElement
)