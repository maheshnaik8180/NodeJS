const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
reads.question(' Enter Number for get Factorial:- ', (number) => 
{
    let fact=1
        for ( i=1 ; i <= number ; i++ )
        {
            fact = (fact * i);
        }
        console.log(" Factorial of Number "+number+" is :-"+fact);

        reads.close();
   
});