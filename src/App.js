import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UpdateUser from './Components/UpdateUser/UpdateUser';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root></Root>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/updateUser",
        element : <UpdateUser></UpdateUser>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
