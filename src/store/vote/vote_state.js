import { totalVotes, } from '../../data/data';

//houseMates: JSON.parse(localStorage.getItem('HOUSEMATES') ) || houseMatesUpForEviction,
export const voteStates = () => ({
    totalVotes: JSON.parse(localStorage.getItem('VOTES')) || totalVotes,
    houseMates: null,
    remainingVotes: JSON.parse(localStorage.getItem('VOTES')) || totalVotes,
    votesLeft: JSON.parse(localStorage.getItem('VOTES'))
}); 