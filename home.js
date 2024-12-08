// FIREBASE  
const firebaseConfig = {
    apiKey: "AIzaSyCIntyjuTJuVMg1NkXvuXx9vdsI-hhRQiM",
    authDomain: "agoy-81630.firebaseapp.com",
    databaseURL: "https://agoy-81630-default-rtdb.firebaseio.com",
    projectId: "agoy-81630",
    storageBucket: "agoy-81630.firebasestorage.app",
    messagingSenderId: "352902401841",
    appId: "1:352902401841:web:2fb6c0079ab22b0e35aa10",
    measurementId: "G-EBBQW0TE92"
  };
  
  // Inisialisasi Firebase  
  firebase.initializeApp(firebaseConfig);  
  const db = firebase.database();



// BUTTON CONTROLS  
// ON  
document.getElementById("ON").addEventListener("click", async () => {  
    console.log("Turning ON the pump");  
    document.getElementById("circle2").style.backgroundColor = "#4CA771";  
    document.getElementById("TextIndikator").innerHTML = "Lampu Nyala";  

    // Send command to Firebase to turn ON the pump  
    await updatePumpStatus("L1A"); // Ganti sesuai kebutuhan  
});  

// OFF  
document.getElementById("OFF").addEventListener("click", async () => {  
    console.log("Turning OFF the pump");  
    document.getElementById("circle2").style.backgroundColor = "#F52828";  
    document.getElementById("TextIndikator").innerHTML = "Lampu Mati";  

    // Send command to Firebase to turn OFF the pump  
    await updatePumpStatus("L1P"); // Ganti sesuai kebutuhan  
});  

// ON  
document.getElementById("ONn").addEventListener("click", async () => {  
    console.log("Turning ON the pump");  
    document.getElementById("circle22").style.backgroundColor = "#4CA771";  
    document.getElementById("TextIndikator2").innerHTML = "Kipas Nyala";  

    // Send command to Firebase to turn ON the pump  
    await updatePumpStatus2("L2A"); // Ganti sesuai kebutuhan  
});  

// OFF  
document.getElementById("OFFf").addEventListener("click", async () => {  
    console.log("Turning OFF the pump");  
    document.getElementById("circle22").style.backgroundColor = "#F52828";  
    document.getElementById("TextIndikator2").innerHTML = "Kipas Mati";  

    // Send command to Firebase to turn OFF the pump  
    await updatePumpStatus2("L2P"); // Ganti sesuai kebutuhan  
});  

// Function to update pump status in Firebase  
async function updatePumpStatus(status) {  
    const firebaseUrl = `https://agoy-81630-default-rtdb.firebaseio.com/Lateral1/status.json?auth=p7bm2fXjBWM3OL3tFiYnru7RsXRsdGbhrPXlURRt`;  
    const response = await fetch(firebaseUrl, {  
        method: 'PUT',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify(status)  
    });  

    if (response.ok) {  
        console.log(`Pump status updated to: ${status}`);  
    } else {  
        console.error("Failed to update pump status:", response.statusText);  
    }
     
}

// Function to update pump status in Firebase  
async function updatePumpStatus2(status) {  
    const firebaseUrl = `https://agoy-81630-default-rtdb.firebaseio.com/Lateral2/status.json?auth=p7bm2fXjBWM3OL3tFiYnru7RsXRsdGbhrPXlURRt`;  
    const response = await fetch(firebaseUrl, {  
        method: 'PUT',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify(status)  
    });  

    if (response.ok) {  
        console.log(`Pump status updated to: ${status}`);  
    } else {  
        console.error("Failed to update pump status:", response.statusText);  
    }
     
}

