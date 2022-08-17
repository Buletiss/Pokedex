import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro";

export function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Cadastro />} />
        </ReactRoutes>
    );
}
