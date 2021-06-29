const { MongoClient, ObjectID } = require("mongodb");

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

    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'izuku',
    //         email: 'izuku@shonnen.com'
    //     },
    //     (error, result) => {
    //         if(error){
    //             return console.log('Gagal menambahkan data');
    //         }

    //         console.log(result)
    //     }
    // );

    // Menambahkan lebih dari 1 data

    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'izuku',
    //             email: 'izuku@deku.co.id',
    //         },
    //         {
    //             nama: 'roland',
    //             email: 'rolando@gmail.com',
    //         },
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('Gagal menambahkan data!');
    //         }

    //         console.log(result);
    //     }
    // );

    // // Menampilkan semua data di collections mahasiswa

    // console.log(
    //     db.collection('mahasiswa')
    //     .find()
    //     .toArray((error, result)=>{
    //         console.log(result);
    //     })
    // );


    // Menampilkan data berdasarkan kriteria di collections mahasiswa

    // console.log(
    //     db.collection('mahasiswa')
    //     .find({ _id: ObjectID('60dabf25ddbaa11a5c6dd325') })
    //     .toArray((error, result)=>{
    //         console.log(result);
    //     })
    // );


    // Update data berdasarkan id

    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID("60d9c8d70ba06d62d57f7f93"),
    //     },
    //     {
    //         $set: {
    //             nama: 'William',
    //         }
    //     }
    // );

    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Mengubah data lebih dari 1 berdasarkan kriteria

    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'izuku',
    //     },
    //     {
    //         $set: {
    //             nama: 'izuku midoriya shonnen',
    //         }
    //     }
    // );


    // // Menghapus 1 data

    // db.collection('mahasiswa')
    // .deleteOne(
    //     {
    //         _id: ObjectID('60dabf25ddbaa11a5c6dd325'),
    //     }
    // )
    // .then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });


     // Menghapus lebih dari 1 data

     db.collection('mahasiswa')
     .deleteMany(
         {
             nama: 'izuku midoriya shonnen',
         }
     )
     .then((result)=>{
         console.log(result);
     }).catch((error)=>{
         console.log(error);
     });

});