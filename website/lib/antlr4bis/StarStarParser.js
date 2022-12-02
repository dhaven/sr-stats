// Generated from StarStar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import StarStarListener from './StarStarListener.js';
import StarStarVisitor from './StarStarVisitor.js';

const serializedATN = [4,1,51,240,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,0,
4,0,56,8,0,11,0,12,0,57,1,0,1,0,1,1,4,1,63,8,1,11,1,12,1,64,1,1,3,1,68,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,82,8,2,1,3,1,3,5,3,
86,8,3,10,3,12,3,89,9,3,1,4,1,4,1,4,3,4,94,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,
5,102,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,4,6,111,8,6,11,6,12,6,112,1,7,1,7,
1,7,3,7,118,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,
1,9,1,9,3,9,136,8,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,
1,11,1,11,3,11,151,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,3,14,168,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,
1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,
19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,4,20,201,8,20,11,20,12,20,
202,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,
1,23,1,23,1,23,1,23,1,23,1,24,1,24,3,24,226,8,24,1,24,4,24,229,8,24,11,24,
12,24,230,1,25,4,25,234,8,25,11,25,12,25,235,1,26,1,26,1,26,0,0,27,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,0,
3,2,0,46,46,51,51,2,0,46,46,50,51,3,0,5,12,14,38,47,47,248,0,55,1,0,0,0,
2,62,1,0,0,0,4,81,1,0,0,0,6,83,1,0,0,0,8,93,1,0,0,0,10,101,1,0,0,0,12,110,
1,0,0,0,14,114,1,0,0,0,16,127,1,0,0,0,18,131,1,0,0,0,20,140,1,0,0,0,22,144,
1,0,0,0,24,152,1,0,0,0,26,156,1,0,0,0,28,160,1,0,0,0,30,171,1,0,0,0,32,175,
1,0,0,0,34,179,1,0,0,0,36,183,1,0,0,0,38,189,1,0,0,0,40,198,1,0,0,0,42,206,
1,0,0,0,44,215,1,0,0,0,46,218,1,0,0,0,48,228,1,0,0,0,50,233,1,0,0,0,52,237,
1,0,0,0,54,56,3,2,1,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,
0,0,0,58,59,1,0,0,0,59,60,5,0,0,1,60,1,1,0,0,0,61,63,3,4,2,0,62,61,1,0,0,
0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,68,3,38,19,
0,67,66,1,0,0,0,67,68,1,0,0,0,68,3,1,0,0,0,69,82,3,28,14,0,70,82,3,20,10,
0,71,82,3,26,13,0,72,82,3,6,3,0,73,82,3,14,7,0,74,82,3,46,23,0,75,82,3,42,
21,0,76,82,3,36,18,0,77,82,3,22,11,0,78,79,3,12,6,0,79,80,5,49,0,0,80,82,
1,0,0,0,81,69,1,0,0,0,81,70,1,0,0,0,81,71,1,0,0,0,81,72,1,0,0,0,81,73,1,
0,0,0,81,74,1,0,0,0,81,75,1,0,0,0,81,76,1,0,0,0,81,77,1,0,0,0,81,78,1,0,
0,0,82,5,1,0,0,0,83,87,3,8,4,0,84,86,3,10,5,0,85,84,1,0,0,0,86,89,1,0,0,
0,87,85,1,0,0,0,87,88,1,0,0,0,88,7,1,0,0,0,89,87,1,0,0,0,90,94,3,30,15,0,
91,94,3,32,16,0,92,94,3,34,17,0,93,90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,
0,94,9,1,0,0,0,95,102,3,14,7,0,96,102,3,24,12,0,97,102,3,18,9,0,98,102,3,
46,23,0,99,102,3,42,21,0,100,102,3,40,20,0,101,95,1,0,0,0,101,96,1,0,0,0,
101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,11,1,0,
0,0,103,111,3,52,26,0,104,111,5,46,0,0,105,111,5,51,0,0,106,111,5,48,0,0,
107,111,5,1,0,0,108,111,5,2,0,0,109,111,5,3,0,0,110,103,1,0,0,0,110,104,
1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,1,0,0,0,110,108,1,0,0,0,
110,109,1,0,0,0,111,112,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,13,1,
0,0,0,114,115,3,50,25,0,115,117,5,48,0,0,116,118,3,48,24,0,117,116,1,0,0,
0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,3,44,22,0,120,121,5,1,0,0,121,
122,3,52,26,0,122,123,5,2,0,0,123,124,7,0,0,0,124,125,5,3,0,0,125,126,5,
49,0,0,126,15,1,0,0,0,127,128,5,6,0,0,128,129,3,48,24,0,129,130,5,49,0,0,
130,17,1,0,0,0,131,132,3,50,25,0,132,133,5,21,0,0,133,135,5,32,0,0,134,136,
5,2,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,3,48,24,
0,138,139,5,49,0,0,139,19,1,0,0,0,140,141,5,13,0,0,141,142,3,48,24,0,142,
143,5,49,0,0,143,21,1,0,0,0,144,145,3,50,25,0,145,146,5,19,0,0,146,147,5,
38,0,0,147,148,5,34,0,0,148,150,5,18,0,0,149,151,5,49,0,0,150,149,1,0,0,
0,150,151,1,0,0,0,151,23,1,0,0,0,152,153,5,31,0,0,153,154,3,48,24,0,154,
155,5,49,0,0,155,25,1,0,0,0,156,157,5,11,0,0,157,158,3,48,24,0,158,159,5,
49,0,0,159,27,1,0,0,0,160,161,5,5,0,0,161,167,3,48,24,0,162,163,5,35,0,0,
163,164,5,34,0,0,164,165,5,36,0,0,165,166,5,25,0,0,166,168,5,10,0,0,167,
162,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,5,49,0,0,170,29,1,0,
0,0,171,172,5,28,0,0,172,173,3,48,24,0,173,174,5,49,0,0,174,31,1,0,0,0,175,
176,5,6,0,0,176,177,3,48,24,0,177,178,5,49,0,0,178,33,1,0,0,0,179,180,5,
32,0,0,180,181,3,48,24,0,181,182,5,49,0,0,182,35,1,0,0,0,183,184,3,50,25,
0,184,185,5,16,0,0,185,186,5,37,0,0,186,187,5,46,0,0,187,188,5,49,0,0,188,
37,1,0,0,0,189,190,5,22,0,0,190,191,5,21,0,0,191,192,5,24,0,0,192,193,3,
50,25,0,193,194,5,4,0,0,194,195,5,37,0,0,195,196,5,46,0,0,196,197,5,49,0,
0,197,39,1,0,0,0,198,200,5,30,0,0,199,201,3,52,26,0,200,199,1,0,0,0,201,
202,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,49,
0,0,205,41,1,0,0,0,206,207,5,33,0,0,207,208,5,12,0,0,208,209,5,26,0,0,209,
210,5,35,0,0,210,211,5,17,0,0,211,212,5,23,0,0,212,213,5,10,0,0,213,214,
5,49,0,0,214,43,1,0,0,0,215,216,7,1,0,0,216,217,3,52,26,0,217,45,1,0,0,0,
218,219,5,15,0,0,219,220,5,46,0,0,220,221,5,9,0,0,221,222,5,49,0,0,222,47,
1,0,0,0,223,225,3,52,26,0,224,226,5,4,0,0,225,224,1,0,0,0,225,226,1,0,0,
0,226,229,1,0,0,0,227,229,5,46,0,0,228,223,1,0,0,0,228,227,1,0,0,0,229,230,
1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,49,1,0,0,0,232,234,3,52,26,0,
233,232,1,0,0,0,234,235,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,51,1,
0,0,0,237,238,7,2,0,0,238,53,1,0,0,0,18,57,64,67,81,87,93,101,110,112,117,
135,150,167,202,225,228,230,235];


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
                            null, null, "'</color>'", "'==='", "'.'", "';'", 
                            "','" ];
    static symbolicNames = [ null, null, null, null, null, "ACQUIRED", "ACTIVATING", 
                             "ALL", "ALLY", "CARDS", "DECK", "DESTROYED", 
                             "DISCARD", "DISCARDED", "DISCARDING", "DREW", 
                             "ENDS", "FORM", "GAME", "HAS", "INDICATORS", 
                             "IS", "IT", "NEW", "NOW", "OF", "PILE", "PLAY", 
                             "PLAYED", "REFRESH", "RESOLVING", "SCRAPPED", 
                             "SCRAPPING", "SHUFFLED", "THE", "TO", "TOP", 
                             "TURN", "WON", "WHITESPACE", "COLOR_START_TAG", 
                             "COLOR_END_TAG", "END_GAME_TAG", "DOT", "SEMICOLUM", 
                             "COMMA", "INT", "WORD", "SEPARATOR", "NEWLINE", 
                             "INCREMENT", "DECREASE" ];
    static ruleNames = [ "battle", "turn", "action", "cardAction", "cardTrigger", 
                         "cardEffect", "skipText", "balanceUpdate", "cardActivation", 
                         "scrapSummary", "discarded", "winStatus", "scrapped", 
                         "destroyBase", "cardAcquisition", "playSingle", 
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
	        this.state = 55; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 54;
	            this.turn();
	            this.state = 57; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDED) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING) | (1 << StarStarParser.SCRAPPED))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)) | (1 << (StarStarParser.SEPARATOR - 32)) | (1 << (StarStarParser.DECREASE - 32)))) !== 0));
	        this.state = 59;
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
	        this.state = 62; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 61;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 64; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 66;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.cardAcquisition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.discarded();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.destroyBase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 72;
	            this.cardAction();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 73;
	            this.balanceUpdate();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 74;
	            this.drawCards();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 75;
	            this.shuffleCards();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 76;
	            this.endTurn();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 77;
	            this.winStatus();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 78;
	            this.skipText();
	            this.state = 79;
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
	        this.state = 83;
	        this.cardTrigger();
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 84;
	                this.cardEffect(); 
	            }
	            this.state = 89;
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
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarStarParser.PLAYED:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.playSingle();
	            break;
	        case StarStarParser.ACTIVATING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.activate();
	            break;
	        case StarStarParser.SCRAPPING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
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
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.balanceUpdate();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.scrapped();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.scrapSummary();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.drawCards();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.shuffleCards();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
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



	skipText() {
	    let localctx = new SkipTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StarStarParser.RULE_skipText);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 110;
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
	                this.state = 103;
	                this.customWord();
	                break;
	            case StarStarParser.INT:
	                this.state = 104;
	                this.match(StarStarParser.INT);
	                break;
	            case StarStarParser.DECREASE:
	                this.state = 105;
	                this.match(StarStarParser.DECREASE);
	                break;
	            case StarStarParser.SEPARATOR:
	                this.state = 106;
	                this.match(StarStarParser.SEPARATOR);
	                break;
	            case StarStarParser.T__0:
	                this.state = 107;
	                this.match(StarStarParser.T__0);
	                break;
	            case StarStarParser.T__1:
	                this.state = 108;
	                this.match(StarStarParser.T__1);
	                break;
	            case StarStarParser.T__2:
	                this.state = 109;
	                this.match(StarStarParser.T__2);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 112; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING) | (1 << StarStarParser.SCRAPPED))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.INT - 32)) | (1 << (StarStarParser.WORD - 32)) | (1 << (StarStarParser.SEPARATOR - 32)) | (1 << (StarStarParser.DECREASE - 32)))) !== 0));
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
	        this.state = 114;
	        this.name();
	        this.state = 115;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 116;
	            this.card();

	        }
	        this.state = 119;
	        this.effect();
	        this.state = 120;
	        this.match(StarStarParser.T__0);
	        this.state = 121;
	        this.customWord();
	        this.state = 122;
	        this.match(StarStarParser.T__1);
	        this.state = 123;
	        _la = this._input.LA(1);
	        if(!(_la===StarStarParser.INT || _la===StarStarParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 124;
	        this.match(StarStarParser.T__2);
	        this.state = 125;
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
	    this.enterRule(localctx, 16, StarStarParser.RULE_cardActivation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(StarStarParser.ACTIVATING);
	        this.state = 128;
	        this.card();
	        this.state = 129;
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
	        this.state = 131;
	        this.name();
	        this.state = 132;
	        this.match(StarStarParser.IS);
	        this.state = 133;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.T__1) {
	            this.state = 134;
	            this.match(StarStarParser.T__1);
	        }

	        this.state = 137;
	        this.card();
	        this.state = 138;
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
	        this.state = 140;
	        this.match(StarStarParser.DISCARDED);
	        this.state = 141;
	        this.card();
	        this.state = 142;
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
	        this.state = 144;
	        this.name();
	        this.state = 145;
	        this.match(StarStarParser.HAS);
	        this.state = 146;
	        this.match(StarStarParser.WON);
	        this.state = 147;
	        this.match(StarStarParser.THE);
	        this.state = 148;
	        this.match(StarStarParser.GAME);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.NEWLINE) {
	            this.state = 149;
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
	    this.enterRule(localctx, 24, StarStarParser.RULE_scrapped);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(StarStarParser.SCRAPPED);
	        this.state = 153;
	        this.card();
	        this.state = 154;
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
	    this.enterRule(localctx, 26, StarStarParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(StarStarParser.DESTROYED);
	        this.state = 157;
	        this.card();
	        this.state = 158;
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
	    this.enterRule(localctx, 28, StarStarParser.RULE_cardAcquisition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 161;
	        this.card();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.TO) {
	            this.state = 162;
	            this.match(StarStarParser.TO);
	            this.state = 163;
	            this.match(StarStarParser.THE);
	            this.state = 164;
	            this.match(StarStarParser.TOP);
	            this.state = 165;
	            this.match(StarStarParser.OF);
	            this.state = 166;
	            this.match(StarStarParser.DECK);
	        }

	        this.state = 169;
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
	    this.enterRule(localctx, 30, StarStarParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(StarStarParser.PLAYED);
	        this.state = 172;
	        this.card();
	        this.state = 173;
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
	    this.enterRule(localctx, 32, StarStarParser.RULE_activate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(StarStarParser.ACTIVATING);
	        this.state = 176;
	        this.card();
	        this.state = 177;
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
	    this.enterRule(localctx, 34, StarStarParser.RULE_scrapSelf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 180;
	        this.card();
	        this.state = 181;
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
	    this.enterRule(localctx, 36, StarStarParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.name();
	        this.state = 184;
	        this.match(StarStarParser.ENDS);
	        this.state = 185;
	        this.match(StarStarParser.TURN);
	        this.state = 186;
	        this.match(StarStarParser.INT);
	        this.state = 187;
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
	    this.enterRule(localctx, 38, StarStarParser.RULE_startTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(StarStarParser.IT);
	        this.state = 190;
	        this.match(StarStarParser.IS);
	        this.state = 191;
	        this.match(StarStarParser.NOW);
	        this.state = 192;
	        this.name();
	        this.state = 193;
	        this.match(StarStarParser.T__3);
	        this.state = 194;
	        this.match(StarStarParser.TURN);
	        this.state = 195;
	        this.match(StarStarParser.INT);
	        this.state = 196;
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
	    this.enterRule(localctx, 40, StarStarParser.RULE_resolving);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 200; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 199;
	            this.customWord();
	            this.state = 202; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING) | (1 << StarStarParser.SCRAPPED))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0));
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



	shuffleCards() {
	    let localctx = new ShuffleCardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, StarStarParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(StarStarParser.SHUFFLED);
	        this.state = 207;
	        this.match(StarStarParser.DISCARD);
	        this.state = 208;
	        this.match(StarStarParser.PILE);
	        this.state = 209;
	        this.match(StarStarParser.TO);
	        this.state = 210;
	        this.match(StarStarParser.FORM);
	        this.state = 211;
	        this.match(StarStarParser.NEW);
	        this.state = 212;
	        this.match(StarStarParser.DECK);
	        this.state = 213;
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
	    this.enterRule(localctx, 44, StarStarParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (StarStarParser.INT - 46)) | (1 << (StarStarParser.INCREMENT - 46)) | (1 << (StarStarParser.DECREASE - 46)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 216;
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
	    this.enterRule(localctx, 46, StarStarParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(StarStarParser.DREW);
	        this.state = 219;
	        this.match(StarStarParser.INT);
	        this.state = 220;
	        this.match(StarStarParser.CARDS);
	        this.state = 221;
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
	    this.enterRule(localctx, 48, StarStarParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 228;
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
	        		    this.state = 223;
	        		    this.customWord();
	        		    this.state = 225;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		    if(_la===StarStarParser.T__3) {
	        		        this.state = 224;
	        		        this.match(StarStarParser.T__3);
	        		    }

	        		    break;
	        		case StarStarParser.INT:
	        		    this.state = 227;
	        		    this.match(StarStarParser.INT);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 230; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
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
	    this.enterRule(localctx, 50, StarStarParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 232;
	        		this.customWord();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 235; 
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



	customWord() {
	    let localctx = new CustomWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, StarStarParser.RULE_customWord);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.FORM) | (1 << StarStarParser.GAME) | (1 << StarStarParser.HAS) | (1 << StarStarParser.INDICATORS) | (1 << StarStarParser.IS) | (1 << StarStarParser.IT) | (1 << StarStarParser.NEW) | (1 << StarStarParser.NOW) | (1 << StarStarParser.OF) | (1 << StarStarParser.PILE) | (1 << StarStarParser.PLAY) | (1 << StarStarParser.PLAYED) | (1 << StarStarParser.REFRESH) | (1 << StarStarParser.RESOLVING) | (1 << StarStarParser.SCRAPPED))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.WORD - 32)))) !== 0))) {
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
StarStarParser.HAS = 19;
StarStarParser.INDICATORS = 20;
StarStarParser.IS = 21;
StarStarParser.IT = 22;
StarStarParser.NEW = 23;
StarStarParser.NOW = 24;
StarStarParser.OF = 25;
StarStarParser.PILE = 26;
StarStarParser.PLAY = 27;
StarStarParser.PLAYED = 28;
StarStarParser.REFRESH = 29;
StarStarParser.RESOLVING = 30;
StarStarParser.SCRAPPED = 31;
StarStarParser.SCRAPPING = 32;
StarStarParser.SHUFFLED = 33;
StarStarParser.THE = 34;
StarStarParser.TO = 35;
StarStarParser.TOP = 36;
StarStarParser.TURN = 37;
StarStarParser.WON = 38;
StarStarParser.WHITESPACE = 39;
StarStarParser.COLOR_START_TAG = 40;
StarStarParser.COLOR_END_TAG = 41;
StarStarParser.END_GAME_TAG = 42;
StarStarParser.DOT = 43;
StarStarParser.SEMICOLUM = 44;
StarStarParser.COMMA = 45;
StarStarParser.INT = 46;
StarStarParser.WORD = 47;
StarStarParser.SEPARATOR = 48;
StarStarParser.NEWLINE = 49;
StarStarParser.INCREMENT = 50;
StarStarParser.DECREASE = 51;

StarStarParser.RULE_battle = 0;
StarStarParser.RULE_turn = 1;
StarStarParser.RULE_action = 2;
StarStarParser.RULE_cardAction = 3;
StarStarParser.RULE_cardTrigger = 4;
StarStarParser.RULE_cardEffect = 5;
StarStarParser.RULE_skipText = 6;
StarStarParser.RULE_balanceUpdate = 7;
StarStarParser.RULE_cardActivation = 8;
StarStarParser.RULE_scrapSummary = 9;
StarStarParser.RULE_discarded = 10;
StarStarParser.RULE_winStatus = 11;
StarStarParser.RULE_scrapped = 12;
StarStarParser.RULE_destroyBase = 13;
StarStarParser.RULE_cardAcquisition = 14;
StarStarParser.RULE_playSingle = 15;
StarStarParser.RULE_activate = 16;
StarStarParser.RULE_scrapSelf = 17;
StarStarParser.RULE_endTurn = 18;
StarStarParser.RULE_startTurn = 19;
StarStarParser.RULE_resolving = 20;
StarStarParser.RULE_shuffleCards = 21;
StarStarParser.RULE_effect = 22;
StarStarParser.RULE_drawCards = 23;
StarStarParser.RULE_card = 24;
StarStarParser.RULE_name = 25;
StarStarParser.RULE_customWord = 26;

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

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	THE() {
	    return this.getToken(StarStarParser.THE, 0);
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
StarStarParser.CardActivationContext = CardActivationContext; 
StarStarParser.ScrapSummaryContext = ScrapSummaryContext; 
StarStarParser.DiscardedContext = DiscardedContext; 
StarStarParser.WinStatusContext = WinStatusContext; 
StarStarParser.ScrappedContext = ScrappedContext; 
StarStarParser.DestroyBaseContext = DestroyBaseContext; 
StarStarParser.CardAcquisitionContext = CardAcquisitionContext; 
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
