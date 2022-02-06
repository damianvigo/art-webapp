import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
          <h2>Página no encontrada</h2>
        </div>
        <Link to="/">Inicio</Link>
      </div>
    </div>
  );
};

export default Error404;
