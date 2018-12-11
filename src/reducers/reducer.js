const initialState = {
    title : "", 
    originalText : "",
    sentences : []
}

const Reducer = ( state = initialState, action) => {

    switch( action.type ){

        case( 'REGISTER_TEXT' ): { 
            return{
                ...state,
                originalText : action.data.originalTextInput,
                title : action.data.textTitleInput
            }
        }

        default:
            return { ...state }
    }
}

export default Reducer