class heroi{
    constructor(nameHeroi,idadeHeroi,tipoHeroi){
        this.nameHeroi = nameHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    ataque (){
        if (this.tipoHeroi == "mago"){
            return "magia";
        }
        else if (this.tipoHeroi == "guerreiro"){
        	return "espada";
            }
        else if (this.tipoHeroi == "monge"){
            return "artes marciais";
                } 
        else{
            return "shuriken";
                    }     
    }

    atacar(){
        console.log(`o ${this.tipoHeroi} atacou usando ${this.ataque()}`);
    }
}

let jogo = new heroi("Naruto",32, "mago");
jogo.atacar();