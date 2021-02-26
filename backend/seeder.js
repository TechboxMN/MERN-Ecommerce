import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import banners from './data/banners.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import Image from './models/imageModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

//data gaa shuud automate aar package json luu orwol tend neg command bga data: import ntr getsen teruugeer shuud datagaa database ruugee importloj bolno

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        const sampleBanners = banners.map((banner) => {
            return { ...banner, user: adminUser }
        })

        await Image.insertMany(sampleBanners)
        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit
    } catch (error) {
        console.log(`${error.message}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Image.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit
    } catch (error) {
        console.log(`${error.message}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
