//classe heroi
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //metodo de ataque
    atacar(){
        let ataque;

        //decide qual sera o ataque
        switch (this.tipo.toLowerCase()){
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
                break;
        }
        //mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

//alguns herois criados
const mago = new Heroi('Goswin', 157, 'mago');
const guerreiro = new Heroi('Zedas', 226, 'guerreiro');
const monge = new Heroi('Jonas', 23, 'monge');
const ninja = new Heroi('Zabuza', 26, 'ninja');
const paladino = new Heroi('Markus', 32, 'paladino');

//testes de cada heroi
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
paladino.atacar();