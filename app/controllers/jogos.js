import Ember from 'ember';

export default Ember.Controller.extend({
  titulo: "Bordelands",
  disponibilidade: "Alugado",
  actions: {
    trocaDisponibilidade(jogo){
      jogo.toggleProperty('disponibilidade');
      jogo.save();
      }
  }

});
