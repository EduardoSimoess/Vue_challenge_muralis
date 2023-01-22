const select = 'Selecione uma opção';

const formHandler = {
    data() {
      return {
        name: '',
        selectedCourse: '',
        selectedState: '',
        selectedCity: '',
        cities: [select],
      };
    },
    methods: {
      updateState(event) {
        const state = event.target.value;
        this.selectedState = state;
        switch (state) {
          case 'sp':
            this.cities = [select, 'Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'];
            break;
          case 'rj':
            this.cities = [select, 'Angra dos Reis', 'Niterói', 'Itaboraí'];
            break;
          case 'mg':
            this.cities = [select, 'Belo Horizonte', 'Monte Azul', 'Muzambinho'];
            break;
          default:
            this.cities = [select];
        }
      },

      submit() {
        alert("Resposta registrada com sucesso!");
      },
    },
  };
  
  Vue.createApp(formHandler).mount('#app');