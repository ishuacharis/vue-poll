

export const voteActions  = {

    incrementVote(context,payload){
        let type =  payload.type.split("/")[1]
        return context.commit({
            type: type,
            amount: payload.amount
        })
    },
    onVoteIncrement(context, payload) {
        let type =  payload.type.split('/')[1];

        return context.commit({
            type: type,
            housemate: payload.housemate
        })
    },
    onVoteDecrement(context, payload) {
        let type =  payload.type.split('/')[1];

        return context.commit({
            type: type,
            housemate: payload.housemate
        })
    },
    setRemainingVotes(context,payload) {
        console.log(payload)
        let type =  payload.type.split("/")[1]
        return context.commit({
            type: type,
            command: payload.command
        });
    },
    setVotesLeft(context,{type,command}) {
        let action =  type.split("/")[1]
        return context.commit({
            type: action,
            command: command
        });
        
    }

};