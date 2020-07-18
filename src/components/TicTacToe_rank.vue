<template>
  <div class="background-color container-fluid" >
    <v-container style="height:100%;">

    <!-- title -->
      <v-row align="center">
        <v-col cols="12" md="12" class="mx-3 my-6">
          <v-row justify="center" align="center" >
            <p class="text-highScore-name-yellow mr-10">RANKING</p>
          </v-row>
        </v-col>
      </v-row>

      <!-- header table -->
      <v-row mx-6 justify="center">
        <v-spacer></v-spacer>
          <v-col cols="2" md="2">
            <p class="text-head-table-score foreground-ranking">RANK</p>
          </v-col>
          <v-col cols="2" md="2">
            <p class="text-head-table-score foreground-ranking">SCORE</p>
          </v-col>
          <v-col cols="2" md="2">
            <p class="text-head-table-score foreground-ranking">NAME</p>
          </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <!-- content rank -->
      <!-- <v-row mx-6 justify="center"> -->
        <div v-for="(item, index) in winnerRanking" :key="index">

          <!-- check ranking 1st -->
            <v-row mx-6 justify="center">
              <v-spacer></v-spacer>
                <v-col cols="2" md="2">
                  <p v-if="index === 0" class="text-content-table-score-1st">{{index+1}}ST</p>
                  <p v-if="index === 1" class="text-content-table-score-2nd">{{index+1}}ND</p>
                  <p v-if="index === 2" class="text-content-table-score-2nd">{{index+1}}RD</p>
                  <p v-if="index > 2" class="text-content-table-score-4th">{{index+1}}TH</p>
                </v-col>
                <v-col cols="2" md="2">
                  <p v-if="index === 0" class="text-content-table-score-1st">{{item.playerScore}}</p>
                  <p v-if="index === 1" class="text-content-table-score-2nd">{{item.playerScore}}</p>
                  <p v-if="index === 2" class="text-content-table-score-2nd">{{item.playerScore}}</p>
                  <p v-if="index > 2" class="text-content-table-score-4th">{{item.playerScore}}</p>
                </v-col>
                <v-col cols="2" md="2">
                  <p v-if="index === 0" class="text-content-table-score-1st">{{item.name}}</p>
                  <p v-if="index === 1" class="text-content-table-score-2nd">{{item.name}}</p>
                  <p v-if="index === 2" class="text-content-table-score-2nd">{{item.name}}</p>
                  <p v-if="index > 2" class="text-content-table-score-4th">{{item.name}}</p>
                </v-col>
              <v-spacer></v-spacer>
            </v-row>

        </div>
      
      <v-row  justify="center" align="center">
        <v-col cols="12" md="6" justify="center" align="center">
          <v-btn x-large rounded dark class="button button-back" @click="main()">BACK</v-btn>
        </v-col>
      </v-row>
  
    </v-container>
  </div>
</template>

<script>
  export default {
    data:() => ({
      winnerRanking: [],
    }),
    
    methods: {

      main() {
        this.$router.push({name:'ShipnityTicTacToeMain'});
      },
   
    },

    mounted() {
      var temp = this.$store.getters.getWinnerData;
      this.winnerRanking = temp;
      console.log(temp); 
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.background-color{
  background: linear-gradient(120DEG, #2A1C52, #6648C4);
  background-image: url('../assets/background.png');
  background-size: 1920px 1080px;
  height: 100%;
  margin: 0;
  background-attachment: fixed;
}

.foreground-ranking {
  background-color: rgba(128, 128, 128, 0.25) ;
}

.divider-size-bold {
  margin-top: -10px;
  border-color: #f9891b;
  border-top-width: 2px;
}

.text-highScore-name-yellow{
  color: #FFD033;
  font-size: 50px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 10px 10px #2A1C52;
  text-align: center;
}

.text-highScore-name-pink{
  color: #EB1750;
  font-size: 40px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 10px 10px #2A1C52;
  text-align: center;
}

.text-head-table-score{
  color: #EB1750;
  font-size: 20px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 2px 2px #2A1C52;
  text-align: center;
}

.text-content-table-score-1st{
  color: #FFD033;
  font-size: 20px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 5px 5px #2A1C52;
  text-align: center;
}

.text-content-table-score-2nd{
  color: #2CD67C;
  font-size: 20px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 5px 5px #2A1C52;
  text-align: center;
}

.text-content-table-score-4th{
  color: #ffff;
  font-size: 20px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 5px 5px #2A1C52;
  text-align: center;
}

.button {
  flex: 1 1 auto;
  margin: 10px;
  padding: 30px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
 }

.button:hover {
  background-position: right center; /* change the direction of the change here */
}

.button-back{
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to right, #F8598D 0%, #F87B64 51%, #F89D3B 100%);
  font-family: 'Press Start 2P', cursive;
}

</style>