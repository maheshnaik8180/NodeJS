const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reads.question(' Enter number for Check Prime Factors- ', (number) => 
{
    console.log("Prime Factors Of "+number+" Number is :-");
    let flag=0
    let i,j;
        for (i=2 ; i*i <=number ;)
        {
            flag=0
            for(j=2;j<i;j++)
            {
                if( number%j==0)
                {
                    flag = 1;
                    break;
                }
            }

            if ( flag == 0 )
            {
                if (number % i == 0)
                {
                    number = number / i;
                    console.log(i);
                }
                else
                {
                    i = ( i + 1 )
                        continue ;

                }
            }
        }
        console.log(number);



        reads.close();
    
}); 