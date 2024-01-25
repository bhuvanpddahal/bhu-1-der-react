import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connection successfull');
}).catch((error) => {
    console.error(`Connection failed due to ${error}`);
});

export default mongoose.connection;