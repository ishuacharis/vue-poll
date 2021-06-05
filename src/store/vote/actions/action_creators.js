import { 
    CLEAR_ALL,
    SET_HOUSEMATES,
    SET_TOTAL_VOTES,
    SET_USER_REMAINING_VOTES,
    SET_USER_VOTES_LEFT,
    UPDATE_HOUSEMATES_VOTES 
} from './action_types';

export const setTotalVotes = (payload) => ({
    type: SET_TOTAL_VOTES,
    payload: payload 
});

export const setUserRemainingVotes = (payload) => ({
    type: SET_USER_REMAINING_VOTES,
    payload: payload 
});

export const setUserVotesLeft = (payload) => ({
    type: SET_USER_VOTES_LEFT,
    payload: payload
});

export const setHousemates = (payload) => ({
    type: SET_HOUSEMATES,
    payload: payload
});

export const updateHouseMatesVote = (payload) => ({
    type: UPDATE_HOUSEMATES_VOTES,
    payload: payload
});

export const clearAll = () => ({
    type: CLEAR_ALL,
});