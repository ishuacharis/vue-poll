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
    command: payload 
});

export const setUserVotesLeft = (payload) => ({
    type: SET_USER_VOTES_LEFT,
    command: payload
});

export const setHousemates = (payload) => ({
    type: SET_HOUSEMATES,
    credentials: payload
});

export const updateHouseMatesVote = (payload) => ({
    type: UPDATE_HOUSEMATES_VOTES,
    credentials: payload
});

export const clearAll = () => ({
    type: CLEAR_ALL,
});