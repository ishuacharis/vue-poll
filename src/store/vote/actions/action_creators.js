import { INCREMENT_VOTE, ONVOTE_INCREMENT, ONVOTE_DECREMENT, SET_REMAINING_VOTES, SET_VOTES_LEFT } from './action_types';

export const incrementVote = (amount) => ({
    type: INCREMENT_VOTE,
    amount: amount
})
export const onVoteIncrement = (housemate) => ({
    type: ONVOTE_INCREMENT,
    housemate: housemate
})
export const onVoteDecrement = (housemate) => ({
    type: ONVOTE_DECREMENT,
    housemate: housemate
})
export const setRemainingVotes = (payload) => ({
    type: SET_REMAINING_VOTES,
    command: payload 
})

export const setVotesLeft = (payload) => ({
    type: SET_VOTES_LEFT,
    command: payload
})