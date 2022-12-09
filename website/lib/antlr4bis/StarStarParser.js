// Generated from StarStar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import StarStarListener from './StarStarListener.js';
import StarStarVisitor from './StarStarVisitor.js';

const serializedATN = [4,1,65,361,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,4,0,78,8,0,11,0,12,0,79,1,0,1,0,1,1,
4,1,85,8,1,11,1,12,1,86,1,1,3,1,90,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,107,8,2,1,3,1,3,5,3,111,8,3,10,3,12,3,114,
9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,122,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
3,5,132,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,4,6,141,8,6,11,6,12,6,142,1,7,1,
7,1,7,3,7,148,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,161,8,
8,1,8,4,8,164,8,8,11,8,12,8,165,1,8,1,8,1,9,1,9,1,9,1,9,3,9,174,8,9,1,9,
1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,189,8,11,
1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,
15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,
20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,260,8,24,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
29,1,29,1,29,4,29,309,8,29,11,29,12,29,310,1,29,1,29,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,3,35,
347,8,35,1,35,4,35,350,8,35,11,35,12,35,351,1,36,4,36,355,8,36,11,36,12,
36,356,1,37,1,37,1,37,0,0,38,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,0,3,2,
0,60,60,65,65,2,0,60,60,64,65,3,0,5,16,18,52,61,61,372,0,77,1,0,0,0,2,84,
1,0,0,0,4,106,1,0,0,0,6,108,1,0,0,0,8,121,1,0,0,0,10,131,1,0,0,0,12,140,
1,0,0,0,14,144,1,0,0,0,16,157,1,0,0,0,18,169,1,0,0,0,20,178,1,0,0,0,22,182,
1,0,0,0,24,190,1,0,0,0,26,195,1,0,0,0,28,199,1,0,0,0,30,203,1,0,0,0,32,207,
1,0,0,0,34,211,1,0,0,0,36,217,1,0,0,0,38,227,1,0,0,0,40,231,1,0,0,0,42,235,
1,0,0,0,44,239,1,0,0,0,46,245,1,0,0,0,48,259,1,0,0,0,50,261,1,0,0,0,52,270,
1,0,0,0,54,282,1,0,0,0,56,296,1,0,0,0,58,305,1,0,0,0,60,314,1,0,0,0,62,321,
1,0,0,0,64,327,1,0,0,0,66,336,1,0,0,0,68,339,1,0,0,0,70,349,1,0,0,0,72,354,
1,0,0,0,74,358,1,0,0,0,76,78,3,2,1,0,77,76,1,0,0,0,78,79,1,0,0,0,79,77,1,
0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,5,0,0,1,82,1,1,0,0,0,83,85,3,4,2,
0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,
88,90,3,46,23,0,89,88,1,0,0,0,89,90,1,0,0,0,90,3,1,0,0,0,91,107,3,32,16,
0,92,107,3,20,10,0,93,107,3,30,15,0,94,107,3,6,3,0,95,107,3,14,7,0,96,107,
3,68,34,0,97,107,3,64,32,0,98,107,3,44,22,0,99,107,3,22,11,0,100,107,3,28,
14,0,101,107,3,60,30,0,102,107,3,62,31,0,103,104,3,12,6,0,104,105,5,63,0,
0,105,107,1,0,0,0,106,91,1,0,0,0,106,92,1,0,0,0,106,93,1,0,0,0,106,94,1,
0,0,0,106,95,1,0,0,0,106,96,1,0,0,0,106,97,1,0,0,0,106,98,1,0,0,0,106,99,
1,0,0,0,106,100,1,0,0,0,106,101,1,0,0,0,106,102,1,0,0,0,106,103,1,0,0,0,
107,5,1,0,0,0,108,112,3,8,4,0,109,111,3,10,5,0,110,109,1,0,0,0,111,114,1,
0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,7,1,0,0,0,114,112,1,0,0,0,115,
122,3,38,19,0,116,122,3,40,20,0,117,122,3,42,21,0,118,122,3,24,12,0,119,
122,3,26,13,0,120,122,3,48,24,0,121,115,1,0,0,0,121,116,1,0,0,0,121,117,
1,0,0,0,121,118,1,0,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,9,1,0,0,0,123,
132,3,14,7,0,124,132,3,28,14,0,125,132,3,18,9,0,126,132,3,68,34,0,127,132,
3,64,32,0,128,132,3,16,8,0,129,132,3,34,17,0,130,132,3,36,18,0,131,123,1,
0,0,0,131,124,1,0,0,0,131,125,1,0,0,0,131,126,1,0,0,0,131,127,1,0,0,0,131,
128,1,0,0,0,131,129,1,0,0,0,131,130,1,0,0,0,132,11,1,0,0,0,133,141,3,74,
37,0,134,141,5,60,0,0,135,141,5,65,0,0,136,141,5,62,0,0,137,141,5,1,0,0,
138,141,5,2,0,0,139,141,5,3,0,0,140,133,1,0,0,0,140,134,1,0,0,0,140,135,
1,0,0,0,140,136,1,0,0,0,140,137,1,0,0,0,140,138,1,0,0,0,140,139,1,0,0,0,
141,142,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,13,1,0,0,0,144,145,3,
72,36,0,145,147,5,62,0,0,146,148,3,70,35,0,147,146,1,0,0,0,147,148,1,0,0,
0,148,149,1,0,0,0,149,150,3,66,33,0,150,151,5,1,0,0,151,152,3,74,37,0,152,
153,5,2,0,0,153,154,7,0,0,0,154,155,5,3,0,0,155,156,5,63,0,0,156,15,1,0,
0,0,157,158,3,72,36,0,158,160,5,62,0,0,159,161,3,70,35,0,160,159,1,0,0,0,
160,161,1,0,0,0,161,163,1,0,0,0,162,164,3,74,37,0,163,162,1,0,0,0,164,165,
1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,167,168,5,63,0,0,
168,17,1,0,0,0,169,170,3,72,36,0,170,171,5,28,0,0,171,173,5,42,0,0,172,174,
5,2,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,3,70,35,
0,176,177,5,63,0,0,177,19,1,0,0,0,178,179,5,17,0,0,179,180,3,70,35,0,180,
181,5,63,0,0,181,21,1,0,0,0,182,183,3,72,36,0,183,184,5,26,0,0,184,185,5,
51,0,0,185,186,5,45,0,0,186,188,5,24,0,0,187,189,5,63,0,0,188,187,1,0,0,
0,188,189,1,0,0,0,189,23,1,0,0,0,190,191,5,38,0,0,191,192,5,21,0,0,192,193,
3,70,35,0,193,194,5,63,0,0,194,25,1,0,0,0,195,196,5,38,0,0,196,197,3,70,
35,0,197,198,5,63,0,0,198,27,1,0,0,0,199,200,5,41,0,0,200,201,3,70,35,0,
201,202,5,63,0,0,202,29,1,0,0,0,203,204,5,15,0,0,204,205,3,70,35,0,205,206,
5,63,0,0,206,31,1,0,0,0,207,208,5,5,0,0,208,209,3,70,35,0,209,210,5,63,0,
0,210,33,1,0,0,0,211,212,5,5,0,0,212,213,3,70,35,0,213,214,5,46,0,0,214,
215,5,25,0,0,215,216,5,63,0,0,216,35,1,0,0,0,217,218,5,5,0,0,218,219,3,70,
35,0,219,220,5,46,0,0,220,221,5,45,0,0,221,222,5,47,0,0,222,223,5,32,0,0,
223,224,5,45,0,0,224,225,5,14,0,0,225,226,5,63,0,0,226,37,1,0,0,0,227,228,
5,36,0,0,228,229,3,70,35,0,229,230,5,63,0,0,230,39,1,0,0,0,231,232,5,6,0,
0,232,233,3,70,35,0,233,234,5,63,0,0,234,41,1,0,0,0,235,236,5,42,0,0,236,
237,3,70,35,0,237,238,5,63,0,0,238,43,1,0,0,0,239,240,3,72,36,0,240,241,
5,20,0,0,241,242,5,48,0,0,242,243,5,60,0,0,243,244,5,63,0,0,244,45,1,0,0,
0,245,246,5,29,0,0,246,247,5,28,0,0,247,248,5,31,0,0,248,249,3,72,36,0,249,
250,5,4,0,0,250,251,5,48,0,0,251,252,5,60,0,0,252,253,5,63,0,0,253,47,1,
0,0,0,254,260,3,50,25,0,255,260,3,52,26,0,256,260,3,54,27,0,257,260,3,56,
28,0,258,260,3,58,29,0,259,254,1,0,0,0,259,255,1,0,0,0,259,256,1,0,0,0,259,
257,1,0,0,0,259,258,1,0,0,0,260,49,1,0,0,0,261,262,5,39,0,0,262,263,5,40,
0,0,263,264,5,61,0,0,264,265,5,10,0,0,265,266,5,23,0,0,266,267,5,52,0,0,
267,268,5,25,0,0,268,269,5,63,0,0,269,51,1,0,0,0,270,271,5,39,0,0,271,272,
5,40,0,0,272,273,5,61,0,0,273,274,5,10,0,0,274,275,5,23,0,0,275,276,5,52,
0,0,276,277,5,25,0,0,277,278,5,33,0,0,278,279,5,16,0,0,279,280,5,34,0,0,
280,281,5,63,0,0,281,53,1,0,0,0,282,283,5,39,0,0,283,284,5,40,0,0,284,285,
5,49,0,0,285,286,5,46,0,0,286,287,5,60,0,0,287,288,5,11,0,0,288,289,5,23,
0,0,289,290,5,52,0,0,290,291,5,25,0,0,291,292,5,33,0,0,292,293,5,16,0,0,
293,294,5,34,0,0,294,295,5,63,0,0,295,55,1,0,0,0,296,297,5,39,0,0,297,298,
5,12,0,0,298,299,5,61,0,0,299,300,5,10,0,0,300,301,5,46,0,0,301,302,5,43,
0,0,302,303,5,9,0,0,303,304,5,63,0,0,304,57,1,0,0,0,305,308,5,39,0,0,306,
309,3,74,37,0,307,309,5,60,0,0,308,306,1,0,0,0,308,307,1,0,0,0,309,310,1,
0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,63,0,0,313,
59,1,0,0,0,314,315,3,72,36,0,315,316,5,1,0,0,316,317,5,60,0,0,317,318,5,
3,0,0,318,319,5,13,0,0,319,320,5,63,0,0,320,61,1,0,0,0,321,322,3,72,36,0,
322,323,5,50,0,0,323,324,5,45,0,0,324,325,5,24,0,0,325,326,5,63,0,0,326,
63,1,0,0,0,327,328,5,44,0,0,328,329,5,16,0,0,329,330,5,34,0,0,330,331,5,
46,0,0,331,332,5,22,0,0,332,333,5,30,0,0,333,334,5,14,0,0,334,335,5,63,0,
0,335,65,1,0,0,0,336,337,7,1,0,0,337,338,3,74,37,0,338,67,1,0,0,0,339,340,
5,19,0,0,340,341,5,60,0,0,341,342,5,11,0,0,342,343,5,63,0,0,343,69,1,0,0,
0,344,346,3,74,37,0,345,347,5,4,0,0,346,345,1,0,0,0,346,347,1,0,0,0,347,
350,1,0,0,0,348,350,5,60,0,0,349,344,1,0,0,0,349,348,1,0,0,0,350,351,1,0,
0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,71,1,0,0,0,353,355,3,74,37,0,354,
353,1,0,0,0,355,356,1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,73,1,0,0,
0,358,359,7,2,0,0,359,75,1,0,0,0,21,79,86,89,106,112,121,131,140,142,147,
160,165,173,188,259,308,310,346,349,351,356];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StarStarParser extends antlr4.Parser {

    static grammarFileName = "StarStar.g4";
    static literalNames = [ null, "'('", "':'", "')'", "''s'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'</color>'", "'==='", "'.'", "';'", "','" ];
    static symbolicNames = [ null, null, null, null, null, "ACQUIRED", "ACTIVATING", 
                             "ALL", "ALLY", "ASIDE", "CARD", "CARDS", "CHOOSE", 
                             "CONCEDED", "DECK", "DESTROYED", "DISCARD", 
                             "DISCARDED", "DISCARDING", "DREW", "ENDS", 
                             "EVENT", "FORM", "FROM", "GAME", "HAND", "HAS", 
                             "INDICATORS", "IS", "IT", "NEW", "NOW", "OF", 
                             "OR", "PILE", "PLAY", "PLAYED", "REFRESH", 
                             "REVEALED", "RESOLVING", "SCRAP", "SCRAPPED", 
                             "SCRAPPING", "SET", "SHUFFLED", "THE", "TO", 
                             "TOP", "TURN", "UP", "WINS", "WON", "YOUR", 
                             "WHITESPACE", "COLOR_START_TAG", "COLOR_END_TAG", 
                             "END_GAME_TAG", "DOT", "SEMICOLUM", "COMMA", 
                             "INT", "WORD", "SEPARATOR", "NEWLINE", "INCREMENT", 
                             "DECREASE" ];
    static ruleNames = [ "battle", "turn", "action", "cardAction", "cardTrigger", 
                         "cardEffect", "skipText", "balanceUpdate", "otherEffect", 
                         "scrapSummary", "discarded", "winStatus", "event", 
                         "mission", "scrapped", "destroyBase", "cardAcquisition", 
                         "acquireToHand", "acquireToDeck", "playSingle", 
                         "activate", "scrapSelf", "endTurn", "startTurn", 
                         "resolving", "resolveScrapHand", "resolveScrapHandOrDiscard", 
                         "resolveScrapMultiple", "resolvePatience", "resolveOthers", 
                         "concede", "timeout", "shuffleCards", "effect", 
                         "drawCards", "card", "name", "customWord" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StarStarParser.ruleNames;
        this.literalNames = StarStarParser.literalNames;
        this.symbolicNames = StarStarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	battle() {
	    let localctx = new BattleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StarStarParser.RULE_battle);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 76;
	            this.turn();
	            this.state = 79; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDED) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)) | (1 << (StarStarParser.SEPARATOR - 32)))) !== 0) || _la===StarStarParser.DECREASE);
	        this.state = 81;
	        this.match(StarStarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turn() {
	    let localctx = new TurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, StarStarParser.RULE_turn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 83;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 86; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 88;
	            this.startTurn();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StarStarParser.RULE_action);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
	            this.cardAcquisition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.discarded();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 93;
	            this.destroyBase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 94;
	            this.cardAction();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 95;
	            this.balanceUpdate();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 96;
	            this.drawCards();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 97;
	            this.shuffleCards();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 98;
	            this.endTurn();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 99;
	            this.winStatus();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 100;
	            this.scrapped();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 101;
	            this.concede();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 102;
	            this.timeout();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 103;
	            this.skipText();
	            this.state = 104;
	            this.match(StarStarParser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cardAction() {
	    let localctx = new CardActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StarStarParser.RULE_cardAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.cardTrigger();
	        this.state = 112;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 109;
	                this.cardEffect(); 
	            }
	            this.state = 114;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cardTrigger() {
	    let localctx = new CardTriggerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, StarStarParser.RULE_cardTrigger);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.playSingle();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.activate();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            this.scrapSelf();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 118;
	            this.event();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 119;
	            this.mission();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 120;
	            this.resolving();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cardEffect() {
	    let localctx = new CardEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StarStarParser.RULE_cardEffect);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.balanceUpdate();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.scrapped();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            this.scrapSummary();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 126;
	            this.drawCards();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 127;
	            this.shuffleCards();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 128;
	            this.otherEffect();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 129;
	            this.acquireToHand();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 130;
	            this.acquireToDeck();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	skipText() {
	    let localctx = new SkipTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StarStarParser.RULE_skipText);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case StarStarParser.ACQUIRED:
	            case StarStarParser.ACTIVATING:
	            case StarStarParser.ALL:
	            case StarStarParser.ALLY:
	            case StarStarParser.ASIDE:
	            case StarStarParser.CARD:
	            case StarStarParser.CARDS:
	            case StarStarParser.CHOOSE:
	            case StarStarParser.CONCEDED:
	            case StarStarParser.DECK:
	            case StarStarParser.DESTROYED:
	            case StarStarParser.DISCARD:
	            case StarStarParser.DISCARDING:
	            case StarStarParser.DREW:
	            case StarStarParser.ENDS:
	            case StarStarParser.EVENT:
	            case StarStarParser.FORM:
	            case StarStarParser.FROM:
	            case StarStarParser.GAME:
	            case StarStarParser.HAND:
	            case StarStarParser.HAS:
	            case StarStarParser.INDICATORS:
	            case StarStarParser.IS:
	            case StarStarParser.IT:
	            case StarStarParser.NEW:
	            case StarStarParser.NOW:
	            case StarStarParser.OF:
	            case StarStarParser.OR:
	            case StarStarParser.PILE:
	            case StarStarParser.PLAY:
	            case StarStarParser.PLAYED:
	            case StarStarParser.REFRESH:
	            case StarStarParser.REVEALED:
	            case StarStarParser.RESOLVING:
	            case StarStarParser.SCRAP:
	            case StarStarParser.SCRAPPED:
	            case StarStarParser.SCRAPPING:
	            case StarStarParser.SET:
	            case StarStarParser.SHUFFLED:
	            case StarStarParser.THE:
	            case StarStarParser.TO:
	            case StarStarParser.TOP:
	            case StarStarParser.TURN:
	            case StarStarParser.UP:
	            case StarStarParser.WINS:
	            case StarStarParser.WON:
	            case StarStarParser.YOUR:
	            case StarStarParser.WORD:
	                this.state = 133;
	                this.customWord();
	                break;
	            case StarStarParser.INT:
	                this.state = 134;
	                this.match(StarStarParser.INT);
	                break;
	            case StarStarParser.DECREASE:
	                this.state = 135;
	                this.match(StarStarParser.DECREASE);
	                break;
	            case StarStarParser.SEPARATOR:
	                this.state = 136;
	                this.match(StarStarParser.SEPARATOR);
	                break;
	            case StarStarParser.T__0:
	                this.state = 137;
	                this.match(StarStarParser.T__0);
	                break;
	            case StarStarParser.T__1:
	                this.state = 138;
	                this.match(StarStarParser.T__1);
	                break;
	            case StarStarParser.T__2:
	                this.state = 139;
	                this.match(StarStarParser.T__2);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 142; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)) | (1 << (StarStarParser.SEPARATOR - 32)))) !== 0) || _la===StarStarParser.DECREASE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	balanceUpdate() {
	    let localctx = new BalanceUpdateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StarStarParser.RULE_balanceUpdate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.name();
	        this.state = 145;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 146;
	            this.card();

	        }
	        this.state = 149;
	        this.effect();
	        this.state = 150;
	        this.match(StarStarParser.T__0);
	        this.state = 151;
	        this.customWord();
	        this.state = 152;
	        this.match(StarStarParser.T__1);
	        this.state = 153;
	        _la = this._input.LA(1);
	        if(!(_la===StarStarParser.INT || _la===StarStarParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 154;
	        this.match(StarStarParser.T__2);
	        this.state = 155;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	otherEffect() {
	    let localctx = new OtherEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StarStarParser.RULE_otherEffect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.name();
	        this.state = 158;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 159;
	            this.card();

	        }
	        this.state = 163; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 162;
	            this.customWord();
	            this.state = 165; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0));
	        this.state = 167;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scrapSummary() {
	    let localctx = new ScrapSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StarStarParser.RULE_scrapSummary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.name();
	        this.state = 170;
	        this.match(StarStarParser.IS);
	        this.state = 171;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.T__1) {
	            this.state = 172;
	            this.match(StarStarParser.T__1);
	        }

	        this.state = 175;
	        this.card();
	        this.state = 176;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	discarded() {
	    let localctx = new DiscardedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, StarStarParser.RULE_discarded);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(StarStarParser.DISCARDED);
	        this.state = 179;
	        this.card();
	        this.state = 180;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	winStatus() {
	    let localctx = new WinStatusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StarStarParser.RULE_winStatus);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.name();
	        this.state = 183;
	        this.match(StarStarParser.HAS);
	        this.state = 184;
	        this.match(StarStarParser.WON);
	        this.state = 185;
	        this.match(StarStarParser.THE);
	        this.state = 186;
	        this.match(StarStarParser.GAME);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.NEWLINE) {
	            this.state = 187;
	            this.match(StarStarParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StarStarParser.RULE_event);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(StarStarParser.REVEALED);
	        this.state = 191;
	        this.match(StarStarParser.EVENT);
	        this.state = 192;
	        this.card();
	        this.state = 193;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mission() {
	    let localctx = new MissionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StarStarParser.RULE_mission);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(StarStarParser.REVEALED);
	        this.state = 196;
	        this.card();
	        this.state = 197;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scrapped() {
	    let localctx = new ScrappedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StarStarParser.RULE_scrapped);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(StarStarParser.SCRAPPED);
	        this.state = 200;
	        this.card();
	        this.state = 201;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	destroyBase() {
	    let localctx = new DestroyBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StarStarParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(StarStarParser.DESTROYED);
	        this.state = 204;
	        this.card();
	        this.state = 205;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cardAcquisition() {
	    let localctx = new CardAcquisitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, StarStarParser.RULE_cardAcquisition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 208;
	        this.card();
	        this.state = 209;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acquireToHand() {
	    let localctx = new AcquireToHandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, StarStarParser.RULE_acquireToHand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 212;
	        this.card();
	        this.state = 213;
	        this.match(StarStarParser.TO);
	        this.state = 214;
	        this.match(StarStarParser.HAND);
	        this.state = 215;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acquireToDeck() {
	    let localctx = new AcquireToDeckContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, StarStarParser.RULE_acquireToDeck);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 218;
	        this.card();
	        this.state = 219;
	        this.match(StarStarParser.TO);
	        this.state = 220;
	        this.match(StarStarParser.THE);
	        this.state = 221;
	        this.match(StarStarParser.TOP);
	        this.state = 222;
	        this.match(StarStarParser.OF);
	        this.state = 223;
	        this.match(StarStarParser.THE);
	        this.state = 224;
	        this.match(StarStarParser.DECK);
	        this.state = 225;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	playSingle() {
	    let localctx = new PlaySingleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, StarStarParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(StarStarParser.PLAYED);
	        this.state = 228;
	        this.card();
	        this.state = 229;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	activate() {
	    let localctx = new ActivateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, StarStarParser.RULE_activate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(StarStarParser.ACTIVATING);
	        this.state = 232;
	        this.card();
	        this.state = 233;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scrapSelf() {
	    let localctx = new ScrapSelfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, StarStarParser.RULE_scrapSelf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 236;
	        this.card();
	        this.state = 237;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	endTurn() {
	    let localctx = new EndTurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, StarStarParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.name();
	        this.state = 240;
	        this.match(StarStarParser.ENDS);
	        this.state = 241;
	        this.match(StarStarParser.TURN);
	        this.state = 242;
	        this.match(StarStarParser.INT);
	        this.state = 243;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	startTurn() {
	    let localctx = new StartTurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, StarStarParser.RULE_startTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(StarStarParser.IT);
	        this.state = 246;
	        this.match(StarStarParser.IS);
	        this.state = 247;
	        this.match(StarStarParser.NOW);
	        this.state = 248;
	        this.name();
	        this.state = 249;
	        this.match(StarStarParser.T__3);
	        this.state = 250;
	        this.match(StarStarParser.TURN);
	        this.state = 251;
	        this.match(StarStarParser.INT);
	        this.state = 252;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resolving() {
	    let localctx = new ResolvingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, StarStarParser.RULE_resolving);
	    try {
	        this.state = 259;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 254;
	            this.resolveScrapHand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.resolveScrapHandOrDiscard();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 256;
	            this.resolveScrapMultiple();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 257;
	            this.resolvePatience();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 258;
	            this.resolveOthers();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resolveScrapHand() {
	    let localctx = new ResolveScrapHandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, StarStarParser.RULE_resolveScrapHand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 262;
	        this.match(StarStarParser.SCRAP);
	        this.state = 263;
	        this.match(StarStarParser.WORD);
	        this.state = 264;
	        this.match(StarStarParser.CARD);
	        this.state = 265;
	        this.match(StarStarParser.FROM);
	        this.state = 266;
	        this.match(StarStarParser.YOUR);
	        this.state = 267;
	        this.match(StarStarParser.HAND);
	        this.state = 268;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resolveScrapHandOrDiscard() {
	    let localctx = new ResolveScrapHandOrDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, StarStarParser.RULE_resolveScrapHandOrDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 271;
	        this.match(StarStarParser.SCRAP);
	        this.state = 272;
	        this.match(StarStarParser.WORD);
	        this.state = 273;
	        this.match(StarStarParser.CARD);
	        this.state = 274;
	        this.match(StarStarParser.FROM);
	        this.state = 275;
	        this.match(StarStarParser.YOUR);
	        this.state = 276;
	        this.match(StarStarParser.HAND);
	        this.state = 277;
	        this.match(StarStarParser.OR);
	        this.state = 278;
	        this.match(StarStarParser.DISCARD);
	        this.state = 279;
	        this.match(StarStarParser.PILE);
	        this.state = 280;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resolveScrapMultiple() {
	    let localctx = new ResolveScrapMultipleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, StarStarParser.RULE_resolveScrapMultiple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 283;
	        this.match(StarStarParser.SCRAP);
	        this.state = 284;
	        this.match(StarStarParser.UP);
	        this.state = 285;
	        this.match(StarStarParser.TO);
	        this.state = 286;
	        this.match(StarStarParser.INT);
	        this.state = 287;
	        this.match(StarStarParser.CARDS);
	        this.state = 288;
	        this.match(StarStarParser.FROM);
	        this.state = 289;
	        this.match(StarStarParser.YOUR);
	        this.state = 290;
	        this.match(StarStarParser.HAND);
	        this.state = 291;
	        this.match(StarStarParser.OR);
	        this.state = 292;
	        this.match(StarStarParser.DISCARD);
	        this.state = 293;
	        this.match(StarStarParser.PILE);
	        this.state = 294;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resolvePatience() {
	    let localctx = new ResolvePatienceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, StarStarParser.RULE_resolvePatience);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 297;
	        this.match(StarStarParser.CHOOSE);
	        this.state = 298;
	        this.match(StarStarParser.WORD);
	        this.state = 299;
	        this.match(StarStarParser.CARD);
	        this.state = 300;
	        this.match(StarStarParser.TO);
	        this.state = 301;
	        this.match(StarStarParser.SET);
	        this.state = 302;
	        this.match(StarStarParser.ASIDE);
	        this.state = 303;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resolveOthers() {
	    let localctx = new ResolveOthersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, StarStarParser.RULE_resolveOthers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 308; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 308;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case StarStarParser.ACQUIRED:
	            case StarStarParser.ACTIVATING:
	            case StarStarParser.ALL:
	            case StarStarParser.ALLY:
	            case StarStarParser.ASIDE:
	            case StarStarParser.CARD:
	            case StarStarParser.CARDS:
	            case StarStarParser.CHOOSE:
	            case StarStarParser.CONCEDED:
	            case StarStarParser.DECK:
	            case StarStarParser.DESTROYED:
	            case StarStarParser.DISCARD:
	            case StarStarParser.DISCARDING:
	            case StarStarParser.DREW:
	            case StarStarParser.ENDS:
	            case StarStarParser.EVENT:
	            case StarStarParser.FORM:
	            case StarStarParser.FROM:
	            case StarStarParser.GAME:
	            case StarStarParser.HAND:
	            case StarStarParser.HAS:
	            case StarStarParser.INDICATORS:
	            case StarStarParser.IS:
	            case StarStarParser.IT:
	            case StarStarParser.NEW:
	            case StarStarParser.NOW:
	            case StarStarParser.OF:
	            case StarStarParser.OR:
	            case StarStarParser.PILE:
	            case StarStarParser.PLAY:
	            case StarStarParser.PLAYED:
	            case StarStarParser.REFRESH:
	            case StarStarParser.REVEALED:
	            case StarStarParser.RESOLVING:
	            case StarStarParser.SCRAP:
	            case StarStarParser.SCRAPPED:
	            case StarStarParser.SCRAPPING:
	            case StarStarParser.SET:
	            case StarStarParser.SHUFFLED:
	            case StarStarParser.THE:
	            case StarStarParser.TO:
	            case StarStarParser.TOP:
	            case StarStarParser.TURN:
	            case StarStarParser.UP:
	            case StarStarParser.WINS:
	            case StarStarParser.WON:
	            case StarStarParser.YOUR:
	            case StarStarParser.WORD:
	                this.state = 306;
	                this.customWord();
	                break;
	            case StarStarParser.INT:
	                this.state = 307;
	                this.match(StarStarParser.INT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 310; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0));
	        this.state = 312;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concede() {
	    let localctx = new ConcedeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, StarStarParser.RULE_concede);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.name();
	        this.state = 315;
	        this.match(StarStarParser.T__0);
	        this.state = 316;
	        this.match(StarStarParser.INT);
	        this.state = 317;
	        this.match(StarStarParser.T__2);
	        this.state = 318;
	        this.match(StarStarParser.CONCEDED);
	        this.state = 319;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	timeout() {
	    let localctx = new TimeoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, StarStarParser.RULE_timeout);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.name();
	        this.state = 322;
	        this.match(StarStarParser.WINS);
	        this.state = 323;
	        this.match(StarStarParser.THE);
	        this.state = 324;
	        this.match(StarStarParser.GAME);
	        this.state = 325;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	shuffleCards() {
	    let localctx = new ShuffleCardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, StarStarParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(StarStarParser.SHUFFLED);
	        this.state = 328;
	        this.match(StarStarParser.DISCARD);
	        this.state = 329;
	        this.match(StarStarParser.PILE);
	        this.state = 330;
	        this.match(StarStarParser.TO);
	        this.state = 331;
	        this.match(StarStarParser.FORM);
	        this.state = 332;
	        this.match(StarStarParser.NEW);
	        this.state = 333;
	        this.match(StarStarParser.DECK);
	        this.state = 334;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	effect() {
	    let localctx = new EffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, StarStarParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (StarStarParser.INT - 60)) | (1 << (StarStarParser.INCREMENT - 60)) | (1 << (StarStarParser.DECREASE - 60)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 337;
	        this.customWord();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	drawCards() {
	    let localctx = new DrawCardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, StarStarParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(StarStarParser.DREW);
	        this.state = 340;
	        this.match(StarStarParser.INT);
	        this.state = 341;
	        this.match(StarStarParser.CARDS);
	        this.state = 342;
	        this.match(StarStarParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	card() {
	    let localctx = new CardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, StarStarParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 349;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case StarStarParser.ACQUIRED:
	        		case StarStarParser.ACTIVATING:
	        		case StarStarParser.ALL:
	        		case StarStarParser.ALLY:
	        		case StarStarParser.ASIDE:
	        		case StarStarParser.CARD:
	        		case StarStarParser.CARDS:
	        		case StarStarParser.CHOOSE:
	        		case StarStarParser.CONCEDED:
	        		case StarStarParser.DECK:
	        		case StarStarParser.DESTROYED:
	        		case StarStarParser.DISCARD:
	        		case StarStarParser.DISCARDING:
	        		case StarStarParser.DREW:
	        		case StarStarParser.ENDS:
	        		case StarStarParser.EVENT:
	        		case StarStarParser.FORM:
	        		case StarStarParser.FROM:
	        		case StarStarParser.GAME:
	        		case StarStarParser.HAND:
	        		case StarStarParser.HAS:
	        		case StarStarParser.INDICATORS:
	        		case StarStarParser.IS:
	        		case StarStarParser.IT:
	        		case StarStarParser.NEW:
	        		case StarStarParser.NOW:
	        		case StarStarParser.OF:
	        		case StarStarParser.OR:
	        		case StarStarParser.PILE:
	        		case StarStarParser.PLAY:
	        		case StarStarParser.PLAYED:
	        		case StarStarParser.REFRESH:
	        		case StarStarParser.REVEALED:
	        		case StarStarParser.RESOLVING:
	        		case StarStarParser.SCRAP:
	        		case StarStarParser.SCRAPPED:
	        		case StarStarParser.SCRAPPING:
	        		case StarStarParser.SET:
	        		case StarStarParser.SHUFFLED:
	        		case StarStarParser.THE:
	        		case StarStarParser.TO:
	        		case StarStarParser.TOP:
	        		case StarStarParser.TURN:
	        		case StarStarParser.UP:
	        		case StarStarParser.WINS:
	        		case StarStarParser.WON:
	        		case StarStarParser.YOUR:
	        		case StarStarParser.WORD:
	        		    this.state = 344;
	        		    this.customWord();
	        		    this.state = 346;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		    if(_la===StarStarParser.T__3) {
	        		        this.state = 345;
	        		        this.match(StarStarParser.T__3);
	        		    }

	        		    break;
	        		case StarStarParser.INT:
	        		    this.state = 348;
	        		    this.match(StarStarParser.INT);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 351; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, StarStarParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 353;
	        		this.customWord();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 356; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	customWord() {
	    let localctx = new CustomWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, StarStarParser.RULE_customWord);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

StarStarParser.EOF = antlr4.Token.EOF;
StarStarParser.T__0 = 1;
StarStarParser.T__1 = 2;
StarStarParser.T__2 = 3;
StarStarParser.T__3 = 4;
StarStarParser.ACQUIRED = 5;
StarStarParser.ACTIVATING = 6;
StarStarParser.ALL = 7;
StarStarParser.ALLY = 8;
StarStarParser.ASIDE = 9;
StarStarParser.CARD = 10;
StarStarParser.CARDS = 11;
StarStarParser.CHOOSE = 12;
StarStarParser.CONCEDED = 13;
StarStarParser.DECK = 14;
StarStarParser.DESTROYED = 15;
StarStarParser.DISCARD = 16;
StarStarParser.DISCARDED = 17;
StarStarParser.DISCARDING = 18;
StarStarParser.DREW = 19;
StarStarParser.ENDS = 20;
StarStarParser.EVENT = 21;
StarStarParser.FORM = 22;
StarStarParser.FROM = 23;
StarStarParser.GAME = 24;
StarStarParser.HAND = 25;
StarStarParser.HAS = 26;
StarStarParser.INDICATORS = 27;
StarStarParser.IS = 28;
StarStarParser.IT = 29;
StarStarParser.NEW = 30;
StarStarParser.NOW = 31;
StarStarParser.OF = 32;
StarStarParser.OR = 33;
StarStarParser.PILE = 34;
StarStarParser.PLAY = 35;
StarStarParser.PLAYED = 36;
StarStarParser.REFRESH = 37;
StarStarParser.REVEALED = 38;
StarStarParser.RESOLVING = 39;
StarStarParser.SCRAP = 40;
StarStarParser.SCRAPPED = 41;
StarStarParser.SCRAPPING = 42;
StarStarParser.SET = 43;
StarStarParser.SHUFFLED = 44;
StarStarParser.THE = 45;
StarStarParser.TO = 46;
StarStarParser.TOP = 47;
StarStarParser.TURN = 48;
StarStarParser.UP = 49;
StarStarParser.WINS = 50;
StarStarParser.WON = 51;
StarStarParser.YOUR = 52;
StarStarParser.WHITESPACE = 53;
StarStarParser.COLOR_START_TAG = 54;
StarStarParser.COLOR_END_TAG = 55;
StarStarParser.END_GAME_TAG = 56;
StarStarParser.DOT = 57;
StarStarParser.SEMICOLUM = 58;
StarStarParser.COMMA = 59;
StarStarParser.INT = 60;
StarStarParser.WORD = 61;
StarStarParser.SEPARATOR = 62;
StarStarParser.NEWLINE = 63;
StarStarParser.INCREMENT = 64;
StarStarParser.DECREASE = 65;

StarStarParser.RULE_battle = 0;
StarStarParser.RULE_turn = 1;
StarStarParser.RULE_action = 2;
StarStarParser.RULE_cardAction = 3;
StarStarParser.RULE_cardTrigger = 4;
StarStarParser.RULE_cardEffect = 5;
StarStarParser.RULE_skipText = 6;
StarStarParser.RULE_balanceUpdate = 7;
StarStarParser.RULE_otherEffect = 8;
StarStarParser.RULE_scrapSummary = 9;
StarStarParser.RULE_discarded = 10;
StarStarParser.RULE_winStatus = 11;
StarStarParser.RULE_event = 12;
StarStarParser.RULE_mission = 13;
StarStarParser.RULE_scrapped = 14;
StarStarParser.RULE_destroyBase = 15;
StarStarParser.RULE_cardAcquisition = 16;
StarStarParser.RULE_acquireToHand = 17;
StarStarParser.RULE_acquireToDeck = 18;
StarStarParser.RULE_playSingle = 19;
StarStarParser.RULE_activate = 20;
StarStarParser.RULE_scrapSelf = 21;
StarStarParser.RULE_endTurn = 22;
StarStarParser.RULE_startTurn = 23;
StarStarParser.RULE_resolving = 24;
StarStarParser.RULE_resolveScrapHand = 25;
StarStarParser.RULE_resolveScrapHandOrDiscard = 26;
StarStarParser.RULE_resolveScrapMultiple = 27;
StarStarParser.RULE_resolvePatience = 28;
StarStarParser.RULE_resolveOthers = 29;
StarStarParser.RULE_concede = 30;
StarStarParser.RULE_timeout = 31;
StarStarParser.RULE_shuffleCards = 32;
StarStarParser.RULE_effect = 33;
StarStarParser.RULE_drawCards = 34;
StarStarParser.RULE_card = 35;
StarStarParser.RULE_name = 36;
StarStarParser.RULE_customWord = 37;

class BattleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_battle;
    }

	EOF() {
	    return this.getToken(StarStarParser.EOF, 0);
	};

	turn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TurnContext);
	    } else {
	        return this.getTypedRuleContext(TurnContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterBattle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitBattle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitBattle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TurnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_turn;
    }

	action = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionContext);
	    } else {
	        return this.getTypedRuleContext(ActionContext,i);
	    }
	};

	startTurn() {
	    return this.getTypedRuleContext(StartTurnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterTurn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitTurn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitTurn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_action;
    }

	cardAcquisition() {
	    return this.getTypedRuleContext(CardAcquisitionContext,0);
	};

	discarded() {
	    return this.getTypedRuleContext(DiscardedContext,0);
	};

	destroyBase() {
	    return this.getTypedRuleContext(DestroyBaseContext,0);
	};

	cardAction() {
	    return this.getTypedRuleContext(CardActionContext,0);
	};

	balanceUpdate() {
	    return this.getTypedRuleContext(BalanceUpdateContext,0);
	};

	drawCards() {
	    return this.getTypedRuleContext(DrawCardsContext,0);
	};

	shuffleCards() {
	    return this.getTypedRuleContext(ShuffleCardsContext,0);
	};

	endTurn() {
	    return this.getTypedRuleContext(EndTurnContext,0);
	};

	winStatus() {
	    return this.getTypedRuleContext(WinStatusContext,0);
	};

	scrapped() {
	    return this.getTypedRuleContext(ScrappedContext,0);
	};

	concede() {
	    return this.getTypedRuleContext(ConcedeContext,0);
	};

	timeout() {
	    return this.getTypedRuleContext(TimeoutContext,0);
	};

	skipText() {
	    return this.getTypedRuleContext(SkipTextContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CardActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_cardAction;
    }

	cardTrigger() {
	    return this.getTypedRuleContext(CardTriggerContext,0);
	};

	cardEffect = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CardEffectContext);
	    } else {
	        return this.getTypedRuleContext(CardEffectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterCardAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCardAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCardAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CardTriggerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_cardTrigger;
    }

	playSingle() {
	    return this.getTypedRuleContext(PlaySingleContext,0);
	};

	activate() {
	    return this.getTypedRuleContext(ActivateContext,0);
	};

	scrapSelf() {
	    return this.getTypedRuleContext(ScrapSelfContext,0);
	};

	event() {
	    return this.getTypedRuleContext(EventContext,0);
	};

	mission() {
	    return this.getTypedRuleContext(MissionContext,0);
	};

	resolving() {
	    return this.getTypedRuleContext(ResolvingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterCardTrigger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCardTrigger(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCardTrigger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CardEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_cardEffect;
    }

	balanceUpdate() {
	    return this.getTypedRuleContext(BalanceUpdateContext,0);
	};

	scrapped() {
	    return this.getTypedRuleContext(ScrappedContext,0);
	};

	scrapSummary() {
	    return this.getTypedRuleContext(ScrapSummaryContext,0);
	};

	drawCards() {
	    return this.getTypedRuleContext(DrawCardsContext,0);
	};

	shuffleCards() {
	    return this.getTypedRuleContext(ShuffleCardsContext,0);
	};

	otherEffect() {
	    return this.getTypedRuleContext(OtherEffectContext,0);
	};

	acquireToHand() {
	    return this.getTypedRuleContext(AcquireToHandContext,0);
	};

	acquireToDeck() {
	    return this.getTypedRuleContext(AcquireToDeckContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterCardEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCardEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCardEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SkipTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_skipText;
    }

	customWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CustomWordContext);
	    } else {
	        return this.getTypedRuleContext(CustomWordContext,i);
	    }
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.INT);
	    } else {
	        return this.getToken(StarStarParser.INT, i);
	    }
	};


	DECREASE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.DECREASE);
	    } else {
	        return this.getToken(StarStarParser.DECREASE, i);
	    }
	};


	SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.SEPARATOR);
	    } else {
	        return this.getToken(StarStarParser.SEPARATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterSkipText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitSkipText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitSkipText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BalanceUpdateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_balanceUpdate;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SEPARATOR() {
	    return this.getToken(StarStarParser.SEPARATOR, 0);
	};

	effect() {
	    return this.getTypedRuleContext(EffectContext,0);
	};

	customWord() {
	    return this.getTypedRuleContext(CustomWordContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	DECREASE() {
	    return this.getToken(StarStarParser.DECREASE, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterBalanceUpdate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitBalanceUpdate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitBalanceUpdate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OtherEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_otherEffect;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SEPARATOR() {
	    return this.getToken(StarStarParser.SEPARATOR, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	customWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CustomWordContext);
	    } else {
	        return this.getTypedRuleContext(CustomWordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterOtherEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitOtherEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitOtherEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_scrapSummary;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	IS() {
	    return this.getToken(StarStarParser.IS, 0);
	};

	SCRAPPING() {
	    return this.getToken(StarStarParser.SCRAPPING, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterScrapSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitScrapSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitScrapSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_discarded;
    }

	DISCARDED() {
	    return this.getToken(StarStarParser.DISCARDED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterDiscarded(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitDiscarded(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitDiscarded(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WinStatusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_winStatus;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	HAS() {
	    return this.getToken(StarStarParser.HAS, 0);
	};

	WON() {
	    return this.getToken(StarStarParser.WON, 0);
	};

	THE() {
	    return this.getToken(StarStarParser.THE, 0);
	};

	GAME() {
	    return this.getToken(StarStarParser.GAME, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterWinStatus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitWinStatus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitWinStatus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_event;
    }

	REVEALED() {
	    return this.getToken(StarStarParser.REVEALED, 0);
	};

	EVENT() {
	    return this.getToken(StarStarParser.EVENT, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitEvent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitEvent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MissionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_mission;
    }

	REVEALED() {
	    return this.getToken(StarStarParser.REVEALED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterMission(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitMission(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitMission(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrappedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_scrapped;
    }

	SCRAPPED() {
	    return this.getToken(StarStarParser.SCRAPPED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterScrapped(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitScrapped(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitScrapped(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DestroyBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_destroyBase;
    }

	DESTROYED() {
	    return this.getToken(StarStarParser.DESTROYED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterDestroyBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitDestroyBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitDestroyBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CardAcquisitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_cardAcquisition;
    }

	ACQUIRED() {
	    return this.getToken(StarStarParser.ACQUIRED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterCardAcquisition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCardAcquisition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCardAcquisition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AcquireToHandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_acquireToHand;
    }

	ACQUIRED() {
	    return this.getToken(StarStarParser.ACQUIRED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterAcquireToHand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitAcquireToHand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitAcquireToHand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AcquireToDeckContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_acquireToDeck;
    }

	ACQUIRED() {
	    return this.getToken(StarStarParser.ACQUIRED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	THE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.THE);
	    } else {
	        return this.getToken(StarStarParser.THE, i);
	    }
	};


	TOP() {
	    return this.getToken(StarStarParser.TOP, 0);
	};

	OF() {
	    return this.getToken(StarStarParser.OF, 0);
	};

	DECK() {
	    return this.getToken(StarStarParser.DECK, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterAcquireToDeck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitAcquireToDeck(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitAcquireToDeck(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PlaySingleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_playSingle;
    }

	PLAYED() {
	    return this.getToken(StarStarParser.PLAYED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterPlaySingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitPlaySingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitPlaySingle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_activate;
    }

	ACTIVATING() {
	    return this.getToken(StarStarParser.ACTIVATING, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterActivate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitActivate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitActivate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapSelfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_scrapSelf;
    }

	SCRAPPING() {
	    return this.getToken(StarStarParser.SCRAPPING, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterScrapSelf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitScrapSelf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitScrapSelf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EndTurnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_endTurn;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	ENDS() {
	    return this.getToken(StarStarParser.ENDS, 0);
	};

	TURN() {
	    return this.getToken(StarStarParser.TURN, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterEndTurn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitEndTurn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitEndTurn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StartTurnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_startTurn;
    }

	IT() {
	    return this.getToken(StarStarParser.IT, 0);
	};

	IS() {
	    return this.getToken(StarStarParser.IS, 0);
	};

	NOW() {
	    return this.getToken(StarStarParser.NOW, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	TURN() {
	    return this.getToken(StarStarParser.TURN, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterStartTurn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitStartTurn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitStartTurn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolvingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolving;
    }

	resolveScrapHand() {
	    return this.getTypedRuleContext(ResolveScrapHandContext,0);
	};

	resolveScrapHandOrDiscard() {
	    return this.getTypedRuleContext(ResolveScrapHandOrDiscardContext,0);
	};

	resolveScrapMultiple() {
	    return this.getTypedRuleContext(ResolveScrapMultipleContext,0);
	};

	resolvePatience() {
	    return this.getTypedRuleContext(ResolvePatienceContext,0);
	};

	resolveOthers() {
	    return this.getTypedRuleContext(ResolveOthersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolving(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolving(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolving(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveScrapHandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveScrapHand;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveScrapHand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveScrapHand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveScrapHand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveScrapHandOrDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveScrapHandOrDiscard;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveScrapHandOrDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveScrapHandOrDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveScrapHandOrDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveScrapMultipleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveScrapMultiple;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	UP() {
	    return this.getToken(StarStarParser.UP, 0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveScrapMultiple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveScrapMultiple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveScrapMultiple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolvePatienceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolvePatience;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	CHOOSE() {
	    return this.getToken(StarStarParser.CHOOSE, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	SET() {
	    return this.getToken(StarStarParser.SET, 0);
	};

	ASIDE() {
	    return this.getToken(StarStarParser.ASIDE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolvePatience(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolvePatience(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolvePatience(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveOthersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveOthers;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	customWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CustomWordContext);
	    } else {
	        return this.getTypedRuleContext(CustomWordContext,i);
	    }
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.INT);
	    } else {
	        return this.getToken(StarStarParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveOthers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveOthers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveOthers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcedeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_concede;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	CONCEDED() {
	    return this.getToken(StarStarParser.CONCEDED, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterConcede(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitConcede(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitConcede(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TimeoutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_timeout;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	WINS() {
	    return this.getToken(StarStarParser.WINS, 0);
	};

	THE() {
	    return this.getToken(StarStarParser.THE, 0);
	};

	GAME() {
	    return this.getToken(StarStarParser.GAME, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterTimeout(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitTimeout(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitTimeout(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ShuffleCardsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_shuffleCards;
    }

	SHUFFLED() {
	    return this.getToken(StarStarParser.SHUFFLED, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	FORM() {
	    return this.getToken(StarStarParser.FORM, 0);
	};

	NEW() {
	    return this.getToken(StarStarParser.NEW, 0);
	};

	DECK() {
	    return this.getToken(StarStarParser.DECK, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterShuffleCards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitShuffleCards(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitShuffleCards(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_effect;
    }

	customWord() {
	    return this.getTypedRuleContext(CustomWordContext,0);
	};

	INCREMENT() {
	    return this.getToken(StarStarParser.INCREMENT, 0);
	};

	DECREASE() {
	    return this.getToken(StarStarParser.DECREASE, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DrawCardsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_drawCards;
    }

	DREW() {
	    return this.getToken(StarStarParser.DREW, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterDrawCards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitDrawCards(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitDrawCards(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_card;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.INT);
	    } else {
	        return this.getToken(StarStarParser.INT, i);
	    }
	};


	customWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CustomWordContext);
	    } else {
	        return this.getTypedRuleContext(CustomWordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterCard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_name;
    }

	customWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CustomWordContext);
	    } else {
	        return this.getTypedRuleContext(CustomWordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CustomWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_customWord;
    }

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	ACQUIRED() {
	    return this.getToken(StarStarParser.ACQUIRED, 0);
	};

	ACTIVATING() {
	    return this.getToken(StarStarParser.ACTIVATING, 0);
	};

	ALL() {
	    return this.getToken(StarStarParser.ALL, 0);
	};

	ALLY() {
	    return this.getToken(StarStarParser.ALLY, 0);
	};

	ASIDE() {
	    return this.getToken(StarStarParser.ASIDE, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	CHOOSE() {
	    return this.getToken(StarStarParser.CHOOSE, 0);
	};

	CONCEDED() {
	    return this.getToken(StarStarParser.CONCEDED, 0);
	};

	DECK() {
	    return this.getToken(StarStarParser.DECK, 0);
	};

	DESTROYED() {
	    return this.getToken(StarStarParser.DESTROYED, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	DISCARDING() {
	    return this.getToken(StarStarParser.DISCARDING, 0);
	};

	DREW() {
	    return this.getToken(StarStarParser.DREW, 0);
	};

	ENDS() {
	    return this.getToken(StarStarParser.ENDS, 0);
	};

	EVENT() {
	    return this.getToken(StarStarParser.EVENT, 0);
	};

	FORM() {
	    return this.getToken(StarStarParser.FORM, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	GAME() {
	    return this.getToken(StarStarParser.GAME, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	HAS() {
	    return this.getToken(StarStarParser.HAS, 0);
	};

	INDICATORS() {
	    return this.getToken(StarStarParser.INDICATORS, 0);
	};

	IS() {
	    return this.getToken(StarStarParser.IS, 0);
	};

	IT() {
	    return this.getToken(StarStarParser.IT, 0);
	};

	NEW() {
	    return this.getToken(StarStarParser.NEW, 0);
	};

	NOW() {
	    return this.getToken(StarStarParser.NOW, 0);
	};

	OF() {
	    return this.getToken(StarStarParser.OF, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	PLAY() {
	    return this.getToken(StarStarParser.PLAY, 0);
	};

	PLAYED() {
	    return this.getToken(StarStarParser.PLAYED, 0);
	};

	REFRESH() {
	    return this.getToken(StarStarParser.REFRESH, 0);
	};

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	REVEALED() {
	    return this.getToken(StarStarParser.REVEALED, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	SCRAPPED() {
	    return this.getToken(StarStarParser.SCRAPPED, 0);
	};

	SCRAPPING() {
	    return this.getToken(StarStarParser.SCRAPPING, 0);
	};

	SET() {
	    return this.getToken(StarStarParser.SET, 0);
	};

	SHUFFLED() {
	    return this.getToken(StarStarParser.SHUFFLED, 0);
	};

	THE() {
	    return this.getToken(StarStarParser.THE, 0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	TOP() {
	    return this.getToken(StarStarParser.TOP, 0);
	};

	TURN() {
	    return this.getToken(StarStarParser.TURN, 0);
	};

	UP() {
	    return this.getToken(StarStarParser.UP, 0);
	};

	WINS() {
	    return this.getToken(StarStarParser.WINS, 0);
	};

	WON() {
	    return this.getToken(StarStarParser.WON, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterCustomWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCustomWord(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCustomWord(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




StarStarParser.BattleContext = BattleContext; 
StarStarParser.TurnContext = TurnContext; 
StarStarParser.ActionContext = ActionContext; 
StarStarParser.CardActionContext = CardActionContext; 
StarStarParser.CardTriggerContext = CardTriggerContext; 
StarStarParser.CardEffectContext = CardEffectContext; 
StarStarParser.SkipTextContext = SkipTextContext; 
StarStarParser.BalanceUpdateContext = BalanceUpdateContext; 
StarStarParser.OtherEffectContext = OtherEffectContext; 
StarStarParser.ScrapSummaryContext = ScrapSummaryContext; 
StarStarParser.DiscardedContext = DiscardedContext; 
StarStarParser.WinStatusContext = WinStatusContext; 
StarStarParser.EventContext = EventContext; 
StarStarParser.MissionContext = MissionContext; 
StarStarParser.ScrappedContext = ScrappedContext; 
StarStarParser.DestroyBaseContext = DestroyBaseContext; 
StarStarParser.CardAcquisitionContext = CardAcquisitionContext; 
StarStarParser.AcquireToHandContext = AcquireToHandContext; 
StarStarParser.AcquireToDeckContext = AcquireToDeckContext; 
StarStarParser.PlaySingleContext = PlaySingleContext; 
StarStarParser.ActivateContext = ActivateContext; 
StarStarParser.ScrapSelfContext = ScrapSelfContext; 
StarStarParser.EndTurnContext = EndTurnContext; 
StarStarParser.StartTurnContext = StartTurnContext; 
StarStarParser.ResolvingContext = ResolvingContext; 
StarStarParser.ResolveScrapHandContext = ResolveScrapHandContext; 
StarStarParser.ResolveScrapHandOrDiscardContext = ResolveScrapHandOrDiscardContext; 
StarStarParser.ResolveScrapMultipleContext = ResolveScrapMultipleContext; 
StarStarParser.ResolvePatienceContext = ResolvePatienceContext; 
StarStarParser.ResolveOthersContext = ResolveOthersContext; 
StarStarParser.ConcedeContext = ConcedeContext; 
StarStarParser.TimeoutContext = TimeoutContext; 
StarStarParser.ShuffleCardsContext = ShuffleCardsContext; 
StarStarParser.EffectContext = EffectContext; 
StarStarParser.DrawCardsContext = DrawCardsContext; 
StarStarParser.CardContext = CardContext; 
StarStarParser.NameContext = NameContext; 
StarStarParser.CustomWordContext = CustomWordContext; 
