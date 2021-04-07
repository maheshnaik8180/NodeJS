const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function defF(temp1)
{
    fTemp =  temp1 * ( 9 / 5) + 32 ;
    return fTemp;
}
function defC(temp2)
{
    cTemp =  ( temp2 - 32 ) * ( 5 / 9 );
    return cTemp;
}

reads.question(' Enter the Temperature ', (temp) => 
{
        console.log("1] Celcius to Far");
        console.log("2] Far to Celcius");
    reads.question('Select the Type of convertion ', (option) => 
    {
        let temp1 = parseInt(temp);
        
        switch(parseInt(option))
        {
            case 1:
                {
                if ( temp1 > 0  &&  temp1 < 100 )
                {
                    console.log(temp1);
                      console.log(defF(temp1));
                }
                else
                {
                   console.log( "Please Enter the Value between 0 C and 100 C");
                }
                break;
            }
            case 2:
                {
                if ( temp1 > 32  &&  temp1 < 212 )
                {
                    console.log(defC(temp1));
                }
                else
                {
                    console.log( "Please Enter the Value between 32 F and 100 212 F");
                }
                break;
            }
        }
        reads.close();
        
    });
});