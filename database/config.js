const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("base de datos conectada correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("error in database");
  }
};
module.exports = { dbConnection };
