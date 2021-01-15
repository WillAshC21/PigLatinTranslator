let tran = "";
let ar =  [];
function translate() {
    let word = document.getElementById('word').value;
    let name = word;
    let translator  = "";
    const latin = "ay";
    let characters = [];
    let space = name.split(' ');
    for (let i = 0; i < space.length; i++) {
    let sub = space[i].substring(0, 1);
    let sub2 = space[i].substring(1, space[i].length);
    let total = sub2 + sub + latin;
    characters.push(total);
    }
    tran = characters.join(' ');
    let totalOne = tran.charAt(0).toUpperCase();
    let totalStr = tran.charAt(0).toUpperCase() + tran.substring(1, tran.length).toLowerCase();
    ar.push(totalStr);
    document.getElementById('translated-list').innerText = ar.join('\n ');

}

document.getElementById('submit').addEventListener("click", translate);
