import Ember from 'ember';

export default Ember.Controller.extend({
  titulo: "Bordelands",
  situacao: "Alugado",
  actions: {
    trocaDisponibilidade(jogo){
      jogo.toggleProperty('situacao');
      jogo.save();
    }
  }

});
