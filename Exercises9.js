function shoutOut() {
   return "Halo Function!";
}

console.log(shoutOut())

function calculateMultiply(angka) {
    return num1 * num2
  }

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

function  processSentence(sentence) {
    return "nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + " dan saya punya hobby yaitu "+hobby+"!"  }


var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"