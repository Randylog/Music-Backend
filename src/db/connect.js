let mongoose = require("mongoose");
//mongoose

mongoose.connect(`mongodb+srv://music:music123@music.n1opc.mongodb.net/musicproject`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true

});
