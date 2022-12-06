// Generated from StarStar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import StarStarListener from './StarStarListener.js';
import StarStarVisitor from './StarStarVisitor.js';

const serializedATN = [4,1,52,271,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,4,0,62,8,0,11,0,12,0,63,1,0,1,0,1,1,4,1,69,
8,1,11,1,12,1,70,1,1,3,1,74,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,3,2,89,8,2,1,3,1,3,5,3,93,8,3,10,3,12,3,96,9,3,1,4,1,4,1,4,3,
4,101,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,112,8,5,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,4,6,121,8,6,11,6,12,6,122,1,7,1,7,1,7,3,7,128,8,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,141,8,8,1,8,4,8,144,8,8,11,8,12,
8,145,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,3,10,158,8,10,1,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,173,8,12,1,13,
1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,
16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,
1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,
21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,4,23,232,
8,23,11,23,12,23,233,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,3,27,257,8,27,1,27,
4,27,260,8,27,11,27,12,27,261,1,28,4,28,265,8,28,11,28,12,28,266,1,29,1,
29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,0,3,2,0,47,47,52,52,2,0,47,47,51,52,3,0,5,12,
14,39,48,48,281,0,61,1,0,0,0,2,68,1,0,0,0,4,88,1,0,0,0,6,90,1,0,0,0,8,100,
1,0,0,0,10,111,1,0,0,0,12,120,1,0,0,0,14,124,1,0,0,0,16,137,1,0,0,0,18,149,
1,0,0,0,20,153,1,0,0,0,22,162,1,0,0,0,24,166,1,0,0,0,26,174,1,0,0,0,28,178,
1,0,0,0,30,182,1,0,0,0,32,186,1,0,0,0,34,192,1,0,0,0,36,202,1,0,0,0,38,206,
1,0,0,0,40,210,1,0,0,0,42,214,1,0,0,0,44,220,1,0,0,0,46,229,1,0,0,0,48,237,
1,0,0,0,50,246,1,0,0,0,52,249,1,0,0,0,54,259,1,0,0,0,56,264,1,0,0,0,58,268,
1,0,0,0,60,62,3,2,1,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,
0,0,0,64,65,1,0,0,0,65,66,5,0,0,1,66,1,1,0,0,0,67,69,3,4,2,0,68,67,1,0,0,
0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,74,3,44,22,
0,73,72,1,0,0,0,73,74,1,0,0,0,74,3,1,0,0,0,75,89,3,30,15,0,76,89,3,22,11,
0,77,89,3,28,14,0,78,89,3,6,3,0,79,89,3,14,7,0,80,89,3,52,26,0,81,89,3,48,
24,0,82,89,3,42,21,0,83,89,3,24,12,0,84,89,3,26,13,0,85,86,3,12,6,0,86,87,
5,50,0,0,87,89,1,0,0,0,88,75,1,0,0,0,88,76,1,0,0,0,88,77,1,0,0,0,88,78,1,
0,0,0,88,79,1,0,0,0,88,80,1,0,0,0,88,81,1,0,0,0,88,82,1,0,0,0,88,83,1,0,
0,0,88,84,1,0,0,0,88,85,1,0,0,0,89,5,1,0,0,0,90,94,3,8,4,0,91,93,3,10,5,
0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,7,1,0,0,0,96,
94,1,0,0,0,97,101,3,36,18,0,98,101,3,38,19,0,99,101,3,40,20,0,100,97,1,0,
0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,9,1,0,0,0,102,112,3,14,7,0,103,112,
3,26,13,0,104,112,3,20,10,0,105,112,3,52,26,0,106,112,3,48,24,0,107,112,
3,46,23,0,108,112,3,16,8,0,109,112,3,32,16,0,110,112,3,34,17,0,111,102,1,
0,0,0,111,103,1,0,0,0,111,104,1,0,0,0,111,105,1,0,0,0,111,106,1,0,0,0,111,
107,1,0,0,0,111,108,1,0,0,0,111,109,1,0,0,0,111,110,1,0,0,0,112,11,1,0,0,
0,113,121,3,58,29,0,114,121,5,47,0,0,115,121,5,52,0,0,116,121,5,49,0,0,117,
121,5,1,0,0,118,121,5,2,0,0,119,121,5,3,0,0,120,113,1,0,0,0,120,114,1,0,
0,0,120,115,1,0,0,0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,
119,1,0,0,0,121,122,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,13,1,0,0,
0,124,125,3,56,28,0,125,127,5,49,0,0,126,128,3,54,27,0,127,126,1,0,0,0,127,
128,1,0,0,0,128,129,1,0,0,0,129,130,3,50,25,0,130,131,5,1,0,0,131,132,3,
58,29,0,132,133,5,2,0,0,133,134,7,0,0,0,134,135,5,3,0,0,135,136,5,50,0,0,
136,15,1,0,0,0,137,138,3,56,28,0,138,140,5,49,0,0,139,141,3,54,27,0,140,
139,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,144,3,58,29,0,143,142,1,
0,0,0,144,145,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,
148,5,50,0,0,148,17,1,0,0,0,149,150,5,6,0,0,150,151,3,54,27,0,151,152,5,
50,0,0,152,19,1,0,0,0,153,154,3,56,28,0,154,155,5,22,0,0,155,157,5,33,0,
0,156,158,5,2,0,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,
3,54,27,0,160,161,5,50,0,0,161,21,1,0,0,0,162,163,5,13,0,0,163,164,3,54,
27,0,164,165,5,50,0,0,165,23,1,0,0,0,166,167,3,56,28,0,167,168,5,20,0,0,
168,169,5,39,0,0,169,170,5,35,0,0,170,172,5,18,0,0,171,173,5,50,0,0,172,
171,1,0,0,0,172,173,1,0,0,0,173,25,1,0,0,0,174,175,5,32,0,0,175,176,3,54,
27,0,176,177,5,50,0,0,177,27,1,0,0,0,178,179,5,11,0,0,179,180,3,54,27,0,
180,181,5,50,0,0,181,29,1,0,0,0,182,183,5,5,0,0,183,184,3,54,27,0,184,185,
5,50,0,0,185,31,1,0,0,0,186,187,5,5,0,0,187,188,3,54,27,0,188,189,5,36,0,
0,189,190,5,19,0,0,190,191,5,50,0,0,191,33,1,0,0,0,192,193,5,5,0,0,193,194,
3,54,27,0,194,195,5,36,0,0,195,196,5,35,0,0,196,197,5,37,0,0,197,198,5,26,
0,0,198,199,5,35,0,0,199,200,5,10,0,0,200,201,5,50,0,0,201,35,1,0,0,0,202,
203,5,29,0,0,203,204,3,54,27,0,204,205,5,50,0,0,205,37,1,0,0,0,206,207,5,
6,0,0,207,208,3,54,27,0,208,209,5,50,0,0,209,39,1,0,0,0,210,211,5,33,0,0,
211,212,3,54,27,0,212,213,5,50,0,0,213,41,1,0,0,0,214,215,3,56,28,0,215,
216,5,16,0,0,216,217,5,38,0,0,217,218,5,47,0,0,218,219,5,50,0,0,219,43,1,
0,0,0,220,221,5,23,0,0,221,222,5,22,0,0,222,223,5,25,0,0,223,224,3,56,28,
0,224,225,5,4,0,0,225,226,5,38,0,0,226,227,5,47,0,0,227,228,5,50,0,0,228,
45,1,0,0,0,229,231,5,31,0,0,230,232,3,58,29,0,231,230,1,0,0,0,232,233,1,
0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,236,5,50,0,0,236,
47,1,0,0,0,237,238,5,34,0,0,238,239,5,12,0,0,239,240,5,27,0,0,240,241,5,
36,0,0,241,242,5,17,0,0,242,243,5,24,0,0,243,244,5,10,0,0,244,245,5,50,0,
0,245,49,1,0,0,0,246,247,7,1,0,0,247,248,3,58,29,0,248,51,1,0,0,0,249,250,
5,15,0,0,250,251,5,47,0,0,251,252,5,9,0,0,252,253,5,50,0,0,253,53,1,0,0,
0,254,256,3,58,29,0,255,257,5,4,0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,
260,1,0,0,0,258,260,5,47,0,0,259,254,1,0,0,0,259,258,1,0,0,0,260,261,1,0,
0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,55,1,0,0,0,263,265,3,58,29,0,264,
263,1,0,0,0,265,266,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,57,1,0,0,
0,268,269,7,2,0,0,269,59,1,0,0,0,19,63,70,73,88,94,100,111,120,122,127,140,
145,157,172,233,256,259,261,266];


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
                            null, null, null, "'</color>'", "'==='", "'.'", 
                            "';'", "','" ];
    static symbolicNames = [ null, null, null, null, null, "ACQUIRED", "ACTIVATING", 
                             "ALL", "ALLY", "CARDS", "DECK", "DESTROYED", 
                             "DISCARD", "DISCARDED", "DISCARDING", "DREW", 
                             "ENDS", "FORM", "GAME", "HAND", "HAS", "INDICATORS", 
                             "IS", "IT", "NEW", "NOW", "OF", "PILE", "PLAY", 
                             "PLAYED", "REFRESH", "RESOLVING", "SCRAPPED", 
                             "SCRAPPING", "SHUFFLED", "THE", "TO", "TOP", 
                             "TURN", "WON", "WHITESPACE", "COLOR_START_TAG", 
                             "COLOR_END_TAG", "END_GAME_TAG", "DOT", "SEMICOLUM", 
                             "COMMA", "INT", "WORD", "SEPARATOR", "NEWLINE", 
                             "INCREMENT", "DECREASE" ];
    static ruleNames = [ "battle", "turn", "action", "cardAction", "cardTrigger", 
                         "cardEffect", "skipText", "balanceUpdate", "otherEffect", 
                         "cardActivation", "scrapSummary", "discarded", 
                         "winStatus", "scrapped", "destroyBase", "cardAcquisition", 
                         "acquireToHand", "acquireToDeck", "playSingle", 
                         "activate", "scrapSelf", "endTurn", "startTurn", 
                         "resolving", "shuffleCards", "effect", "drawCards", 
                         "card", "name", "customWord" ];

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
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.turn();
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDED) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)) | (1 << (StarStarParser.SEPARATOR - 32)) | (1 << (StarStarParser.DECREASE - 32)))) !== 0));
	        this.state = 65;
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
	        this.state = 68; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 67;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 70; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 72;
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
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.cardAcquisition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.discarded();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.destroyBase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.cardAction();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 79;
	            this.balanceUpdate();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 80;
	            this.drawCards();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 81;
	            this.shuffleCards();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 82;
	            this.endTurn();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 83;
	            this.winStatus();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 84;
	            this.scrapped();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 85;
	            this.skipText();
	            this.state = 86;
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
	        this.state = 90;
	        this.cardTrigger();
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 91;
	                this.cardEffect(); 
	            }
	            this.state = 96;
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
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarStarParser.PLAYED:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.playSingle();
	            break;
	        case StarStarParser.ACTIVATING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.activate();
	            break;
	        case StarStarParser.SCRAPPING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.scrapSelf();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.balanceUpdate();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.scrapped();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.scrapSummary();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 105;
	            this.drawCards();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 106;
	            this.shuffleCards();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 107;
	            this.resolving();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 108;
	            this.otherEffect();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 109;
	            this.acquireToHand();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 110;
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
	        this.state = 120; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 120;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case StarStarParser.ACQUIRED:
	            case StarStarParser.ACTIVATING:
	            case StarStarParser.ALL:
	            case StarStarParser.ALLY:
	            case StarStarParser.CARDS:
	            case StarStarParser.DECK:
	            case StarStarParser.DESTROYED:
	            case StarStarParser.DISCARD:
	            case StarStarParser.DISCARDING:
	            case StarStarParser.DREW:
	            case StarStarParser.ENDS:
	            case StarStarParser.FORM:
	            case StarStarParser.GAME:
	            case StarStarParser.HAND:
	            case StarStarParser.HAS:
	            case StarStarParser.INDICATORS:
	            case StarStarParser.IS:
	            case StarStarParser.IT:
	            case StarStarParser.NEW:
	            case StarStarParser.NOW:
	            case StarStarParser.OF:
	            case StarStarParser.PILE:
	            case StarStarParser.PLAY:
	            case StarStarParser.PLAYED:
	            case StarStarParser.REFRESH:
	            case StarStarParser.RESOLVING:
	            case StarStarParser.SCRAPPED:
	            case StarStarParser.SCRAPPING:
	            case StarStarParser.SHUFFLED:
	            case StarStarParser.THE:
	            case StarStarParser.TO:
	            case StarStarParser.TOP:
	            case StarStarParser.TURN:
	            case StarStarParser.WON:
	            case StarStarParser.WORD:
	                this.state = 113;
	                this.customWord();
	                break;
	            case StarStarParser.INT:
	                this.state = 114;
	                this.match(StarStarParser.INT);
	                break;
	            case StarStarParser.DECREASE:
	                this.state = 115;
	                this.match(StarStarParser.DECREASE);
	                break;
	            case StarStarParser.SEPARATOR:
	                this.state = 116;
	                this.match(StarStarParser.SEPARATOR);
	                break;
	            case StarStarParser.T__0:
	                this.state = 117;
	                this.match(StarStarParser.T__0);
	                break;
	            case StarStarParser.T__1:
	                this.state = 118;
	                this.match(StarStarParser.T__1);
	                break;
	            case StarStarParser.T__2:
	                this.state = 119;
	                this.match(StarStarParser.T__2);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 122; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)) | (1 << (StarStarParser.SEPARATOR - 32)) | (1 << (StarStarParser.DECREASE - 32)))) !== 0));
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
	        this.state = 124;
	        this.name();
	        this.state = 125;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 126;
	            this.card();

	        }
	        this.state = 129;
	        this.effect();
	        this.state = 130;
	        this.match(StarStarParser.T__0);
	        this.state = 131;
	        this.customWord();
	        this.state = 132;
	        this.match(StarStarParser.T__1);
	        this.state = 133;
	        _la = this._input.LA(1);
	        if(!(_la===StarStarParser.INT || _la===StarStarParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 134;
	        this.match(StarStarParser.T__2);
	        this.state = 135;
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
	        this.state = 137;
	        this.name();
	        this.state = 138;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 140;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 139;
	            this.card();

	        }
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 142;
	            this.customWord();
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0));
	        this.state = 147;
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



	cardActivation() {
	    let localctx = new CardActivationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StarStarParser.RULE_cardActivation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(StarStarParser.ACTIVATING);
	        this.state = 150;
	        this.card();
	        this.state = 151;
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
	    this.enterRule(localctx, 20, StarStarParser.RULE_scrapSummary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.name();
	        this.state = 154;
	        this.match(StarStarParser.IS);
	        this.state = 155;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.T__1) {
	            this.state = 156;
	            this.match(StarStarParser.T__1);
	        }

	        this.state = 159;
	        this.card();
	        this.state = 160;
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
	    this.enterRule(localctx, 22, StarStarParser.RULE_discarded);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(StarStarParser.DISCARDED);
	        this.state = 163;
	        this.card();
	        this.state = 164;
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
	    this.enterRule(localctx, 24, StarStarParser.RULE_winStatus);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.name();
	        this.state = 167;
	        this.match(StarStarParser.HAS);
	        this.state = 168;
	        this.match(StarStarParser.WON);
	        this.state = 169;
	        this.match(StarStarParser.THE);
	        this.state = 170;
	        this.match(StarStarParser.GAME);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.NEWLINE) {
	            this.state = 171;
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



	scrapped() {
	    let localctx = new ScrappedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StarStarParser.RULE_scrapped);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(StarStarParser.SCRAPPED);
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



	destroyBase() {
	    let localctx = new DestroyBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StarStarParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(StarStarParser.DESTROYED);
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



	cardAcquisition() {
	    let localctx = new CardAcquisitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StarStarParser.RULE_cardAcquisition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 183;
	        this.card();
	        this.state = 184;
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
	    this.enterRule(localctx, 32, StarStarParser.RULE_acquireToHand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 187;
	        this.card();
	        this.state = 188;
	        this.match(StarStarParser.TO);
	        this.state = 189;
	        this.match(StarStarParser.HAND);
	        this.state = 190;
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
	    this.enterRule(localctx, 34, StarStarParser.RULE_acquireToDeck);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 193;
	        this.card();
	        this.state = 194;
	        this.match(StarStarParser.TO);
	        this.state = 195;
	        this.match(StarStarParser.THE);
	        this.state = 196;
	        this.match(StarStarParser.TOP);
	        this.state = 197;
	        this.match(StarStarParser.OF);
	        this.state = 198;
	        this.match(StarStarParser.THE);
	        this.state = 199;
	        this.match(StarStarParser.DECK);
	        this.state = 200;
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
	    this.enterRule(localctx, 36, StarStarParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(StarStarParser.PLAYED);
	        this.state = 203;
	        this.card();
	        this.state = 204;
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
	    this.enterRule(localctx, 38, StarStarParser.RULE_activate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(StarStarParser.ACTIVATING);
	        this.state = 207;
	        this.card();
	        this.state = 208;
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
	    this.enterRule(localctx, 40, StarStarParser.RULE_scrapSelf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 211;
	        this.card();
	        this.state = 212;
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
	    this.enterRule(localctx, 42, StarStarParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.name();
	        this.state = 215;
	        this.match(StarStarParser.ENDS);
	        this.state = 216;
	        this.match(StarStarParser.TURN);
	        this.state = 217;
	        this.match(StarStarParser.INT);
	        this.state = 218;
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
	    this.enterRule(localctx, 44, StarStarParser.RULE_startTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(StarStarParser.IT);
	        this.state = 221;
	        this.match(StarStarParser.IS);
	        this.state = 222;
	        this.match(StarStarParser.NOW);
	        this.state = 223;
	        this.name();
	        this.state = 224;
	        this.match(StarStarParser.T__3);
	        this.state = 225;
	        this.match(StarStarParser.TURN);
	        this.state = 226;
	        this.match(StarStarParser.INT);
	        this.state = 227;
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
	    this.enterRule(localctx, 46, StarStarParser.RULE_resolving);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 231; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 230;
	            this.customWord();
	            this.state = 233; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0));
	        this.state = 235;
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
	    this.enterRule(localctx, 48, StarStarParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(StarStarParser.SHUFFLED);
	        this.state = 238;
	        this.match(StarStarParser.DISCARD);
	        this.state = 239;
	        this.match(StarStarParser.PILE);
	        this.state = 240;
	        this.match(StarStarParser.TO);
	        this.state = 241;
	        this.match(StarStarParser.FORM);
	        this.state = 242;
	        this.match(StarStarParser.NEW);
	        this.state = 243;
	        this.match(StarStarParser.DECK);
	        this.state = 244;
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
	    this.enterRule(localctx, 50, StarStarParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        _la = this._input.LA(1);
	        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (StarStarParser.INT - 47)) | (1 << (StarStarParser.INCREMENT - 47)) | (1 << (StarStarParser.DECREASE - 47)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 247;
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
	    this.enterRule(localctx, 52, StarStarParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(StarStarParser.DREW);
	        this.state = 250;
	        this.match(StarStarParser.INT);
	        this.state = 251;
	        this.match(StarStarParser.CARDS);
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



	card() {
	    let localctx = new CardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, StarStarParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 259;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case StarStarParser.ACQUIRED:
	        		case StarStarParser.ACTIVATING:
	        		case StarStarParser.ALL:
	        		case StarStarParser.ALLY:
	        		case StarStarParser.CARDS:
	        		case StarStarParser.DECK:
	        		case StarStarParser.DESTROYED:
	        		case StarStarParser.DISCARD:
	        		case StarStarParser.DISCARDING:
	        		case StarStarParser.DREW:
	        		case StarStarParser.ENDS:
	        		case StarStarParser.FORM:
	        		case StarStarParser.GAME:
	        		case StarStarParser.HAND:
	        		case StarStarParser.HAS:
	        		case StarStarParser.INDICATORS:
	        		case StarStarParser.IS:
	        		case StarStarParser.IT:
	        		case StarStarParser.NEW:
	        		case StarStarParser.NOW:
	        		case StarStarParser.OF:
	        		case StarStarParser.PILE:
	        		case StarStarParser.PLAY:
	        		case StarStarParser.PLAYED:
	        		case StarStarParser.REFRESH:
	        		case StarStarParser.RESOLVING:
	        		case StarStarParser.SCRAPPED:
	        		case StarStarParser.SCRAPPING:
	        		case StarStarParser.SHUFFLED:
	        		case StarStarParser.THE:
	        		case StarStarParser.TO:
	        		case StarStarParser.TOP:
	        		case StarStarParser.TURN:
	        		case StarStarParser.WON:
	        		case StarStarParser.WORD:
	        		    this.state = 254;
	        		    this.customWord();
	        		    this.state = 256;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		    if(_la===StarStarParser.T__3) {
	        		        this.state = 255;
	        		        this.match(StarStarParser.T__3);
	        		    }

	        		    break;
	        		case StarStarParser.INT:
	        		    this.state = 258;
	        		    this.match(StarStarParser.INT);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 261; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
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
	    this.enterRule(localctx, 56, StarStarParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 263;
	        		this.customWord();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 266; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
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
	    this.enterRule(localctx, 58, StarStarParser.RULE_customWord);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAND) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0))) {
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
StarStarParser.CARDS = 9;
StarStarParser.DECK = 10;
StarStarParser.DESTROYED = 11;
StarStarParser.DISCARD = 12;
StarStarParser.DISCARDED = 13;
StarStarParser.DISCARDING = 14;
StarStarParser.DREW = 15;
StarStarParser.ENDS = 16;
StarStarParser.FORM = 17;
StarStarParser.GAME = 18;
StarStarParser.HAND = 19;
StarStarParser.HAS = 20;
StarStarParser.INDICATORS = 21;
StarStarParser.IS = 22;
StarStarParser.IT = 23;
StarStarParser.NEW = 24;
StarStarParser.NOW = 25;
StarStarParser.OF = 26;
StarStarParser.PILE = 27;
StarStarParser.PLAY = 28;
StarStarParser.PLAYED = 29;
StarStarParser.REFRESH = 30;
StarStarParser.RESOLVING = 31;
StarStarParser.SCRAPPED = 32;
StarStarParser.SCRAPPING = 33;
StarStarParser.SHUFFLED = 34;
StarStarParser.THE = 35;
StarStarParser.TO = 36;
StarStarParser.TOP = 37;
StarStarParser.TURN = 38;
StarStarParser.WON = 39;
StarStarParser.WHITESPACE = 40;
StarStarParser.COLOR_START_TAG = 41;
StarStarParser.COLOR_END_TAG = 42;
StarStarParser.END_GAME_TAG = 43;
StarStarParser.DOT = 44;
StarStarParser.SEMICOLUM = 45;
StarStarParser.COMMA = 46;
StarStarParser.INT = 47;
StarStarParser.WORD = 48;
StarStarParser.SEPARATOR = 49;
StarStarParser.NEWLINE = 50;
StarStarParser.INCREMENT = 51;
StarStarParser.DECREASE = 52;

StarStarParser.RULE_battle = 0;
StarStarParser.RULE_turn = 1;
StarStarParser.RULE_action = 2;
StarStarParser.RULE_cardAction = 3;
StarStarParser.RULE_cardTrigger = 4;
StarStarParser.RULE_cardEffect = 5;
StarStarParser.RULE_skipText = 6;
StarStarParser.RULE_balanceUpdate = 7;
StarStarParser.RULE_otherEffect = 8;
StarStarParser.RULE_cardActivation = 9;
StarStarParser.RULE_scrapSummary = 10;
StarStarParser.RULE_discarded = 11;
StarStarParser.RULE_winStatus = 12;
StarStarParser.RULE_scrapped = 13;
StarStarParser.RULE_destroyBase = 14;
StarStarParser.RULE_cardAcquisition = 15;
StarStarParser.RULE_acquireToHand = 16;
StarStarParser.RULE_acquireToDeck = 17;
StarStarParser.RULE_playSingle = 18;
StarStarParser.RULE_activate = 19;
StarStarParser.RULE_scrapSelf = 20;
StarStarParser.RULE_endTurn = 21;
StarStarParser.RULE_startTurn = 22;
StarStarParser.RULE_resolving = 23;
StarStarParser.RULE_shuffleCards = 24;
StarStarParser.RULE_effect = 25;
StarStarParser.RULE_drawCards = 26;
StarStarParser.RULE_card = 27;
StarStarParser.RULE_name = 28;
StarStarParser.RULE_customWord = 29;

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

	resolving() {
	    return this.getTypedRuleContext(ResolvingContext,0);
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



class CardActivationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_cardActivation;
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
	        listener.enterCardActivation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitCardActivation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitCardActivation(this);
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

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
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

	FORM() {
	    return this.getToken(StarStarParser.FORM, 0);
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

	SCRAPPED() {
	    return this.getToken(StarStarParser.SCRAPPED, 0);
	};

	SCRAPPING() {
	    return this.getToken(StarStarParser.SCRAPPING, 0);
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

	WON() {
	    return this.getToken(StarStarParser.WON, 0);
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
StarStarParser.CardActivationContext = CardActivationContext; 
StarStarParser.ScrapSummaryContext = ScrapSummaryContext; 
StarStarParser.DiscardedContext = DiscardedContext; 
StarStarParser.WinStatusContext = WinStatusContext; 
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
StarStarParser.ShuffleCardsContext = ShuffleCardsContext; 
StarStarParser.EffectContext = EffectContext; 
StarStarParser.DrawCardsContext = DrawCardsContext; 
StarStarParser.CardContext = CardContext; 
StarStarParser.NameContext = NameContext; 
StarStarParser.CustomWordContext = CustomWordContext; 
