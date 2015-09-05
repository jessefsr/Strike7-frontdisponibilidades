import Ember from 'ember';
import DS from 'ember-data';


var DISPONIVEL_URL = 'https://s3-sa-east-1.amazonaws.com/strike7-image/cover/'
var ALUGADO_URL = 'https://s3-sa-east-1.amazonaws.com/strike7-image/cover+alugados/'

var Jogo = DS.Model.extend({
  titulo: DS.attr("string"),
  disponibilidade: DS.attr("boolean"),
  capa: DS.attr("string"),

  cover_url: Ember.computed("disponibilidade", "capa", function(){
      if(this.get("disponibilidade")) {
        return DISPONIVEL_URL + this.get("capa");
      } else {
        return ALUGADO_URL + this.get("capa");
      }
  })
});

export default Jogo;
