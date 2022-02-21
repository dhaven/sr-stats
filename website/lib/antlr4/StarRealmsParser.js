// Generated from StarRealms.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import StarRealmsListener from './StarRealmsListener.js';
import StarRealmsVisitor from './StarRealmsVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00038\u010f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0006\u0002D\n",
    "\u0002\r\u0002\u000e\u0002E\u0003\u0002\u0003\u0002\u0003\u0003\u0006",
    "\u0003K\n\u0003\r\u0003\u000e\u0003L\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004T\n\u0004\f\u0004\u000e\u0004W\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006d\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007j\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005",
    "\bq\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bx\n\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0006\u000b",
    "\u008a\n\u000b\r\u000b\u000e\u000b\u008b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006",
    "\u000e\u00a6\n\u000e\r\u000e\u000e\u000e\u00a7\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00ad\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00c6\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00ce\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003 \u0006 \u0106\n \r \u000e \u0107\u0003!\u0006!\u010b\n",
    "!\r!\u000e!\u010c\u0003!\u0002\u0002\"\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0002",
    "\u0003\u0003\u000267\u0002\u0103\u0002C\u0003\u0002\u0002\u0002\u0004",
    "J\u0003\u0002\u0002\u0002\u0006P\u0003\u0002\u0002\u0002\bX\u0003\u0002",
    "\u0002\u0002\nc\u0003\u0002\u0002\u0002\fi\u0003\u0002\u0002\u0002\u000e",
    "p\u0003\u0002\u0002\u0002\u0010~\u0003\u0002\u0002\u0002\u0012\u0082",
    "\u0003\u0002\u0002\u0002\u0014\u0087\u0003\u0002\u0002\u0002\u0016\u008f",
    "\u0003\u0002\u0002\u0002\u0018\u0095\u0003\u0002\u0002\u0002\u001a\u009b",
    "\u0003\u0002\u0002\u0002\u001c\u00ac\u0003\u0002\u0002\u0002\u001e\u00ae",
    "\u0003\u0002\u0002\u0002 \u00b1\u0003\u0002\u0002\u0002\"\u00b4\u0003",
    "\u0002\u0002\u0002$\u00ba\u0003\u0002\u0002\u0002&\u00c5\u0003\u0002",
    "\u0002\u0002(\u00c7\u0003\u0002\u0002\u0002*\u00ca\u0003\u0002\u0002",
    "\u0002,\u00d2\u0003\u0002\u0002\u0002.\u00d8\u0003\u0002\u0002\u0002",
    "0\u00db\u0003\u0002\u0002\u00022\u00de\u0003\u0002\u0002\u00024\u00e4",
    "\u0003\u0002\u0002\u00026\u00eb\u0003\u0002\u0002\u00028\u00f0\u0003",
    "\u0002\u0002\u0002:\u00f8\u0003\u0002\u0002\u0002<\u0100\u0003\u0002",
    "\u0002\u0002>\u0105\u0003\u0002\u0002\u0002@\u010a\u0003\u0002\u0002",
    "\u0002BD\u0005\u0004\u0003\u0002CB\u0003\u0002\u0002\u0002DE\u0003\u0002",
    "\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0003",
    "\u0002\u0002\u0002GH\u0007\u0002\u0002\u0003H\u0003\u0003\u0002\u0002",
    "\u0002IK\u0005\u0006\u0004\u0002JI\u0003\u0002\u0002\u0002KL\u0003\u0002",
    "\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0003",
    "\u0002\u0002\u0002NO\u0005\b\u0005\u0002O\u0005\u0003\u0002\u0002\u0002",
    "PQ\u0005\n\u0006\u0002QU\u00078\u0002\u0002RT\u0005\f\u0007\u0002SR",
    "\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002V\u0007\u0003\u0002\u0002\u0002WU\u0003",
    "\u0002\u0002\u0002XY\u00056\u001c\u0002YZ\u00078\u0002\u0002Z[\u0005",
    "\u000e\b\u0002[\t\u0003\u0002\u0002\u0002\\d\u0005\u001c\u000f\u0002",
    "]d\u0005 \u0011\u0002^d\u0005\"\u0012\u0002_d\u0005$\u0013\u0002`d\u0005",
    "&\u0014\u0002ad\u0005\u0014\u000b\u0002bd\u0005\u0012\n\u0002c\\\u0003",
    "\u0002\u0002\u0002c]\u0003\u0002\u0002\u0002c^\u0003\u0002\u0002\u0002",
    "c_\u0003\u0002\u0002\u0002c`\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002",
    "\u0002cb\u0003\u0002\u0002\u0002d\u000b\u0003\u0002\u0002\u0002ej\u0005",
    "(\u0015\u0002fj\u0005*\u0016\u0002gj\u0005,\u0017\u0002hj\u0005.\u0018",
    "\u0002ie\u0003\u0002\u0002\u0002if\u0003\u0002\u0002\u0002ig\u0003\u0002",
    "\u0002\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0007",
    "8\u0002\u0002l\r\u0003\u0002\u0002\u0002mn\u0005\u0010\t\u0002no\u0007",
    "8\u0002\u0002oq\u0003\u0002\u0002\u0002pm\u0003\u0002\u0002\u0002pq",
    "\u0003\u0002\u0002\u0002qw\u0003\u0002\u0002\u0002rs\u0005:\u001e\u0002",
    "st\u00078\u0002\u0002tu\u0005\u0010\t\u0002uv\u00078\u0002\u0002vx\u0003",
    "\u0002\u0002\u0002wr\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002",
    "xy\u0003\u0002\u0002\u0002yz\u0005<\u001f\u0002z{\u00078\u0002\u0002",
    "{|\u00058\u001d\u0002|}\u00078\u0002\u0002}\u000f\u0003\u0002\u0002",
    "\u0002~\u007f\u0007&\u0002\u0002\u007f\u0080\u00073\u0002\u0002\u0080",
    "\u0081\u0007\u0003\u0002\u0002\u0081\u0011\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0007\u0004\u0002\u0002\u0083\u0084\u0007\u0005\u0002\u0002\u0084",
    "\u0085\u00073\u0002\u0002\u0085\u0086\u00074\u0002\u0002\u0086\u0013",
    "\u0003\u0002\u0002\u0002\u0087\u0089\u0005\u0016\f\u0002\u0088\u008a",
    "\u0005\u0018\r\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0005\u001a\u000e\u0002\u008e\u0015\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0007\u0006\u0002\u0002\u0090\u0091\u00074\u0002\u0002\u0091\u0092",
    "\u00073\u0002\u0002\u0092\u0093\u0007\u0003\u0002\u0002\u0093\u0094",
    "\u00078\u0002\u0002\u0094\u0017\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0005> \u0002\u0096\u0097\u0007+\u0002\u0002\u0097\u0098\u00074\u0002",
    "\u0002\u0098\u0099\u0005@!\u0002\u0099\u009a\u00078\u0002\u0002\u009a",
    "\u0019\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u0007\u0002\u0002\u009c",
    "\u009d\u0007\b\u0002\u0002\u009d\u009e\u0007\u0003\u0002\u0002\u009e",
    "\u009f\u0007\t\u0002\u0002\u009f\u00a0\u0007\n\u0002\u0002\u00a0\u00a5",
    "\u00078\u0002\u0002\u00a1\u00a2\u0007\u001f\u0002\u0002\u00a2\u00a3",
    "\u0005@!\u0002\u00a3\u00a4\u00078\u0002\u0002\u00a4\u00a6\u0003\u0002",
    "\u0002\u0002\u00a5\u00a1\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002",
    "\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002",
    "\u0002\u0002\u00a8\u001b\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007#",
    "\u0002\u0002\u00aa\u00ad\u0007)\u0002\u0002\u00ab\u00ad\u0005\u001e",
    "\u0010\u0002\u00ac\u00a9\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003\u0002",
    "\u0002\u0002\u00ad\u001d\u0003\u0002\u0002\u0002\u00ae\u00af\u00072",
    "\u0002\u0002\u00af\u00b0\u0005@!\u0002\u00b0\u001f\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0007\u001a\u0002\u0002\u00b2\u00b3\u0005@!\u0002",
    "\u00b3!\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u001b\u0002\u0002",
    "\u00b5\u00b6\u0005> \u0002\u00b6\u00b7\u00074\u0002\u0002\u00b7\u00b8",
    "\u00073\u0002\u0002\u00b8\u00b9\u00054\u001b\u0002\u00b9#\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\u0007\u001b\u0002\u0002\u00bb\u00bc\u0005@",
    "!\u0002\u00bc%\u0003\u0002\u0002\u0002\u00bd\u00be\u0005> \u0002\u00be",
    "\u00bf\u0007+\u0002\u0002\u00bf\u00c0\u0007\u001c\u0002\u0002\u00c0",
    "\u00c1\u0007\u000b\u0002\u0002\u00c1\u00c2\u0005@!\u0002\u00c2\u00c6",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u001c\u0002\u0002\u00c4\u00c6",
    "\u0005@!\u0002\u00c5\u00bd\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003",
    "\u0002\u0002\u0002\u00c6\'\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007",
    "\u001d\u0002\u0002\u00c8\u00c9\u0005@!\u0002\u00c9)\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\u0005> \u0002\u00cb\u00cd\u00075\u0002\u0002\u00cc",
    "\u00ce\u0005@!\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00cd\u00ce",
    "\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u00050\u0019\u0002\u00d0\u00d1\u00052\u001a\u0002\u00d1+\u0003\u0002",
    "\u0002\u0002\u00d2\u00d3\u0005> \u0002\u00d3\u00d4\u00075\u0002\u0002",
    "\u00d4\u00d5\u0005@!\u0002\u00d5\u00d6\u0007\f\u0002\u0002\u00d6\u00d7",
    "\u0007\r\u0002\u0002\u00d7-\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007",
    "\u000e\u0002\u0002\u00d9\u00da\u0005@!\u0002\u00da/\u0003\u0002\u0002",
    "\u0002\u00db\u00dc\t\u0002\u0002\u0002\u00dc\u00dd\u00074\u0002\u0002",
    "\u00dd1\u0003\u0002\u0002\u0002\u00de\u00df\u0007\u000f\u0002\u0002",
    "\u00df\u00e0\u00074\u0002\u0002\u00e0\u00e1\u0007\u000b\u0002\u0002",
    "\u00e1\u00e2\u00073\u0002\u0002\u00e2\u00e3\u0007\u0010\u0002\u0002",
    "\u00e33\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007\u000f\u0002\u0002",
    "\u00e5\u00e6\u0007(\u0002\u0002\u00e6\u00e7\u00074\u0002\u0002\u00e7",
    "\u00e8\u0007\u000b\u0002\u0002\u00e8\u00e9\u00073\u0002\u0002\u00e9",
    "\u00ea\u0007\u0010\u0002\u0002\u00ea5\u0003\u0002\u0002\u0002\u00eb",
    "\u00ec\u0005> \u0002\u00ec\u00ed\u0007\'\u0002\u0002\u00ed\u00ee\u0007",
    "!\u0002\u0002\u00ee\u00ef\u00073\u0002\u0002\u00ef7\u0003\u0002\u0002",
    "\u0002\u00f0\u00f1\u0007,\u0002\u0002\u00f1\u00f2\u0007+\u0002\u0002",
    "\u00f2\u00f3\u0007*\u0002\u0002\u00f3\u00f4\u0005> \u0002\u00f4\u00f5",
    "\u0007\u0011\u0002\u0002\u00f5\u00f6\u0007!\u0002\u0002\u00f6\u00f7",
    "\u00073\u0002\u0002\u00f79\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007",
    "\u0012\u0002\u0002\u00f9\u00fa\u0007\n\u0002\u0002\u00fa\u00fb\u0007",
    "\u0013\u0002\u0002\u00fb\u00fc\u0007\t\u0002\u0002\u00fc\u00fd\u0007",
    "\u0014\u0002\u0002\u00fd\u00fe\u0007\u0015\u0002\u0002\u00fe\u00ff\u0007",
    "\u0016\u0002\u0002\u00ff;\u0003\u0002\u0002\u0002\u0100\u0101\u0007",
    "\u0017\u0002\u0002\u0101\u0102\u0007\u0018\u0002\u0002\u0102\u0103\u0007",
    "\u0019\u0002\u0002\u0103=\u0003\u0002\u0002\u0002\u0104\u0106\u0007",
    "4\u0002\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003",
    "\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003",
    "\u0002\u0002\u0002\u0108?\u0003\u0002\u0002\u0002\u0109\u010b\u0007",
    "4\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003",
    "\u0002\u0002\u0002\u010dA\u0003\u0002\u0002\u0002\u0010ELUcipw\u008b",
    "\u00a7\u00ac\u00c5\u00cd\u0107\u010c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StarRealmsParser extends antlr4.Parser {

    static grammarFileName = "StarRealms.g4";
    static literalNames = [ null, "'cards'", "'Chose'", "'Add'", "'Resolving'", 
                            "'no'", "'more'", "'to'", "'discard'", "':'", 
                            "'ability'", "'available'", "'Destroyed'", "'('", 
                            "')'", "''s'", "'Shuffled'", "'pile'", "'form'", 
                            "'new'", "'deck'", "'Refresh'", "'ally'", "'indicators'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "'</color>'", 
                            "'.'", "'''", "'Played'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ACQUIRED", "ATTACKED", "SCRAPPING", "SCRAPPED", 
                             "SHUFFLED", "DISCARDED", "RESOLVING", "TURN", 
                             "PILE", "PLAY", "FORM", "DECK", "DREW", "ENDS", 
                             "NEW", "ALL", "NOW", "IS", "IT", "WHITESPACE", 
                             "COLOR_START_TAG", "COLOR_END_TAG", "DOT", 
                             "APOSTROPHE", "PLAYED", "INT", "WORD", "SEPARATOR", 
                             "INCREMENT", "DECREASE", "NEWLINE" ];
    static ruleNames = [ "battle", "turn", "action", "endPhase", "summaryAction", 
                         "actionDetail", "drawPhase", "drawCards", "activateBase", 
                         "discard", "resolveDiscard", "discardAction", "discardDetails", 
                         "play", "playSingle", "purchase", "attackPlayer", 
                         "attackBase", "scrap", "scrapDetail", "newBalanceDetail", 
                         "newAbility", "destroyBase", "effect", "balance", 
                         "newAuthority", "endTurn", "newTurn", "shuffleCards", 
                         "refreshIndicators", "name", "card" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StarRealmsParser.ruleNames;
        this.literalNames = StarRealmsParser.literalNames;
        this.symbolicNames = StarRealmsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	battle() {
	    let localctx = new BattleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StarRealmsParser.RULE_battle);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 64;
	            this.turn();
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarRealmsParser.T__1) | (1 << StarRealmsParser.T__3) | (1 << StarRealmsParser.ACQUIRED) | (1 << StarRealmsParser.ATTACKED) | (1 << StarRealmsParser.SCRAPPING))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (StarRealmsParser.PLAY - 33)) | (1 << (StarRealmsParser.PLAYED - 33)) | (1 << (StarRealmsParser.WORD - 33)))) !== 0));
	        this.state = 69;
	        this.match(StarRealmsParser.EOF);
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
	    this.enterRule(localctx, 2, StarRealmsParser.RULE_turn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 71;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 74; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 76;
	        this.endPhase();
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
	    this.enterRule(localctx, 4, StarRealmsParser.RULE_action);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.summaryAction();
	        this.state = 79;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 83;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 80;
	                this.actionDetail(); 
	            }
	            this.state = 85;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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



	endPhase() {
	    let localctx = new EndPhaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StarRealmsParser.RULE_endPhase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.endTurn();
	        this.state = 87;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 88;
	        this.drawPhase();
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



	summaryAction() {
	    let localctx = new SummaryActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, StarRealmsParser.RULE_summaryAction);
	    try {
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.play();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.purchase();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.attackPlayer();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.attackBase();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.scrap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 95;
	            this.discard();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 96;
	            this.activateBase();
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



	actionDetail() {
	    let localctx = new ActionDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StarRealmsParser.RULE_actionDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 99;
	            this.scrapDetail();
	            break;

	        case 2:
	            this.state = 100;
	            this.newBalanceDetail();
	            break;

	        case 3:
	            this.state = 101;
	            this.newAbility();
	            break;

	        case 4:
	            this.state = 102;
	            this.destroyBase();
	            break;

	        }
	        this.state = 105;
	        this.match(StarRealmsParser.NEWLINE);
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



	drawPhase() {
	    let localctx = new DrawPhaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StarRealmsParser.RULE_drawPhase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.DREW) {
	            this.state = 107;
	            this.drawCards();
	            this.state = 108;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__15) {
	            this.state = 112;
	            this.shuffleCards();
	            this.state = 113;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 114;
	            this.drawCards();
	            this.state = 115;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 119;
	        this.refreshIndicators();
	        this.state = 120;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 121;
	        this.newTurn();
	        this.state = 122;
	        this.match(StarRealmsParser.NEWLINE);
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
	    this.enterRule(localctx, 14, StarRealmsParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(StarRealmsParser.DREW);
	        this.state = 125;
	        this.match(StarRealmsParser.INT);
	        this.state = 126;
	        this.match(StarRealmsParser.T__0);
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



	activateBase() {
	    let localctx = new ActivateBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StarRealmsParser.RULE_activateBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(StarRealmsParser.T__1);
	        this.state = 129;
	        this.match(StarRealmsParser.T__2);
	        this.state = 130;
	        this.match(StarRealmsParser.INT);
	        this.state = 131;
	        this.match(StarRealmsParser.WORD);
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



	discard() {
	    let localctx = new DiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StarRealmsParser.RULE_discard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.resolveDiscard();
	        this.state = 135; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 134;
	            this.discardAction();
	            this.state = 137; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
	        this.state = 139;
	        this.discardDetails();
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



	resolveDiscard() {
	    let localctx = new ResolveDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, StarRealmsParser.RULE_resolveDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(StarRealmsParser.T__3);
	        this.state = 142;
	        this.match(StarRealmsParser.WORD);
	        this.state = 143;
	        this.match(StarRealmsParser.INT);
	        this.state = 144;
	        this.match(StarRealmsParser.T__0);
	        this.state = 145;
	        this.match(StarRealmsParser.NEWLINE);
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



	discardAction() {
	    let localctx = new DiscardActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StarRealmsParser.RULE_discardAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.name();
	        this.state = 148;
	        this.match(StarRealmsParser.IS);
	        this.state = 149;
	        this.match(StarRealmsParser.WORD);
	        this.state = 150;
	        this.card();
	        this.state = 151;
	        this.match(StarRealmsParser.NEWLINE);
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



	discardDetails() {
	    let localctx = new DiscardDetailsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StarRealmsParser.RULE_discardDetails);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(StarRealmsParser.T__4);
	        this.state = 154;
	        this.match(StarRealmsParser.T__5);
	        this.state = 155;
	        this.match(StarRealmsParser.T__0);
	        this.state = 156;
	        this.match(StarRealmsParser.T__6);
	        this.state = 157;
	        this.match(StarRealmsParser.T__7);
	        this.state = 158;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 163; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 159;
	            this.match(StarRealmsParser.DISCARDED);
	            this.state = 160;
	            this.card();
	            this.state = 161;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 165; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.DISCARDED);
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



	play() {
	    let localctx = new PlayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StarRealmsParser.RULE_play);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.PLAY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.match(StarRealmsParser.PLAY);
	            this.state = 168;
	            this.match(StarRealmsParser.ALL);
	            break;
	        case StarRealmsParser.PLAYED:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.playSingle();
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



	playSingle() {
	    let localctx = new PlaySingleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StarRealmsParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(StarRealmsParser.PLAYED);
	        this.state = 173;
	        this.card();
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



	purchase() {
	    let localctx = new PurchaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StarRealmsParser.RULE_purchase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(StarRealmsParser.ACQUIRED);
	        this.state = 176;
	        this.card();
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



	attackPlayer() {
	    let localctx = new AttackPlayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, StarRealmsParser.RULE_attackPlayer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 179;
	        this.name();
	        this.state = 180;
	        this.match(StarRealmsParser.WORD);
	        this.state = 181;
	        this.match(StarRealmsParser.INT);
	        this.state = 182;
	        this.newAuthority();
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



	attackBase() {
	    let localctx = new AttackBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, StarRealmsParser.RULE_attackBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 185;
	        this.card();
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



	scrap() {
	    let localctx = new ScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, StarRealmsParser.RULE_scrap);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.name();
	            this.state = 188;
	            this.match(StarRealmsParser.IS);
	            this.state = 189;
	            this.match(StarRealmsParser.SCRAPPING);
	            this.state = 190;
	            this.match(StarRealmsParser.T__8);
	            this.state = 191;
	            this.card();
	            break;
	        case StarRealmsParser.SCRAPPING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.match(StarRealmsParser.SCRAPPING);
	            this.state = 194;
	            this.card();
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



	scrapDetail() {
	    let localctx = new ScrapDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, StarRealmsParser.RULE_scrapDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 198;
	        this.card();
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



	newBalanceDetail() {
	    let localctx = new NewBalanceDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, StarRealmsParser.RULE_newBalanceDetail);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.name();
	        this.state = 201;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.WORD) {
	            this.state = 202;
	            this.card();
	        }

	        this.state = 205;
	        this.effect();
	        this.state = 206;
	        this.balance();
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



	newAbility() {
	    let localctx = new NewAbilityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, StarRealmsParser.RULE_newAbility);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.name();
	        this.state = 209;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 210;
	        this.card();
	        this.state = 211;
	        this.match(StarRealmsParser.T__9);
	        this.state = 212;
	        this.match(StarRealmsParser.T__10);
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
	    this.enterRule(localctx, 44, StarRealmsParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(StarRealmsParser.T__11);
	        this.state = 215;
	        this.card();
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
	    this.enterRule(localctx, 46, StarRealmsParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INCREMENT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 218;
	        this.match(StarRealmsParser.WORD);
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



	balance() {
	    let localctx = new BalanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, StarRealmsParser.RULE_balance);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(StarRealmsParser.T__12);
	        this.state = 221;
	        this.match(StarRealmsParser.WORD);
	        this.state = 222;
	        this.match(StarRealmsParser.T__8);
	        this.state = 223;
	        this.match(StarRealmsParser.INT);
	        this.state = 224;
	        this.match(StarRealmsParser.T__13);
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



	newAuthority() {
	    let localctx = new NewAuthorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, StarRealmsParser.RULE_newAuthority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(StarRealmsParser.T__12);
	        this.state = 227;
	        this.match(StarRealmsParser.NEW);
	        this.state = 228;
	        this.match(StarRealmsParser.WORD);
	        this.state = 229;
	        this.match(StarRealmsParser.T__8);
	        this.state = 230;
	        this.match(StarRealmsParser.INT);
	        this.state = 231;
	        this.match(StarRealmsParser.T__13);
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
	    this.enterRule(localctx, 52, StarRealmsParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.name();
	        this.state = 234;
	        this.match(StarRealmsParser.ENDS);
	        this.state = 235;
	        this.match(StarRealmsParser.TURN);
	        this.state = 236;
	        this.match(StarRealmsParser.INT);
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



	newTurn() {
	    let localctx = new NewTurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, StarRealmsParser.RULE_newTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(StarRealmsParser.IT);
	        this.state = 239;
	        this.match(StarRealmsParser.IS);
	        this.state = 240;
	        this.match(StarRealmsParser.NOW);
	        this.state = 241;
	        this.name();
	        this.state = 242;
	        this.match(StarRealmsParser.T__14);
	        this.state = 243;
	        this.match(StarRealmsParser.TURN);
	        this.state = 244;
	        this.match(StarRealmsParser.INT);
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
	    this.enterRule(localctx, 56, StarRealmsParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(StarRealmsParser.T__15);
	        this.state = 247;
	        this.match(StarRealmsParser.T__7);
	        this.state = 248;
	        this.match(StarRealmsParser.T__16);
	        this.state = 249;
	        this.match(StarRealmsParser.T__6);
	        this.state = 250;
	        this.match(StarRealmsParser.T__17);
	        this.state = 251;
	        this.match(StarRealmsParser.T__18);
	        this.state = 252;
	        this.match(StarRealmsParser.T__19);
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



	refreshIndicators() {
	    let localctx = new RefreshIndicatorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, StarRealmsParser.RULE_refreshIndicators);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(StarRealmsParser.T__20);
	        this.state = 255;
	        this.match(StarRealmsParser.T__21);
	        this.state = 256;
	        this.match(StarRealmsParser.T__22);
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
	    this.enterRule(localctx, 60, StarRealmsParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 258;
	        		this.match(StarRealmsParser.WORD);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 261; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
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



	card() {
	    let localctx = new CardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, StarRealmsParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 263;
	            this.match(StarRealmsParser.WORD);
	            this.state = 266; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
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

StarRealmsParser.EOF = antlr4.Token.EOF;
StarRealmsParser.T__0 = 1;
StarRealmsParser.T__1 = 2;
StarRealmsParser.T__2 = 3;
StarRealmsParser.T__3 = 4;
StarRealmsParser.T__4 = 5;
StarRealmsParser.T__5 = 6;
StarRealmsParser.T__6 = 7;
StarRealmsParser.T__7 = 8;
StarRealmsParser.T__8 = 9;
StarRealmsParser.T__9 = 10;
StarRealmsParser.T__10 = 11;
StarRealmsParser.T__11 = 12;
StarRealmsParser.T__12 = 13;
StarRealmsParser.T__13 = 14;
StarRealmsParser.T__14 = 15;
StarRealmsParser.T__15 = 16;
StarRealmsParser.T__16 = 17;
StarRealmsParser.T__17 = 18;
StarRealmsParser.T__18 = 19;
StarRealmsParser.T__19 = 20;
StarRealmsParser.T__20 = 21;
StarRealmsParser.T__21 = 22;
StarRealmsParser.T__22 = 23;
StarRealmsParser.ACQUIRED = 24;
StarRealmsParser.ATTACKED = 25;
StarRealmsParser.SCRAPPING = 26;
StarRealmsParser.SCRAPPED = 27;
StarRealmsParser.SHUFFLED = 28;
StarRealmsParser.DISCARDED = 29;
StarRealmsParser.RESOLVING = 30;
StarRealmsParser.TURN = 31;
StarRealmsParser.PILE = 32;
StarRealmsParser.PLAY = 33;
StarRealmsParser.FORM = 34;
StarRealmsParser.DECK = 35;
StarRealmsParser.DREW = 36;
StarRealmsParser.ENDS = 37;
StarRealmsParser.NEW = 38;
StarRealmsParser.ALL = 39;
StarRealmsParser.NOW = 40;
StarRealmsParser.IS = 41;
StarRealmsParser.IT = 42;
StarRealmsParser.WHITESPACE = 43;
StarRealmsParser.COLOR_START_TAG = 44;
StarRealmsParser.COLOR_END_TAG = 45;
StarRealmsParser.DOT = 46;
StarRealmsParser.APOSTROPHE = 47;
StarRealmsParser.PLAYED = 48;
StarRealmsParser.INT = 49;
StarRealmsParser.WORD = 50;
StarRealmsParser.SEPARATOR = 51;
StarRealmsParser.INCREMENT = 52;
StarRealmsParser.DECREASE = 53;
StarRealmsParser.NEWLINE = 54;

StarRealmsParser.RULE_battle = 0;
StarRealmsParser.RULE_turn = 1;
StarRealmsParser.RULE_action = 2;
StarRealmsParser.RULE_endPhase = 3;
StarRealmsParser.RULE_summaryAction = 4;
StarRealmsParser.RULE_actionDetail = 5;
StarRealmsParser.RULE_drawPhase = 6;
StarRealmsParser.RULE_drawCards = 7;
StarRealmsParser.RULE_activateBase = 8;
StarRealmsParser.RULE_discard = 9;
StarRealmsParser.RULE_resolveDiscard = 10;
StarRealmsParser.RULE_discardAction = 11;
StarRealmsParser.RULE_discardDetails = 12;
StarRealmsParser.RULE_play = 13;
StarRealmsParser.RULE_playSingle = 14;
StarRealmsParser.RULE_purchase = 15;
StarRealmsParser.RULE_attackPlayer = 16;
StarRealmsParser.RULE_attackBase = 17;
StarRealmsParser.RULE_scrap = 18;
StarRealmsParser.RULE_scrapDetail = 19;
StarRealmsParser.RULE_newBalanceDetail = 20;
StarRealmsParser.RULE_newAbility = 21;
StarRealmsParser.RULE_destroyBase = 22;
StarRealmsParser.RULE_effect = 23;
StarRealmsParser.RULE_balance = 24;
StarRealmsParser.RULE_newAuthority = 25;
StarRealmsParser.RULE_endTurn = 26;
StarRealmsParser.RULE_newTurn = 27;
StarRealmsParser.RULE_shuffleCards = 28;
StarRealmsParser.RULE_refreshIndicators = 29;
StarRealmsParser.RULE_name = 30;
StarRealmsParser.RULE_card = 31;

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
        this.ruleIndex = StarRealmsParser.RULE_battle;
    }

	EOF() {
	    return this.getToken(StarRealmsParser.EOF, 0);
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
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterBattle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitBattle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
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
        this.ruleIndex = StarRealmsParser.RULE_turn;
    }

	endPhase() {
	    return this.getTypedRuleContext(EndPhaseContext,0);
	};

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

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterTurn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitTurn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
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
        this.ruleIndex = StarRealmsParser.RULE_action;
    }

	summaryAction() {
	    return this.getTypedRuleContext(SummaryActionContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	actionDetail = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionDetailContext);
	    } else {
	        return this.getTypedRuleContext(ActionDetailContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EndPhaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_endPhase;
    }

	endTurn() {
	    return this.getTypedRuleContext(EndTurnContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	drawPhase() {
	    return this.getTypedRuleContext(DrawPhaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterEndPhase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitEndPhase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitEndPhase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SummaryActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_summaryAction;
    }

	play() {
	    return this.getTypedRuleContext(PlayContext,0);
	};

	purchase() {
	    return this.getTypedRuleContext(PurchaseContext,0);
	};

	attackPlayer() {
	    return this.getTypedRuleContext(AttackPlayerContext,0);
	};

	attackBase() {
	    return this.getTypedRuleContext(AttackBaseContext,0);
	};

	scrap() {
	    return this.getTypedRuleContext(ScrapContext,0);
	};

	discard() {
	    return this.getTypedRuleContext(DiscardContext,0);
	};

	activateBase() {
	    return this.getTypedRuleContext(ActivateBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterSummaryAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitSummaryAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitSummaryAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_actionDetail;
    }

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	scrapDetail() {
	    return this.getTypedRuleContext(ScrapDetailContext,0);
	};

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	newAbility() {
	    return this.getTypedRuleContext(NewAbilityContext,0);
	};

	destroyBase() {
	    return this.getTypedRuleContext(DestroyBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActionDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActionDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActionDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DrawPhaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_drawPhase;
    }

	refreshIndicators() {
	    return this.getTypedRuleContext(RefreshIndicatorsContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.NEWLINE);
	    } else {
	        return this.getToken(StarRealmsParser.NEWLINE, i);
	    }
	};


	newTurn() {
	    return this.getTypedRuleContext(NewTurnContext,0);
	};

	drawCards = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DrawCardsContext);
	    } else {
	        return this.getTypedRuleContext(DrawCardsContext,i);
	    }
	};

	shuffleCards() {
	    return this.getTypedRuleContext(ShuffleCardsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDrawPhase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDrawPhase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDrawPhase(this);
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
        this.ruleIndex = StarRealmsParser.RULE_drawCards;
    }

	DREW() {
	    return this.getToken(StarRealmsParser.DREW, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDrawCards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDrawCards(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDrawCards(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivateBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activateBase;
    }

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActivateBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivateBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivateBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discard;
    }

	resolveDiscard() {
	    return this.getTypedRuleContext(ResolveDiscardContext,0);
	};

	discardDetails() {
	    return this.getTypedRuleContext(DiscardDetailsContext,0);
	};

	discardAction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DiscardActionContext);
	    } else {
	        return this.getTypedRuleContext(DiscardActionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_resolveDiscard;
    }

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterResolveDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitResolveDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitResolveDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discardAction;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	IS() {
	    return this.getToken(StarRealmsParser.IS, 0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDiscardAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscardAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscardAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardDetailsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discardDetails;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.NEWLINE);
	    } else {
	        return this.getToken(StarRealmsParser.NEWLINE, i);
	    }
	};


	DISCARDED = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.DISCARDED);
	    } else {
	        return this.getToken(StarRealmsParser.DISCARDED, i);
	    }
	};


	card = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CardContext);
	    } else {
	        return this.getTypedRuleContext(CardContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDiscardDetails(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscardDetails(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscardDetails(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PlayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_play;
    }

	PLAY() {
	    return this.getToken(StarRealmsParser.PLAY, 0);
	};

	ALL() {
	    return this.getToken(StarRealmsParser.ALL, 0);
	};

	playSingle() {
	    return this.getTypedRuleContext(PlaySingleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPlay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPlay(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPlay(this);
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
        this.ruleIndex = StarRealmsParser.RULE_playSingle;
    }

	PLAYED() {
	    return this.getToken(StarRealmsParser.PLAYED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPlaySingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPlaySingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPlaySingle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PurchaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_purchase;
    }

	ACQUIRED() {
	    return this.getToken(StarRealmsParser.ACQUIRED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPurchase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPurchase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPurchase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AttackPlayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_attackPlayer;
    }

	ATTACKED() {
	    return this.getToken(StarRealmsParser.ATTACKED, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	newAuthority() {
	    return this.getTypedRuleContext(NewAuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterAttackPlayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitAttackPlayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitAttackPlayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AttackBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_attackBase;
    }

	ATTACKED() {
	    return this.getToken(StarRealmsParser.ATTACKED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterAttackBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitAttackBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitAttackBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrap;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	IS() {
	    return this.getToken(StarRealmsParser.IS, 0);
	};

	SCRAPPING() {
	    return this.getToken(StarRealmsParser.SCRAPPING, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapDetail;
    }

	SCRAPPED() {
	    return this.getToken(StarRealmsParser.SCRAPPED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NewBalanceDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_newBalanceDetail;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SEPARATOR() {
	    return this.getToken(StarRealmsParser.SEPARATOR, 0);
	};

	effect() {
	    return this.getTypedRuleContext(EffectContext,0);
	};

	balance() {
	    return this.getTypedRuleContext(BalanceContext,0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterNewBalanceDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitNewBalanceDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitNewBalanceDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NewAbilityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_newAbility;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SEPARATOR() {
	    return this.getToken(StarRealmsParser.SEPARATOR, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterNewAbility(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitNewAbility(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitNewAbility(this);
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
        this.ruleIndex = StarRealmsParser.RULE_destroyBase;
    }

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDestroyBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDestroyBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDestroyBase(this);
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
        this.ruleIndex = StarRealmsParser.RULE_effect;
    }

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	INCREMENT() {
	    return this.getToken(StarRealmsParser.INCREMENT, 0);
	};

	DECREASE() {
	    return this.getToken(StarRealmsParser.DECREASE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BalanceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_balance;
    }

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterBalance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitBalance(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitBalance(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NewAuthorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_newAuthority;
    }

	NEW() {
	    return this.getToken(StarRealmsParser.NEW, 0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterNewAuthority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitNewAuthority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitNewAuthority(this);
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
        this.ruleIndex = StarRealmsParser.RULE_endTurn;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	ENDS() {
	    return this.getToken(StarRealmsParser.ENDS, 0);
	};

	TURN() {
	    return this.getToken(StarRealmsParser.TURN, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterEndTurn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitEndTurn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitEndTurn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NewTurnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_newTurn;
    }

	IT() {
	    return this.getToken(StarRealmsParser.IT, 0);
	};

	IS() {
	    return this.getToken(StarRealmsParser.IS, 0);
	};

	NOW() {
	    return this.getToken(StarRealmsParser.NOW, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	TURN() {
	    return this.getToken(StarRealmsParser.TURN, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterNewTurn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitNewTurn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitNewTurn(this);
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
        this.ruleIndex = StarRealmsParser.RULE_shuffleCards;
    }


	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterShuffleCards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitShuffleCards(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitShuffleCards(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RefreshIndicatorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_refreshIndicators;
    }


	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterRefreshIndicators(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitRefreshIndicators(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitRefreshIndicators(this);
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
        this.ruleIndex = StarRealmsParser.RULE_name;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.WORD);
	    } else {
	        return this.getToken(StarRealmsParser.WORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitName(this);
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
        this.ruleIndex = StarRealmsParser.RULE_card;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.WORD);
	    } else {
	        return this.getToken(StarRealmsParser.WORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterCard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitCard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitCard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




StarRealmsParser.BattleContext = BattleContext; 
StarRealmsParser.TurnContext = TurnContext; 
StarRealmsParser.ActionContext = ActionContext; 
StarRealmsParser.EndPhaseContext = EndPhaseContext; 
StarRealmsParser.SummaryActionContext = SummaryActionContext; 
StarRealmsParser.ActionDetailContext = ActionDetailContext; 
StarRealmsParser.DrawPhaseContext = DrawPhaseContext; 
StarRealmsParser.DrawCardsContext = DrawCardsContext; 
StarRealmsParser.ActivateBaseContext = ActivateBaseContext; 
StarRealmsParser.DiscardContext = DiscardContext; 
StarRealmsParser.ResolveDiscardContext = ResolveDiscardContext; 
StarRealmsParser.DiscardActionContext = DiscardActionContext; 
StarRealmsParser.DiscardDetailsContext = DiscardDetailsContext; 
StarRealmsParser.PlayContext = PlayContext; 
StarRealmsParser.PlaySingleContext = PlaySingleContext; 
StarRealmsParser.PurchaseContext = PurchaseContext; 
StarRealmsParser.AttackPlayerContext = AttackPlayerContext; 
StarRealmsParser.AttackBaseContext = AttackBaseContext; 
StarRealmsParser.ScrapContext = ScrapContext; 
StarRealmsParser.ScrapDetailContext = ScrapDetailContext; 
StarRealmsParser.NewBalanceDetailContext = NewBalanceDetailContext; 
StarRealmsParser.NewAbilityContext = NewAbilityContext; 
StarRealmsParser.DestroyBaseContext = DestroyBaseContext; 
StarRealmsParser.EffectContext = EffectContext; 
StarRealmsParser.BalanceContext = BalanceContext; 
StarRealmsParser.NewAuthorityContext = NewAuthorityContext; 
StarRealmsParser.EndTurnContext = EndTurnContext; 
StarRealmsParser.NewTurnContext = NewTurnContext; 
StarRealmsParser.ShuffleCardsContext = ShuffleCardsContext; 
StarRealmsParser.RefreshIndicatorsContext = RefreshIndicatorsContext; 
StarRealmsParser.NameContext = NameContext; 
StarRealmsParser.CardContext = CardContext; 
