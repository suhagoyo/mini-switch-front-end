import * as constants from '../constants';
import { toggleSwitch } from '../APICalls';

const initState = {
    toggle_time : "",
    selected_room : "",
    rooms : [
        {roomNo: "C314", deviceId: "asdfasdf", status: true},
        {roomNo: "C315", deviceId: "qweckjso", status: false},
        {roomNo: "C313", deviceId: "unabdlfl ", status: true},
        {roomNo: "None", deviceId: "", status: false}
    ]
}

const rootReducer = (state = initState, action) => {
    // console.log(action);

    if(action.type === constants.SET_SELECTED) {
        let new_room = action.roomNo;
        return {
            ...state,
            selected_room : new_room
        }
    }
    else if(action.type === constants.SET_ROOMS) {
        let new_room_list = action.roomList;
        return {
            ...state,
            rooms : new_room_list
        }
    }
    else if(action.type === constants.TOGGLE_SWITCH) {
        let temp_rooms = state.rooms;
        
        //DONT DELETE THE COMMENTS BELOW THIS. THEY EXPOSE A CHROME CONSOLE BUG
        // console.log(temp_rooms[0]);
        // console.log("Temp array: ", temp_rooms)
        // console.log(temp_rooms[0].status);
        //DON'T DELETE THE COMMENTS ABOVE THIS. THEY EXPOSE A CHROME CONSOLE BUG

        let arr_length = temp_rooms.length;

        let index;
        for(let i=0;i<arr_length;i++) {
            if(temp_rooms[i].roomNo === action.roomNo) {
                temp_rooms[i].desiredSwitchStatus = !(temp_rooms[i].desiredSwitchStatus);
                index = i;
            }
        }
        let ret_obj = temp_rooms[index];

        toggleSwitch(ret_obj);
        
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return {
            ...state,
            toggle_time : time
        } 
    }

    return state;
}

export default rootReducer;