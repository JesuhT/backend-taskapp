const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const onDb = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO);
    console.log('Estoy conectado a MongoDB');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    process.exit(1); 
  }
};

module.exports = onDb;
