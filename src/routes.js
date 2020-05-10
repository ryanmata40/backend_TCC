const routes = require('express').Router()

const authMiddlewares = require('./app/middlewares/auth')


const SessionController = require('./app/controllers/SessionControllers')

routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);//com use só será aplicados as rotas que vem depois

routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})

module.exports = routes;

