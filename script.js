
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const namaTamu = urlParams.get('to');
    
    
    if (namaTamu) {
        document.getElementById('guest-name').innerText = namaTamu;
    }
});


function bukaUndangan() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('undangan-content').style.display = 'block';
    
  
    window.scrollTo(0, 0);
}


const tanggalPernikahan = new Date("Dec 12, 2026 10:00:00").getTime();


const countdownInterval = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalPernikahan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    
    document.getElementById("hari").innerHTML = hari < 10 ? '0'+hari : hari;
    document.getElementById("jam").innerHTML = jam < 10 ? '0'+jam : jam;
    document.getElementById("menit").innerHTML = menit < 10 ? '0'+menit : menit;
    document.getElementById("detik").innerHTML = detik < 10 ? '0'+detik : detik;

  
    if (selisih < 0) {
        clearInterval(countdownInterval);
        document.getElementById("hari").innerHTML = "00";
        document.getElementById("jam").innerHTML = "00";
        document.getElementById("menit").innerHTML = "00";
        document.getElementById("detik").innerHTML = "00";
    }
}, 1000);