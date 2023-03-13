import { BrowserRouter } from 'react-router-dom';
import NavRoutes from './components/NavRoutes';

function App() {
  return (
    <BrowserRouter>
      <NavRoutes />
    </BrowserRouter>
  );
}

export default App;
