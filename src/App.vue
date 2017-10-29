<template>
<!-- initialize template for application component  -->
  <div>
    <!-- div/header for scoreboard -->
    <div class="scoreBoard">
      <!-- scoreboard for # of O wins -->
      <span>O has {{ wins.O }} wins</span>
      <h2>Score Board</h2>
      <!-- scoreboard for # of X wins -->
      <span>X has {{ wins.X }} wins</span>
    </div>
    <div id="app">
      <!-- div for match count -->
      <div id="details">
        <h1>Tic Tac Toe</h1>
        <h2>Match #{{ matches + 1 }}</h2>
      </div>
      <!-- inport grid component for game -->
      <grid></grid>
      <!-- render restart/clear button with onClick function -->
      <button class="restart" @click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
// import grid from components folder
import Grid from './components/Grid.vue'
// export application
export default {
  // attach grid component to app component
  components: { Grid },
  // assign name to component
  name: 'app',
  data () {
    // initialize matches and wins for each player at zero
    return {
      matches: 0,
      wins: {
        O: 0,
        X: 0
      }
    }
  },

  methods: {
    // create restart function for restart button onClick
    restart () {
      // activate cell clearing event
      Event.$emit('clearCell')
      // activate grid resetting event
      Event.$emit('gridReset')
      // increment matches by one
      this.matches++
    }
  },

  created () {
    // increase wins for respective winner by one
    Event.$on('win', winner => this.wins[winner]++)
  }
}
</script>

<style>
/*
pure CSS for application component
*/
body {
  background-color: #eee;
  color: #fff;
  font-family: 'Raleway', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
}

#app {
  margin: 0 auto;
  max-width: 300px;
  color: black;
}


h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3em;
}

.restart {
  background-color: #40bc6f;
  color: #fff;
  border: 5px solid #1f8446;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: 'Dosis', Helvetica, sans-serif;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0px;
  padding: 15px;
  width: 100%;

}

.restart:hover {
  background-color: #57d687;
  cursor: pointer;
}

.scoreBoard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15px;
  background-color: #e55b5b;
  box-shadow: 10px solid #fff;
  color: black;
  text-shadow: 1px 1px #302f30;
  padding: 20px;
  overflow-x: none;

}

.scoreBoard h2 {
  margin: 0px;
}

.scoreBoard span {
  float: right;
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;
}
</style>
