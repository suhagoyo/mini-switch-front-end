const initState = {
    selected : "",
    rooms : [
        {room_number: "C314", device_mac: "asdfasdf", switch_state: true},
        {room_number: "C315", device_mac: "qweckjso", switch_state: false},
        {room_number: "C313", device_mac: "unabdlfl ", switch_state: true}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;