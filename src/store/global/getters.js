export let getters  = {
    count(state) {
        return state.count + 20;
    },
    todos(state) {
        return state.todos;
    }
}