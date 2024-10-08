import mongoose from'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI) return console.log('MONGODB_URI IS NOT DEFINED');

    if(isConnected) return console.log('=> using existing database connection');

    try {
        await mongoose.connect(process.env.MONGODB_URI)

        // mongoose.connection.on('error', err => {
        //     console.error('MongoDB connection error:', err);
        // });
        isConnected = true

        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)

    }
}