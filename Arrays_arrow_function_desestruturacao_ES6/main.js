const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multi_2x = array.map(function(item) {
    return item * 2;
});

console.log(multi_2x);

const soma = array.reduce(function(total, next) {
    return total + next;
});

console.log(soma);

const filtro = array.filter(function(item) {
    return item % 2 === 0 || item % 3 === 0;
});

console.log(filtro);

// encontra o primeiro do array e não procura mais.
const encontrado = array.find(function(item) {
    return item === 9 || item === 0;
});

console.log(encontrado);

const multi_3x = array.map(item => item * 3);

console.log(multi_3x);

const teste_function = () => {return {nome:"Raimundo"}};

console.log(teste_function());

function somatorio(a=1, b=2, c=3, d=4, e=5) {
    return a + b + c + d + e;
}

console.log(somatorio(1, 1, 1, 1));

const usuario = {
    nome:"Raimundo",
    idade: 21,
    endereco: {
        rua:"rua d",
        cidade:"Jequié"
    }
};

const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(usuario) {
    console.log(usuario.nome);
}

mostraNome(usuario);

function mostraNome2({nome}) {
    console.log(nome);
}

mostraNome2(usuario);

// essa desestruturação não pegou nada dentro de endereço no resto.
// talvez por que ele já foi chamado anteriormente para dar valor a rua.
const {endereco:{rua}, ...resto} = usuario;

console.log(rua);
console.log(resto);

const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

function multiplica(...args) {
    return args.reduce((total, next) => total * next); 
}

console.log(multiplica(1, 2, 3, 4, 5, 6, 7));

const usuario_novo = {...usuario, nome:"Odnumiar"}

console.log(usuario_novo);

console.log(`Meu nome é ${nome}, minha idade é ${idade}`);

const usuario_short = {
    nome,
    idade,
    endereco: {
        rua,
        cidade
    }
};

console.log(usuario_short);