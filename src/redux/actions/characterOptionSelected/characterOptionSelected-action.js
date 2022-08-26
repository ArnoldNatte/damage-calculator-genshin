import { OPTION_SELECTED } from './characterOptionSelected-action-type';

export default function CharactersOptionSelected(selected){
    return {
        type: OPTION_SELECTED,
        payload: selected
    }
}
