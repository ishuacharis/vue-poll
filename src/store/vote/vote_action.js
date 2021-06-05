import { eviction, vote } from '@/routes';

export const voteActions  = {

    setTotalVotes({ commit }, { type, payload }) {
        let action =  type.split("/")[1]
        commit({
            type: action,
            credentials: payload
        });
    },

    setUserRemainingVotes({ commit },{type, payload}) {
        
        let action =  type.split("/")[1];

        return commit({
            type: action,
            credentials: payload
        });
    },
    
    setUserVotesLeft({ commit }, { type,payload }) {
        let action =  type.split("/")[1]
        return commit({
            type: action,
            credentials: payload
        });
    },
    
    async setHousemates({dispatch, commit, state },{ type,payload }) {
        let action =  type.split("/")[1];

        if(!state.houseMates) {
            dispatch({type: 'loading', credentials: true}, {root: true });
        
            try {
                const {response: { data } } = await eviction(payload);
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
        
    async updateHouseMatesVote({ dispatch, commit }, { type, payload }) {
        let action =  type.split("/")[1];
        const {  body  }  = payload;
        dispatch({ type: 'loading', credentials: true }, { root: true });

        try {
            
            const { response: { success } } = await vote(payload);
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
    },

    clearAll({ commit }, { type }) {
        let action =  type.split("/")[1];
        commit({
            type:  action,
        })
    }

}; 