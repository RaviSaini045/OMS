# Order Management System

## Overview

The **Order Management System** is a backend application designed to manage orders dynamically with discount logic. It provides RESTful APIs to place orders, retrieve order details, and calculate total revenue while applying dynamic discounts based on the order amount and quantity.

## Features

- **Place an Order**: Accepts product details, including name, quantity, and price per unit.
- **Get Order Summary**: Retrieves details of a specific order using its unique ID.
- **Calculate Total Revenue**: Returns the total revenue from all stored orders.
- **Dynamic Discounts**:
  - 10% discount if the total order amount exceeds ₹10,000.
  - Additional ₹500 discount if the order includes more than 5 items.

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Language**: JavaScript
- **Data Storage**: In-memory database (array)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/order-management-system.git](https://github.com/RaviSaini045/OMS.git
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   node index.js
4. POSTMAN Workspace:
   ```bash
   https://lunar-station-382217.postman.co/workspace/OMStesting~ab416da6-f7d8-4da6-8829-bafc35f16bc3/collection/24615237-bb26fcae-39ac-44aa-8024-e53f14e94540?action=share&creator=24615237
