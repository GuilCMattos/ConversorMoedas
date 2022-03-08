function ConverterReais() { 
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    

    var valorEmDolar = valorEmDolarNumerico * 0.20
    let valorEmEuro = valorEmDolarNumerico * 0.18
    let valorEmBit = valorEmDolarNumerico * 0.0000051
  
    var elementoValorConvertido = document.getElementById("valorConvertidoDolar")
    var valorConvertidoDolar = "O resultado em dólar é U$ " + valorEmDolar
    elementoValorConvertido.innerHTML = valorConvertidoDolar


    let elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro")
    let valorConvertidoEuro = "O resultado em Euro é € " + valorEmEuro.toFixed(1)
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro

    let elementoValorConvertidoBit = document.getElementById("valorConvertidoBitCoin")
    let valorConvertidoBit = "O resultado em Bitcoins é " + valorEmBit
    elementoValorConvertidoBit.innerHTML = valorConvertidoBit

   

}

function ConverterTemperaturas() { 
    let valorElemento = document.getElementById("valorTemp")
    let valorTemp = valorElemento.value 
    let valorEmNumerico = parseFloat(valorTemp)

    let valorEmCelsius = valorEmNumerico 
    let valorEmKelvin = valorEmNumerico + 273.15
    let valorEmFarenheit = (valorEmNumerico * 1.8) + 32

    let elementoValorConvertidoCelsius = document.getElementById("valorConvertidoCelsius")
    let valorConvertidoCelsius = "O resultado em Celsius é " + valorEmCelsius + "º"
    elementoValorConvertidoCelsius.innerHTML = valorConvertidoCelsius

    let elementoValorConvertidoKelvin = document.getElementById("valorConvertidoKelvin")
    let valorConvertidoKelvin = "O resultado em Kelvin é " + valorEmKelvin + " K"
    elementoValorConvertidoKelvin.innerHTML = valorConvertidoKelvin

    let elementoValorConvertidoFarenheit = document.getElementById("valorConvertidoFarenheit")
    let valorConvertidoFarenheit = "O resultado em Farenheit é " + valorEmFarenheit + " F"
    elementoValorConvertidoFarenheit.innerHTML = valorConvertidoFarenheit



}

function ConverterKM() { 
    let valorElemento = document.getElementById("valorKM")
    let valorKM = valorElemento.value
    let valorEmNumerico = parseFloat(valorKM)

    

    let valorKMParaAL = valorEmNumerico * 0.00000000000010570

    console.log(valorKMParaAL)

    let eValorConveritdoAL = document.getElementById("valorConvertidoAnoLuz")
    let valorConvertidoAL = "O resultado em Anos luz é de " + valorKMParaAL + "<br><br>"
    eValorConveritdoAL.innerHTML = valorConvertidoAL
    
   
}