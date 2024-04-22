import mongoose from "mongoose";

export async function dbConnect() {
    mongoose 
    .connect(process.env.MONGO_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true   })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
}
