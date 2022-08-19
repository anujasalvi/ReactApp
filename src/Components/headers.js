import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

function Tool({name, company}) {
    const [state, setState] = useState(1);
    const [Counter, setCounter] = useState(0);
    const [advice, setAdvice] = useState([]);
    const [drink, setDrink] = useState([]);
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const s = setInterval(() => {
          setCounter(c => c + 1);
        }, 1000);
    
        return () => clearInterval(s);
      }, [Counter]);

      const getAdvice = async () => {
        const advice = await axios.get(
          "https://api.adviceslip.com/advice"
        );
        setAdvice(advice.data.slip);
      };

      const getDrink = async () => {
        const drink = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        setDrink(drink.data.drinks);
      };

      const getMeal = async () => {
        const meal = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        setMeal(meal.data.meals);
      };
      
      return (
          <section>
        {/* <div>
          <h1>Hey I am {name}!</h1>
          <p>And I work at {company}.</p>
        </div> */}

        {/* <div>Time Passed: {Counter} seconds</div>
          
        <div>
          <h3>{state} </h3>
          <button onClick={() => setState(state+1)} className="button-55">More</button>
          <button onClick={() => setState(state-1)} className="button-55">Less</button>
        </div> */}

        <div>
        <h1>Advice for the day: {advice.advice}</h1>
        <button onClick={getAdvice} className="button-55">Advice</button>
        </div>

        <div>
        <h1> Cocktail for the day : {Object.entries(drink).map(arr => {
        return (
          <div>
            {arr[1].strDrink}
          </div>
        );
      })}</h1>
        <button onClick={getDrink} className="button-55">Drink</button>
        </div>

        <div>
        <h1> Meal for the day : {Object.entries(meal).map(arr => {
        return (
          <div>
            {arr[1].strMeal}
          </div>
        );
      })}</h1>
        <button onClick={getMeal} className="button-55">Meal</button>
        </div>
       
        </section>
      );
  }

Tool.defaultProps = {
name: "Yokai",
company: "KBRA"
}
  
export default Tool