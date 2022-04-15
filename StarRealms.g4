grammar StarRealms;

battle            : turn+ EOF ;
winStatus         : name 'has' 'won' 'the' 'game' NEWLINE ;
turn              : baseInstantEffect* action+ (endPhase | winStatus) ;
baseInstantEffect : newBalanceDetail | drawCardsWithShuffle;
action            : purchase | play | attackPlayer | attackBase | scrapCard | discard | choseEffect | activatingEffect;

//describes a purchase action
purchase        : purchaseSummary purchaseDetail;
purchaseDetail  : newBalanceDetail (ACQUIRED card 'to' 'the' 'top' WORD 'the' 'deck' NEWLINE)?;
purchaseSummary : ACQUIRED card  NEWLINE;

//describes a play action
play        : playSummary playDetail?;
playSummary : (PLAY ALL NEWLINE) | playSingle;
playSingle  : PLAYED card NEWLINE;
playDetail  : (newBalanceDetail | newAbility | drawCardsWithShuffle | scrapCardEffect | simpleScrap | destroyBase)+;
newAbility  : name SEPARATOR card 'ability' 'available' NEWLINE;
scrapCardEffect : scrapCardEffectSummary scrapCardEffectDetail;
scrapCardEffectSummary: name IS SCRAPPING (':')? card NEWLINE;
scrapCardEffectDetail: newBalanceDetail? SCRAPPED card NEWLINE;
simpleScrap : SCRAPPED card NEWLINE;

//describes a attackPlayer action
attackPlayer        : attackPlayerSummary newBalanceDetail+;
attackPlayerSummary : ATTACKED name WORD INT newAuthority NEWLINE;
newAuthority        : '(' NEW WORD':'(INT | DECREASE)')' ;

//describes a attackBase action
attackBase        : attackBaseSummary newBalanceDetail destroyBase;
attackBaseSummary : ATTACKED card NEWLINE;

//describes a scrap action
scrapCard        : scrappingSummary scrappingDetail;
scrappingSummary : SCRAPPING card NEWLINE;
scrappingDetail  : scrapAction scrapEffect;
scrapAction      : SCRAPPED card NEWLINE;
scrapEffect      : (drawCardsWithShuffle | destroyBase | newBalanceDetail)+;

//describes a discard card action
discard          : resolveDiscard discardAction+ discardDetails ;
resolveDiscard   : 'Resolving' DISCARD INT 'cards' NEWLINE ;
discardAction    : name IS WORD card NEWLINE ;
discardDetails   : 'no' 'more' 'cards' 'to' DISCARD NEWLINE (DISCARDED card NEWLINE)+ ;

//describe  a log line that starts with 'Chose ...'
//applies to ships and bases where the user can chose between one or more effects
choseEffect           : choseDiscardAndDraw | choseIncreasePool;
choseDiscardAndDraw   : discardAndDrawSummary selectDiscard+ discarding+ drawCardsWithShuffle;
discardAndDrawSummary : 'Chose' DISCARD 'and' 'Redraw' 'up' 'to' INT 'card(s)' NEWLINE ;
selectDiscard         : name IS 'selecting' card NEWLINE ;
discarding            : DISCARDED card NEWLINE;
choseIncreasePool     : 'Chose' 'Add' INT WORD NEWLINE newBalanceDetail;


//describes a log line that start with 'Activating ...'
//applies to bases and ships where the user can chose when the effect is activated
activatingEffect        : activatingSummary activatingDetail;
activatingSummary       : 'Activating' card NEWLINE;
activatingDetail        : drawAndScrapFromHand | scrapAndDraw | scrap | freeAcquireToTop | destroyAndScrap | stealthNeedle;
scrapAndDraw            : scrap shuffleCards? drawCardsWithShuffle;
scrap                   : scrapSummary+ scrapDetail+;
drawAndScrapFromHand    : shuffleCards? drawCardsWithShuffle resolveHandScrap;
resolveHandScrap        : resolveHandScrapSummary scrapDetail;
freeAcquireToTop        : ACQUIRED card NEWLINE purchaseToTop;
stealthNeedle           : name 'selecting' 'ship' name NEWLINE 'Changed' card 'to' card NEWLINE;
destroyAndScrap         : destroyBase | scrapDetail | destroyBase scrapDetail;
purchaseToTop           : ACQUIRED card 'to' 'the' 'top' WORD 'the' 'deck' NEWLINE;
scrapSummary            : name IS SCRAPPING (':')? card NEWLINE;
scrapDetail             : SCRAPPED card NEWLINE;
resolveHandScrapSummary : 'Resolving' 'Scrap' 'a' 'card' 'from' 'your' 'hand' NEWLINE;

//stuff that happens at the end of the turn
endPhase         : endTurn drawPhase ;
endTurn          : name ENDS TURN INT NEWLINE;
drawPhase        : ('Changed' card 'to' 'Unaligned' NEWLINE)? drawCardsWithShuffle refreshIndicators newTurn;
refreshIndicators : 'Refresh' 'ally' 'indicators' NEWLINE;
newTurn          : IT IS NOW name '\'s' TURN INT NEWLINE;

//shared patterns
drawCardsWithShuffle : (drawCards+ shuffleCards drawCards+) | (shuffleCards? drawCards+);
drawCards        : DREW INT 'cards' NEWLINE;
newBalanceDetail : name SEPARATOR card? effect balance NEWLINE;
effect           : (INCREMENT | DECREASE) (WORD | DISCARD) ;
balance          : '('WORD':'(INT | DECREASE)')' ;
destroyBase      : 'Destroyed' card NEWLINE;
shuffleCards     : 'Shuffled' DISCARD 'pile' 'to' 'form' 'new' 'deck' NEWLINE;
name             : WORD+ ;
card             : WORD+ ;

fragment A : ('A'|'a');
fragment B : ('B'|'b');
fragment C : ('C'|'c');
fragment D : ('D'|'d');
fragment E : ('E'|'e');
fragment F : ('F'|'f');
fragment G : ('G'|'g');
fragment H : ('H'|'h');
fragment I : ('I'|'i');
fragment J : ('J'|'j');
fragment K : ('K'|'k');
fragment L : ('L'|'l');
fragment M : ('M'|'m');
fragment N : ('N'|'n');
fragment O : ('O'|'o');
fragment P : ('P'|'p');
fragment Q : ('Q'|'q');
fragment R : ('R'|'r');
fragment S : ('S'|'s');
fragment T : ('T'|'t');
fragment U : ('U'|'u');
fragment V : ('V'|'v');
fragment W : ('W'|'w');
fragment Y : ('Y'|'y');


ACQUIRED            : A C Q U I R E D ;
ATTACKED            : A T T A C K E D ;
SCRAPPING           : S C R A P P I N G ;
SCRAPPED            : S C R A P P E D ;
SHUFFLED            : S H U F F L E D ;
DISCARDED           : D I S C A R D E D ;
DISCARD           : D I S C A R D ;
RESOLVING           : R E S O L V I N G ;
TURN                : T U R N ;
PILE                : P I L E ;
PLAY                : P L A Y ;
FORM                : F O R M ;
DECK                : D E C K ;
DREW                : D R E W ;
ENDS                : E N D S ;
NEW                 : N E W ;
ALL                 : A L L ;
NOW                 : N O W ;
IS                  : I S ;
IT                  : I T ;

WHITESPACE          : (' ' | '\t') -> skip ;
COLOR_START_TAG     : '<color=#'(LETTER | INT)*'>' -> skip ;
COLOR_END_TAG       : '</color>' -> skip ;
END_GAME_TAG        : '===' -> skip ;
DOT                 : '.' -> skip ;
APOSTROPHE          : '\'' -> skip ;
PLAYED              : 'Played' ;
INT                 : [0-9]+ ;
fragment LETTER     : [A-Za-z] ;
WORD                : (LETTER | INT)+ ;
SEPARATOR           : '>' | '-' | '<';
INCREMENT           : '+'INT ;
DECREASE            : '-'INT ;
NEWLINE             : ('\r'? '\n' | '\r')+ ;