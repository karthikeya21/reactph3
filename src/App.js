import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Technologies from './components/Technologies';
import Angular from './components/Angular';
import Vue from './components/Vue';
import Reactjs from './components/Reactjs';

function App() {

    const router=createBrowserRouter([
      {
        path:"/",
        element:<RootLayout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          
          },
          {
            path:"/signup",
            element:<Signup/>
          },
          {
            path:"/signin",
            element:<Signin/>
          },
          {
            path:"/technologies",
            element:<Technologies/>,
            children:[
              {
                path:"angular",
                element:<Angular/>
              },
              {
                path:"reactjs",
                element:<Reactjs/>
              },
              {
                path:"vue",
                element:<Vue/>
              },
            ]
          },
          

        ]
      }
    ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
