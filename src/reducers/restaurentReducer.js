import { DISPLAY_DATA } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case DISPLAY_DATA:
            return [...action.payload];
    }
    return state
}
