import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
