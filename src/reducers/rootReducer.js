const initState = {
    selected_room : "",
    //toggle: ""
    rooms : [
        {roomNo: "C314", deviceId: "asdfasdf", status: true},
        {roomNo: "C315", deviceId: "qweckjso", status: false},
        {roomNo: "C313", deviceId: "unabdlfl ", status: true},
        {roomNo: "None", deviceId: "", status: false}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);

    if(action.type === "SET_SELECTED") {
        let new_room = action.roomNo;
        //console.log(new_room);
        // console.log("State before selecting room: ",state);
        return {
            ...state,
            selected_room : new_room
        }
    }
    else if(action.type === "SET_ROOMS") {
        let new_room_list = action.roomList;
        return {
            ...state,
            rooms : new_room_list
        }
    }
    else if(action.type === "TOGGLE_SWITCH") {
        // console.log("New state: ", state);
        
        // console.log("Selected room: ",action.roomNo);
        // console.log("Current state: ",state);
        let temp_rooms = state.rooms;
        
        //DONT DELETE THESE COMMENTS. THEY EXPOSE A CHROME CONSOLE BUG
        // console.log(temp_rooms[0]);
        // console.log("Temp array: ", temp_rooms)
        // console.log(temp_rooms[0].status);
        
        let arr_length = temp_rooms.length;
        console.log("Array length: ",arr_length);

        for(let i=0;i<arr_length;i++) {
            if(temp_rooms[i].roomNo === action.roomNo) {
                //console.log("Room number(in loop): ", temp_rooms[i].roomNo);
                //console.log("Switch status pre toggle: ", temp_rooms[i].status);
                temp_rooms[i].status = !(temp_rooms[i].status);
                //console.log("Switch status post toggle: ", temp_rooms[i].status);
            }
        }
        // console.log("New Temp array: ", temp_rooms);
        return {
            ...state,
            temp_rooms
        }
    }

    return state;
}

export default rootReducer;