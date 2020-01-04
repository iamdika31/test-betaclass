function segitiga(n){
    if(n > 2){
        for (var i = 0; i < n; i++) {
            var str = '';
            for (var j = 1; j < n-i; j++) {
                str = str + ' ';
            }
            if(i == n-1){
                for (var k = 1; k <= (2*i+1); k++) {
                    str+="*"
                }
            }
            else{
                for (var k = 1; k <= (2*i+1); k++) {
                    if(k > 1 && k < (2*i+1)){
                        str+= ' '
                    }
                    else{
                        str = str + '*';
                    }
            
            }
            }
            console.log(str);
        }
    }
    else{
        console.log('minimal nilai adalah 3')
    }
}
segitiga(3)