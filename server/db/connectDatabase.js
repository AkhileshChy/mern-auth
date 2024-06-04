import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected : ', conn.connection.host, conn.connection.name)
    } catch (error) {
        console.error(`Error : ${error.message}`)
        process.exit(1);
    }
}

export default connectMongoDB;