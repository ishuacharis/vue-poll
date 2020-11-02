import {ref} from 'vue'
import {totalVotes, houseMatesUpForEviction,} from '../data/data.js'
export default  function() {
  const totalvotes = ref(totalVotes)
  const houseMates= ref(houseMatesUpForEviction)
  const remainingvotes = ref(totalVotes)
  const votesLeft  = ref(totalVotes)

  const setRemainingVotes = (command) => {

    if(command === 'increase') return remainingvotes.value -= 10
    if(command === 'decrease') return remainingvotes.value += 10
  }
  const setVotesLeft = (command) => {
    if(command === 'increase') return votesLeft.value -= 10
    if(command === 'decrease') return votesLeft.value += 10
  }
  const onVoteIncrement = (housemate) => {
    console.log(housemate)
    if(votesLeft.value > 0 && votesLeft.value <= 100) {
      console.log(housemate)
      houseMates.value.map((houseMate) => {
        if(houseMate.name === housemate.name) {
          if(houseMate.voteCount >= 0 && housemate.voteCount < 100) {
            setRemainingVotes('increase')
            setVotesLeft('increase')
            houseMate.voteCount += 10
          }
        }
      })
    }
  }
  const onVoteDecrement = (housemate) => {
    houseMates.value.map((houseMate) => {
      if(houseMate.name === housemate.name) {
        if(houseMate.voteCount > 0 && housemate.voteCount <= 100) {
          setRemainingVotes('decrease')
          setVotesLeft('decrease')
          houseMate.voteCount -= 10
        }
      }
    })
  }
  return  {
     totalvotes,
     houseMates,
     remainingvotes,
     votesLeft,
     setRemainingVotes,
     setVotesLeft,
     onVoteIncrement,
     onVoteDecrement,

  }
}
