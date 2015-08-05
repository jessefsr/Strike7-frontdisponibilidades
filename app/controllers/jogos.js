import Ember from 'ember';

export default Ember.Controller.extend({
  titulo: "Bordelands",
  situacao: "Alugado",
  actions: {
    trocaDisponibilidade(jogo){
      jogo.set('situacao',  !jogo.get('situacao'));
      jogo.save();
    }
  }

});
