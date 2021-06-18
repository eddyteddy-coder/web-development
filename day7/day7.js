var student={
  name:"david rayy",
  sclass:"VI",
  rollno: 12
};
console.log(student.name);
console.log(student);

//ques2
delete student.rollno;
console.log(student);
//ques3
student.rollno=12;
console.log(student);
console.log(Object.keys(student));

//ques4

var library=[
  {
    author:'bill gates',
    title:'the road ahead',
    readingStatus:true
  },
  {
    author:'steve jobs',
    title:'walter issacson',
    readingStatus:true
  },
  {
    author:'suzanne collins',
    title:'mockingjay:the final book of hunger games',
    readingStatus:false

  }
];
for(var i=0;i<library.length;i++)
{
  console.log(library[i].title);
  console.log(library[i].author);
  console.log(library[i].readingStatus);
}
//ques5
var cylinder={
  r:20.24,
  h:35.68

};
var vol=3.14* cylinder.r * cylinder.r * cylinder.h
console.log(vol.toFixed(4));

//ques6
var library=[
  {
    title:'the road ahead',
    author:'bill gates',
    libraryId:1254
  },
  {
    title:'walter isaacson',
    author:'steve jobs',
    libraryId:4264,
  },
  {
    title:'mockingjay:the final book of the hunger games',
    author:'suzanne collins',
    libraryId:3245
  }
];
console.log(Object.entries(library).sort((a,b)=>a[0]-b[0]));
