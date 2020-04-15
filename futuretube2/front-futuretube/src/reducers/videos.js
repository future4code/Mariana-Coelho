const initialState = {
    videos: [1]
}

export default function videos (state = initialState, action) {
    switch(action.type){
        case 'STORE_VIDEOS':
            return {...state, videos: action.payload.videos}
        default: 
        return state;
    }
}