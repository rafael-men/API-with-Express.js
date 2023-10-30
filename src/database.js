const s = {
    _id:1, get id() {
        return this._id++
    }
} 

const produtos = {}

const saveproducts = function(prod) {
    if(!prod.id) prod.id = s.id
    produtos[prod.id] = prod
    return prod 
}

 let getProd = (id) => {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

let exclude = (id) => {
    const produto = produtos[id]
    delete produtos[id]
    return
}

module.exports = {
    saveproducts,
    getProd,
    getProdutos
}