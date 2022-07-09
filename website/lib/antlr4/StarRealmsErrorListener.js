import antlr4 from 'antlr4';


export default class StarRealmsErrorListener extends antlr4.error.ErrorListener {

    constructor() {
        super();
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e){
        //console.log("some error was raised")
        return msg
    }
}