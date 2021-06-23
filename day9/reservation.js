let container=document.getElementById("container");
var seats=36;
var booked=0;

document.getElementById('top').innerHTML=''+seats;
document.getElementById('top2').innerHTML=''+booked;


for(let i=0;i<36;i++)
{
  let box=document.createElement("div");
  box.className="box";

container.appendChild(box);
}
const boxes=document.querySelectorAll('.box');
boxes.forEach((box) => {
  box.addEventListener('click',()=>{


    if(box.classList.contains('boxclicked')){
      box.classList.remove('boxclicked');
      booked--;
      seats++;
   document.getElementById('top').innerHTML=''+seats;
   document.getElementById('top2').innerHTML=''+booked;

    }
    else{
      box.classList.add('boxclicked');
      booked++;
      seats--;
      document.getElementById('top').innerHTML=''+seats;
      document.getElementById('top2').innerHTML=''+booked;

    }
});
});
