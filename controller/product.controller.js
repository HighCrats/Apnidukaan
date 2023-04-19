import Product from '../model/product.model.js';

export const list = async (request, response, next) => {
    try {
        const products = await Product.find();
        response.json(products);
    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server Error');
    }
}

export const verifyProduct = async (request, response, next) => {
    try {
        const product = await Product.findById(request.params.id);

        if (!product) {
            return response.status(404).json({ msg: 'Product not found' });
        }

        if (product.isVerified) {
            return response.status(400).json({ msg: 'Product already verified' });
        }

        if (product.bill !== request.body.bill) {
            return response.status(400).json({ msg: 'Invalid bill' });
        }

        product.isVerified = true;

        await product.save();

        response.json({ msg: 'Product verified' });
    } catch (err) {
        console.error(err.message);
        response.status(500).send('internal Server Error');
    }

};

export const remove = async (request, response, next) => {
    const productId = request.params.id;
    Product.findById(productId, (err, product) => {
        if (err) {
            return response.status(500).send(err);
        }
        if (!product) {
            return response.status(404).send('Product not found');
        }
        Product.deleteOne(productId, (err, result) => {
            if (err) {
                return response.status(500).send(err);
            }
            response.send(result);
        });
    });


}