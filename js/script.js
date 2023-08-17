//fungsi hitung luas segitiga
function hitungLuas(){
    alas=document.getElementById("alas").value;
    tinggi=document.getElementById("tinggi").value;
    luas=(alas*tinggi)*0.5;

    return document.getElementById("luas").value=luas;
}

//fungsi hitung keliling segitiga
function hitungKeliling(){
    sisiA=document.getElementById("sisiA").value;
    sisiB=document.getElementById("sisiB").value;
    sisiC=document.getElementById("sisiC").value;
    keliling= (parseInt(sisiA)+parseInt(sisiB)+parseInt(sisiC));

    return document.getElementById("keliling").value=keliling;
}