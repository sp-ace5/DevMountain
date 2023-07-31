function timeWord(timeString) {
    const hoursWords = [
      "midnight", "one", "two", "three", "four", "five", "six", "seven",
      "eight", "nine", "ten", "eleven", "noon"
    ];
  
    const minuteWords = {
      "00": "o'clock",
      "01": "oh one", "02": "oh two", "03": "oh three", "04": "oh four",
      "05": "oh five", "06": "oh six", "07": "oh seven", "08": "oh eight",
      "09": "oh nine", "10": "ten", "11": "eleven", "12": "twelve",
      "13": "thirteen", "14": "fourteen", "15": "fifteen", "16": "sixteen",
      "17": "seventeen", "18": "eighteen", "19": "nineteen", "20": "twenty",
      "30": "thirty", "40": "forty", "50": "fifty"
    };
  
    const [hours, minutes] = timeString.split(':').map(Number);
    const amPm = hours < 12 ? "am" : "pm";
  
    if (hours === 0) return "midnight";
    if (hours === 12) return "noon";
  
    const hourWord = hoursWords[hours % 12];
    const minuteWord = minuteWords[minutes < 10 ? `0${minutes}` : minutes];
  
    return `${hourWord} ${minuteWord} ${amPm}`;
  }
  
console.log(timeWord("00:00")); // 'midnight'
console.log(timeWord("12:00")); // 'noon'
console.log(timeWord("01:00")); // "one o'clock am"
console.log(timeWord("06:01")); // 'six oh one am'