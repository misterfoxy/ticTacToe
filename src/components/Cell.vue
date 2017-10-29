<!-- render template for each cells-->
<template>
	<!-- create cell using td element, add onclick strike function to render X or O -->
	<td class="cell" @click="strike">{{ mark }}</td>
</template>

<script>
	// export cell file
	export default {
		// assign props of mark name
		props: ['name'],
		data () {
			return {
				// if not frozen, player can strike a mark
 				frozen: false,
				// holds either X or O to be displayed in the td
				mark: ''
			}
		},

		methods: {
			strike () {
				if (! this.frozen) {
					// if not frozen, active player will leave mark on screen
					this.mark = this.$parent.activePlayer
					// set cell to frozen to disable future strikes until reset
					this.frozen = true

					// emits an event to Grid component that a mark is placed
					Event.$emit('strike', this.name)
				}
			}
		},

		created () {
				// when clearCell is called
			Event.$on('clearCell', () => {
				// set cell to empty
				this.mark = ''
				// unfreeze cell
				this.frozen = false
			})
			// on freeze, set cell to frozen
			Event.$on('freeze', () => this.frozen = true)
		}
	}
</script>

<style>
/*
	Pure CSS for cell template
*/
.cell {
  width: 33.333%;
  height: 90px;
  border: 6px solid #2c3e50;
  font-size: 3.5em;
  font-family: 'Comfortaa', cursive;
}

.cell:hover {
	background-color: #43576b;
}

.cell::after {
  content: '';
  display: block;
}

.cell:first-of-type {
  border-left-color: transparent;
  border-top-color: transparent;
}

.cell:nth-of-type(2) {
  border-top-color: transparent;
}

.cell:nth-of-type(3) {
  border-right-color: transparent;
  border-top-color: transparent;
}

tr:nth-of-type(3) .cell {
  border-bottom-color: transparent;
}
</style>
