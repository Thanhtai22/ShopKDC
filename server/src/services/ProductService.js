const Product = require("../models/ProductModel")

const createProduct = (newproduct) => {
    return new Promise(async (resolve, reject) => {
        const {name, image, type, price, countInStock,rating,description} = newproduct

        try {
            const checkProduct = await Product.findOne({
                name: name
            })
            if (checkProduct !== null) {
                resolve({
                    status: 'OK',
                    message: "the name of product is already"
                })
            }
            const newProduct = await Product.create({
                name, 
                image, 
                type, 
                price, 
                countInStock,
                rating,
                description
            })
            if (newProduct) {
                resolve({
                    status: 'OK',
                    message: "SUCCESS",
                    newProduct
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Product is not defined'
                })
            }

            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                data: updatedProduct
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findOne({
                _id: id
            })
            if (product === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: product
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            await Product.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete product success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllProduct = (limit , page, sort , filter) => {
    console.log('sort',sort)
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.count()
            if(filter){
                const label= filter[0];
                 const allObjectFilter = await Product.find({
                    [label]: {'$regex': filter[1]}
                }).limit(limit).skip(page * limit)
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalProduct,
                    pageCurrent: Number(page +1),
                    totalPage: Math.ceil(totalProduct/limit)
                })
            }
            if(sort){
                const objectSort={}
                objectSort[sort[1]]=sort[0]
                console.log("obj",objectSort)
                const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: Number(page +1),
                    totalPage: Math.ceil(totalProduct/limit)
                })
            }
            const allProduct = await Product.find().limit(limit).skip(page * limit).sort({
                name: sort,
            })
            resolve({
                status: 'OK',
                message: 'Success',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page +1),
                totalPage: Math.ceil(totalProduct/limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,

}