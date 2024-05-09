//Message Queue
function sendNotification(message) {
    console.log("Enviando notificación:", message);
}

const notificationQueue = [];

function processNotifications() {
    while (notificationQueue.length > 0) {
        const message = notificationQueue.shift();
        sendNotification(message);
    }
}

notificationQueue.push("¡Tienes un nuevo mensaje!");

processNotifications();