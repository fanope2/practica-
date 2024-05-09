//Event Loop
function handleInventoryUpdate(event) {
    console.log("Actualizando inventario:", event);
}

inventorySystem.on("update", handleInventoryUpdate);

setTimeout(() => {
    inventorySystem.emit("update", { productId: 123, quantity: 10 });
}, 2000);