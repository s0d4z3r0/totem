// Stage Burger
var menosUm = document.querySelector("#menos")
var maisUm = document.querySelector("#mais")
var quantidade = document.querySelector("#qtd")
var adicionarStage = document.querySelector("#addStage")
// Cheeseburger
var menosUm02 = document.querySelector(".me02")
var maisUm02 = document.querySelector(".ma02")
var quantidade02 = document.querySelector(".qtd02")
var adicionarCheeseburger = document.querySelector("#addCheeseburger")
// Aussie Burguer
var menosUm03 = document.querySelector(".me03")
var maisUm03 = document.querySelector(".ma03")
var quantidade03 = document.querySelector(".qtd03")
var adicionarAussie = document.querySelector("#addAussie")
// Chicken Burger
var menosUm04 = document.querySelector(".me04")
var maisUm04 = document.querySelector(".ma04")
var quantidade04 = document.querySelector(".qtd04")
var adicionarChicken = document.querySelector("#addChicken")
// Fries
var menosUm05 = document.querySelector(".me05")
var maisUm05 = document.querySelector(".ma05")
var quantidade05 = document.querySelector(".qtd05")
var adicionarFries = document.querySelector("#addFries")
// Drink
var menosUm06 = document.querySelector(".me06")
var maisUm06 = document.querySelector(".ma06")
var quantidade06 = document.querySelector(".qtd06")
var adicionarDrink = document.querySelector("#addDrink")
// Resumo do Pedido
var resumo = document.querySelector("#lista")
var resumoPagamento = document.querySelector("#lista2")
var total = document.querySelector("#tot")
var totalPagamento = document.querySelector("#tot2")
var resetar = document.querySelector("#reset")
// Modal
var abrirModal = document.querySelector("#pagar")
var fade = document.querySelector("#fade")
var modal = document.querySelector("#modal")
var cadastrar = document.querySelector("#confirmar")
var eventos = [abrirModal, fade]


const toogleModal = () =>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((elemento)=>{
    elemento.addEventListener("click", () => toogleModal())
})

cadastrar.addEventListener("click", ()=>{
    alert("Agradecemos a preferência!")
    toogleModal()
    stage = 0
    cheeseburger = 0 
    aussie = 0 
    chicken = 0 
    fries = 0 
    drink = 0
    resumo.innerHTML = ""
    resumoPagamento.innerHTML = ""
    total.innerHTML = "0.00"
    totalPagamento.innerHTML = "0.00"

})

// Variáveis

let stage = 0
let cheeseburger = 0
let aussie = 0
let chicken = 0
let fries = 0
let drink = 0

resetar.addEventListener("click", ()=>{
    stage = 0
    cheeseburger = 0 
    aussie = 0 
    chicken = 0 
    fries = 0 
    drink = 0
    resumo.innerHTML = ""
    resumoPagamento.innerHTML = ""
    total.innerHTML = "0.00"
    totalPagamento.innerHTML = "0.00"
})

// StageBurger
maisUm.addEventListener("click", ()=>{
    Number(quantidade.value ++)

    console.log(quantidade.value)
})
menosUm.addEventListener("click", ()=>{
    Number(quantidade.value --)

    if(quantidade.value < 0){
        alert("Quantidade inválida!")
        quantidade.value = "0"
    }
    console.log(quantidade.value)
})
adicionarStage.addEventListener("click", ()=>{
    if (quantidade.value <= 0){
        alert("Quantidade inválida!")
    } else{
        stage += quantidade.value * 20

        console.log(stage)
        resumo.innerHTML += `<li>${quantidade.value}x Stage Burger</li>`
        resumoPagamento.innerHTML += `<li>${quantidade.value}x Stage Burger</li>`
        total.innerHTML = ""
        total.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        totalPagamento.innerHTML = ""
        totalPagamento.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        quantidade.value = "0"
    }
    
})


// Cheeseburger
maisUm02.addEventListener("click", ()=>{
    Number(quantidade02.value ++)

    console.log(quantidade02.value)
})
menosUm02.addEventListener("click", ()=>{
    Number(quantidade02.value --)

    if(quantidade02.value < 0){
        alert("Quantidade inválida!")
        quantidade02.value = "0"
    }
    console.log(quantidade02.value)
})
adicionarCheeseburger.addEventListener("click", ()=>{
    if (quantidade02.value <= 0){
        alert("Quantidade inválida!")
    } else{
        cheeseburger += quantidade02.value * 16

        console.log(cheeseburger)
        resumo.innerHTML += `<li>${quantidade02.value}x Cheeseburger</li>`
        resumoPagamento.innerHTML += `<li>${quantidade02.value}x Cheeseburger</li>`
        total.innerHTML = ""
        total.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        totalPagamento.innerHTML = ""
        totalPagamento.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        quantidade02.value = "0"
    }
})


// Aussie Burguer
maisUm03.addEventListener("click", ()=>{
    Number(quantidade03.value ++)

    console.log(quantidade03.value)
})
menosUm03.addEventListener("click", ()=>{
    Number(quantidade03.value --)

    if(quantidade03.value < 0){
        alert("Quantidade inválida!")
        quantidade03.value = "0"
    }
    console.log(quantidade03.value)
})
adicionarAussie.addEventListener("click", ()=>{
    if (quantidade03.value <= 0){
        alert("Quantidade inválida!")
    } else{
        aussie += quantidade03.value * 22

        console.log(aussie)
        resumo.innerHTML += `<li>${quantidade03.value}x Aussie Burger</li>`
        resumoPagamento.innerHTML += `<li>${quantidade03.value}x Aussie Burger</li>`
        total.innerHTML = ""
        total.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        totalPagamento.innerHTML = ""
        totalPagamento.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        quantidade03.value = "0"
    }
})


// Chicken Burger
maisUm04.addEventListener("click", ()=>{
    Number(quantidade04.value ++)

    console.log(quantidade04.value)
})
menosUm04.addEventListener("click", ()=>{
    Number(quantidade04.value --)

    if(quantidade04.value < 0){
        alert("Quantidade inválida!")
        quantidade04.value = "0"
    }
    console.log(quantidade04.value)
})
adicionarChicken.addEventListener("click", ()=>{
    if (quantidade04.value <= 0){
        alert("Quantidade inválida!")
    } else{
        chicken += quantidade04.value * 20

        console.log(chicken)
        resumo.innerHTML += `<li>${quantidade04.value}x Chicken Burger</li>`
        resumoPagamento.innerHTML += `<li>${quantidade04.value}x Chicken Burger</li>`
        total.innerHTML = ""
        total.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        totalPagamento.innerHTML = ""
        totalPagamento.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        quantidade04.value = "0"
    }
})


// Fries
maisUm05.addEventListener("click", ()=>{
    Number(quantidade05.value ++)

    console.log(quantidade02.value)
})
menosUm05.addEventListener("click", ()=>{
    Number(quantidade05.value --)

    if(quantidade05.value < 0){
        alert("Quantidade inválida!")
        quantidade05.value = "0"
    }
    console.log(quantidade05.value)
})
adicionarFries.addEventListener("click", ()=>{
    if (quantidade05.value <= 0){
        alert("Quantidade inválida!")
    } else{
        fries += quantidade05.value * 8

        console.log(fries)
        resumo.innerHTML += `<li>${quantidade05.value}x Batata Frita</li>`
        resumoPagamento.innerHTML += `<li>${quantidade05.value}x Batata Frita</li>`
        total.innerHTML = ""
        total.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        totalPagamento.innerHTML = ""
        totalPagamento.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        quantidade05.value = "0"
    }
})


// Drink
maisUm06.addEventListener("click", ()=>{
    Number(quantidade06.value ++)

    console.log(quantidade02.value)
})
menosUm06.addEventListener("click", ()=>{
    Number(quantidade06.value --)

    if(quantidade06.value < 0){
        alert("Quantidade inválida!")
        quantidade06.value = "0"
    }
    console.log(quantidade06.value)
})
adicionarDrink.addEventListener("click", ()=>{
    if (quantidade06.value <= 0){
        alert("Quantidade inválida!")
    } else{
        drink += quantidade06.value * 6

        console.log(drink)
        resumo.innerHTML += `<li>${quantidade06.value}x Refrigerante</li>`
        resumoPagamento.innerHTML += `<li>${quantidade06.value}x Refrigerante</li>`
        total.innerHTML = ""
        total.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        totalPagamento.innerHTML = ""
        totalPagamento.innerHTML += (stage + cheeseburger + aussie + chicken + fries + drink).toFixed(2)
        quantidade06.value = "0"
    }
})



