grammar StarRealms;

battle            : turn+;
turn              : action+ (endPhase | winStatus | EOF) ;
action            : baseInstantEffect | purchase | purchaseHero | play | attackPlayer | attackBase | scrapCard | discard | choseEffect | activatingEffect;
winStatus         : name HAS WON THE GAME NEWLINE ;

//describes a base instant effect action
baseInstantEffect : positiveBalance | drawCardsWithShuffle;

//describe a purchase Hero action
purchaseHero       : purchaseSummary purchaseHeroDetail playHero*;
//purchaseHeroSummary : ACQUIRED heroes  NEWLINE;
purchaseHeroDetail : negativeBalance acquireHeroToTable refreshIndicators;
acquireHeroToTable : CHANGED card TO ON SEPARATOR TABLE IMAGE NEWLINE;
playHero           : tradeRowScrap | resolveFreeAcquire | resolveSelfScrap | multiScrapSummary | positiveBalance | drawCardsWithShuffle | multiScrapDetail | simpleScrap;
tradeRowScrap      : RESOLVING SCRAP ((UP TO INT CARDS)|(WORD CARD)) IN THE TRADE ROW NEWLINE;
resolveFreeAcquire : RESOLVING ACQUIRE ANY SHIP OR BASE OF COST INT OR LESS TO DECK NEWLINE;
resolveSelfScrap   : RESOLVING SCRAP WORD CARD FROM YOUR HAND OR DISCARD PILE NEWLINE ;

//describes a purchase action
purchase        : purchaseSummary purchaseDetail*;
purchaseSummary : ACQUIRED card  NEWLINE;
purchaseDetail  : negativeBalance (acquireToHand | acquireToDeck)?;
acquireToHand   : ACQUIRED card TO HAND NEWLINE;
acquireToDeck   : ACQUIRED card TO THE TOP OF THE DECK NEWLINE;

//describes a play action
play                  : playSummary playDetail* completeMission?;
playSummary           : (PLAY ALL NEWLINE) | playSingle;
playSingle            : PLAYED card NEWLINE;
playDetail            : positiveBalance | newAbility | drawCardsWithShuffle | scrapCardEffect | discardForPool | discarding | multiScrap | noScrap | simpleScrap | destroyBase | moveBaseToDeck | freeAcquire | copyCardSummary | copyCardEffect;
newAbility            : name SEPARATOR card ABILITY AVAILABLE NEWLINE;
multiScrap            : multiScrapSummary multiScrapDetail;
multiScrapSummary     : RESOLVING SCRAP UP TO INT CARDS FROM YOUR HAND OR DISCARD PILE NEWLINE;
multiScrapDetail      : scrapCardEffect+ simpleScrap+;
scrapCardEffect       : name IS SCRAPPING (':')? card NEWLINE;
simpleScrap           : SCRAPPED card NEWLINE;
moveBaseToDeck        : name IS SELECTING card NEWLINE;
freeAcquire           : ACQUIRED card  NEWLINE (acquireToHand|acquireToDeck);

//describe rewards of missions
completeMission       : completeMissionSummary  completeMissionsDetail*;
completeMissionSummary : REVEALED card NEWLINE;
completeMissionsDetail : positiveBalance | drawCardsWithShuffle | acquireToHand | selectMissionsReward | winStatus | freeAcquire | resolveAllyReward | resolveRuleReward | resolveDefendReward | resolveConvertReward;
selectMissionsReward : RESOLVING ADD INT TRADE OR ADD INT COMBAT OR ADD INT AUTHORITY NEWLINE;
resolveAllyReward    : RESOLVING ACQUIRE ANY SHIP OR BASE OF COST INT OR LESS TO DECK NEWLINE;
resolveRuleReward    : RESOLVING ACQUIRE ANY CARD OF COST INT OR LESS TO HAND NEWLINE ;
resolveDefendReward  : RESOLVING RETURN TARGET BASE NEWLINE;
resolveConvertReward : RESOLVING RETURN INT CARD TO THE TOP OF YOUR DECK NEWLINE name IS RETURNING card NEWLINE discard ;

//describes a attackPlayer action
attackPlayer        : attackPlayerSummary negativeBalance+;
attackPlayerSummary : ATTACKED name FOR INT newAuthority NEWLINE;
newAuthority        : '(' NEW wordPlus':'(INT | DECREASE)')' ;

//describes a attackBase action
attackBase        : attackBaseSummary attackBaseDetail* ;
attackBaseSummary : ATTACKED card NEWLINE;
attackBaseDetail  : negativeBalance | destroyBase | scrapAction;

//describes a scrap action
scrapCard        : scrappingSummary scrappingDetail;
scrappingSummary : SCRAPPING card NEWLINE;
scrappingDetail  : scrapEffect+;
scrapEffect      : scrapAction | drawCardsWithShuffle | (freePurchase scrapAction) | destroyBase | newBalanceDetail | replaceGambit | scrapSummary | moveDiscardToDeck | refreshIndicators;
scrapAction      : SCRAPPED card NEWLINE;
freePurchase     : (ACQUIRED card TO HAND NEWLINE) | ( ACQUIRED card TO THE TOP OF THE DECK NEWLINE) | (ACQUIRED card NEWLINE) ;
moveDiscardToDeck : name IS SELECTING card NEWLINE;

//describes a discard card action
discard          : discardSummary discardDetail* ;
discardSummary   : RESOLVING DISCARD INT CARDS NEWLINE ;
discardDetail    : discardAction | discardEnd | discarding ;
discardAction    : name IS DISCARDING card NEWLINE ;
discardEnd       : NO MORE2 CARDS TO DISCARD NEWLINE ;

//describe  a log line that starts with 'Chose ...'
//applies to ships and bases where the user can chose between one or more effects
choseEffect           : choseEffectSummary choseEffectDetail*;
choseEffectSummary    : discardAndDrawSummary | choseIncreasePool | choseScrapFromDiscard | choseDiscardAndIncreasePool | discountFactionGambit | hiddenBaseGambit | choseBlobDraw;
discountFactionGambit : CHOSE ACQUIRE wordPlus+ CARDS AT ONE LESS TRADE NEWLINE;
discardAndDrawSummary : CHOSE DISCARD AND REDRAW UP TO INT CARD'(s)' NEWLINE ;
choseIncreasePool     : CHOSE ADD INT wordPlus NEWLINE;
choseScrapFromDiscard : CHOSE SCRAP WORD CARD FROM YOUR DISCARD PILE NEWLINE;
choseDiscardAndIncreasePool : CHOSE DISCARD UP TO INT CARDS RECEIVE INT wordPlus FOR EACH NEWLINE;
choseBlobDraw         : CHOSE DRAW WORD CARD FOR EVERY BLOB CARD PLAYED THIS TURN NEWLINE;
hiddenBaseGambit      : CHOSE CREATE wordPlus+ SECRET OUTPOST NEWLINE;
choseEffectDetail     : selectDiscard | discardForPool | discarding | drawCardsWithShuffle | noScrap | simpleScrap | positiveBalance | refreshTradeRow | changeHiddenBaseToFaction | replaceGambit;
refreshTradeRow       : REFRESH TRADE ROW DISCOUNTS NEWLINE;
changeHiddenBaseToFaction : CHANGED SECRET OUTPOST TO wordPlus+ NEWLINE;


//describes a log line that start with 'Activating ...'
//applies to bases and ships where the user can chose when the effect is activated
activatingEffect        : activatingSummary activatingDetail?;
activatingSummary       : ACTIVATING card NEWLINE;
activatingDetail        : drawAndScrapFromHand | scrapAndDraw | scrap | noScrap | freeAcquireToTop | destroyAndScrap | noCopy | noCopyBases | copyCard | copyBase | discardAndDraw;
scrapAndDraw            : scrap drawCardsWithShuffle;
scrap                   : scrapSummary+ scrapDetail+;
drawAndScrapFromHand    : drawCardsWithShuffle resolveHandScrap;
resolveHandScrap        : resolveHandScrapSummary scrapDetail;
freeAcquireToTop        : ACQUIRED card NEWLINE purchaseToTop;
copyBase                : copyBaseSummary copyBaseDetail;
copyBaseSummary         : name COPIED BASE name NEWLINE ;
copyBaseDetail          : copyCardEffect newBalanceDetail*;
noCopy                  : name IS NOT COPYING ANY SHIPS NEWLINE;
noCopyBases             : name DID NOT COPY ANY BASES NEWLINE;
copyCard                : copyCardSummary copyCardEffect;
copyCardSummary         : name SELECTING SHIP card NEWLINE;
copyCardEffect          : CHANGED card TO card NEWLINE;
destroyAndScrap         : destroyBase | scrapDetail | destroyBase scrapDetail;
purchaseToTop           : ACQUIRED card TO THE TOP OF THE DECK NEWLINE;
scrapSummary            : name IS SCRAPPING (':')? card NEWLINE;
scrapDetail             : SCRAPPED card NEWLINE;
resolveHandScrapSummary : RESOLVING SCRAP WORD CARD FROM YOUR HAND NEWLINE;
discardAndDraw          :  selectDiscard+ discarding+ drawCardsWithShuffle;

//stuff that happens at the end of the turn
endPhase          : endTurn drawPhaseDetail* ;
endTurn           : name ENDS TURN INT NEWLINE;
drawPhaseDetail   : resetCopiedCards | drawCardsWithShuffle | refreshIndicators | newTurn;
resetCopiedCards  : CHANGED card TO UNALIGNED NEWLINE;
refreshIndicators : REFRESH ALLY INDICATORS NEWLINE;
newTurn           : IT IS NOW name '\'s' TURN INT NEWLINE;

//shared patterns
replaceGambit         : REPLACED card NEWLINE;
noScrap               : name IS NOT SCRAPPING ANY CARDS NEWLINE;
selectDiscard         : name IS SELECTING card NEWLINE ;
discardForPool        : name IS DISCARDING FOR wordPlus NEWLINE ;
discarding            : DISCARDED card NEWLINE;
drawCardsWithShuffle  : (drawCards+ shuffleCards drawCards+) | (shuffleCards? drawCards+);
drawCards             : DREW INT CARDS NEWLINE;
newBalanceDetail      : name SEPARATOR card? effect balance NEWLINE;
effect                : (INCREMENT | DECREASE | INT) (wordPlus) ;
positiveBalance       : name SEPARATOR card? (INCREMENT | INT) (wordPlus) balance NEWLINE;
negativeBalance       : name SEPARATOR card? (DECREASE) (wordPlus) balance NEWLINE;
balance               : '('wordPlus':'(INT | DECREASE)')' ;
destroyBase           : DESTROYED card NEWLINE;
shuffleCards          : SHUFFLED DISCARD PILE TO FORM NEW DECK NEWLINE;
name                  : (wordPlus | INT)+ ;
card                  : ((wordPlus '\'s'?) | INT)+ ;
// heroes                : ceoshaner | chairmanhaygan | chancellorhartman | commanderklik | commodorezhang | confessormorris | hivelord | screecher;
// ceoshaner             : CEO SHANER;
// chairmanhaygan        : CHAIRMAN HAYGAN;
// chancellorhartman     : CHANCELLOR HARTMAN;
// commanderklik         : COMMANDER KLIK; 
// commodorezhang        : COMMODORE ZHANG;
// confessormorris       : CONFESSOR MORRIS;
// hivelord              : HIVE LORD;
// screecher             : SCREECHER;
wordPlus              : WORD|COMBAT|AUTHORITY|TRADE|ACQUIRE|ACQUIRED|DISCOUNTS|CREATE|SECRET|OUTPOST|UNALIGNED|ACTIVATING|ATTACKED|SCRAPPING|SCRAPPED|RETURNING|SCRAP|SELECTING|SHUFFLED|DISCARDED|DISCARD|REFRESH|REVEALED|DISCARDING|DESTROYED|RESOLVING|INDICATORS|AVAILABLE|ABILITY|CHANGED|IMAGE|PLAYED|COPYING|COPIED|REPLACED|RECEIVE|REDRAW|COPY|RETURN|TARGET|DRAW|EVERY|BLOB|CARDS|CHOSE|TURN|SHIP|SHIPS|BASE|TABLE|BASES|PILE|EACH|PLAY|COST|FORM|DECK|DREW|ENDS|CARD|MORE2|FROM|YOUR|ALLY|THIS|HAND|GAME|LESS|ONE|NEW|ALL|NOW|ROW|THE|TOP|FOR|DID|AND|ADD|NOT|HAS|WON|ANY|IS|IT|IN|TO|OF|UP|OR|NO|ON;

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
fragment Z : ('Z'|'z');

//CEO         : C E O;
// SHANER      : S H A N E R;
// CHAIRMAN    : C H A I R M A N;
// HAYGAN      : H A Y G A N;
// CHANCELLOR  : C H A N C E L L O R;
// HARTMAN     : H A R T M A N;
// COMMANDER   : C O M M A N D E R;
// KLIK        : K L I K;
// COMMODORE   : C O M M O D O R E;
// ZHANG       : Z H A N G;
// CONFESSOR   : C O N F E S S O R;
// MORRIS      : M O R R I S;
// HIVE        : H I V E;
// LORD        : L O R D;
// SCREECHER   : S C R E E C H E R;

COMBAT              : C O M B A T ;
AUTHORITY           : A U T H O R I T Y ;
TRADE               : T R A D E ;

ACQUIRE             : A C Q U I R E ;
ACQUIRED            : A C Q U I R E D ;
UNALIGNED           : U N A L I G N E D ;
ACTIVATING          : A C T I V A T I N G ;
ATTACKED            : A T T A C K E D ;
SCRAPPING           : S C R A P P I N G ;
SCRAPPED            : S C R A P P E D ;
SCRAP               : S C R A P ;
SELECTING           : S E L E C T I N G ;
SHUFFLED            : S H U F F L E D ;
DISCARDED           : D I S C A R D E D ;
DISCARD             : D I S C A R D ;
DISCOUNTS           : D I S C O U N T S ;
REFRESH             : R E F R E S H ;
DISCARDING          : D I S C A R D I N G ;
DESTROYED           : D E S T R O Y E D ;
RESOLVING           : R E S O L V I N G ;
INDICATORS          : I N D I C A T O R S ;
AVAILABLE           : A V A I L A B L E ;
RETURNING           : R E T U R N I N G ;
ABILITY             : A B I L I T Y ;
CHANGED             : C H A N G E D ;
REVEALED            : R E V E A L E D ;
REPLACED            : R E P L A C E D ;
COPYING             : C O P Y I N G ;
COPIED              : C O P I E D ;
IMAGE               : I M A G E ;
RECEIVE             : R E C E I V E ;
REDRAW              : R E D R A W ;
TABLE               : T A B L E ;
CREATE              : C R E A T E ;
PLAYED              : P L A Y E D ;
SECRET              : S E C R E T ;
OUTPOST             : O U T P O S T ;
RETURN              : R E T U R N ;
TARGET              : T A R G E T ;
DRAW                : D R A W ;
EVERY               : E V E R Y ;
BLOB                :  B L O B ;
COPY                : C O P Y ;
CARDS               : C A R D S ;
CHOSE               : C H O S E ;
TURN                : T U R N ;
SHIP                : S H I P ;
SHIPS               : S H I P S ;
BASE                : B A S E ;
BASES               : B A S E S ;
PILE                : P I L E ;
EACH                : E A C H ;
PLAY                : P L A Y ;
FORM                : F O R M ;
COST                : C O S T ;
DECK                : D E C K ;
DREW                : D R E W ;
ENDS                : E N D S ;
CARD                : C A R D ;
MORE2               : M O R E ;
FROM                : F R O M ;
YOUR                : Y O U R ;
ALLY                : A L L Y ;
HAND                : H A N D ;
GAME                : G A M E ;
LESS                : L E S S ;
THIS                : T H I S ;
NEW                 : N E W ;
ALL                 : A L L ;
NOW                 : N O W ;
ROW                 : R O W ;
THE                 : T H E ;
TOP                 : T O P ;
FOR                 : F O R ;
DID                 : D I D ;
AND                 : A N D ;
ONE                 : O N E ;
ADD                 : A D D ;
NOT                 : N O T ;
HAS                 : H A S ;
WON                 : W O N ;
ANY                 : A N Y ;
IS                  : I S ;
IT                  : I T ;
AT                  : A T ;
IN                  : I N ;
TO                  : T O ;
OF                  : O F ;
UP                  : U P ;
OR                  : O R ;
NO                  : N O ;
ON                  : O N ;

WHITESPACE          : (' ' | '\t') -> skip ;
COLOR_START_TAG     : '<color=#'(LETTER | INT)*'>' -> skip ;
COLOR_END_TAG       : '</color>' -> skip ;
END_GAME_TAG        : '===' -> skip ;
DOT                 : '.' -> skip ;
SEMICOLUM           : ';' -> skip ;
INT                 : [0-9]+ ;
fragment LETTER     : [A-Za-z] ;
WORD                : (LETTER | INT)+ ;
SEPARATOR           : '>' | '-' | '<';
INCREMENT           : '+'INT ;
DECREASE            : '-'INT ;
NEWLINE             : ('\r'? '\n' | '\r')+ ;