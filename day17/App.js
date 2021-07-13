import './App.css';
import Card from "./components/card";
function App() {
  const detail=[
    {name:"Burger",calorie:70},
  {name:"Coke",calorie:69},
  {name:"Brownie",calorie:120},
  {name:"Pizza",calorie:266},
  {name:"Milk",calorie:42}
];
  return (
    <div className="App">
      <div className="container">
         {
           detail.map((element,key)=>(
             <Card key={key} name={element.name} calorie={element.calorie}/>
           ))
         }
      </div>
    </div>
  );
}

export default App;