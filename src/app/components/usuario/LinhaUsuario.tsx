import { Usuario } from "@prisma/client"
import Image from 'next/image'

export interface LinhaUsuarioProps {
    usuario: Usuario
}
export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex bg-zinc-900 p-4 rounded-md">
            <Image 
                src = "http://source.unsplash.com/random/80x80?avatar" 
                width={80} 
                height={80} 
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}