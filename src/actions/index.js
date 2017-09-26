import { DISPLAY_DATA } from './types';
import { feed } from '../config';


/**
* Action to display data on first mount
* @method displayData
* @return {Object} object to be sent to the reducer
*                   The payload is data split
*/
export function displayData() {
    const { restaurants } = feed;
    return {
        type: DISPLAY_DATA,
        payload: restaurants
    };
}
