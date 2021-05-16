import mongoose from "mongoose";

let isConnected: number;

async function dbConnect() {
    if(isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log(isConnected)
}

export default dbConnect;
