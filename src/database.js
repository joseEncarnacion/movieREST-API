const mongoose = require('mongoose')


const URI = process.env.DB_URI


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URI, () => console.log("Database connected"));
}


