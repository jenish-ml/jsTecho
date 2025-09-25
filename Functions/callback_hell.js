function getUser(id, callback) {
    setTimeout(() => {
        console.log("Got User from DB");
        callback({ id: id, name: "Jenish" });
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(() => {
        console.log(`Got Orders for ${user.name}`);
        callback(["order1", "order2"]);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        console.log(`Got details for ${orderId}`);
        callback({ id: orderId, item: "Laptop" });
    }, 1000);
}

function processOrder(order, callback) {
    setTimeout(() => {
        console.log(`Processed ${order.item}`);
        callback("Order Completed");
    }, 1000);
}

// CALLBACK HELL 
getUser(101, (user) => {
    getOrders(user, (orders) => {
        getOrderDetails(orders[0], (order) => {
            processOrder(order, (status) => {
                console.log("Order Status:", status);
            });
        });
    });
});
