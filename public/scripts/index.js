const secondsHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

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