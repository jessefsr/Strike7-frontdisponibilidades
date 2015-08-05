import DS from 'ember-data';


var Jogo = DS.Model.extend({
  titulo: DS.attr("string"),
  situacao: DS.attr("boolean"),
  cover: DS.attr("string")
});

export default Jogo;
