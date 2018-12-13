export function registerText( values ){

    let re = /([a-zA-Z0-9\s\,\-\;]+)[\.\?!]/g;
    let sentences = re[Symbol.match]( values.originalTextInput ); 

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