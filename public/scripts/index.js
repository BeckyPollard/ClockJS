const secondsHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');
const inputs = document.querySelectorAll('.options input');
const hexCode  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
  
  if(secondsDeg === 90) {
    allHands.forEach(hand => hand.style.transition = 'none')
  } else {
    allHands.forEach(hand => hand.style.transition = '')
  }
}
setInterval(setDate,1000);

function handleColours() {
  document.documentElement.style.setProperty('--colour', this.value);
  let colour = getComputedStyle(document.body).getPropertyValue('--colour');
  if (hexCode.test(colour)) {
    document.getElementsByClassName('error')[0].style.display='none';
  } else {
    document.documentElement.style.setProperty('--colour', '#444');
    document.getElementsByClassName('error')[0].style.display='block';
  }
}
inputs.forEach(input => input.addEventListener('change', handleColours));