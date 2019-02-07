var hari = 1;
var bulan = 12;
var tahun = 1996;
var namaBulan= "";

switch(bulan) {
  case 1:
    namaBulan = 'Januari';
    break;
  case 2:
    namaBulan = 'Februari';
    break;  
  case 3:
 namaBulan = 'Maret';
    break;  
    case 4:
 namaBulan = 'April';
    break;  
  case 5:
 namaBulan = 'Mei';
    break;  
  case 6:
 namaBulan = 'Juni';
    break;  
  case 7:
 namaBulan = 'Juli';
    break;  
  case 8:
 namaBulan = 'Agustus';
    break;  
    case 9:
 namaBulan = 'Oktober';
    break;  
    case 10:
 namaBulan = 'September';
    break;  
    case 11:
 namaBulan = 'November';
    break;  
    case 12:
 namaBulan = 'Desember';
    break;  
    default:  console.log('Tidak ada bulan pada angka ' + bulan); 

}
if(namaBulan != ''){
console.log( hari + " " + namaBulan + " " + tahun);}
else {
  console.log('')
}
