
export const voteMutations = {

    incrementVote(state,payload) {
        state.totalVotes += payload.amount;
    },
    onVoteIncrement(state,payload) {
        if(state.votesLeft > 0 && state.votesLeft <= 100) {
            state.houseMates.map((houseMate) => {
                if(houseMate.name === payload.housemate.name) {
                    if(houseMate.voteCount >= 0 && payload.housemate.voteCount < 100) {
                        this.dispatch({
                            type: 'votes/setRemainingVotes',
                            command: 'increase'
                        });
                        this.dispatch({
                            type: 'votes/setVotesLeft',
                            command: 'increase'
                        });
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
                this.dispatch({
                    type: 'votes/setRemainingVotes',
                    command: 'decrease'
                });
                this.dispatch({
                    type: 'votes/setVotesLeft',
                    command: 'decrease'
                });
                houseMate.voteCount -= 10;
              }
            }
        })
    },
    setRemainingVotes(state, payload) {
        if(payload.command === 'increase') state.remainingVotes -= 10;
        if(payload.command === 'decrease') state.remainingVotes += 10;
    },
    setVotesLeft(state, {command}){
        if(command === 'increase')  state.votesLeft -= 10;
        if(command === 'decrease')  state.votesLeft += 10;
    }
};