


export const Practice = () => {

    var ini=1
    var fin

    function fizzBuzz(n) {
       // Write your code here
       var  flag=false
       fin=n //15 "que fin guarde el valor de n=15 y el if (n<=fin) llegue hasta 15"
       n=ini //1  "pero que inicie evaluando desde 1, porque asi lo pide el ejercicio"
        
        while (!flag) {

            if (n<=fin) {
                if ((n%3==0) && (n%5==0)) {
                    console.log ("FizzBuzz")
                    
                }
                else if ((n%3==0) && (n%5!=0)) {
                    console.log ("Fizz")
                }  
                else if ((n%3!=0) && (n%5==0)) {
                    console.log ("Buzz")
                }   
                else if ((n%3!=0) && (n%5!=0)) {
                    console.log (n)
                }   
                n=n+1
                flag=false 
                       
            }
        else{
               flag=true  
            }
               
            
        }
    
    }
        
    fizzBuzz(15)




    const numbers= [1, 2, 3, 4, 5]
    var sum=0

    function arraySum(numbers) {
        for ( let number of numbers) {
            sum +=number;
        }
        console.log( "El array suma en total: " + sum);
    }

    arraySum (numbers)











  return (
    <>
    </>
  )
}


