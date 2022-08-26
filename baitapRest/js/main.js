// Bài tập 2: Tính điểm trung bình

let average = (...num) =>{
   let sum = 0;
   let average = 0;
   for(let value of num){
    sum += value;
    console.log(sum)
   }
   average = sum / num.length;
   return average; 
}

function getInfor1 (){
   let diemToan = +document.getElementById("inpToan").value;
   let diemLy = +document.getElementById("inpLy").value;
   let diemHoa = +document.getElementById("inpHoa").value;
   document.querySelector("#tbKhoi1").innerHTML = average(diemToan,diemLy,diemHoa)
}

function getInfor2 (){
   let diemVan = +document.getElementById("inpVan").value;
   let diemSu = +document.getElementById("inpSu").value;
   let diemDia = +document.getElementById("inpDia").value;
   let diemAnh = +document.getElementById("inpEnglish").value;
   document.querySelector("#tbKhoi2").innerHTML = average(diemVan,diemSu,diemDia,diemAnh)
}


