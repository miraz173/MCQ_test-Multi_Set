import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './kashem';
// import Result from './Result';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
