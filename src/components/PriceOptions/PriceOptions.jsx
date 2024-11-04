
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
    const priceOptio = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room facilities",
            "Group fitness classes",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "All Basic Membership features",
            "Access to pool and sauna",
            "Personal training session (1/month)",
            "Discounts on merchandise"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 69.99,
          "features": [
            "All Standard Membership features",
            "Unlimited personal training sessions",
            "Access to exclusive workshops",
            "Nutrition consultation"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 99.99,
          "features": [
            "All Premium Membership features for up to 4 family members",
            "Kids' classes",
            "Family events and workshops"
          ]
        },
        {
          "id": 5,
          "name": "Student Membership",
          "price": 19.99,
          "features": [
            "Access to gym equipment",
            "Locker room facilities",
            "Group fitness classes",
            "Flexible hours"
          ]
        }
      ]
      
    return (
        <div className="m-12">
          <h1 className="text-5xl"></h1>
          <div className="grid grid-cols-3 gap-6" >
          {
            priceOptio.map(Option => <PriceOption Option={Option} key={Option.id}></PriceOption>)
          }
          </div>
        </div>
    );
};

export default PriceOptions;