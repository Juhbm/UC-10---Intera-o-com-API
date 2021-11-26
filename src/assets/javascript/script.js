/* --- JAVASCRIPT --- */

// alert('Olá! \n Esta é a página Home da loja Game Mania.')
// console.log('Exemplo de comando alert');

// let nome = prompt('Bem - Vindo(a) a Loja Game Mania. Qual o seu nome?')
// alert( nome + ', é um prazer ter você em nosso site! \nNavegue a vontade e qualquer dúvida é só chamar.')

//-------------------------------------------------------------------------//

    /*renderizar os prdoutos no cards criados na index.html*/
function renderizarDestaques(){
    let destaque = document.getElementById("destaques")

     console.log("correndo");

    let produtos = [ /* lista dos produtos na seção destaque da index*/
        {   
            imagem: "img/conjPS4.svg",
            nome: "Conjunto PS4 Completo",
            precoantes: "De: R$ 7.549,90",
            precodepois: "Por: R$ 5.999,90", /* alterei para número somente. porém é um float... o que deve estar interferindo na soma no carrinho*/
            noCarrinho: 0,
            tag: "um"
        },
        {
            imagem: "img/ps4Fifa22.svg",
            nome: "Jogo FIFA22 PS4",
            precoantes: "De: R$ 349,90",
            precodepois: "Por: R$ 284,90",
            noCarrinho: 0,
            tag: "dois"
        },
        {
            imagem: "img/tecladoGamer.svg",
            nome: "Teclado Gamer",
            precoantes: "De: R$ 298,90",
            precodepois: "Por: R$ 199,90",
            noCarrinho: 0,
            tag: "tres"
        },
        {
            imagem: "img/cadeiraGamer.svg",
            nome: "Cadeira Gamer",
            precoantes: "De: R$ 1.229,90",
            precodepois: "Por: R$ 899,90",
            noCarrinho: 0,
            tag: "quatro"
        },
        {
            imagem: "img/controlePS4.svg",
            nome: "Par de Controle PS4",
            precoantes: "De: R$ 749,90",
            precodepois: "Por: R$ 659,90",
            noCarrinho: 0,
            tag: "cinco"
        },
        {
            imagem: "img/mouseGamer.svg",
            nome: "Mouse Gamer",
            precoantes: "De: R$ 259,90",
            precodepois: "Por: R$ 179,90",
            noCarrinho: 0,
            tag: "seis"
        }
    ];
    
    let template = ""; /*variável para evitar bug de sobrescrever um sobre outro*/

    for (let index = 0; index < produtos.length; index++) {
        const prod = produtos[index];
        
        template += `<div class="card">
                        <div class="icon">
                            <img src="${prod.imagem}" alt="Conjunto PS4">
                        </div>
                        <h3>${prod.nome}</h3>
                        <span>${prod.precoantes}}</span>
                        <h3>${prod.precodepois}</h3>
                        <button class="add_carrinho">Comprar</button>
                    </div>`  /*template string*/

        destaque.innerHTML = template;
    }

    /*ativando o botão de comprar para adicionar o item no carrinho de compras*/
    /*add_carrinho é a classe que está no button comprar. Assim usamos querySelectorAll para puxar a classe de cada card de item.*/

    let itens = document.querySelectorAll('.add_carrinho');

    for (let i=0; i < itens.length; i++){

        /*ao clicar adiciona produto no carrinho*/
        itens[i].addEventListener('click', () => {
            itensQuant(produtos[i]);
        })

        // console.log("meu loop"); testando se o for está funcionando.
        // console.log("adicionado ao carrinho"); testando se ao clicar emite esse console.
    }

    function onloadItensQuant() { /*essa função fará que a qntdd de itens no carrinho não apague quando atualizar a página.*/
        let prodQuant = localStorage.getItem('itensQuant');
        
        if (prodQuant){
            document.getElementById("i_cart_total").textContent = prodQuant;
        }
    }

    function itensQuant(produto) { /* função para adicionar/exibir itens no carrinho*/
        
        let prodQuant = localStorage.getItem('itensQuant');

        prodQuant = parseInt(prodQuant); /* parseInt converte uma string para número*/
       
        if(prodQuant){
            localStorage.setItem('itensQuant', prodQuant + 1); /*condição que fará adicionar + 1 quantidade do produto*/
            document.getElementById("i_cart_total").textContent = prodQuant + 1;
        } else{
            localStorage.setItem('itensQuant', 1);
            document.getElementById("i_cart_total").textContent = 1;
        }

        definindoItens(produto);
    } 
    
    /* função que detalha a quantidade de cada produto que está sendo inserido no carrinho.*/
    
     function definindoItens(produto) {
        
        let itensCarrinho = []; /*itens no carrinho igual a array*/
        if (localStorage.getItem("produtosNoCarrinho") != null)
            itensCarrinho = JSON.parse(localStorage.getItem("produtosNoCarrinho"));

        let indice = itensCarrinho.findIndex(p => p.tag == produto.tag); /*função do array q procura o indice de um determinado prod*/
        if (indice >= 0) {
            itensCarrinho[indice].noCarrinho += 1; /*atualiza a qtd do produto q já está no carrinho.*/
        } else {
            produto.noCarrinho = 1; /*se não tem prod no carrinho será add*/
            itensCarrinho.push(produto);
        }

        localStorage.setItem("produtosNoCarrinho", JSON.stringify(itensCarrinho));
    }

    onloadItensQuant();
}

    //localStorage.getItem armazena o valor no browser. Após atualizar tela, zera o carrinho. Exceto ao usar a função onloadItensQuant() criada acima.
    // console.log(prodQuant)
    // console.log (typeof prodQuant) exibir qual tipo está o caractere. Nesse caso: string. (antes do parseInt)
    // console.log (typeof prodQuant) exibe a mudança string => número (após o parseInt)
    //chamando document. (COM) getElementById ("i_cart_total") pq está como id no span do html. A bolinha de quantidades.
    //console.log("O produto inserido é:", produto); testando abaixo da function itensQuant... qual o produto inserido.
    // console.log("Dentro da função");
    // console.log("Meu produto é: ", produto);

/* --- JQUERY --- */ 

/*função buscar com jQuery -- puxa dentro do input os produtos que tem na seção destaque*/
    
    $(document).ready(function(){
    $("#myInput").on("keyup", function(){
    var value = $(this). val().toLowerCase();
    $("#destaques .card").filter(function(){
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); 

       });
    });
});