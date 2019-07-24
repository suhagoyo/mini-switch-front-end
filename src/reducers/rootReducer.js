import * as constants from '../constants';

const initState = {
    selected_room : "",
    rooms : [
        {roomNo: "C314", deviceId: "asdfasdf", status: true},
        {roomNo: "C315", deviceId: "qweckjso", status: false},
        {roomNo: "C313", deviceId: "unabdlfl ", status: true},
        {roomNo: "None", deviceId: "", status: false}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);

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
        
        //DONT DELETE THESE COMMENTS. THEY EXPOSE A CHROME CONSOLE BUG
        // console.log(temp_rooms[0]);
        // console.log("Temp array: ", temp_rooms)
        // console.log(temp_rooms[0].status);
        
        let arr_length = temp_rooms.length;
        console.log("Array length: ",arr_length);

        for(let i=0;i<arr_length;i++) {
            if(temp_rooms[i].roomNo === action.roomNo) {
                temp_rooms[i].status = !(temp_rooms[i].status);
            }
        }
        return {
            ...state,
            temp_rooms
        }
    }

    return state;
}

export default rootReducer;