// URL tujuan pengalihan jika div dengan id "premium" dihapus
const redirectUrl = "https://www.bsrifa.com";

// Fungsi cek keberadaan elemen #premium
function checkPremiumDiv() {
    const premiumDiv = document.getElementById("premium");
    if (!premiumDiv) {
        // Jika elemen tidak ditemukan, alihkan ke URL tujuan
        window.location.href = redirectUrl;
    }
}

// Cek setiap 1 detik (1000 milidetik) apakah div masih ada
setInterval(checkPremiumDiv, 1000);
