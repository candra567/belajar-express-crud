const Database={
  host: '127.0.0.1',
  user: 'root',
  password:"root",
  database: 'belajar-express-crud',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0
}
module.exports=Database;