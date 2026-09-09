// Toggle Hamburger Menu untuk Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navItems = document.querySelectorAll('.nav-item');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Menutup menu mobile ketika tautan diklik
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Data 36 Anggota
const daftarAnggota = [
    { nama: "Baso Asril", kelas: "X AKL 2" },
    { nama: "Nisrina Aulia B.", kelas: "X MPLB 3" },
    { nama: "Marsyanda", kelas: "X AKL 5" },
    { nama: "Arif Indra P.", kelas: "X AKL 5" },
    { nama: "Keyla Agista R.", kelas: "X MPLB 3" },
    { nama: "Nela Yuliana R.", kelas: "X MPLB 3" },
    { nama: "Rifat Sungkar M.", kelas: "X AKL 5" },
    { nama: "Indriyana", kelas: "X AKL 4" },
    { nama: "Nur Zakai Iqtifada", kelas: "X TJKT 1" },
    { nama: "Nur Aeni", kelas: "X AKL 3" },
    { nama: "Aira", kelas: "X AKL 5" },
    { nama: "Maisya Annur Rahma", kelas: "X AKL 4" },
    { nama: "Reavita Asrini Mulya", kelas: "X MPLB 3" },
    { nama: "Irsyad Arkana Achmadi", kelas: "X AKL 3" },
    { nama: "Juant Rahmatullah", kelas: "X AKL 3" },
    { nama: "Laode Dewa Kasim", kelas: "X TJKT 1" },
    { nama: "Fahri Hidayat", kelas: "X AKL 3" },
    { nama: "Suci Rahma Wati", kelas: "X AKL 2" },
    { nama: "Miska Yuliani", kelas: "X AKL 2" },
    { nama: "Muhamad Ifat A.", kelas: "X BDP 3" },
    { nama: "Jehan Rahmadani", kelas: "X TJKT 1" },
    { nama: "Andi Qalesya Alya", kelas: "X MPLB 3" },
    { nama: "Noven Fernando G.", kelas: "X BDP 3" },
    { nama: "Nurfiana Rahman", kelas: "X MPLB 3" },
    { nama: "Devina Evania D.", kelas: "X MPLB 3" },
    { nama: "Anjarwati", kelas: "X AKL 1" },
    { nama: "Ainun Julianti", kelas: "X BDP 2" },
    { nama: "Casma Ranti", kelas: "X BDP 2" },
    { nama: "Hadizah Al Munawar", kelas: "X AKL 1" },
    { nama: "Nurfadillah", kelas: "X MPLB 2" },
    { nama: "Fitrah Fadhilah", kelas: "X BDP 2" },
    { nama: "Aisya", kelas: "X BDP 2" },
    { nama: "Muh. Fitra S.", kelas: "X TJKT 1" },
    { nama: "Muh. Cessar Al D.", kelas: "X TJKT 1" },
    { nama: "Raisya", kelas: "X MPLB 3" },
    { nama: "Siti Rahmah", kelas: "X TJKT 2" }
];

const container = document.getElementById('anggota-container');

// Render data anggota ke elemen DOM
daftarAnggota.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card-anggota';
    card.innerHTML = `
        <i class="fa-solid fa-id-card"></i>
        <div class="info">
            <span class="nama">${index + 1}. ${item.nama}</span>
            <span class="kelas">${item.kelas}</span>
        </div>
    `;
    container.appendChild(card);
});

/* --- SCRIPT PROTEKSI INSPECT ELEMENT --- */
const popup = document.getElementById('popup-inspect');
const btnClosePopup = document.getElementById('btn-close-popup');

function showPopup() {
    popup.classList.add('active');
}

function closePopup() {
    popup.classList.remove('active');
}

btnClosePopup.addEventListener('click', closePopup);

// 1. Blokir Klik Kanan
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showPopup();
});

// 2. Blokir Kombinasi Tombol Keyboard (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, dll)
document.addEventListener('keydown', function (e) {
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl + Shift + I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl + Shift + J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl + U
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl + Shift + C
        (e.ctrlKey && e.keyCode === 83)    // Ctrl + S
    ) {
        e.preventDefault();
        showPopup();
    }
});

// 3. Deteksi Terbukanya DevTools / Inspect Window
let devtoolsOpen = false;
const threshold = 160;
setInterval(function () {
    if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
    ) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            showPopup();
        }
    } else {
        devtoolsOpen = false;
    }
}, 500);
