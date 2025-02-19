/* 
 DATI
  scrivere num da 1 a 100
  multipili 3 scerivere Fizz
  multipli 5 scrivere Buzz
  entrambi i multipli FizzBuzz

PROCEDIMENTO LOGICO
  creare ciclo iniznaod da 1 e aggiungendo +1 ogni volta fino ad arrivare a 100. 
  Inserire invece che il numnero di riferimento la parola fuzz nei multipli di 3, inserire buzz nei multilpli di 5, fizzbuz per entrambi i multipli.

  OUTPUT

  stampare lista dei numeri da 1 a 100 con fizz  e buzz nei rispettivi multipli.

*/




for (let i = 0; i <= 100; i++) { 
    let fizzBuzz;
    if ( i % 3 === 0 && i % 5 === 0 )  {fizzBuzz = "fizzBuzz"}
    else if ( i % 3 === 0) { fizzBuzz = "fizz"}
    else if ( i % 5 === 0 ) { fizzBuzz = "Buzz"}
    
    
    console.log(i,fizzBuzz);

   
}


