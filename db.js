import dotenv from 'dotenv'
import mongoose from 'mongoose'
import beautifyUnique from 'mongoose-beautiful-unique-validation'

dotenv.config()

const Schema = mongoose.Schema
mongoose.connect(process.env.DBURL)
mongoose.plugin(beautifyUnique)

const userSchema = new Schema({
  account: {
    type: String,
    minlength: [2, '帳號必須 2 個字以上'],
    maxlength: [10, '帳號必須 10 個字以下'],
    unique: '帳號已使用',
    required: [true, '請輸入帳號']
  },
  password: {
    type: String,
    required: [true, '請輸入密碼']
  },
  name: {
    type: String,
    minlength: [2, '姓名最小 2 個字'],
    maxlength: [8, '姓名最大 8 個字'],
    required: [true, '請輸入姓名']
  },
  phone: {
    type: String,
    maxlength: [10, '手機最大 10 個字'],
    required: [true, '請輸入手機']
  },
  email: {
    type: String,
    required: [true, '請輸入信箱'],
    unique: '此信箱已經被註冊'
  }
},
{
  versionKey: false
})

const fileSchema = new Schema({
  name: {
    type: String,
    required: [true, '沒有使用者名稱']
  },
  text: {
    type: String,
    maxlength: [200, '說明必須兩百個字以下']
  },
  email: {
    type: String,
    required: [true, '沒有檔案名稱']
  },
  subject: {
    type: String,
    required: [true, '請選擇一個選項']
  },
  done: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false
})

const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
const files = mongoose.model(process.env.COLLECTION_FILE, fileSchema)
const connection = mongoose.connection

export default {
  users,
  files,
  connection
}
