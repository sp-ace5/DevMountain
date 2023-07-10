const colorBtn = document.getElementById('color');
colorBtn.addEventListener('mouseover', () => giveAnswer('color'));

const placeBtn = document.getElementById('place');
placeBtn.addEventListener('mouseover', () => giveAnswer('place'));

const ritualBtn = document.getElementById('ritual');
ritualBtn.addEventListener('mouseover', () => giveAnswer('ritual'));


function giveAnswer(btn) {
    let message;
  
    switch (btn) {
      case 'color':
        message = 'My favorite colors are red and blue.';
        break;
      case 'place':
        message = 'My favorite place that I like to visit is Colorado for snowboarding.';
        break;
      case 'ritual':
        message = 'My favorite ritual is to listen to music and lay down.';
        break;
    }
    alert(message);
}