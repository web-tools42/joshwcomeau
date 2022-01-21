for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        for(let k = 0; k < 10; k++) {
            if(i < k) 
                if( k < j) {
                    console.log(i + j + k)
                }
            }
        }
    }
}