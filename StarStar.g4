grammar StarStar;

battle            : turn+ EOF;
turn              : action+ startTurn?;
action            : cardAcquisition | discarded | destroyBase | cardAction | balanceUpdate | drawCards | shuffleCards | endTurn | winStatus |(skipText NEWLINE);

cardAction        : cardTrigger cardEffect*;
cardTrigger       : playSingle | activate | scrapSelf ;
cardEffect        : balanceUpdate | scrapped | scrapSummary | drawCards | shuffleCards | resolving | otherEffect;
skipText          : (customWord | INT | DECREASE | SEPARATOR | '(' | ':' | ')')+ ;
balanceUpdate     : name SEPARATOR card? effect '('customWord':'(INT | DECREASE)')' NEWLINE;
otherEffect       : name SEPARATOR card? customWord+ NEWLINE ;
cardActivation    : ACTIVATING card NEWLINE ;
scrapSummary      : name IS SCRAPPING (':')? card NEWLINE;
discarded         : DISCARDED card NEWLINE ;
winStatus         : name HAS WON THE GAME NEWLINE? ;

scrapped          : SCRAPPED card NEWLINE;
destroyBase       : DESTROYED card NEWLINE;
cardAcquisition   : ACQUIRED card  (TO THE TOP OF DECK)? NEWLINE;
playSingle        : PLAYED card NEWLINE;
activate          : ACTIVATING card NEWLINE;
scrapSelf         : SCRAPPING card NEWLINE;
endTurn           : name ENDS TURN INT NEWLINE;
startTurn         : IT IS NOW name '\'s' TURN INT NEWLINE;
resolving         : RESOLVING customWord+ NEWLINE;

// atomic rules
shuffleCards      : SHUFFLED DISCARD PILE TO FORM NEW DECK NEWLINE;
effect            : (INCREMENT | DECREASE | INT) customWord ;
drawCards         : DREW INT CARDS NEWLINE;

card              : ((customWord '\'s'?) | INT)+ ;
name              : customWord+ ;
customWord        : WORD|ACQUIRED|ACTIVATING|ALL|ALLY|CARDS|DECK|DESTROYED|DISCARD|DISCARDING|DREW|ENDS|FORM|GAME|HAS|INDICATORS|IS|IT|NEW|NOW|OF|PILE|PLAY|PLAYED|REFRESH|RESOLVING|SCRAPPED|SCRAPPING|SHUFFLED|THE|TO|TOP|TURN|WON;

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
ALL                 : A L L ;
ALLY                : A L L Y ;
CARDS               : C A R D S ;
DECK                : D E C K ;
DESTROYED           : D E S T R O Y E D ;
DISCARD             : D I S C A R D ;
DISCARDED           : D I S C A R D E D ;
DISCARDING          : D I S C A R D I N G ;
DREW                : D R E W ;
ENDS                : E N D S ;
FORM                : F O R M ;
GAME                : G A M E ;
HAS                 : H A S ;
INDICATORS          : I N D I C A T O R S ;
IS                  : I S ;
IT                  : I T ;
NEW                 : N E W ;
NOW                 : N O W ;
OF                  : O F ;
PILE                : P I L E ;
PLAY                : P L A Y ;
PLAYED              : P L A Y E D ;
REFRESH             : R E F R E S H ;
RESOLVING           : R E S O L V I N G ;
SCRAPPED            : S C R A P P E D ;
SCRAPPING           : S C R A P P I N G ;
SHUFFLED            : S H U F F L E D ;
THE                 : T H E ;
TO                  : T O ;
TOP                 : T O P ;
TURN                : T U R N ;
WON                 : W O N ;


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