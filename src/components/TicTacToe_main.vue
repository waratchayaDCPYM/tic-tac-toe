<template>
  <div class="background-color container-fluid" >
    <v-container style="height:100%;">
    
      <!-- header TicTacToe -->
      <v-row justify="center" align="center" style="height:100%;">
        <v-col cols="6" md="3" class="mx-12 mt-12 mb-12">
          <p class="text-tictactoe-name-yellow">TIC</p>
          <p class="text-tictactoe-name-pink">TAC</p>
          <p class="text-tictactoe-name-yellow">TOE</p>
        </v-col>

        <!-- start button & high score button-->
        <v-col cols="6" md="3" class="mx-3 mb-12">
          <v-row  justify="center" align="center">
            <v-btn x-large rounded dark class="button button-startGame" @click="startGame()">START GAME</v-btn>
          </v-row>
          <v-row justify="center" align="center" class="mt-12">
            <v-btn x-large rounded dark class="button button-rank" @click="ranking()">RANKING</v-btn>
          </v-row>
        </v-col>
      </v-row>

       <!-- dialog high score -->
      <!-- <v-row justify="center" align="center">
        <v-dialog v-model="highScore" justify="center">
          <div>
            <v-card class="pa-12 rectangle-drawGame" persistent>
              <p class="text-draw text-xs-center">HIGH SCORE</p>

              <v-card-actions>
                <v-row>            
                  <v-spacer></v-spacer>
                    <v-btn x-large rounded dark class="button-close" @click="highScore = false">CLOSE</v-btn>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card-actions> 
            </v-card>
          </div>
        </v-dialog>
      </v-row> -->

    </v-container>
  </div>
</template>

<script>
  export default {

    methods: {
      startGame() {
        this.$router.push({name:'ShipnityTicTacToeGame'});
      },
      ranking() {
        this.$router.push({name:'ShipnityTicTacToeRank'});
      }
      
    }
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.background-color{
  background: linear-gradient(120DEG, #2A1C52, #6648C4);
  background-image: url('../assets/background.png');
  background-size: 1920px 1080px;
  height: 100%;
  margin: 0;
  background-attachment: fixed;
}

.rectangle-drawGame{
  background-color: #6648C4 !important;
}

.text-tictactoe-name-yellow{
  color: #FFD033;
  font-size: 100px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 10px 10px #2A1C52;
  text-align: center;
}

.text-tictactoe-name-pink{
  color: #EB1750;
  font-size: 100px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 10px 10px #2A1C52;
  text-align: center;
}

.text-draw{
  color: #FFD033; 
  font-size: 50px !important;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 5px 5px #2A1C52;
  font-weight: bold;
  text-align: center !important;
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

.button-startGame{
  width: 70%;
  height: 150%;
  background-image: linear-gradient(to right, #F8598D 0%, #F87B64 51%, #F89D3B 100%);
  font-family: 'Press Start 2P', cursive;
}

.button-rank{
  width: 70%;
  height: 150%;
  background-image: linear-gradient(to right, #2CD57E 0%, #28BAB6 51%, #249FEE 100%);
  font-family: 'Press Start 2P', cursive;
}

.button-close{
  width: 20%;
  height: 150%;
  background: linear-gradient(60DEG, #F8598D, #F89D3B);
  background-attachment: fixed;
  font-family: 'Press Start 2P', cursive;
}

</style>