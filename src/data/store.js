import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://www.breakingbadapi.com/api/characters',
  charactersList: [],
  isLoaded: false,
  categoryToSearch: ''
  
});