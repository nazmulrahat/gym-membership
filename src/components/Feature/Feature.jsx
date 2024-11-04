
import { FaCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    console.log(feature);
    return (
        <div >
            <p className="flex  justify-start items-center gap-1 m-1"><FaCircle className="text-green-500  shadow-xl"/>{feature}</p>
            
        </div>
    );
};

export default Feature;