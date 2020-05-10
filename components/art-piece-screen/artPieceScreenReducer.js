const initialState = {
    artPieces: [],
    title: '',
    id: null
};

export const artPieceScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case('GET_ALL_ART_OBJECTS'):
            return {
                ...state,
                artPieces: action.payload
            }
        case('GET_ALL_ART_OBJECTS_FAIL'):
            return {
                ...state,
                artPieces: []
            }
        case('SET_ART_PIECE'):
            return {
                ...state,
                title: action.payload.title,
                id: action.payload.id
            }
        case("RESET_ART_PIECE"):
            return initialState;
        default:
            return state;
    }
}