const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/DayOne",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (error) => {
    if (!error) {
      console.log("database connected successfuly");
    } else {
      console.log("unable to connect");
    }
  }
);
