function sing () {
    var letra = "";
    for (var i=0;i<4;i++){
        letra = letra + "let it be, ";
    }
    letra = letra + "words of wisdom, ";
    for (var i=0;i<5;i++){
        letra = letra + "let it be, ";
    }
    letra = letra + "there will be an answer, let it be";  
    return letra;  
}

//Your code above ^^^

console.log(sing());