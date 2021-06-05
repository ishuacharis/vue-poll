
export const voteMutations = {
    
    setTotalVotes(state,{ credentials }) {
        state.totalVotes = credentials;
    },

    setHousemates(state,payload) {
        state.houseMates = payload.credentials
    },

    setUserRemainingVotes(state, payload) {
            if(payload.command === 'increase') state.totalVotes -= 10;
            if(payload.command === 'decrease') state.totalVotes += 10;
    },

    setUserVotesLeft(state, {command}){
        state.houseMates.map(houseMate => {
            if(houseMate.screen_name == command.screen_name) {
                houseMate = command
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