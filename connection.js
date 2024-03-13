const {Client}= require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "newDB"
}); //creating object client using Client class

client.connect()
.then(()=>{
    console.log('connected to postgreSql db');
})
.catch(err=>{
    console.error('error connecting to postgresql db',err);
})
.finally(()=>{
});


module.exports=client;