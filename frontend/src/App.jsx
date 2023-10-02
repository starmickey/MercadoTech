import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './components/homepage/HomePage';
import './styles/style.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomePage/>)
    },
]);

export default function App() {
    return(
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    )
}