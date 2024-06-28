import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import Welcome from "./pages/welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";


const router = createBrowserRouter([

  {path: '/', element: <Welcome />},
  {path: '/ recipes', element: <Recipes /> },
  {path: '/ categories', element: <Categories /> },

]
)


function App() {
  return (
    <>
    <Welcome/>
    <Recipes/>
      
    </>
  )
}

export default App
