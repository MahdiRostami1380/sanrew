import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    // "mongodb+srv://mhdyrstmy1380:QII29aSKCExxWzv4@sanrew.ozn1c.mongodb.net/";
    "mongodb://root:s9Ga4n32s0s4h5pdnKRapYoL@mont-blanc.liara.cloud:30445/my-app?authSource=admin";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log(error));
};

export default connectToDB;
