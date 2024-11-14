import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
 import User from './components/User/User.jsx'
 import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
//createBrowserRouter is a function provided by react-router-dom to create a router that uses the HTML5 history API for navigation. This allows you to manage routing in a single-page React application (SPA) without full page reloads. It gives the app the ability to handle navigation between different views or components based on the URL in the browser's address bar.
//createBrowserRouter helps to define which components (pages) should be displayed based on the current URL of your app, and it allows users to navigate between these components without causing the entire page to reload.
const router = createBrowserRouter(
  createRoutesFromElements(//createBrowserRouter is used to create a router that works with the browser’s history API, allowing you to change the URL without a page reload.
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}//loader is fetch karlega pehle hi as your cursor goes to the point API catch faster
      path='github' 
      element={<Github />}/>
    </Route>
  )
)
  //another method as following
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)