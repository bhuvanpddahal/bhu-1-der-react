import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/bhu-1-der').then(() => {
    console.log('Connection successfull');
}).catch((error) => {
    console.error(`Connection failed due to ${error}`);
});

export default mongoose.connection;