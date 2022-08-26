// Bài tập 1: Xây dựng ứng dụng đổi màu ngôi nhà
const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];
let arrButton = (colors) =>{
    let output = "";
    for(let value in colors){
        let color = colors[value];
        output+= `<button class="${color} color-button" onclick="changeColor('${color}')"></button>`
    }
    document.querySelector("#colorContainer").innerHTML = output;

}
arrButton(colorList);

window.changeColor = (color) =>{
    document.querySelector("#house").className = color;
    document.querySelector("#house").classList.add("house");  
    
}