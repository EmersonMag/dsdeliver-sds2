import "./styles.css";

import { ReactComponent as LoadingImg } from '../Navbar/Logo.svg';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-image">
        <LoadingImg />
      </div>
      <h3 className="loading-text">Buscando pedidos...</h3>
    </div>
  );
}