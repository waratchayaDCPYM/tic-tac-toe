import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winnerData: [],
  },
  mutations: {
    set_leaderBoard(state, payload){
      console.log('mutation :',payload);
      
      state.winnerData.push(payload);
      console.log('mutatd :',state.winnerData);

      for (let i=0; i<state.winnerData.length; i++) {
        let swapIndex = -1
          for (let j=i+1; j<state.winnerData.length; j++) {
            if (state.winnerData[i].playerScore < state.winnerData[j].playerScore) {
              swapIndex = j
            }
          }
        if (swapIndex !== -1) {
          let temp = state.winnerData[i];
          state.winnerData[i] = state.winnerData[swapIndex];
          state.winnerData[swapIndex] = temp;
        }
      }
      console.log('sorted :',state.winnerData);
    }
  },
  actions: {
    handle_winner (context, payload){
      context.commit("set_leaderBoard", payload);
    }
  },
  getters: {
    getWinnerData: state => {
      return state.winnerData;
    }
  }
})
