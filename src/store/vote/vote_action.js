import { eviction, vote } from '@/routes';

export const voteActions  = {

    incrementVote(context,payload){
        let type =  payload.type.split("/")[1]
        return context.commit({
            type: type,
            amount: payload.amount
        })
    },
    onVoteIncrement({commit}, payload) {
      
        let type =  payload.type.split('/')[1];

        return commit({
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
    setTotalVotes ({ commit }, { type, credentials }) {
        let action = type.split("/")[1]
        commit({
            type: action,
            credentials:  credentials
        })
    },
    setRemainingVotes({ commit },payload) {
        let type =  payload.type.split("/")[1]
        commit({
            type: type,
            command: payload.command
        });
    },
    setVotesLeft({ commit },{type,command}) {
        let action =  type.split("/")[1]
        return commit({
            type: action,
            command: command
        });
    },
    setUserRemainingVotes({ commit },payload) {
        
        let type =  payload.type.split("/")[1]
        return commit({
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
        } else{
            dispatch({type: 'error', credentials: null}, {root: true });
            commit({
                type: action,
                credentials: state.houseMates
            })
        }
    },
        
    async updateHouseMatesVote({ dispatch, commit }, { type, credentials }) {
        let action =  type.split("/")[1];
        const {  body  }  = credentials;
        dispatch({ type: 'loading', credentials: true }, { root: true });

        try {
            
            const { response: { success } } = await vote(credentials);
            console.log(success);

            commit({
                type: action,
                credentials: body,
            })
            dispatch({ type: 'loading', credentials: false }, { root: true });

        } catch (e) {
            dispatch({ type: 'error', credentials: e.message}, {root: true })
            dispatch({ type: 'loading', credentials: false }, { root: true });
        }
    }

}; 