// import express
import express from "express";

// init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jk/:agama/:alamat/:telepon/:email/:hobi/:cita_cita', (req, res) => {

    
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var Tanggal_lahir = req.params.tanggal;
    var Jenis_Kelamin = req.params.jk;
    var Agama = req.params.agama;
    var Alamat = req.params.alamat;
    var Telepon = req.params.telepon;
    var Email = req.params.email;
    var Hobi = req.params.hobi;
    var Cita_Cita = req.params.cita_cita;

    res.send(
        'Nama : ' + nama +"<br>" +
        'Tempat Lahir : ' + tempat_lahir + '<br>' +
        'Tanggal Lahir : ' + Tanggal_lahir + '<br>' +
        'Jenis Kelamin : ' + Jenis_Kelamin + '<br>' +
        'Agama : ' + Agama + '<br>' +
        'Alamat : ' + Alamat + '<br>' +
        'Telepon : ' + Telepon + '<br>' +
        'Email : ' + Email + '<br>' +
        'Hobi : ' + Hobi + '<br>' +
        'Cita-Cita : ' + Cita_Cita + '<br>'
    );
});

router.get('/Bangun_Datar', (req, res) => {
    var sisi = 5;
    var Persegi = sisi * sisi;
    var panjang = 15;
    var lebar = 10;
    var Persegi_panjang = panjang * lebar;
    var π = 3.14;
    var Jari_Jari = 14; 
    var Lingkaran = π * Jari_Jari * Jari_Jari;
    var alas = 20;
    var tinggi = 16;
    var Segitiga = 1/2 * alas * tinggi;

    res.send(
        '<h2>Bangun Datar</h2>' +

        '<h3>Persegi</h3>' +
        'Nilai Sisi :' + sisi + '<br>'+
        'Rumus Persegi : Sisi kali Sisi' + '<br>' + 
        'Hasil :' + Persegi + 'cm' + '<br>'+ '<hr>' +

        '<h3>Persegi Panjang</h3>'+
        'Nilai Panjang :' + panjang + '<br>' +
        'Nilai Lebar :' + lebar + '<br>' +
        'Rumus Persegi Panjang : Panjang kali Lebar' + '<br>' +
        'Hasil :' + Persegi_panjang + 'cm' + '<br>' + '<hr>' +

        '<h3>Lingkaran</h3>' +
        'Nilai π :' + π + '<br>'+
        'Nilai Jari-Jari :' + Jari_Jari + '<br>'+
        'Rumus Lingkaran : π x r²' + '<br>' +
        'Hasil :'+ Lingkaran + 'cm²' + '<br>' + '<hr>' +

        '<h3>Segitiga</h3>'+
        'Nilai alas :' + alas + '<br>'+
        'Nilai tinggi :' + tinggi + '<br>'+
        'Rumus Segitiga : 1/2 x Alas x Tinggi' + '<br>'+
        'Hasil :' + Segitiga + 'cm²' + '<hr>' 

    );
});                              
router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {

    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) / 2;

    if (rapot >= 90 && rapot <= 100) {
        var grade = 'Grade A';
    } else if(rapot >= 80) {
        var grade = 'Grade B';
    } else if(rapot >= 70) {
        var grade = 'Grade C';
    } else if(rapot >= 60) {
        var grade = 'Grade D';
    } else if(rapot >= 50) {
        var grade = 'Grade E';
    } else if(rapot >= 60) {
        var grade = 'Diajar Sing Getol !!!';
    } else {
        var grade = 'Nilai tidak Valid'
    }
    res.send(
        'Nama :' + nama +'<br>' +
        'Kelas :' + kelas +'<br>' +
        'Nilai PTS :' + pts +'<br>' +
        'Nilai PAS :' + pas +'<br>' +
        'Nilai Rapot :' + rapot +'<br>' +
        'Keterangan : ' + grade
    );
});   

router.get('/Bersarang/:nama/:jurusan/:kelas', (req, res) => {
    
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if ( jurusan == 'RPL'){
        if (kelas == '10 RPL') {
            var ket = "Anda Kelas 10 RPL";
        } else if (kelas == '11 RPL') {
            var ket = "Anda Kelas 11 RPL";
        } else if (kelas == '12 RPL') {
            var ket = "Anda Kelas 12 RPL";
        } else {
            var ket = "Anda Alumni Brayy";
        }
    } else if (jurusan == 'TKRO'){
        if (kelas == '10 TKRO') {
            var ket = 'Anda Kelas 10 TKRO';
        } else if (kelas == '11 TKRO') {
            var ket = 'Anda Kelas 11 TKRO';
        } else if (kelas == '12 TKRO') {
            var ket = 'Anda Kelas 12 TKRO';
        } else {
            var ket = 'Anda Alumni Brayy';
        }
    } else if (jurusan == 'TBSM'){
        if (kelas == '10 TBSM') {
            var ket = 'Anda Kelas 10 TBSM';
        } else if (kelas == '11 TBSM') {
            var ket = 'Anda Kelas 11 TBSM';
        } else if (kelas == '12 TBSM') {
            var ket = 'Anda Kelas 12 TBSM';
        } else {
            var ket = 'Anda Alumni Brayy';
        }
    } else {
        var ket = 'Jurusan Tidak Tersedia';
    }
    
    res.send(
        'Nama :' + nama + '<br>' +
        'Jurusan :' + ket
    );

});

router.get('/Latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {

    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jenis = req.params.jenis;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;
 
    if (jenis == "Makanan"){
        if (pesanan == 'Nasi Goreng'){
            var harga = 20000;
        }else if (pesanan == 'Mie Goreng'){
            var harga = 30000;
        }else if (pesanan == 'Ayam Goreng'){
            var harga = 40000;
        } else{
            var harga = "Makanan Tidak Tersedia";
        }
    } else if(jenis == "Minuman"){
        if (pesanan == 'Air Mineral'){
            var harga = 10000;
        }else if (pesanan == 'Jus'){
            var harga = 20000;
        }else if (pesanan == 'Kopi'){
            var harga = 30000;
        } else{
            var harga = "Minuman Tidak Tersedia";
        }
    } else {
        var jenis = "Pesanan Tidak Tersedia";
    }

    var total = harga * jumlah;

    if(total >= 100000){
        var diskon = total * 0.5;
    }else {
        var diskon = 0;
    }

    var total_pembayaran = total - diskon;

    res.send(
    '<h3>Starbuck Lokal</h3>'+
    'Nama Pembeli       :' + nama + '<br>' +
    'Tanggal            :' + tanggal + '<br>' +
    'Jenis              :' + jenis + '<br>' +
    'Pesanan            :' + pesanan + '<br>' +
    'Harga              :' + harga + '<br>' +
    'Jumlah             :' + jumlah + '<br>'+
    '---------------------------------'+'<br>'+
    'Total              :' + total + '<br>'+
    'Diskon             :' + diskon + '<br>'+
    'Total Pembayaran   :' + total_pembayaran + '<br>'+
    '---------------------------------'+'<br>'+
    'Terima Kasih'
    );
});   


router.get('/sample', (req, res) => {
    
    res.send(
        '<h3>Selamat Datang</h3>'
    );
});

// export default router
export default router;