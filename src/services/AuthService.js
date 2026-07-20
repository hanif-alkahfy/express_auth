// Hapus: const pool = require('../config/database'); // atau sejenisnya
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Impor model User Sequelize

const AuthService = {
    registerUser: async (username, email, password) => {
        try {
            // Hashing password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Buat user baru menggunakan Sequelize
            const newUser = await User.create({
                username,
                email,
                password: hashedPassword
            });

            // Anda bisa mengembalikan newUser atau bagian dari itu
            return newUser.toJSON(); // Mengembalikan objek data mentah
        } catch (error) {
            console.error('Error saat registrasi user:', error);
            throw new Error('Gagal mendaftarkan user.');
        }
    },

    loginUser: async (email, password) => {
        try {
            // Cari user berdasarkan email menggunakan Sequelize
            const user = await User.findOne({ where: { email } });

            if (!user) {
                throw new Error('User tidak ditemukan.');
            }

            // Bandingkan password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Password salah.');
            }

            // Buat token JWT
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return { token, user: user.toJSON() };
        } catch (error) {
            console.error('Error saat login user:', error);
            throw error;
        }
    }
};

module.exports = AuthService;