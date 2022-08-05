class List {
    constructor() {
        this.data = [];
    }

    add(nome) {
        this.data.push(nome);
        console.log(this.data);
    }
}

class ToList extends List {
    constructor() {
        super();
        this.usuario = 'Lucas';
    }

    getUsuario() {
        console.log(this.usuario)
    }

    static soma(a,b) {
        return a+b;
    }
}

const tolist = new ToList();

document.getElementById('novotodo').onclick = function() {
    tolist.add('joao');
    tolist.getUsuario();
}

const nome0 = "Lucas";

var nome1 = "João"

console.log(nome0)

function teste(x) {
    let y = 4;

    if (x > 2) {
        y = 6;
        console.log(x,y);
    }
}

console.log(teste(10));