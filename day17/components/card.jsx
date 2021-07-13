import "./card.css";
const card=({name,calorie})=>{
    return(
        <div className="caloriecard">
        <h2>{name}</h2>
        <h3>you have consumed {calorie} calories today.</h3>
        </div>
    );
}
export default card;