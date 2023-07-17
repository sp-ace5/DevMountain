function decode(input) {
    const shift = parseInt(input[0], 10);
    let result = '';
  
    for (let i = 1; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
  
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        const isUppercase = charCode >= 65 && charCode <= 90;
        const decodedCharCode = ((charCode - (isUppercase ? 65 : 97) + shift) % 26) + (isUppercase ? 65 : 97);
        result += String.fromCharCode(decodedCharCode);
      } else {
        result += input[i];
      }
    }
  
    return result;
  }
  
  console.log(decode("2Y"));