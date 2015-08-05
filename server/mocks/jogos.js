module.exports = function(app) {
  var express = require('express');
  var jogosRouter = express.Router();

  jogosRouter.get('/', function(req, res) {
    res.send({
      'jogos': [
        {id: 1, titulo: 'Ryse son of Rome', situacao: 'true', cover : 'ryse.png'},
        {id: 2, titulo: 'Batman', situacao: 'false', cover : 'batmanarkhamknight.png'},
        {id: 3, titulo: 'Saints', situacao: 'true', cover : 'sainsts.png'}
        ]
    });
  });

  jogosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  jogosRouter.get('/:id', function(req, res) {
    res.send({
      'jogos': {
        id: req.params.id
      }
    });
  });

  jogosRouter.put('/:id', function(req, res) {
    res.send({
      'jogos': {
        id: req.params.id
      }
    });
  });

  jogosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/jogos', jogosRouter);
};
