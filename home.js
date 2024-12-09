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

// Fungsi untuk membaca status pompa dari Firebase  
async function readPumpStatus() {  
    const statusRef1 = db.ref('Lateral1/status');  
    const statusRef2 = db.ref('Lateral2/status');  

    // Membaca status untuk Lateral1  
    statusRef1.once('value', (snapshot) => {  
        const status = snapshot.val();  
        console.log("Status Lateral1:", status); // Log status  
        if (status === "L1A") {  
            document.getElementById("circle2").style.backgroundColor = "#4CA771";  
            document.getElementById("TextIndikator").innerHTML = "Lampu Nyala";  
        } else {  
            document.getElementById("circle2").style.backgroundColor = "#F52828";  
            document.getElementById("TextIndikator").innerHTML = "Lampu Mati";  
        }  
    });  

    // Membaca status untuk Lateral2  
    statusRef2.once('value', (snapshot) => {  
        const status = snapshot.val();  
        console.log("Status Lateral2:", status); // Log status  
        if (status === "L2A") {  
            document.getElementById("circle22").style.backgroundColor = "#4CA771";  
            document.getElementById("TextIndikator2").innerHTML = "Kipas Nyala";  
        } else {  
            document.getElementById("circle22").style.backgroundColor = "#F52828";  
            document.getElementById("TextIndikator2").innerHTML = "Kipas Mati";  
        }  
    });  
}  

// Panggil fungsi untuk membaca status saat halaman dimuat  
window.onload = readPumpStatus;  

// BUTTON CONTROLS  
// ON  
document.getElementById("ON").addEventListener("click", async () => {  
    console.log("Menghidupkan pompa");  
    document.getElementById("circle2").style.backgroundColor = "#4CA771";  
    document.getElementById("TextIndikator").innerHTML = "Lampu Nyala";  

    // Kirim perintah ke Firebase untuk menghidupkan pompa  
    await updatePumpStatus("L1A"); // Ganti sesuai kebutuhan  
});  

// OFF  
document.getElementById("OFF").addEventListener("click", async () => {  
    console.log("Mematikan pompa");  
    document.getElementById("circle2").style.backgroundColor = "#F52828";  
    document.getElementById("TextIndikator").innerHTML = "Lampu Mati";  

    // Kirim perintah ke Firebase untuk mematikan pompa  
    await updatePumpStatus("L1P"); // Ganti sesuai kebutuhan  
});  

// ON  
document.getElementById("ONn").addEventListener("click", async () => {  
    console.log("Menghidupkan kipas");  
    document.getElementById("circle22").style.backgroundColor = "#4CA771";  
    document.getElementById("TextIndikator2").innerHTML = "Kipas Nyala";  

    // Kirim perintah ke Firebase untuk menghidupkan kipas  
    await updatePumpStatus2("L2A"); // Ganti sesuai kebutuhan  
});  

// OFF  
document.getElementById("OFFf").addEventListener("click", async () => {  
    console.log("Mematikan kipas");  
    document.getElementById("circle22").style.backgroundColor = "#F52828";  
    document.getElementById("TextIndikator2").innerHTML = "Kipas Mati";  

    // Kirim perintah ke Firebase untuk mematikan kipas  
    await updatePumpStatus2("L2P"); // Ganti sesuai kebutuhan  
});  

// Fungsi untuk memperbarui status pompa di Firebase  
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
        console.log(`Status pompa diperbarui menjadi: ${status}`);  
    } else {  
        console.error("Gagal memperbarui status pompa:", response.statusText);  
    }  
}  

// Fungsi untuk memperbarui status pompa di Firebase  
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
        console.log(`Status pompa diperbarui menjadi: ${status}`);  
    } else {  
        console.error("Gagal memperbarui status pompa:", response.statusText);  
    }  
}