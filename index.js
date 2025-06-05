document.body.style.backgroundColor = "silver";
const title=document.getElementById('title');
title.style.color='green'
title.style.fontSize='70px'
title.style.textAlign='center'

const fruList=document.getElementById('fruList');
const newFruit=document.createElement('li');
fruList.appendChild(newFruit);
newFruit.textContent='Orange';

const vegList=document.getElementById('vegList');
const newVegetable=document.createElement('li');
vegList.appendChild(newVegetable);
newVegetable.textContent='Cabbage';

const titles=document.querySelectorAll("h3")
titles.forEach(h3 => {
    h3.style.textTransform="uppercase"
    h3.style.color="green"
    h3.style.fontSize='30px'
});

const text=document.getElementById('productText');
const img=document.createElement('img');
img.src='https://www.weliahealth.org/wp-content/uploads/2021/03/fruitsveggies-1620x600-1.jpg';

title.appendChild(img);


productText.style.fontSize='30px'


fruList.style.display='flex'
fruList.style.listStyleType='none'
fruList.style.gap="100px"
fruList.style.padding='40px'
fruList.style.justifyContent='center'

const fruitItems=fruList.querySelectorAll('li')
fruitItems.forEach(fruit=>{
    fruit.style.backgroundColor='white'
    fruit.style.border='2px green solid'
    fruit.style.padding='20px'
    fruit.style.borderRadius='50px'
    fruit.style.width='90px'
    fruit.style.cursor='pointer'

})



vegList.style.display='flex'
vegList.style.listStyleType='none'
vegList.style.gap="100px"
vegList.style.padding='40px'
vegList.style.justifyContent='center'


const vegetableItems=vegList.querySelectorAll('li')
vegetableItems.forEach(vegetable=>{
    vegetable.style.backgroundColor='white'
    vegetable.style.border='2px green solid'
    vegetable.style.padding='20px'
    vegetable.style.borderRadius='50px'
    vegetable.style.width='90px'
    vegetable.style.cursor='pointer'

});
const hr=document.createElement('hr');
vegList.parentNode.insertBefore(hr,vegList.nextSibling);

hr.style.width='100%';
hr.style.border='2px solid black';
hr.style.margin='10px 0';







