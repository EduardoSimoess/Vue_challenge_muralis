const formHandler = {
    data() {
      return {
        name: '',
        selectedCourse: '',
        selectedState: '',
        selectedCity: '',
        cities: ['Selecione uma opção'],
      };
    },
    methods: {
      updateState(event) {
        const state = event.target.value;
        this.selectedState = state;
        switch (state) {
          case 'sp':
            this.cities = ['Selecione uma opção', 'Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'];
            break;
          case 'rj':
            this.cities = ['Selecione uma opção', 'Angra dos Reis', 'Niterói', 'Itaboraí'];
            break;
          case 'mg':
            this.cities = ['Selecione uma opção', 'Belo Horizonte', 'Monte Azul', 'Muzambinho'];
            break;
          default:
            this.cities = ['Selecione uma opção'];
        }
      },
    },
  };
  
  Vue.createApp(formHandler).mount('#app');
  