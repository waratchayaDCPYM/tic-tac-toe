import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  // Single file component
  // Sing Page Application
  const routes = [
  {
    path: '/',
    name: 'ShipnityTicTacToeMain',
    component: () => import("../components/TicTacToe_main.vue")
  },

  {
    path: '/tictactoegame',
    name: 'ShipnityTicTacToeGame',
    component: () => import("../components/TicTacToe_game.vue")
  },

  
  {
    path: '/tictactoerank',
    name: 'ShipnityTicTacToeRank',
    component: () => import("../components/TicTacToe_rank.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router