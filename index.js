document.body.style.backgroundColor = "silver";
const title=document.getElementById('title');
title.style.color='green'
title.style.fontSize='30px'

const fruList=document.getElementById('fruList');
const newFruit=document.createElement('li');
fruList.appendChild(newFruit);
newFruit.textContent='Orange';

const vegList=document.getElementById('vegList');
const newVegetable=document.createElement('li');
vegList.appendChild(newVegetable);
newVegetable.textContent='Cabbage';

// document.h3.style.backgroundColor = "yellow";
const titles=document.querySelectorAll("h3")
titles.forEach(h3 => {
    h3.style.textTransform="uppercase"
    h3.style.color="blue"
});





const fruits={
    mangoes:"https://www.pittmandavis.com/images/xl/PD24-FloridaMangoes.webp?v=1",
    bananas:"https://iwantveggies.com/cdn/shop/files/banana-1kg-198277_46de6c96-deb9-4ccd-8ff3-03c43e932f07.jpg?v=1686150953",
    watermelon:"https://i5.walmartimages.com/asr/c47d20aa-13d0-4994-964d-8f56d01fc9d5.a535127f6a2882a7ac37b8be7dffad36.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    oranges:"https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg"

}

const vegetables={
    Onions:"https://blog.plantwise.org/wp-content/uploads/sites/7/2023/02/wide-paul-magdas-SSIwIRCu7bM-unsplash-scaled.jpg",
    Tomatoes:"https://www.tastingtable.com/img/gallery/the-simple-tape-hack-that-keeps-tomatoes-fresh-and-juicy/intro-1691749924.jpg",
    Kales:"https://i.pinimg.com/736x/f8/f1/e7/f8f1e78c756240f618aa384f802559ac.jpg",
    Cabbage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI5B1tXkSMLE1EWKAorLEDfyZAdV02nF5bA&s"
}