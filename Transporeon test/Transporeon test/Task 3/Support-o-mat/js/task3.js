let pTags = document.getElementsByTagName("p");
let hTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

for(let p of pTags){
    p.innerText = p.innerText.split('Transporeon').join('TRANSPOREON');
}

for(let h of hTags){
    h.innerText = h.innerText.split('Transporeon').join('TRANSPOREON');
}