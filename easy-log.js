function logs(x , a, b){
    //your code here
     // Calculate logarithm of A with base X
        const logA = Math.log(a) / Math.log(x);
        
        // Calculate logarithm of B with base X
        const logB = Math.log(b) / Math.log(x);
        
        // Return the sum of the two logarithms
        return logA + logB;
    }