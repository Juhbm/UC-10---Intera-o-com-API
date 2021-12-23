export class User { /*criação da classe*/
    constructor( /*método construtor, tem sintaxe de função*/
        public email: string = "", /*atributos: público variáveis email e senha e ambos são string*/
        public password: string = ""
    ) {} 
    
    /* essa classe(model/User) serve para construir modelo para "cadastrar" o usuário*/
}
