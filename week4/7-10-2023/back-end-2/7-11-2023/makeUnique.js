function makeUnique(str) {
    let newStr = str.split("")
    console.log(newStr);
    const unique = [...new Set(newStr.map(item => item))];
    console.log(unique);
    console.log(unique.join(""))
}

makeUnique('helloworld');
