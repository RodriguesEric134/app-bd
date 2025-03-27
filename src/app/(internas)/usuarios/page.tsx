'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import usuarios from "@/app/data/constants/usuarios";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";




export default function Page() {

    const [usuarios, setUsuarios] = useState<Usuario[]> ([])
    const [usuario, setUsuario] = useState<Partial<Usuario>| null> (null)

    function salvar(){
        if(!usuario) return
        Backend.usuarios.salvar(usuario)
    }

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone = {IconUser} principal = "Usuarios" secundario="Cadastro de usuários"/>            
            {usuario ? (
                <FormularioUsuario 
                usuario={usuario} 
                onChange={setUsuario}
                salvar={salvar}
                cancelar={() => setUsuario(null)}
                />

            ) : (
                <ListaUsuario />
            )}
        </Pagina>
    )
}

