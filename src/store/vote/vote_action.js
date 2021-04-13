import routes from '@/routes';
const { eviction } = routes();

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
    },
    setUserRemainingVotes(context,payload) {
        
        let type =  payload.type.split("/")[1]
        return context.commit({
            type: type,
            command: payload.command
        });
    },
    setUserVotesLeft(context,{type,command}) {
        let action =  type.split("/")[1]
        return context.commit({
            type: action,
            command: command
        });
    },
    async setHousemates({dispatch, commit },{ type,credentials }) {

        dispatch({type: 'loading', credentials: true}, {root: true });
        
        let action =  type.split("/")[1];
        const {response: { data } } = await eviction(credentials);
        commit({
            type: action,
            credentials: data
        });
        dispatch({type: 'loading', credentials: false}, {root: true });
    }

}; 