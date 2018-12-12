export function registerText( values ){

    const sentences = values.originalTextInput.split(  )

/* need to add in the working RegEx */

    console.log( "in actions with sentences: ", sentences)



    return(
        { 
        type : 'REGISTER_TEXT',
        text : values.originalTextInput,
        sentences : sentences,
        title : values.textTitleInput
        } 
    )
}