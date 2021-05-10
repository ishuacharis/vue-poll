import { eviction } from '@/routes';

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
    async setHousemates({dispatch, commit, state },{ type,credentials }) {
        let action =  type.split("/")[1];

        if(!state.houseMates) {
            dispatch({type: 'loading', credentials: true}, {root: true });
        
            try {
                const {response: { data } } = await eviction(credentials);
                commit({
                    type: action,
                    credentials: data
                });

            } catch (e) {
                dispatch({type: 'error', credentials: e.message}, {root: true });
            }
            dispatch({type: 'loading', credentials: false}, {root: true });
        }

        commit({
            type: action,
            credentials: state.houseMates
        })
        
    }

}; 