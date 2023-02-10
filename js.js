const json = '{"nome": "João Gomes" , "profissao": "Cantor" , "idade": "20"}';
    
const data = JSON.parse(json);

console.log(data);

function myFunction1(){
document.getElementById("nome").innerHTML =  "Nome: " +data.nome;
document.getElementById("profissao").innerHTML = "Profissão: " +data.profissao;
document.getElementById("idade").innerHTML= "Idade: " +data.idade;
document.getElementById("img").innerHTML= "<img src = 'img/joo.png'>" ;
}

const json2 = '{"nome": "Gusttavo Lima" , "profissao": "Cantor" , "idade": "33"}';

const data2 = JSON.parse(json2);

console.log(data2);

function myFunction2(){
document.getElementById("nome").innerHTML = "Nome: " + data2.nome;
document.getElementById("profissao").innerHTML = "Profissão: " + data2.profissao;
document.getElementById("idade").innerHTML=  "Idade: " + data2.idade;
document.getElementById("img").innerHTML= "<img src = 'img/gustavo.png'>" ;
}

const json3 = '{"nome": "Luan Santana" , "profissao": "Cantor" , "idade": "31"}';

const data3 = JSON.parse(json3);

console.log(data3);

function myFunction3(){
document.getElementById("nome").innerHTML = "Nome: " + data3.nome;
document.getElementById("profissao").innerHTML = "Profissão: " + data3.profissao;
document.getElementById("idade").innerHTML=  "Idade: " + data3.idade;
document.getElementById("img").innerHTML= "<img src = 'img/luan.png'>" ;
}


const json4 = '{"nome": "Naiara Azevedo" , "profissao": "Cantora" , "idade": "33"}';

const data4 = JSON.parse(json4);

console.log(data4);
 
function myFunction4(){
 document.getElementById("nome").innerHTML = "Nome: " + data4.nome;
 document.getElementById("profissao").innerHTML = "Profissão: " + data4.profissao;
 document.getElementById("idade").innerHTML=  "Idade: " + data4.idade;
 document.getElementById("img").innerHTML= "<img src = 'img/naiara.png'>" ;
}


const json5 = '{"nome": "Maraisa" , "profissao": "Cantora" , "idade": "35"}';

const data5 = JSON.parse(json5);

console.log(data5);

function myFunction5(){
document.getElementById("nome").innerHTML = "Nome: " + data5.nome;
document.getElementById("profissao").innerHTML = "Profissão: " + data5.profissao;
document.getElementById("idade").innerHTML=  "Idade: " + data5.idade;
document.getElementById("img").innerHTML= "<img src = 'img/maraisa.png'>" ;
}

const json6 = '{"nome": "Marília Mendonça" , "profissao": "Cantora" , "idade": "26"}';

const data6 = JSON.parse(json6);

console.log(data6);

function myFunction6(){
document.getElementById("nome").innerHTML = "Nome: " + data6.nome;
document.getElementById("profissao").innerHTML = "Profissão: " + data6.profissao;
document.getElementById("idade").innerHTML=  "Idade: " + data6.idade;
document.getElementById("img").innerHTML= "<img src = 'img/marilia.png'>" ;
}

