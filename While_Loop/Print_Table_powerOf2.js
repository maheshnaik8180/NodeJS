const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reads.question(' Enter n Number For Power 2 :- ', (number) => 
{
    let index =0;
    while (number < 256)  
    {
            number=( 2 ** index );
    
            console.log(" Power of 2 ^"+index+" is :-"+number);
            index = ( index + 1 );
    
    }
     
        reads.close();
   
});