const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
  res.send('Selamat Datang di API')
})

app.post('/cek-data-mhs/:nama/:npm/:jenis_kelamin', function (req, res) {
  res.json({
      nama: req.params.nama,
      npm: req.params.npm,
      jenis_kelamin: req.params.jenis_kelamin,
      alamat: req.query.alamat,
      tanggal_lahir: req.query.tanggal_lahir,
      jurusan: req.query.jurusan,
      kewarganegaraan: req.body.kewarganegaraan,
      agama: req.body.agama,
      tinggi_badan: req.body.tinggi_badan,
      golongan_darah: req.body.golongan_darah
  })
})

app.listen(3000)
console.log("Server berhasil dijalankan")