
/* =========================
   PROJECT MODAL
========================= */

const projectModal = document.getElementById("project-modal");
const projectModalBody = document.getElementById("project-modal-body");
const projectModalClose = document.getElementById("project-modal-close");
const projectModalOverlay = document.querySelector(".project-modal-overlay");

const projectTitles = {
    ppic: "Production Planning & Material Documentation",
    bouquet: "LovelyBuket.id - Custom Bouquet Business",
    shop: "RKfitashop - Online Shop Management",
    system: "Student Savings Information System"
};

// Membuka popup saat View Project diklik
document.querySelectorAll(".project-link[data-project]").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const project = this.dataset.project;

        // =========================
        // PROJECT PPIC
        // =========================

        if (project === "ppic") {

            projectModalBody.innerHTML = `
                <div class="project-detail">

                    <div class="project-detail-intro">
                        <span class="project-category">
                            ADMINISTRATION & PRODUCTION
                        </span>

                        <h2>Production Planning & Material Documentation</h2>

                        <p>
                            Pengalaman bekerja di bagian PPIC (Production Planning
                            and Inventory Control) yang melibatkan dokumentasi
                            administrasi produksi, penyusunan dan distribusi Surat
                            Perintah Kerja (SPK), serta pencatatan penggunaan
                            bahan kain dalam proses produksi.
                        </p>
                    </div>

                    <div class="project-detail-info">

                        <div>
                            <h3>Peran & Tanggung Jawab</h3>

                            <ul>
                                <li>Membantu mendukung alur dan jadwal produksi sesuai proses kerja.</li>

                                <li>Membuat dan mendistribusikan Surat Perintah Kerja (SPK) ke bagian produksi.</li>

                                <li>Memberikan instruksi pemotongan kain serta mencocokkan kombinasi bahan.</li>

                                <li>Memantau ketersediaan bahan baku dan mencatat penggunaan kain serta stok aksesori.</li>

                                <li>Membantu dokumentasi dan pencatatan data produksi menggunakan Microsoft Excel dan pencatatan manual.</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Tools</h3>

                            <div class="project-tools">
                                <span>Microsoft Excel</span>
                                <span>Production Documents</span>
                                <span>Manual Recording</span>
                            </div>
                        </div>

                    </div>

                    <div class="project-gallery">

                        <h3>Project Documentation</h3>

                        <div class="project-gallery-grid">

                            <img src="assets/ppic-spk 1.png" alt="Dokumentasi SPK produksi 1">

                            <img src="assets/ppic-spk 2.jpg" alt="Dokumentasi SPK produksi 2">

                            <img src="assets/ppic-spk 3.jpg" alt="Dokumentasi SPK produksi 3">

                            <img src="assets/ppic-spk 4.jpg" alt="Dokumentasi SPK produksi 4">

                            <img src="assets/ppic-spk 5.png" alt="Dokumentasi pencatatan pemakaian kain">

                        </div>

                    </div>

                </div>
            `;

        }

        // =========================
        // PROJECT LOVELYBUKET
        // =========================

        else if (project === "bouquet") {

            projectModalBody.innerHTML = `
                <div class="project-detail">

                    <div class="project-detail-intro">

                        <span class="project-category">
                            CREATIVE BUSINESS & PRODUCT DESIGN
                        </span>

                        <h2>LovelyBuket.id — Customized Bouquet Business</h2>

                        <p>
                            LovelyBuket.id merupakan bisnis custom bouquet yang saya kelola
                            secara mandiri, mulai dari proses perancangan produk, komunikasi
                            dengan pelanggan, pengelolaan pesanan, hingga proses produksi,
                            pengemasan, dan pengiriman. Pengalaman ini membantu saya
                            mengembangkan kemampuan kreativitas, pengelolaan bisnis,
                            komunikasi, serta ketelitian dalam menjalankan operasional.
                        </p>

                    </div>

                    <div class="project-detail-info">

                        <div>

                            <h3>Peran & Tanggung Jawab</h3>

                            <ul>
                                <li>Merancang dan membuat customized bouquet sesuai permintaan pelanggan.</li>

                                <li>Berkomunikasi dengan pelanggan untuk memahami kebutuhan, konsep, dan detail pesanan.</li>

                                <li>Mengelola pesanan, proses produksi, pengemasan, dan pengiriman produk.</li>

                                <li>Mengelola pencatatan keuangan, perhitungan biaya produksi, dan penentuan harga jual.</li>

                                <li>Mengelola promosi dan pemasaran produk melalui media sosial.</li>
                            </ul>

                        </div>

                        <div>

                            <h3>Skills Applied</h3>

                            <div class="project-tools">

                                <span>Product Design</span>

                                <span>Customer Communication</span>

                                <span>Business Management</span>

                                <span>Financial Recording</span>

                                <span>Creative Thinking</span>

                                <span>Order Management</span>

                            </div>

                        </div>

                    </div>

                    <div class="project-gallery">

                        <h3>Project Gallery</h3>

                        <div class="project-gallery-grid">

                            <img src="assets/lovelybuket 1.jpeg" alt="Customized bouquet LovelyBuket 1">

                            <img src="assets/lovelybuket 2.jpeg" alt="Customized bouquet LovelyBuket 2">

                            <img src="assets/lovelybuket 3.jpeg" alt="Customized bouquet LovelyBuket 3">

                            <img src="assets/lovelybuket 4.jpeg" alt="Customized bouquet LovelyBuket 4">

                            <img src="assets/lovelybuket 5.jpeg" alt="Customized bouquet LovelyBuket 5">

                            <img src="assets/lovelybuket 6.jpeg" alt="Customized bouquet LovelyBuket 6">

                            <img src="assets/lovelybuket 7.jpeg" alt="Customized bouquet LovelyBuket 7">

                        </div>

                    </div>

                </div>
            `;

        }

// =========================
// PROJECT RKFITASHOP
// =========================

else if (project === "shop") {

    projectModalBody.innerHTML = `
        <div class="project-detail">

            <div class="project-detail-intro">

                <span class="project-category">
                    E-COMMERCE & PRODUCT MANAGEMENT
                </span>

                <h2>RKfitashop — Online Shop Management</h2>

                <p>
                    RKfitashop merupakan online shop yang saya kelola dengan fokus
                    pada penjualan produk thrift. Pengelolaan toko mencakup proses
                    penataan produk, pencatatan pesanan, komunikasi dengan pelanggan,
                    pemeriksaan kondisi produk, hingga pengemasan dan pengiriman.
                    Pengalaman ini membantu saya mengembangkan kemampuan dalam
                    pengelolaan operasional toko online, pelayanan pelanggan,
                    serta ketelitian dalam menangani produk dan pesanan.
                </p>

            </div>

            <div class="project-detail-info">

                <div>

                    <h3>Peran & Tanggung Jawab</h3>

                    <ul>

                        <li>Mengelola dan menyiapkan produk yang akan dipasarkan melalui online shop.</li>

                        <li>Menyampaikan informasi produk serta melayani pertanyaan pelanggan.</li>

                        <li>Mencatat dan mengelola pesanan pelanggan.</li>

                        <li>Memeriksa kondisi dan kualitas produk sebelum dikirim.</li>

                        <li>Melakukan pengemasan serta mempersiapkan produk untuk pengiriman.</li>

                    </ul>

                </div>

                <div>

                    <h3>Skills Applied</h3>

                    <div class="project-tools">

                        <span>Product Management</span>

                        <span>Customer Service</span>

                        <span>Order Management</span>

                        <span>Quality Control</span>

                        <span>Product Handling</span>

                        <span>E-commerce Operations</span>

                    </div>

                </div>

            </div>

            <div class="project-gallery">

                <h3>Product & Business Documentation</h3>

                <div class="project-gallery-grid">

                    <img src="assets/shop-product-1.jpg" alt="RKfitashop product documentation 1">

                    <img src="assets/shop-product-2.jpg" alt="RKfitashop product documentation 2">

                    <img src="assets/shop-product-3.jpg" alt="RKfitashop product documentation 3">

                    <img src="assets/shop-product-4.jpg" alt="RKfitashop product documentation 4">

                    <img src="assets/shop-product-5.jpg" alt="RKfitashop product documentation 5">

                    <img src="assets/shop-product-6.jpg" alt="RKfitashop product documentation 6">

                    <img src="assets/shop-product-7.jpg" alt="RKfitashop product documentation 7">


                </div>

            </div>

        </div>
    `;
}

// =========================
// PROJECT STUDENT SAVINGS SYSTEM
// =========================

else if (project === "system") {

    projectModalBody.innerHTML = `
        <div class="project-detail">

            <div class="project-detail-intro">

                <span class="project-category">
                    SYSTEM DEVELOPMENT & INFORMATION MANAGEMENT
                </span>

                <h2>Student Savings Information System</h2>

                <p>
                    Student Savings Information System merupakan sistem berbasis web
                    yang dikembangkan selama kegiatan magang di SDN 2 Cipari untuk
                    membantu pengelolaan data tabungan siswa. Sistem ini dirancang
                    untuk memudahkan pengelolaan data siswa, pencatatan transaksi
                    setoran dan penarikan tabungan, serta penyusunan laporan.
                    Pengembangan sistem melibatkan proses pengumpulan kebutuhan,
                    perancangan sistem, pengembangan, pengujian, dan pengenalan
                    sistem kepada pengguna.
                </p>

            </div>

            <div class="project-detail-info">

                <div>

                    <h3>Peran & Tanggung Jawab</h3>

                    <ul>

                        <li>Mengumpulkan kebutuhan sistem melalui observasi dan komunikasi dengan pihak sekolah.</li>

                        <li>Merancang alur sistem dan struktur data sesuai kebutuhan pengelolaan tabungan siswa.</li>

                        <li>Mengembangkan sistem pengelolaan data siswa dan transaksi tabungan.</li>

                        <li>Melakukan pengujian sistem menggunakan metode Black Box Testing.</li>

                        <li>Membantu memberikan panduan kepada pengguna dalam memahami dan menggunakan sistem.</li>

                    </ul>

                </div>

                <div>

                    <h3>Skills Applied</h3>

                    <div class="project-tools">

                        <span>System Analysis</span>

                        <span>System Design</span>

                        <span>Database Management</span>

                        <span>Web Development</span>

                        <span>Black Box Testing</span>

                        <span>Documentation</span>

                    </div>

                </div>

            </div>

            <div class="project-detail-info">

                <div>

                    <h3>System Features</h3>

                    <ul>

                        <li>Dashboard</li>

                        <li>Student Data Management</li>

                        <li>Student Savings Data</li>

                        <li>Deposit Transactions</li>

                        <li>Withdrawal Transactions</li>

                        <li>Reports & Printing</li>

                    </ul>

                </div>

            </div>

            <div class="project-gallery">

                <h3>System Documentation</h3>

                <div class="project-gallery-grid">

                    <img src="assets/system-students 1.png" alt="Student Savings System Dashboard">

                    <img src="assets/system-students 2.png" alt="Student Data Management">

                    <img src="assets/system-students 3.png" alt="Student Savings Data">

                    <img src="assets/system-students 4.png" alt="Savings Deposit Transactions">

                    <img src="assets/system-students 5.png" alt="Savings Withdrawal Transactions">

                    <img src="assets/system-students 6.png" alt="Student Savings Reports">

                </div>

            </div>

        </div>
    `;
}
        // =========================
        // PROJECT LAINNYA
        // =========================

        else {

            projectModalBody.innerHTML = `
                <div class="project-detail">

                    <div class="project-detail-intro">
                        <h2>${projectTitles[project] || "Project Detail"}</h2>

                        <p>
                            Detail proyek akan ditampilkan di sini.
                        </p>
                    </div>

                </div>
            `;

        }

        // Membuka popup
        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

// =========================
// FUNGSI MENUTUP POPUP
// =========================

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}

// Klik tombol X
projectModalClose.addEventListener("click", closeProjectModal);

// Klik area luar popup
projectModalOverlay.addEventListener("click", closeProjectModal);

// Tekan Escape
document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("active")
    ) {

        closeProjectModal();

    }

});
