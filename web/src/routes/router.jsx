import { Routes as ReactRoutes, Route } from "react-router-dom";

import { Cadastro } from "../pages/cadastro";
import { Login } from "../pages/login";

export function Routes() {
    return (
        <ReactRoutes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Login />} />
        </ReactRoutes>
    );
}
