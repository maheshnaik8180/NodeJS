const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum1 =0;
let sum2 =0;
let sum3 =0;
let sum4 =0;
let max = 0;
let min = 0;
rl.question('Please Enter Number For A: ', (a) => 
{
    rl.question('Please Enter Number For B: ', (b) => 
    {
        rl.question('Please Enter Number For C: ', (c) => 
        {
            a = Number(a);//Parse a to Number
            b = Number(b);//Parse b to Number
            c = Number(c);//Parse c to Number
            console.log("Value of A is :- "+a);
            console.log("Value of B is :- "+b);
            console.log("Value of C is :- "+c);

            
            console.log("               1] a + b * c                     ");
            sum1 = (a + b * c );      
            console.log(" Answer is :- "+sum1);

            
            console.log("              2] a % b + c                      ");          
            sum2 = (a % b + c );      
            console.log(" Answer is :- "+sum2);
            

            console.log("              3] c + a / b                      ");           
            sum3 = ( c + a / b );      
            console.log(" Answer is :- "+sum3);
            

            console.log("              4] a * b + c                      ");
            sum4 = ( a * b + c );      
            console.log(" Answer is :- "+sum4);
            

            if( sum1 > sum2 )
            {
                max = sum1;
                min = sum2;
            }
            else
            {
                max = sum2;
                min = sum1;  
            }
            if( sum3 > max )
            {
                max =sum3;
            }
            else if( sum3 < min)
            {
                min = sum3;
            }
            if ( sum4 > max)
            {
                max = sum4;
            }
            else if( sum4 < min )
            {
                min = sum4;
            }

            console.log(" ***** Maximum Number ***** :- "+max);
            console.log(" ***** Minimum Number ***** :- "+min);
            rl.close();
        });
    });
});