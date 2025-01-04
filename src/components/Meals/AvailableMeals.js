import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";

const DUMMY_MEALS = [
    {
        title: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99
    },
    {
        title: "Schnitzel",
        description: "A german speciality",
        price: 16.50
    },
    {
        title: "Barbeque Burger",
        description: "American, raw, meaty",
        price: 12.99
    },
    {
        title: "Green Bowl",
        description: "Healthy and Green",
        price: 8.99
    },
    {
        title: "Chicken Biryani",
        description: "Special Indian style biryani",
        price: 18.99
    },
    {
        title: "Peppy Paneer Pizza",
        description: "Soft paneer with crispy capsicum and topped with spicy red pepper",
        price: 14.75
    }
];

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) => {
                        return (
                            <MealItems 
                            key={meal.id}
                            meal={meal}
                            />
                        )
                    })}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;