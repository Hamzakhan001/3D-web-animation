const card=document.querySelector('.core');
const container=document.querySelector('.container');

const title=document.querySelector('.title');
const sneaker=document.querySelector('.sneaker img');
const purchase=document.querySelector('.purchase button');
const description=document.querySelector('.info h3');
const sizes=document.querySelector('.sizes');

container.addEventListener('mousemove',(e)=>{
    console.log('hey')
    let xAxis=(window.innerWidth/2-e.pageX)/10;
    let yAxis=(window.innerHeight/2-e.pageY)/10;
    card.style.transform=`rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`
});

container.addEventListener('mouseenter',e=>{
    card.style.transition='none';
    sneaker.style.transform="translateZ(150px) rotateZ(45deg)";
    title.style.transform="translateZ(150px)";
    description.style.transform="translateZ(125px)";
    sizes.style.transform="translateZ(100px)";
    purchase.style.transform="translateZ(100px)";

})

container.addEventListener('mouseleave',e=>{
    card.style.transition='all 0.5s ease'
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    title.style.transform="translateZ(0px)"
    sneaker.style.transform="translateZ(0px) rotateZ(0deg)";
    description.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";
    purchase.style.transform="translateZ(0px)";

})

