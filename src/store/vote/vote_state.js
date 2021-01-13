import { totalVotes, houseMatesUpForEviction } from '../../data/data';

export const voteStates = () => {
    return{
        totalVotes: totalVotes,
        houseMates: houseMatesUpForEviction,
        remainingVotes: totalVotes,
        votesLeft: totalVotes
    }
};