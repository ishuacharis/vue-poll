export let mutations = {
    increment: (state,{ amount }) => state.count += amount ,
    loading: (state, { credentials }) => state.isLoading = credentials,
    error: (state, { credentials }) => state.error = credentials,
}