import Ember from 'ember';
import DS from 'ember-data';


var DISPONIVEL_URL = 'https://s3-sa-east-1.amazonaws.com/strike7-image/cover/';
var ALUGADO_URL = 'https://s3-sa-east-1.amazonaws.com/strike7-image/cover+alugados/';

var Jogo = DS.Model.extend({
  titulo: DS.attr("string"),
  situacao: DS.attr("boolean"),
  cover: DS.attr("string"),

  cover_url: Ember.computed("situacao", "cover", function(){
      if(this.get("situacao")) {
        return DISPONIVEL_URL + this.get("cover");
      } else {
        return ALUGADO_URL + this.get("cover");
      }
  })
});

export default Jogo;
