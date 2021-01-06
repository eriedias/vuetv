import { createStore } from 'vuex'

export default createStore({
  state: {
    highlight_movies: []
  },
  mutations: {
    update_highlight_movies(state, list){
      state.highlight_movies = list
    }
  },
  actions: {
    load_highlight_movies({ commit }) {
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=" + process.env.VUE_APP_API_KEY)
      .then(res => res.json())
      .then((out) => {
        commit("update_highlight_movies", out.results)
      })
      .catch(err => { throw err });
    }
  },
  modules: {
  }
})

