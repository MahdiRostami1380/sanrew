import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://mhdyrstmy1380:QII29aSKCExxWzv4@sanrew.ozn1c.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log(error));
};

export default connectToDB;
