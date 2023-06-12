import Product from "../model/product.model.js";

export const recentProduct = (request, response, next) => {
    Product.find().limit(9).
        then(result => {
            return response.status(200).json({ result: result, status: true });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error", status: false });
        });
}

export const ListOfProduct = (request, response, next) => {
    Product.find({categoryname : request.body.categoryname}).then(result => {
            return response.json({ status: true, result, message: "Product List" });
        })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const addProduct = async (request, response, next) => {
    try {
        for (let product of request.body.products) {
            await Product.create(product);
        }
        return response.status(200).json({ msg: "Product Added", status: true });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ msg: "Internal Server Error", status: false });
    }

}

export const productList = (request, response, next) => {
    let page = parseInt(request.query.page) || 1;
    let perPage = 10;
    Product.find().skip((page - 1) * 10).limit(10)
        .then(result => {
            return response.json({ status: true, result, message: "Product List" });
        })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const deleteProduct = (request, response, next) => {
    Product.deleteOne(request.body).then(result => {
        return response.json({ message: "Deleted", status: true });
    })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const myProduct = async (request, response, next) => {
    await Product.find(request.params).then(result => {
        return response.json({ status: true, result, message: "My Product List" });
    })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const productDescription = async (request, response, next) => {
    await Product.find(request.body).then(result => {
        return response.json({ status: true, result, message: "Product Description" });
    })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const updateProduct = async (request, response, next) => {
    await Product.updateOne(request.body).then(result => {
        return response.json({ message: "Product Updated ", status: true });
    })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const getProductByName = async (request, response, next) => {
    const categoryname = request.body.categoryname;
    try {
        const result = await Product.find({ categoryname: categoryname.toLowerCase() }).limit(10);
        return response.json({ status: true, result, message: "Product List" });
    } catch (err) {
        console.log(err);
        return response.json({ error: "error", status: false });
    }
};

