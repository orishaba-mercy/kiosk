document.body.style.backgroundColor ="silver"

document.getElementById('title').style.color='green'

let h3 = document.getElementsByTagName('h3');
for (let p = 0; p < h3.length; p++) {
    h3[p].style.textTransform = 'uppercase';
}


// Add one more fruit to the fruits list
let fruList = document.getElementById('fruList');
let newfruit = document.createElement('li');
newfruit.textContent ='oranges';
fruList.appendChild(newfruit);
// Add one more vegetable to the vegetables
// list
let vegList = document.getElementById('vegList');
let newvegitables = document.createElement('li');
newvegitables.textContent ='sukuma';
fruvegitables.appendChild(newvegitables);