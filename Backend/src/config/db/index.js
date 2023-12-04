const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/NienLuan_DEV',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('connect successfully!!!');
  } catch (error) {
    console.log('connect fail!!!');
  }
}

module.exports = { connect };