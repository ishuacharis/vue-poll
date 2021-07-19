export let getters  = {
    count: (state) => state.count + 20,
    
    todos: (state) => state.todos,
    
    loading: (state) => state.isLoading,

    error: (state) => state.error,
}