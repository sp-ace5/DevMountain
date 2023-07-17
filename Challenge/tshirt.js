function tshirtSorter(str) {
    let myarr=str.split('')
    myarr = myarr.sort()
    return myarr.reverse().join()
}

console.log(tshirtSorter('smllms'));