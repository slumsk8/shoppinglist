const Product = require('../models/Product')

class ProductController {
    async create(req,res){
        const { name, description, price } = req.body

        const product = await Product.create({
            name,
            description,
            price
        })

        return res.json(product)

    }

    async getProducts(req,res){
        
        const products = await Product.findAll()
        
        return res.json(products)

    }

    async getProductById(req,res){
        const id = req.params.id

        const product = await Product.findByPk(id)
        
        return res.json(product)

    }
    
    // TODO: Implementar métodos de update e delete dos produtos.
}


module.exports = new ProductController()