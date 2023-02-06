import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
    
    </>);
