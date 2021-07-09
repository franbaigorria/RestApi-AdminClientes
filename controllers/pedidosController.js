const Pedidos = require('../models/Pedidos');

//agrega un nuevo pedido
exports.agregarPedido = async (req, res, next) => {
  const pedido = new Pedidos(req.body);
  try {
    await pedido.save();
    res.json({ mensaje: 'se agrego nuevo pedido' });
  } catch (error) {
    console.error(error);
    next();
  }
};

//muestra todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedidos.find({}).populate('cliente').populate({
      path: 'pedido.producto',
      model: 'Productos',
    });
    res.json(pedidos);
  } catch (error) {
    console.error(error);
    next();
  }
};

//muestra un pedido por id
exports.mostrarPedido = async (req, res, next) => {
  const pedido = await Pedidos.findById(req.params.idPedido)
    .populate('cliente')
    .populate({
      path: 'pedido.producto',
      model: 'Productos',
    });
  if (!pedido) {
    res.json({ mensaje: 'Pedido no encontrado' });
    return next();
  }

  res.json(pedido);
};

//actualizar pedido por id
exports.actualizarPedido = async (req, res, next) => {
  try {
    let pedido = await Pedidos.findOneAndUpdate(
      { _id: req.params.idPedido },
      req.body,
      { new: true }
    )
      .populate('cliente')
      .populate({
        path: 'pedido.producto',
        model: 'Productos',
      });
    res.json(pedido);
  } catch (error) {
    console.error(error);
    next();
  }
};

//eliminar pedido por id
exports.eliminarPedido = async (req, res, next) => {
  try {
    await Pedidos.findOneAndDelete({ _id: req.params.idPedido });
    res.json({ message: 'Pedido Eliminado' });
  } catch (error) {
    console.error(error);
    next();
  }
};
