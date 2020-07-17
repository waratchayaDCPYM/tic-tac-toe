<template>
  <div class="background-color container-fluid" >
    <v-container style="height:100%;">

      <!-- dialog win -->
      <v-row justify="center" align="center">
        <v-dialog v-model="win" justify="center" persistent max-width="680px">
          <div>
            <v-card class="pa-12 rectangle-winGame">
              <p class="text-youWin text-xs-center">YOU WIN !!!</p>

              <v-card-text class="py-0">
                <v-col cols="12" class="pa-0">
                  <v-row justify="center" class="my-12">
                    <v-img src="@/assets/winners.png" class="image-winners" contain></v-img>
                  </v-row>

                  <v-row justify="center" class="mt-12 mb-6">
                    <p class="text-yourScore text-xs-center">YOUR SCORE : {{score}}</p>
                  </v-row>

                  <v-row justify="center" align="center" class="px-0">
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="6" class="px-0">
                      <v-text-field 
                      class="pa-0"
                      type="text" 
                      v-model="input.name" 
                      placeholder="Please Enter your name" 
                      solo rounded></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-col>
              </v-card-text>

              <v-card-actions class="px-0">              
                <v-spacer></v-spacer>
                <v-col cols="12" md="6" class="pa-0" align="center">
                  <v-btn x-large rounded dark class="button-playAgian" 
                  @click="main()" width="100%"
                  :disabled="input.name.length < 1">
                    OK
                  </v-btn>
                </v-col>
                <v-spacer></v-spacer>
              </v-card-actions>

            </v-card>
          </div>
        </v-dialog>
      </v-row>
      
      <!-- dialog draw -->
      <v-row justify="center" align="center">
        <v-dialog v-model="draw" justify="center" persistent max-width="680px">
          <div>
            <v-card class="pa-12 rectangle-winGame">
              <p class="text-youWin text-xs-center">DRAW</p>

              <v-card-text class="py-0">
                <v-row justify="center" class="my-12">
                    <v-img src="@/assets/draw.png" class="image-winners" contain></v-img>
                  </v-row>
              </v-card-text>

              <v-card-actions class="px-0">              
                <v-spacer></v-spacer>
                <v-col cols="6" md="6" class="pa-0 mx-1">
                  <v-btn x-large rounded dark width="100%" class="button-exit" @click="main()">
                    EXIT
                  </v-btn>
                </v-col>
                <v-col cols="6" md="6" class="pa-0 mx-1">
                  <v-btn x-large rounded dark width="100%" class="button-playAgian" @click="setInitial()">
                    PLAY AGAIN
                  </v-btn>
                </v-col>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </div>
        </v-dialog>
      </v-row>

      <!-- title -->
      <v-row align="center">
        <v-col cols="12" md="12" class="mx-3 my-12">
          <v-row justify="center" align="center" >
            <p class="text-tictactoe-name-yellow">TIC </p>
            <p class="text-tictactoe-name-pink">TAC </p>
            <p class="text-tictactoe-name-yellow">TOE</p>
          </v-row>
        </v-col>
      </v-row>

      <!-- playground -->
      <v-row align="center">
        <v-col cols="12" md="12" class="mx-3 my-12">
          <v-row justify="center" align="center" >
            <v-card class="rectangle-game"> 
              <v-row justify="center" align="center" class="mx-0" v-if="re_render">
                <v-col cols="3" md="3" class="px-0" justify="center" align="center"
                 v-for="item in block" :key="item.id">
                  <v-btn depressed
                    :disabled="item.id-1 === randomDisabledBlock"
                    :class="item.winStatus ? 'button-win-block' : item.owner === 'empty' ? 'button-block' : item.owner === 'X' ? 'button-block-x' : 'button-block-o'"                   
                    @click="selectedBlock(item)">
                      <p v-if = "item.owner !== 'empty'" 
                      :class="item.winStatus ? 'text-owner-win text-xs-center mt-3' : item.owner === 'X' ? 'text-owner-x text-xs-center mt-3' : 'text-owner-o text-xs-center mt-3'">
                        {{item.owner}}
                      </p>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
  export default {
    data:() => ({
      input: 
      {
        name : "",
        playerScore : ""
      },
      checkTurn: true,
      currentPlayer: 'x',
      block: [],
      re_render: true,
      score: 0,
      draw:false,
      win:false,
      winner: '',
      winRules: [
        [0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15], // Row Rule
        [0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15], // Column Rule
        [0,5,10,15], [3,6,9,12] // Diagonals Rule
      ],
      randomDisabledBlock:0
    }),

    methods: {

      main() {
          
        if(this.input.name.length > 0 && this.input.playerScore >= 0){
          this.$store.dispatch("handle_winner", this.input);
          
        }
        this.$router.push({name:'ShipnityTicTacToeMain'});
      },

      setInitial() {
        this.re_render = false;
        this.block =  [];
        this.score = 0;
        this.draw =false;
        this.win =false;
        this.winner = '';
        this.currentPlayer = 'x';
        this.randomDisabledBlock = Math.floor(Math.random() * 16);
        let id = 1;
        for (let index = 1; index <= 4; index++) {
          for (let j = 1; j <= 4; j++) {
            let data = {
              id: id,
              owner: 'empty',
              winStatus: false,
            }
            id = id + 1;
            this.block.push(data);
          }
        }
        this.re_render = true;
      },

      selectedBlock(item) {
        this.re_render = false;
        // player can select this block
        if (item.owner === 'empty') {
          if (this.checkTurn) {
            this.currentPlayer = 'X';
          } else {
            this.currentPlayer = 'O';
          }

          this.block[item.id - 1] = {
            id: item.id,
            owner: this.currentPlayer,
            winStatus: false,
          }
          // console.log('Play > ', this.block[item.id - 1]);

          // check win
          this.checkWin(this.block);

          // check draw
          this.checkDraw(this.block);

          this.checkTurn = !this.checkTurn;          
        }
        this.re_render = true;   
      },

      checkWin(item) {
        for (let index = 0; index < this.winRules.length; index++) {
          let condition = this.winRules[index];
          // console.log(condition[0], ' | ', condition[1], ' | ', condition[2], ' | ', condition[3]);
          // console.log('# ', item[condition[0]].owner, ' - ', item[condition[1]].owner, ' - ', item[condition[2]].owner, ' - ', item[condition[3]].owner);
          if (this.checkEqualPlayer(item[condition[0]].owner, item[condition[1]].owner, item[condition[2]].owner, item[condition[3]].owner)) {
            
            if (item[condition[0]].owner !== 'empty') {
              this.win = true;
              this.winner = item[condition[0]].owner;
              // console.log('WINNER IS ', item[condition[0]].owner);
              // console.log('WINNER RULE IS ', condition);
              
              for (let j = 0; j < condition.length; j++) {
                this.block[condition[j]] = {
                  id: condition[j] + 1,
                  owner: item[condition[0]].owner,
                  winStatus: true
                }
              }

              //count score
              for (let index = 0; index < item.length; index++) {
                if (item[index].owner === 'empty') {
                  this.score = this.score+1;
                }
              }
              this.input.playerScore = this.score-1;
              this.score = this.score-1;
              
              break;
            }
          } 
        } // end for

        // console.log('TABLE: ', this.block);       
      },

      checkDraw(item) {
        let temp = 0;
        for (let index = 0; index < item.length; index++) {
          if (item[index].owner !== 'empty') {
            temp = temp+1;
          }
          if (temp == 15){
            this.draw = true;
          }
        } // end for

        // console.log('TABLE: ', this.block);       
      },

      checkEqualPlayer(order_1, order_2, order_3, order_4) {
        if (order_1 === order_2 && order_2 === order_3 && order_3 === order_4) {
          return true;
        } else {
          return false;
        }
      },

      // ShipnityTicTacToeMain
      // ShipnityTicTacToeGame
    
    },

    mounted () {
      this.setInitial();
      
    }, //mounted

  } //export data
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

.background-color{
  background: linear-gradient(120DEG, #2A1C52, #6648C4);
  background-image: url('D:/Shipnity_XO_game/src/assets/background.png');
  background-size: 1920px 1080px;
  height: 100%;
  margin: 0;
  background-attachment: fixed;
}

.rectangle-game{
  width: 530px;
  height: 525px;
  background-color: #6648C4 !important;
}

.rectangle-winGame{
  background-color: #6648C4 !important;
  background-image: url('D:/Shipnity_XO_game/src/assets/background_winners.png');
  background-size: 700px 800px;
}

.image-winners{
  width: 300px;
  height: 300px;
  object-fit: contain;
}

.text-tictactoe-name-yellow{
  color: #FFD033;
  font-size: 50px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 10px 10px #2A1C52;
  text-align: center;
}

.text-tictactoe-name-pink{
  color: #EB1750;
  font-size: 50px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 10px 10px #2A1C52;
  text-align: center;
}

.text-owner-x{
  color: #EB1750;
  font-size: 70px;
  font-weight: bold;
  font-family: 'Fredoka One', cursive;
  text-align: center;
}

.text-owner-o{
  color: #FFD033;
  font-size: 70px;
  font-weight: bold;
  font-family: 'Fredoka One', cursive;
  text-align: center;
}

.text-owner-win{
  color: white;
  font-size: 70px;
  font-weight: bold;
  font-family: 'Fredoka One', cursive;
  text-align: center;
}

.text-youWin{
  color: #FFD033; 
  font-size: 50px !important;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 5px 5px #2A1C52;
  font-weight: bold;
  text-align: center !important;
}

.text-yourScore{
  color: #FFD033; 
  font-size: 25px !important;
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

.button-playAgian{
  background-image: linear-gradient(to right, #2CD57E 0%, #28BAB6 51%, #249FEE 100%);
  font-family: 'Press Start 2P', cursive;
}

.button-exit{
  background-image: linear-gradient(to right, #F8598D 0%, #F87B64 51%, #F89D3B 100%);
  font-family: 'Press Start 2P', cursive;
}

.button-ok{
  background-image: linear-gradient(to right, #D82A88 0%, #BF2EBD 51%, #A632F2 100%);
  font-family: 'Press Start 2P', cursive;
}

.button-block{
  width: 106.25px;
  min-width: 106.25px;
  height: 106.25px;
  min-height: 106.25px;
  background-color: #332267 !important;
}

.button-win-block{
  width: 106.25px;
  min-width: 106.25px;
  height: 106.25px;
  min-height: 106.25px;
  background-color: #27D075 !important;
}

.button-block-x{
  width: 106.25px;
  min-width: 106.25px;
  height: 106.25px;
  min-height: 106.25px;
  background-color: #332267 !important;
  font-family: 'Press Start 2P', cursive;
}

.button-block-o{
  width: 106.25px;
  min-width: 106.25px;
  height: 106.25px;
  min-height: 106.25px;
  background-color: #332267 !important;
  font-family: 'Press Start 2P', cursive
}

</style>