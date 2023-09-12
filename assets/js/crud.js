class Equipe {
    constructor(nome, titulares) {
        this.id = this.geraId();
        this.nome = nome;
        this.titulares = titulares;
        this.reservas = this.calcularReservas();
        this.totalJogadores = this.calcularTotalJogadores();
    }

    geraId() {
        return Math.floor(Math.random() * 1000);
    }

    calcularReservas() {
        return Math.floor(this.titulares / 2);
    }

    calcularTotalJogadores() {
        return this.titulares + this.reservas;
    }
}

class EquipeService {
   constructor() {
    this.equipes = [];
   }

// CRUD = Create, Read, Update, Delete
   adicionarEquipes(parametro) {
    this.equipes.push(parametro);
}

    listarEquipes() {     
        return this.equipes;
    }

    listarEquipesPorId(parametro) {
        return this.equipes.find(equipe => equipe.id == parametro);
    }

    atualizarEquipes(id, nome, titulares) {
        const equipe = this.listarEquipesPorId(id);
        equipe.nome = nome;
        equipe.titulares = titulares;
        equipe.reservas = equipe.calcularReservas();
        equipe.totalJogadores = equipe.calcularTotalJogadores();

        return equipe;
    }

    deletarEquipes(parametro) { 
        return (this.equipes = this.equipes.filter((equipe) => equipe.id != parametro));
    }
}

const equipeService = new EquipeService();

//alert("OI")
function criarEquipe(){
    const nome = document.getElementById('nomeDaEquipe').value;
    const titulares = Number(document.getElementById('quantidade').value);

    const novaEquipe = new Equipe(nome, titulares);

    equipeService.adicionarEquipes(novaEquipe);

    listarEquipes()
    limparinputs()
    //alert("nome da equipe: " + nome + " quantidade: " + quantidade)
}

function listarEquipes() {
    const equipes = equipeService.listarEquipes();

    const elementoLista = document.getElementById('listarEquipes');
    elementoLista.innerHTML = '';

    let content = '';

    equipes.forEach((equipe) => {
        content += `
        <div onclick="listarEquipesPorId(${equipe.id})">
        <p>Nome da Equipe: ${equipe.nome}</p>
        </div>
        `
});
    elementoLista.innerHTML = content;
}

function listarEquipesPorId(id) {
    const equipe = equipeService.listarEquipesPorId(id);

    const elementoLista = document.getElementById('listarEquipeUnica');
    elementoLista.innerHTML = '';

    let content = `
    <div>
    <p>Id: ${equipe.id}</p>
    <p>Total de Jogadores: ${equipe.totalJogadores}</p>
    <p>Titulares: ${equipe.titulares}</p>
    <p>Reservas: ${equipe.reservas}</p>
    <button onclick="atualizarEquipes(${equipe.id})">Editar</button>
    <button onclick="deletarEquipes(${equipe.id})">Deletar</button>
    </div>
    `
    elementoLista.innerHTML = content;
    
}

let aux = null;

function atualizarEquipes(id) {
    const equipe = equipeService.listarEquipesPorId(id);

   document.getElementById('nomeDaEquipe').value = equipe.nome;
   document.getElementById('quantidade').value = equipe.titulares;

   document.getElementById('botaoCadastrar').classList.add('hidden');
   document.getElementById('botaoEditar').classList.remove('hidden');
 
   aux = id;
}

function editarEquipe() {
    const nome = document.getElementById('nomeDaEquipe').value;
    const titulares = document.getElementById('quantidade').value;

    equipeService.atualizarEquipes(aux, nome, titulares);

    listarEquipes();

    document.getElementById('botaoCadastrar').classList.remove('hidden');
    document.getElementById('botaoEditar').classList.add('hidden');

    limparinputs();
    aux = null;
}

function limparinputs() {
    document.getElementById('nomeDaEquipe').value = '';
    document.getElementById('quantidade').value = '';
}

function deletarEquipes(id) {
    equipeService.deletarEquipes(id);

    listarEquipes();
    document.getElementById('listarEquipeUnica').classList.add('hidden');
}