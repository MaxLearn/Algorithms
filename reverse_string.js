var reverse = function(x) { 
    let sign = Math.sign(x) ;
    x *= sign ;
  
 var str = x.toString().split("") ;
        for ( let i = 0 ; i < str.length/2 ; i++) {
        let temp = str[i] ;
        str[i] = str[str.length-1-i] ;
        str[str.length-1-i] = temp ;
    }
  if ( str.join('') * sign < -2147483648 || str.join('') * sign > 2147483647) {
    return 0 ;
  }
    else {
        return str.join('') * sign ;
    }};