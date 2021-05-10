import { INCREMENT_VOTE, 
    ONVOTE_INCREMENT, 
    ONVOTE_DECREMENT, 
    SET_REMAINING_VOTES, 
    SET_VOTES_LEFT,
    SET_HOUSEMATES,
    SET_USER_REMAINING_VOTES,
    SET_TOTAL_VOTES,
    SET_USER_VOTES_LEFT } from './action_types';

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
export const setTotalVotes =  (payload) => ({
    type: SET_TOTAL_VOTES,
    credentials: payload
});

export const setRemainingVotes = (payload) => ({
    type: SET_REMAINING_VOTES,
    command: payload 
})

export const setVotesLeft = (payload) => ({
    type: SET_VOTES_LEFT,
    command: payload
})
export const setUserRemainingVotes = (payload) => ({
    type: SET_USER_REMAINING_VOTES,
    command: payload 
})

export const setUserVotesLeft = (payload) => ({
    type: SET_USER_VOTES_LEFT,
    command: payload
})

export const setHousemates = (payload) => ({
    type: SET_HOUSEMATES,
    credentials: payload
})