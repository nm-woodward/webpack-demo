import _ from 'lodash';
import './style.css';
import Flower from './flower.jpeg';
import Data from './savant_data.csv';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    // Adding flower image
    const myFlower = new Image();
    myFlower.src = Flower;

    element.appendChild(myFlower);

    console.log(Data[1]);
  
    return element;
  }
  
  document.body.appendChild(component());