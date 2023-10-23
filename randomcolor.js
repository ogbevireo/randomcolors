//select html elements
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

//function to create random colors - use rgb color scheme
const makeRandColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`
}

//add event listener to button 
button.addEventListener('click', () => {
  const newColor = makeRandColors();
  h1.innerText = newColor;
  document.body.style.backgroundColor = newColor 

})