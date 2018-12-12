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
                originalText : action.text,
                title : action.title,
                sentences : action.sentences
            }
        }

        default:
            return { ...state }
    }
}

export default Reducer