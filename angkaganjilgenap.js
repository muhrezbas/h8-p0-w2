for(var pertama = 1; pertama <= 100; pertama++) {
    if(pertama%2===0){
    console.log('GENAP');}
    else{
        console.log('GANJIL');}   
    }

    for(var kedua = 1; kedua <= 100; kedua+=2) {
        if(kedua%3===0){
        console.log('3 KELIPATAN 3');}
        else{
            console.log('');}   
        }
    for(var ketiga = 1; ketiga <= 100; ketiga+=5) {
        if(ketiga%6===0){
        console.log('6 KELIPATAN 6');}
        else{
            console.log('');}   
        }
     for(var keempat = 1; keempat <= 100; keempat+=9) {
        if(keempat%10===0){
        console.log('10 KELIPATAN 10');}
        else{
            console.log('');}   
        }    