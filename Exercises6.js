var pertama = 2;
var kedua = 20;
console.log('LOOPING PERTAMA'); 
while(pertama <= 20) { 
  console.log(pertama + ' - I love coding'); 
 pertama+=2;
}
console.log('LOOPING KEDUA'); 
while(kedua >= 2) { 
    console.log(kedua + ' - I will become fullstack developer'); 
   kedua-=2;
  }

  console.log('LOOPING PERTAMA'); 
for(var pertama = 1; pertama <= 20; pertama++) {
    console.log(pertama + ' - I love coding'); 
  }
  console.log('LOOPING KEDUA');
  for(var kedua = 20; kedua >= 1; kedua--) {
    console.log(kedua + ' - I will become fullstack developer'); 
  } 

  for(var pertama = 1; pertama <= 100; pertama++) {
    if(pertama%2==0){
    console.log('GENAP');}
    else{
        console.log('GANJIL');}   
    }

    for(var kedua = 1; kedua <= 100; kedua+=2) {
        if(kedua%3==0){
        console.log( kedua + ' KELIPATAN 3');}
        else{
            console.log('');}   
        }
    for(var ketiga = 1; ketiga <= 100; ketiga+=5) {
        if(ketiga%6==0){
        console.log(ketiga + ' KELIPATAN 6');}
        else{
            console.log('');}   
        }
     for(var keempat = 1; keempat <= 100; keempat+=9) {
        if(keempat%10==0){
        console.log(keempat+ ' KELIPATAN 10');}
        else{
            console.log('');}   
        }    
