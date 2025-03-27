export interface Usuario {
    id:    string    
    email: string   
    nome:  string | null  // Permite nulo
    senha: string
}
