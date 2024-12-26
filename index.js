import OrderDetail from "./OrderDetails.js";
import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

const router = express.Router();

app.use("/api", router);

const orders = [];

const storeOrderDetails = async (req, res) => {
    try {
        const { productName, quantity, pricePerUnit } = req.body;
        if(Number(quantity) < 0 || Number(pricePerUnit) < 0) 
            throw new Error("No Negative values");
        const order = new OrderDetail(productName, Number(quantity), Number(pricePerUnit));
        const discountReceived = calculateDiscount(order);
        order.billingValue = (order.quantity * order.pricePerUnit) - discountReceived;
        order.discountReceived =discountReceived;
        orders.push(order);
        return res.status(200).json({message: "order stored successfully", data: order.id})
    } catch (error) {
         console.error(error.message);
         return res
           .status(501)
           .json({ message: "Something went wrong", data: null });
    }
};

const retrieveOrderDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const order = orders.find(order => order.id === id);
        if(!order)
            throw new Error("Order with provided id not found");
        return res.status(200).json({message: "Order Details fetched Successfully", data: order});
    } catch (error) {
        console.error(error.message);
        return res.status(501).json({message: "Something went wrong", data: null});
    }
};

const calculateRevenue = async (req, res) => {
    try {
        const totalRevenue = orders.reduce((sum, order) => sum + order.billingValue,0);
    } catch (error) {
         console.error(error.message);
         return res
           .status(501)
           .json({ message: "Something went wrong", data: null });
    }
};

const calculateDiscount = (order) => {
    const { quantity, pricePerUnit } = order;
    const totalPrice = quantity * pricePerUnit;
    let discountReceived = 0;
    if(totalPrice > 10000)
        discountReceived = 0.1 * totalPrice;
    if(quantity > 5)
        discountReceived += 500;
    return  discountReceived ;
};

router.route("/store-order").post(storeOrderDetails);
router.route("/get-order-details/:id").get(retrieveOrderDetails);
router.route("/get-revenue").get(calculateRevenue);


app.listen(PORT, () => {
    console.log(`Server listeng on the port ${PORT}`);
    
})