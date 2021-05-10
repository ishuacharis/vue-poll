export let voteGetters = {
    totalVotes: (state) => state.totalVotes,
    
    houseMates: (state) => state.houseMates,

    remainingVotes: (state) => state.totalVotes,
    
    votesLeft: (state) => state.totalVotes
};