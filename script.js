// definindo as variaveis
let select1 = document.querySelector("#opcoes")
let label = document.querySelector("#label") 
let ano = new Date().getFullYear()
let idade = parseInt(document.querySelector("#opcoes").value)
let genero = document.getElementsByName("radsex")

// um loop para criar as opções de anos decrescentemente
for (let i = ano; i >= 1900; i--){
    select1.innerHTML += `<option value="${i}">${i}</option>`
}

// função para calcular a idade e checar o gênero
function calcular(){
    

    if (select1.value !== "indefinido"){
        if (genero[0].checked){
            label.innerHTML = `Homem com ${ano - idade} anos de idade`
        }

        else if (genero[1].checked){
            label.innerHTML = `Mulher com ${ano - idade} anos de idade`
        }

        else {
            label.innerHTML = "Selecione seu genero"
        }
    }

    else {
        if (genero[0].checked || genero[1].checked){
            label.innerHTML = `Selecione seu ano de nascimento` 
        }

        else {
            label.innerHTML = `Selecione seu ano de nascimento e seu gênero e tente novamente`
        }
    }

     

}