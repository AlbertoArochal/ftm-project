import { Action, State } from "../context/gallerycontext";

export function galleryReducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_IMAGES":
            return { ...state, images: [...state.images, ...action.payload] };
        case "CLEAR_IMAGES":
            return { ...state, images: [] };
        default:
            return state;
    }
}
