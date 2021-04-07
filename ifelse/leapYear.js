const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reads.question('Please enter Year (yyyy) format :- ', (year) => 
{
    if((year % 4 == 0 )  && (year % 100 != 0) || (year % 400 ==0))
    {
        console.log(year+ " THis is Leap Year");
    }
    else
    {
        console.log(year+ " This Not Leap Year");
    }
    reads.close();
});
