import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/titulo";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import { IconUser } from "@tabler/icons-react";




export default function Page() {
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone = {IconUser} principal = "Usuarios" secundario="Cadastro de usuários"/>
            <ListaUsuario />
        </Pagina>
    )
}