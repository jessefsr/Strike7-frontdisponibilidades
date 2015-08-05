import Ember from 'ember';

var DEFAULT = {
  titulo: '',
  cover:'',
  situacao: false,
}

export default Ember.Controller.extend({
  titulo: '',
  cover:'',
  situacao: false,
  actions : {
    salvar(){
      var data = this.getProperties("titulo","cover", "situacao");
      this.store.createRecord("jogo",data).save();
      this.setProperties(DEFAULT);
    }
  }
});
