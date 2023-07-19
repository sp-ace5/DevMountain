function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0,3).join('')
    const threeNumbers = numbers.slice(3,6).join('')
    const fourNumbers = numbers.slice(6).join('')

    return `(${areaCode}) ${threeNumbers}-${fourNumbers}`;
}


number = [4,1,2,3,5,4,6,7,5,3]
console.log(createPhoneNumber(number));