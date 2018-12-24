function tinhDieukien(number) {
    if(number %2 == 0){
        document.getElementById("show").innerHTML = number + ' la so chan';
    }else{
        document.getElementById("show").innerHTML = number + ' la so le';
    }
}
function suLy() {
    var a =document.getElementById("input").value;
    tinhDieukien(a);
}