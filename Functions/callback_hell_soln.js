function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got User from DB");
            resolve({ id: id, name: "Jenish" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Got Orders for ${user.name}`);
            resolve(["order1", "order2"]);
        }, 1000);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Got details for ${orderId}`);
            resolve({ id: orderId, item: "Laptop" });
        }, 1000);
    });
}

function processOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Processed ${order.item}`);
            resolve("Order Completed");
        }, 1000);
    });
}

// PROMISE CHAIN
getUser(101)
    .then((user) => getOrders(user))
    .then((orders) => getOrderDetails(orders[0]))
    .then((order) => processOrder(order))
    .then((status) => console.log("Order Status:", status))
    .catch((err) => console.error("Error:", err));