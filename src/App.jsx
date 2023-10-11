import Navbar from "./components/Navbar";
import Section from "./Section";
import FetchData from "./components/FetchData";
// import SearchItems from "./components/SearchItems";
import Back from "./Back";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CategoriesList from "./components/CategoriesList";
import Categories from "./views/Categories"
import { loadercatgories } from "./components/CategoriesPage";
import CatgeoriesPage from "./components/CategoriesPage";
import SearchItems from "./components/SearchItems";






const router = createBrowserRouter([
  {
    

    path: "/",
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <FetchData/>,
      },
      // {  
      // path: "SearchItems",
      // element:<SearchItems/>
      // },
      {
      path: "categories",
      element: <Categories/>
      },
      {
        path: "search",
        element: <SearchItems/>
        },
      {
        path: "/categories/:categories",
        element: <CatgeoriesPage/>,
        loader: loadercatgories
      }
    ]
  },
]);



function App () {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}



export default App;
