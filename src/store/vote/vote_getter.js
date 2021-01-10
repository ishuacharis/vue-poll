export let voteGetters = {
    totalVotes(state) {
        return state.totalVotes;
    },
    houseMates(state){
        return state.houseMates
    },

    remainingVotes(state) {
        return state.remainingVotes
    },
    votesLeft(state) {
        return state.votesLeft
    }
};