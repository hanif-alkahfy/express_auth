require("dotenv").config();

const app = require("./app");
const { sequelize } = require("./config/sequelize");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Uji koneksi database
        await sequelize.authenticate();
        console.log('Koneksi database berhasil.');

        // Sinkronkan semua model dengan database
        // PENTING: Gunakan { force: true } hanya untuk DEVELOPMENT, akan menghapus data
        // Untuk PRODUKSI, gunakan migrasi atau { alter: true } dengan hati-hati
        await sequelize.sync({ force: true });
        console.log('Semua model berhasil disinkronkan.');

        // Mulai server Express
        app.listen(PORT, () => {
            console.log(`Server berjalan di http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Tidak dapat terhubung ke database:', error);
        process.exit(1); // Keluar dari aplikasi jika gagal koneksi/sinkronisasi
    }
};

startServer(); // Panggil fungsi untuk memulai