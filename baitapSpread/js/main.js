// Bài tập 3: Xây dựng hiệu ứng Jump text khi hover

let hoverText = () => {
  let inner = document.querySelector(".heading").innerHTML;
  let chars = [...inner];
  let html = ""
  for(let text of chars){
    html += `<span>${text}</span>`;
  }
  document.querySelector(".heading").innerHTML = html;
};
hoverText()
