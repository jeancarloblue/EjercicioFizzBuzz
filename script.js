function numeros(){

for(let i=1;i<=1000;i++){
    if (i%3==0 && i%5==0){
        mostrarResultado("FizzBuzz");
    }

    else if(i%3==0){

        mostrarResultado("Fizz");
    }else if (i%5==0){
        mostrarResultado("Buzz");
        
    }

    else{
        mostrarResultado(i);
    
    }


}

function mostrarResultado(resultado){

console.log(resultado);


}


}
numeros();