//select html elements
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

//function to create random colors - use rgb color scheme
const makeRandColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  if ((r <= 105 && b <= 105)) {
    h1.style.color = 'rgb(255,255,255)'
  } else {
    h1.style.color = 'rgb(0,0,0)'
  }
  return `rgb(${r}, ${g}, ${b})`
}

//add event listener to button 
button.addEventListener('click', () => {
  const newColor = makeRandColors();
  h1.innerText = newColor;
  document.body.style.backgroundColor = newColor

})

//if background color is dark change h1 text to white
// const lightTextColor = () => {
//   console.log(makeRandColors.r)
//   // if(makeRandColors() )
// }

// lightTextColor()