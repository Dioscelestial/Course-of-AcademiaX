import estilos from "./Principal.module.css";
import Vinculo from "./Vinculo.js";
import { ReactComponent as ListaSVG } from "../../img/Lista.svg";
import { ReactComponent as NuevaSVG } from "../../img/new.svg";
function Principal({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo to="/lista" texto="Lista de metas" Icono={ListaSVG}></Vinculo>
        <Vinculo
          to="/nueva"
          texto="Crear nueva meta"
          Icono={NuevaSVG}
        ></Vinculo>
      </aside>
      <main className={estilos.main}>{children}</main>
    </div>
  );
}

export default Principal;
