let head=0
let tail=0

while (( head < 11 ) &&( tail < 11 ))
{
        let result= ( Math.floor(Math.random() * 10) % 2 ) ;

        console.log(result);
        if ( result == 0 )
        {
            head = ( head + 1 );
        }
        else
        {
            tail= ( tail + 1 );
        }        
} 

       console.log( "Tail occured "+tail+" Times");
        console.log("Head occured "+head+" Times");