"use server"

import { Usuario } from "@/core/model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";
import Id from "@/core/utils/id";

export default async function obterTodos(){
    

    return RepositorioUsuario.obterTodos()

}