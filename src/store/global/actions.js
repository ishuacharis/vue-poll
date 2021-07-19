export let actions = {

    increment({ commit  }, { type, amount  }) {
        commit({
            type: type,
            amount: amount
        });
    },
    loading({ commit }, { type, credentials }) {   
        commit({
            type: type,
            credentials: credentials
        })
    },
    error({ commit }, { type, credentials }) {   
        commit({
            type: type,
            credentials: credentials
        })
    },
}

