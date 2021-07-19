import  { voteStates } from './vote_state';
import { voteActions } from './vote_action';
import { voteGetters } from './vote_getter';
import { voteMutations } from './vote_mutation';

const voteModule = {
    namespaced: true,
    state: voteStates,
    getters: voteGetters,
    actions: voteActions,
    mutations: voteMutations

};

export default voteModule;