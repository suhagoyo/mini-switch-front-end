import * as constants from './constants';

export function toggle_switch(roomNo)  {
    return {
        type: constants.TOGGLE_SWITCH,
        roomNo: roomNo
    }
}
export function setSelected(roomNo) {
    return {
        type: constants.SET_SELECTED,
        roomNo: roomNo
    }
}
export function setRoomList(roomList) {
    return {
        type: constants.SET_ROOMS,
        roomList: roomList
    }
}