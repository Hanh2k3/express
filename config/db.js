const mongoose = require('mongoose'); // kết nối đến database 

const connectDB = async () =>  {
    try {

        await mongoose.connect('mongodb://localhost:27017/post', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        

    } catch (error) {
        console.log("Connect failue!!");
        
    }

}

module.exports = connectDB ; // export kết nối đến database để sử dụng ở các file khác 
