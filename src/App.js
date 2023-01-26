
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import { router} from './Routes/Routes';

function App() {

  return (
    <div className="">
      
         <RouterProvider router={router}></RouterProvider>
        
    </div>
  );
}

export default App;
