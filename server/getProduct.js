const products = require('../products.json')

const getProduct = (req, res) => {
   const item = products.filter(products => products.id === +req.params.id)[0]
    res.status(200).send(item);
}
module.exports = getProduct