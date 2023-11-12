import _ from "lodash";
import { Product } from "./products.model";

//lodash
console.log(_.shuffle([1, 2, 3, 4]));

//declare
declare var GLOBAL: any;
console.log(GLOBAL);

const newProduct = new Product("Phone", 14.99);
console.log(newProduct);
