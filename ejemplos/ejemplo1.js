// Event Loop
function updateUIRealTimeData() {
    setInterval(() => {
        const newData = fetchDataFromServer();

        renderDataToUI(newData);
    }, 5000);
}

updateUIRealTimeData();