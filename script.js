document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MEMUAT DAFTAR ANGGOTA (36 ORANG) --- */
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

    if (container) {
        container.innerHTML = ''; // Reset container
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
    }

    /* --- 2. TOGGLE HAMBURGER MENU (MOBILE) --- */
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const menuIcon = document.getElementById('menu-icon');
    const navItems = document.querySelectorAll('.nav-item');

    if (mobileMenu && navList && menuIcon) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navList.classList.toggle('active');
            
            if (navList.classList.contains('active')) {
                menuIcon.className = 'fa-solid fa-xmark';
            } else {
                menuIcon.className = 'fa-solid fa-bars';
            }
        });

        // Menutup menu mobile ketika tautan diklik
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navList.classList.remove('active');
                menuIcon.className = 'fa-solid fa-bars';
            });
        });
    }

    /* --- 3. SCRIPT PROTEKSI INSPECT ELEMENT --- */
    const popup = document.getElementById('popup-inspect');
    const btnClosePopup = document.getElementById('btn-close-popup');

    function showPopup() {
        if (popup) popup.classList.add('active');
    }

    function closePopup() {
        if (popup) popup.classList.remove('active');
    }

    if (btnClosePopup) {
        btnClosePopup.addEventListener('click', closePopup);
    }

    // Blokir Klik Kanan
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showPopup();
    });

    // Blokir Kombinasi Tombol Keyboard (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
    document.addEventListener('keydown', function (e) {
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) || 
            (e.ctrlKey && e.keyCode === 85) || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 67) || 
            (e.ctrlKey && e.keyCode === 83)
        ) {
            e.preventDefault();
            showPopup();
        }
    });

    // Deteksi Terbukanya DevTools Window
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

});
