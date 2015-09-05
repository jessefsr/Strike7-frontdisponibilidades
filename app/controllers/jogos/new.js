import Ember from 'ember';

var DEFAULT = {
  titulo: '',
  capa:'',
  disponibilidade: false,
};

export default Ember.Controller.extend({
  titulo: '',
  capa:'',
  disponibilidade: false,
  actions : {
    salvar(){
      var data = this.getProperties("titulo","capa", "disponibilidade");
      this.store.createRecord("jogo",data).save();
      this.setProperties(DEFAULT);
    }
  }
});
