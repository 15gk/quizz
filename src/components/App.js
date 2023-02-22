

import '../styles/App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';


const router = createBrowserRouter (
  [{
    path :"/",
    element : <Main/>
  },
  {
    path :"/quiz",
    element :<Quiz/>
  },
  {
    path :"/result",
    element : <Result/>
  },
]
)
function App() {
  return (
    <>
      <RouterProvider router={router}>
      <h1>Quiz app</h1>
      </RouterProvider>
    </>
  );
}

export default App;

