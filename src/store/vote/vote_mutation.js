
export const voteMutations = {
    
    setTotalVotes(state,{ credentials }) {
        state.totalVotes = credentials;
    },

    setHousemates(state,{ credentials }) {
        state.houseMates = credentials
    },

    setUserRemainingVotes(state, { credentials }) {
            if(credentials === 'increase') state.totalVotes -= 10;
            if(credentials === 'decrease') state.totalVotes += 10;
    },

    setUserVotesLeft(state, { credentials }){
        state.houseMates.map(houseMate => {
            if(houseMate.screen_name == credentials.screen_name) {
                houseMate = credentials
            }
        })
    },

    updateHouseMatesVote(state, { credentials: { housemate_id } } ) {
        
        state.houseMates.map(houseMate => {
            if(houseMate.id == housemate_id ) {
                
                houseMate.voteCount = 0
            }
        })
    },

    clearAll(state) {
        state.totalVotes = null;
        state.houseMates = null
    }
};