import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom"
import HomePage from './components/homepage/HomePage'
import './styles/App.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomePage/>)
    },
]);

function App() {
    return (<RouterProvider router={router} />)
}

export default App;