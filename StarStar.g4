grammar StarStar;

battle            : turn+ EOF;
turn              : action+ startTurn?;
action            : cardAcquisition | discarded | destroyBase | cardAction | balanceUpdate | drawCards | shuffleCards | endTurn | winStatus | scrapped | concede | timeout | resolveAlignmentBotScrap | (skipText NEWLINE);

cardAction        : cardTrigger cardEffect*;
cardTrigger       : playSingle | activate | scrapSelf | event | mission | resolving;
cardEffect        : balanceUpdate | scrapped | scrapSummary | drawCards | shuffleCards | otherEffect | acquireToHand | acquireToDeck;
skipText          : (customWord | INT | DECREASE | SEPARATOR | '(' | ':' | ')')+ ;
balanceUpdate     : name SEPARATOR card? effect '('customWord':'(INT | DECREASE)')' NEWLINE;
otherEffect       : name SEPARATOR card? customWord+ NEWLINE ;
scrapSummary      : name IS SCRAPPING (':')? card NEWLINE;
discarded         : DISCARDED card NEWLINE ;
winStatus         : name HAS WON THE GAME NEWLINE? ;
event             : REVEALED EVENT card NEWLINE;
mission           : REVEALED card NEWLINE ;
scrapped          : SCRAPPED card NEWLINE;
destroyBase       : DESTROYED card NEWLINE;
cardAcquisition   : ACQUIRED card NEWLINE;
acquireToHand     : ACQUIRED card TO HAND NEWLINE;
acquireToDeck     : ACQUIRED card TO THE TOP OF THE DECK NEWLINE;
playSingle        : PLAYED card NEWLINE;
activate          : ACTIVATING card NEWLINE;
scrapSelf         : SCRAPPING card NEWLINE;
endTurn           : name ENDS TURN INT NEWLINE;
startTurn         : IT IS NOW name '\'s' TURN INT NEWLINE;
resolving         : resolveScrapHand | resolveScrapHandOrDiscard | resolveScrapMultiple | resolvePatience | resolveOthers;
resolveScrapHand  : RESOLVING SCRAP WORD CARD FROM YOUR HAND NEWLINE;
resolveScrapHandOrDiscard : RESOLVING SCRAP WORD CARD FROM YOUR HAND OR DISCARD PILE NEWLINE;
resolveScrapMultiple : RESOLVING SCRAP UP TO INT CARDS FROM YOUR HAND OR DISCARD PILE NEWLINE;
resolvePatience   : RESOLVING CHOOSE WORD CARD TO SET ASIDE NEWLINE;
resolveOthers     : RESOLVING (customWord | INT)+ NEWLINE;

// specific rule for alignment bot scrap ability
resolveAlignmentBotScrap : choseScrapType alignBotScrap+ ;
choseScrapType    : choseScrapDiscard | choseBattleAndDiscard ;
choseScrapDiscard : CHOSE SCRAP WORD CARD FROM YOUR DISCARD PILE NEWLINE ;
choseBattleAndDiscard : CHOSE ADD INT COMBAT OPPONENT DISCARDS INT CARDS NEWLINE ;
alignBotScrap     : scrapped | balanceUpdate | scrapSummary | noscrap;


noscrap           : name IS NOT SCRAPPING ANY CARDS NEWLINE ;
concede           : name '('INT ')' CONCEDED NEWLINE;
timeout           : name WINS THE GAME NEWLINE;
shuffleCards      : SHUFFLED DISCARD PILE TO FORM NEW DECK NEWLINE;
effect            : (INCREMENT | DECREASE | INT) customWord ;
drawCards         : DREW INT CARDS NEWLINE;

card              : ((customWord '\'s'?) | INT)+ ;
name              : customWord+ ;
customWord        : WORD|ACQUIRED|ACTIVATING|ADD|ALL|ALLY|ANY|ASIDE|CARD|CARDS|CHOOSE|CHOSE|COMBAT|CONCEDED|DECK|DESTROYED|DISCARD|DISCARDING|DISCARDS|DREW|ENDS|EVENT|FORM|FROM|GAME|HAND|HAS|INDICATORS|IS|IT|NEW|NOW|OF|OPPONENT|OR|PILE|PLAY|PLAYED|REFRESH|RESOLVING|REVEALED|SCRAP|SCRAPPED|SCRAPPING|SET|SHUFFLED|THE|TO|TOP|TURN|UP|WINS|WON|YOUR;

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
fragment X : ('X'|'x');
fragment Y : ('Y'|'y');
fragment Z : ('Z'|'z');

ACQUIRED            : A C Q U I R E D ;
ACTIVATING          : A C T I V A T I N G ;
ADD                 : A D D ;
ALL                 : A L L ;
ALLY                : A L L Y ;
ANY                 : A N Y ;
ASIDE               : A S I D E ;
CARD                : C A R D ;
CARDS               : C A R D S ;
CHOOSE              : C H O O S E ;
CHOSE               : C H O S E ;
COMBAT              : C O M B A T ;
CONCEDED            : C O N C E D E D ;
DECK                : D E C K ;
DESTROYED           : D E S T R O Y E D ;
DISCARD             : D I S C A R D ;
DISCARDED           : D I S C A R D E D ;
DISCARDING          : D I S C A R D I N G ;
DISCARDS            : D I S C A R D S ;
DREW                : D R E W ;
ENDS                : E N D S ;
EVENT               : E V E N T ;
FORM                : F O R M ;
FROM                : F R O M ;
GAME                : G A M E ;
HAND                : H A N D ;
HAS                 : H A S ;
INDICATORS          : I N D I C A T O R S ;
IS                  : I S ;
IT                  : I T ;
NEW                 : N E W ;
NOT                 : N O T ;
NOW                 : N O W ;
OF                  : O F ;
OPPONENT            : O P P O N E N T ;
OR                  : O R ;
PILE                : P I L E ;
PLAY                : P L A Y ;
PLAYED              : P L A Y E D ;
REFRESH             : R E F R E S H ;
REVEALED            : R E V E A L E D ;
RESOLVING           : R E S O L V I N G ;
SCRAP               : S C R A P ;
SCRAPPED            : S C R A P P E D ;
SCRAPPING           : S C R A P P I N G ;
SET                 : S E T ;
SHUFFLED            : S H U F F L E D ;
THE                 : T H E ;
TO                  : T O ;
TOP                 : T O P ;
TURN                : T U R N ;
UP                  : U P ;
WINS                : W I N S ;
WON                 : W O N ;
YOUR                : Y O U R ;


WHITESPACE          : (' ' | '\t') -> skip ;
COLOR_START_TAG     : '<color=#'(LETTER | INT)*'>' -> skip ;
COLOR_END_TAG       : '</color>' -> skip ;
END_GAME_TAG        : '===' -> skip ;
DOT                 : '.' -> skip ;
SEMICOLUM           : ';' -> skip ;
COMMA               : ',' -> skip ;
INT                 : [0-9]+ ;
fragment LETTER     : [A-Za-z] ;
WORD                : (LETTER | INT)+ ;
SEPARATOR           : '>' | '-' | '<';
NEWLINE             : ('\r'? '\n' | '\r')+ ;
INCREMENT           : '+'INT ;
DECREASE            : '-'INT ;