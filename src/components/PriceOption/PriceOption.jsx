
import Feature from "../Feature/Feature";
const PriceOption= (option) => {
    console.log(option);
    const {Option} = option
    const {price,name,features} =Option
    return (
        <div className="bg-blue-400  flex flex-col  text-white p-4 rounded-xl" >
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-xl text-center">{name}</h4>
<div className="flex flex-grow flex-col">
{
    features.map(feature => <Feature feature={feature}></Feature>)
}
</div>
<div className="flex justify-center">
<button className="bg-green-500 hover:bg-amber-300 hover:text-green-500 text-black w-32 h-10 rounded-md  font-bold text-xl ">Buy Now</button>
</div>
        </div>
    );
}

export default PriceOption;
