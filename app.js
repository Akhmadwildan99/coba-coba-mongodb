const { MongoClient } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wildan';

const client = new MongoClient(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
   if(error){
       return console.log('Koneksi gagal!')
   } 

    // console.log('Koneksi berhasil!')

    // Pilih database
    const db = client.db(dbName);

    // Menambahkan 1 data ke collection mahasiswa

    db.collection('mahasiswa').insertOne(
        {
            nama: 'izuku',
            email: 'izuku@shonnen.com'
        },
        (error, result) => {
            if(error){
                return console.log('Gagal menambahkan data');
            }

            console.log(result)
        }
    );

});