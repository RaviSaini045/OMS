import { v4 as uuidv4 } from "uuid";

class OrderDetail {
	constructor(productName, quantity, pricePerUnit) {
    	this.id = uuidv4();
		this.productName = productName;
		this.quantity = quantity;
		this.pricePerUnit = pricePerUnit;
	}
};
export default OrderDetail;