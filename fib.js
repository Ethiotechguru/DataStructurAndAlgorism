function fibonacci(n){
    if(n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(4);
        // 🔼(3)
        // | return (3)
//f(4)>  final Return (2 +1)---> 3
        // 🔼
        // |         
        //return(2+1)          //return(1)<----
        //f(4-3) ----->  f(4-2)--->f(3-2) return(1)
            //return(2)
            // 🔼
            // |
        // | 🔼 return(1+1)
        // 🔽 | 
                    // return(1)<---
        //f(3-1)   -> f(3-2) return 1

        // |  🔼 return(1)
        // 🔽  |
        //>f(2-1) return (1)