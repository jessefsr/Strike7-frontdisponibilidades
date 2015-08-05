import Ember from 'ember';

export default Ember.Controller.extend({
  titulo: '',
  cover:'',

  actions : {
    salvar(){
      var data = this.getProperties("titulo","cover");
      this.store.createRecord("jogo",data).save();
    }
  }
});
