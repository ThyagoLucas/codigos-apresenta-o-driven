//Antes


function soma (a, b, c){

    console.log(a);
    console.log(b);
    console.log(c);
    if(a === undefined){
        a = 0;
    }
    if(b === undefined){
        b = 0;
    }
    if(c === undefined){
        c = 0;
    }

    console.log(a);
    console.log(b);
    console.log(c);

    resultado = a+b+c;
    console.log(resultado);
}

soma();

//Depois
// function soma (a=0, b=0, c=0){

//     console.log(a);
//     console.log(b);
//     console.log(c);

//     resultado = a+b+c;
//     console.log(resultado);
// }

// soma(5, 6 );


    


