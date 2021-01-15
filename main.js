function translate() {
    let name = "Hello Thursday";
    let tran = "";
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
    return tran;
}
translate();
