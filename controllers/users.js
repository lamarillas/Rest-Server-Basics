const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    const { q, nombre, apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - CTRL',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}


const usersPost = (req = request, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
};


const usersPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API',
        id
    })
};


const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    })
};


const usersPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    })
};





module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch    
}