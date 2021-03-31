import { totalVotes, houseMatesUpForEviction } from '../../data/data';

export const voteStates = () => {
    return{
        totalVotes: JSON.parse(localStorage.getItem('VOTES')) || totalVotes,
        houseMates: JSON.parse(localStorage.getItem('HOUSEMATES') ) || houseMatesUpForEviction,
        remainingVotes: JSON.parse(localStorage.getItem('VOTES')) || totalVotes,
        votesLeft: JSON.parse(localStorage.getItem('VOTES'))
    }
}; 