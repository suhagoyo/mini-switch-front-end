const initState = {
    //selected : false,
    selected_room : "",
    rooms : [
        {room_number: "C314", device_mac: "asdfasdf", switch_state: true},
        {room_number: "C315", device_mac: "qweckjso", switch_state: false},
        {room_number: "C313", device_mac: "unabdlfl ", switch_state: true},
        {room_number: "None", device_mac: "", switch_state: false}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);

    if(action.type === "SET_SELECTED") {
        // let new_room;
        // if(action.room_number!=="None")
        //     new_room = "";
        // else
        let new_room = action.room_number;
        console.log(new_room);
        return {
            ...state,
            selected_room : new_room
        }
    }

    return state;
}

export default rootReducer;