const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reads.question(' Enter a Choice between thes numbers [1,10,100,1000]:- ', (number) => 
{
    
    
    let numCheck = ( number / 10  );
    switch (numCheck)
    {
        case 0.1:
                console.log("\t"+number+ " The Number is Unit Digit");
                break;
        case 1:
                console.log(number+ " The Number is Ten Digit");
                break;
        case 10:
                console.log(number+ " The Number is Hundred Digit");
                break;
        case 100:
                console.log(number+ " The Number is Thousands Digit")
                break;

    }
    reads.close();
});