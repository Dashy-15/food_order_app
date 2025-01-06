import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";

const DUMMY_MEALS = [
    {
        id: "m1",
        title: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99
    },
    {
        id: "m2",
        title: "Schnitzel",
        description: "A german speciality",
        price: 16.50
    },
    {
        id: "m3",
        title: "Barbeque Burger",
        description: "American, raw, meaty",
        price: 12.99
    },
    {
        id: "m4",
        title: "Green Bowl",
        description: "Healthy and Green",
        price: 8.99
    },
    {
        id: "m5",
        title: "Chicken Biryani",
        description: "Special Indian style biryani",
        price: 18.99
    },
    {
        id: "m6",
        title: "Peppy Paneer Pizza",
        description: "Soft paneer with crispy capsicum and topped with spicy red pepper",
        price: 14.75
    }
];

const AvailableMeals = (props) => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) => {
                        return (
                            <MealItems 
                            key={meal.id}
                            id={meal.id}
                            title={meal.title}
                            price={meal.price}
                            description={meal.description}
                            />
                        )
                    })}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;