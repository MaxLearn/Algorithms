var plusOne = function(digits) {			
    let i = 0;
    let chiffre = 9;
        while ( chiffre == 9 ){							
            chiffre = digits[digits.length-1-i] ;				
            if (chiffre == 9) {					
                digits[digits.length-1-i] = 0 ; 				
                if ( i == digits.length-1 ){
                    digits.unshift(0) ;
                    chiffre = 2;
                }
            i++ ;						
            }
            if (chiffre != 9) {						
                digits[digits.length-1-i] ++ ;					
            }
         }
return digits ;	
};