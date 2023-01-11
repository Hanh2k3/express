const mongoose = require('mongoose')
const Schema = mongoose.Schema

// giống cái migration của laravel 
//  ==> tạo cái bảng của đối tượng trong cơ sở dữ liệu 

// Tạo model 
const postSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    text: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
})

module.exports = mongoose.model('post', postSchema)
// biến hàm postSchema thành 1 model có tên là Post là obj 
