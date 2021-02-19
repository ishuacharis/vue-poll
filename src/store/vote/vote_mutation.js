import { setRemainingVotes, setVotesLeft } from './actions/action_creators';

export const voteMutations = {

    incrementVote(state,payload) {
        state.totalVotes += payload.amount;
    },
    onVoteIncrement(state,payload) {
        if(state.votesLeft > 0 && state.votesLeft <= 100) {
            state.houseMates.map((houseMate) => {
                if(houseMate.name === payload.housemate.name) {
                    if(houseMate.voteCount >= 0 && payload.housemate.voteCount < 100) {
                        this.dispatch(setRemainingVotes('increase'));
                        this.dispatch(setVotesLeft('increase'));
                        houseMate.voteCount += 10;
                    }
                }
            })
        }
    },
    onVoteDecrement(state,payload) {
        state.houseMates.map((houseMate) => {
            if(houseMate.name === payload.housemate.name) {
              if(houseMate.voteCount > 0 && payload.housemate.voteCount <= 100) {
                this.dispatch(setRemainingVotes('decrease'));
                this.dispatch(setVotesLeft('decrease'));
                houseMate.voteCount -= 10;
              }
            }
        })
    },
    setHousemates(state,payload) {
        state.houseMates = payload.houseMates
    },
    setRemainingVotes(state, payload) {
        if(payload.command === 'increase') state.remainingVotes -= 10;
        if(payload.command === 'decrease') state.remainingVotes += 10;
    },
    setVotesLeft(state, {command}){
        if(command === 'increase')  state.votesLeft -= 10;
        if(command === 'decrease')  state.votesLeft += 10;
    },

    setUserRemainingVotes(state, payload) {
      
        //if(state.votesLeft > 0 && state.votesLeft <= 100){ 
            if(payload.command === 'increase') state.remainingVotes -= 10;
            if(payload.command === 'decrease') state.remainingVotes += 10;
        //}
        
    },
    setUserVotesLeft(state, {command}){
        //if(state.votesLeft > 0 && state.votesLeft <= 100){ 
            if(command === 'increase')  state.votesLeft -= 10;
            if(command === 'decrease')  state.votesLeft += 10;
        //}
        
    }
};