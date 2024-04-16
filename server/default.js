import { products } from "./constants/data.js"
import proschema from "./models/product-schema.js";

const DefaultData = () =>{
    try {
        proschema.insertMany(products);
        console.log('data inserted successfully')
    } catch (error) {
        console.log('error while insertin default data',error.message);
    }
}
export default DefaultData;