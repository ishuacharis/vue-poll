import { totalVotes, houseMatesUpForEviction } from '../../data/data';

export const voteStates = () => {
    return{
        totalVotes: totalVotes,
        houseMates: JSON.parse(localStorage.getItem('HOUSEMATES')) || houseMatesUpForEviction,
        remainingVotes: totalVotes,
        votesLeft: totalVotes
    }
};