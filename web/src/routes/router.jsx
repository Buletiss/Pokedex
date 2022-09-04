import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { Cadastro } from '../pages/cadastro';
import { Login } from '../pages/login';
import { Main } from '../pages/main';

export function Routes() {
  return (
    <ReactRoutes>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </ReactRoutes>
  );
}
