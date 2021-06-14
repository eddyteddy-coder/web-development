function is_array(array){
  console.log(Array.isArray(array));
}
console.log(is_array('w3schools'));
console.log(is_array([1,2,4,0]));

function clone(array){
console.log(array.slice(0));
    }

    console.log(clone([1,2,4,0]));
console.log(clone([1,2,[4,0]]));



function first(array,n){
  if(n==0)
  console.log(array[0]);
  if(array== null)
  console.log("[]");
  if(n<0)
  console.log('[]');
console.log(array.slice(0,n));
}


function tojoin(array)
{
console.log(array.join(","));
}
console.log(tojoin(["red","black","green","blue"]));

function freq(array){
  var k
  var max=0
  for(var i=0;i<array.length;i++)
  {
    var c=0
     for(var j=0;j<array.length;j++)
     {

       if(array[i]==array[j])
       c=c+1;
     }
     if(c>max)
     {
       max=c;
       k=array[i];
     }
  }
  console.log(k+" ( "+max+" times )");
}
freq([3,'a','a','a',2,3,'a',3,'a',2,4,9,3]);
