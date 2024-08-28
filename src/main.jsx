//1. Create a new React App.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a header element.
//Show the keeper app name in an <h1>.
//4. Create a footer.jsx component that render a <footer> element.
//to show a copyright message in a <p> with a dynamically updated year.
//5.Create a Note.jsx component to show a <div> element with a <h1> for a title and a <p> for content.
//6. make sure that the final website is listed like the example shown here: https://w00gz.csb.app/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
