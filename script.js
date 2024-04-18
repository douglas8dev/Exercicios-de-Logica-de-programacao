//1- Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.  

function exer1(){


    var estudantes = [] ;
    var quantidadeDeAlunos = 0 ;
    var continuar = "" ;
    var nome = "" ;
    
    do{
    
        do {
            nome = prompt("digite o um nome");
            if (nome === "")
            alert("Por favor digite um nome");
        }while(nome === "")
        estudantes [quantidadeDeAlunos] = nome +"\n";
        quantidadeDeAlunos++ ;
        continuar = confirm("Deseja parar de adicionar nomes?")
        if(continuar){
            alert("A quantidade de alunos é " + quantidadeDeAlunos + "\n\n" + estudantes)
        }
    }while(!continuar)
    
    }
    
    
    //2- Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 
    //Verifique se o planeta que o usuário informou está na array e informe ao usuário.
    
    function exer2(){
    
        var planetas = [
            'Terra', 'Marte', 'Plutão', 'Vênus', 'Júpiter', 'Saturno'
        ]
        var planeta = prompt("Digite o nome de um planeta")
    
        if(planetas.includes(planeta))
            alert("Esse planeta faz parte da Arrey");
        else{
            alert("Esse planeta não está na Array");
    }
    
    }
    
    
    //3- Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.   Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".
    
    
    function exer3(){
    
        var frutas = [
            'Banana', 'Maça', 'Uva', 'Maracuja', 'Laranja', 'Melancia', 'Limão'
        ] ;
        
        for(var i=0; i<7; i++){
        var fruta = prompt( frutas + '\n O que deseja comprar?');
    
        if(frutas.includes(fruta)){
            var lista = frutas.indexOf(fruta);
            frutas.splice(lista,1);
            alert('A fruta foi comprada!')
        }else{
            i--;
            alert("Fruta indisponível no nosso mercado");
        }
        }
        alert('Lista finalizada, Obrigado pela compra!')
    } 