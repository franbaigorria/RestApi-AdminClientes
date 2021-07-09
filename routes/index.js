const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');

module.exports = function () {
  /* CLIENTES */
  //agrega nuevos clientes via POST
  router.post('/clientes', clienteController.nuevoCliente);

  //obtener todos los clientes
  router.get('/clientes', clienteController.mostrarClientes);

  //mostrar un cliente por su id
  router.get('/clientes/:idCliente', clienteController.mostrarCliente);

  //actualizar cliente
  router.put('/clientes/:idCliente', clienteController.actualizarCliente);

  //eliminar cliente
  router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

  /* PRODUCTOS */
  //nuevos productos
  router.post(
    '/productos',
    productoController.subirArchivo,
    productoController.nuevoProducto
  );

  //muestra todos los productos
  router.get('/productos', productoController.mostrarProductos);

  //muestra un producto por su id
  router.get('/productos/:idProducto', productoController.mostrarProducto);

  //actualizar producto
  router.put(
    '/productos/:idProducto',
    productoController.subirArchivo,
    productoController.actualizarProducto
  );

  //eliminar producto
  router.delete('/productos/:idProducto', productoController.eliminarProducto);

  /* PEDIDOS */
  //agregar nuevo pedido
  router.post('/pedidos', pedidosController.agregarPedido);

  //mostrar todos los pedidos
  router.get('/pedidos', pedidosController.mostrarPedidos);

  //muestra pedido por id
  router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

  //actualizar pedidos
  router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

  //eliminar pedido
  router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);

  return router;
};
