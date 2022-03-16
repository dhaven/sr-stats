// Generated from StarRealms.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import StarRealmsListener from './StarRealmsListener.js';
import StarRealmsVisitor from './StarRealmsVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003D\u0170\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0006\u0002P\n\u0002",
    "\r\u0002\u000e\u0002Q\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004a\n\u0004\f\u0004\u000e",
    "\u0004d\u000b\u0004\u0003\u0004\u0006\u0004g\n\u0004\r\u0004\u000e\u0004",
    "h\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005o\n\u0005",
    "\f\u0005\u000e\u0005r\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u007f\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u0086\n\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u008d\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\t\u0094\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a2",
    "\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0006\r\u00ac\n\r\r\r\u000e\r\u00ad\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0007\r\u00b4\n\r\f\r\u000e\r\u00b7\u000b\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00bd\n\r\u0003\r\u0007\r\u00c0\n\r\f\r\u000e\r\u00c3",
    "\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0006\u0011",
    "\u00db\n\u0011\r\u0011\u000e\u0011\u00dc\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u00f7\n\u0014",
    "\r\u0014\u000e\u0014\u00f8\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u00ff\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u010d\n\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u0127\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u012f\n\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!",
    "\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003",
    "%\u0003%\u0003&\u0006&\u0167\n&\r&\u000e&\u0168\u0003\'\u0006\'\u016c",
    "\n\'\r\'\u000e\'\u016d\u0003\'\u0002\u0002(\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0246",
    "8:<>@BDFHJL\u0002\u0005\u0003\u0002BC\u0004\u0002**@@\u0004\u0002??",
    "CC\u0002\u0167\u0002O\u0003\u0002\u0002\u0002\u0004V\u0003\u0002\u0002",
    "\u0002\u0006b\u0003\u0002\u0002\u0002\bl\u0003\u0002\u0002\u0002\ns",
    "\u0003\u0002\u0002\u0002\f~\u0003\u0002\u0002\u0002\u000e\u0085\u0003",
    "\u0002\u0002\u0002\u0010\u008c\u0003\u0002\u0002\u0002\u0012\u009a\u0003",
    "\u0002\u0002\u0002\u0014\u00a1\u0003\u0002\u0002\u0002\u0016\u00a3\u0003",
    "\u0002\u0002\u0002\u0018\u00a9\u0003\u0002\u0002\u0002\u001a\u00c4\u0003",
    "\u0002\u0002\u0002\u001c\u00ce\u0003\u0002\u0002\u0002\u001e\u00d4\u0003",
    "\u0002\u0002\u0002 \u00d8\u0003\u0002\u0002\u0002\"\u00e0\u0003\u0002",
    "\u0002\u0002$\u00e6\u0003\u0002\u0002\u0002&\u00ec\u0003\u0002\u0002",
    "\u0002(\u00fe\u0003\u0002\u0002\u0002*\u0100\u0003\u0002\u0002\u0002",
    ",\u0104\u0003\u0002\u0002\u0002.\u0110\u0003\u0002\u0002\u00020\u0117",
    "\u0003\u0002\u0002\u00022\u0126\u0003\u0002\u0002\u00024\u0128\u0003",
    "\u0002\u0002\u00026\u012b\u0003\u0002\u0002\u00028\u0133\u0003\u0002",
    "\u0002\u0002:\u0139\u0003\u0002\u0002\u0002<\u013c\u0003\u0002\u0002",
    "\u0002>\u013f\u0003\u0002\u0002\u0002@\u0145\u0003\u0002\u0002\u0002",
    "B\u014c\u0003\u0002\u0002\u0002D\u0151\u0003\u0002\u0002\u0002F\u0159",
    "\u0003\u0002\u0002\u0002H\u0161\u0003\u0002\u0002\u0002J\u0166\u0003",
    "\u0002\u0002\u0002L\u016b\u0003\u0002\u0002\u0002NP\u0005\u0006\u0004",
    "\u0002ON\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002ST\u0005",
    "\u0004\u0003\u0002TU\u0007\u0002\u0002\u0003U\u0003\u0003\u0002\u0002",
    "\u0002VW\u0005J&\u0002WX\u0007\u0003\u0002\u0002XY\u0007\u0004\u0002",
    "\u0002YZ\u0007\u0005\u0002\u0002Z[\u0007\u0006\u0002\u0002[\\\u0007",
    "D\u0002\u0002\\\u0005\u0003\u0002\u0002\u0002]^\u00056\u001c\u0002^",
    "_\u0007D\u0002\u0002_a\u0003\u0002\u0002\u0002`]\u0003\u0002\u0002\u0002",
    "ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002eg\u0005\b",
    "\u0005\u0002fe\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hf\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002",
    "jk\u0005\n\u0006\u0002k\u0007\u0003\u0002\u0002\u0002lp\u0005\f\u0007",
    "\u0002mo\u0005\u000e\b\u0002nm\u0003\u0002\u0002\u0002or\u0003\u0002",
    "\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q\t",
    "\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002st\u0005B\"\u0002",
    "tu\u0007D\u0002\u0002uv\u0005\u0010\t\u0002v\u000b\u0003\u0002\u0002",
    "\u0002w\u007f\u0005(\u0015\u0002x\u007f\u0005,\u0017\u0002y\u007f\u0005",
    ".\u0018\u0002z\u007f\u00050\u0019\u0002{\u007f\u00052\u001a\u0002|\u007f",
    "\u0005 \u0011\u0002}\u007f\u0005\u0014\u000b\u0002~w\u0003\u0002\u0002",
    "\u0002~x\u0003\u0002\u0002\u0002~y\u0003\u0002\u0002\u0002~z\u0003\u0002",
    "\u0002\u0002~{\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~}\u0003",
    "\u0002\u0002\u0002\u007f\r\u0003\u0002\u0002\u0002\u0080\u0086\u0005",
    "4\u001b\u0002\u0081\u0086\u00056\u001c\u0002\u0082\u0086\u00058\u001d",
    "\u0002\u0083\u0086\u0005:\u001e\u0002\u0084\u0086\u0005\u0012\n\u0002",
    "\u0085\u0080\u0003\u0002\u0002\u0002\u0085\u0081\u0003\u0002\u0002\u0002",
    "\u0085\u0082\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007D\u0002\u0002\u0088\u000f\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0005\u0012\n\u0002\u008a\u008b\u0007D\u0002\u0002\u008b",
    "\u008d\u0003\u0002\u0002\u0002\u008c\u0089\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0003\u0002\u0002\u0002\u008d\u0093\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0005F$\u0002\u008f\u0090\u0007D\u0002\u0002\u0090\u0091\u0005",
    "\u0012\n\u0002\u0091\u0092\u0007D\u0002\u0002\u0092\u0094\u0003\u0002",
    "\u0002\u0002\u0093\u008e\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0005H",
    "%\u0002\u0096\u0097\u0007D\u0002\u0002\u0097\u0098\u0005D#\u0002\u0098",
    "\u0099\u0007D\u0002\u0002\u0099\u0011\u0003\u0002\u0002\u0002\u009a",
    "\u009b\u00071\u0002\u0002\u009b\u009c\u0007?\u0002\u0002\u009c\u009d",
    "\u0007\u0007\u0002\u0002\u009d\u0013\u0003\u0002\u0002\u0002\u009e\u00a2",
    "\u0005\u0016\f\u0002\u009f\u00a2\u0005\u0018\r\u0002\u00a0\u00a2\u0005",
    "\u001e\u0010\u0002\u00a1\u009e\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u0015\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0007\b\u0002\u0002\u00a4\u00a5\u0007",
    "\t\u0002\u0002\u00a5\u00a6\u0007?\u0002\u0002\u00a6\u00a7\u0007@\u0002",
    "\u0002\u00a7\u00a8\u0007D\u0002\u0002\u00a8\u0017\u0003\u0002\u0002",
    "\u0002\u00a9\u00ab\u0005\u001a\u000e\u0002\u00aa\u00ac\u0005\u001c\u000f",
    "\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
    "\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002",
    "\u0002\u00ae\u00b5\u0003\u0002\u0002\u0002\u00af\u00b0\u0007)\u0002",
    "\u0002\u00b0\u00b1\u0005L\'\u0002\u00b1\u00b2\u0007D\u0002\u0002\u00b2",
    "\u00b4\u0003\u0002\u0002\u0002\u00b3\u00af\u0003\u0002\u0002\u0002\u00b4",
    "\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0003\u0002\u0002\u0002\u00b6\u00c1\u0003\u0002\u0002\u0002\u00b7",
    "\u00b5\u0003\u0002\u0002\u0002\u00b8\u00bd\u0005F$\u0002\u00b9\u00ba",
    "\u00071\u0002\u0002\u00ba\u00bb\u0007?\u0002\u0002\u00bb\u00bd\u0007",
    "\u0007\u0002\u0002\u00bc\u00b8\u0003\u0002\u0002\u0002\u00bc\u00b9\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00c0\u0007",
    "D\u0002\u0002\u00bf\u00bc\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003",
    "\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003",
    "\u0002\u0002\u0002\u00c2\u0019\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0007\b\u0002\u0002\u00c5\u00c6\u0007",
    "*\u0002\u0002\u00c6\u00c7\u0007\n\u0002\u0002\u00c7\u00c8\u0007\u000b",
    "\u0002\u0002\u00c8\u00c9\u0007\f\u0002\u0002\u00c9\u00ca\u0007\r\u0002",
    "\u0002\u00ca\u00cb\u0007?\u0002\u0002\u00cb\u00cc\u0007\u000e\u0002",
    "\u0002\u00cc\u00cd\u0007D\u0002\u0002\u00cd\u001b\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0005J&\u0002\u00cf\u00d0\u00076\u0002\u0002\u00d0",
    "\u00d1\u0007\u000f\u0002\u0002\u00d1\u00d2\u0005L\'\u0002\u00d2\u00d3",
    "\u0007D\u0002\u0002\u00d3\u001d\u0003\u0002\u0002\u0002\u00d4\u00d5",
    "\u0007\u0010\u0002\u0002\u00d5\u00d6\u0005L\'\u0002\u00d6\u00d7\u0007",
    "D\u0002\u0002\u00d7\u001f\u0003\u0002\u0002\u0002\u00d8\u00da\u0005",
    "\"\u0012\u0002\u00d9\u00db\u0005$\u0013\u0002\u00da\u00d9\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002",
    "\u0002\u0002\u00de\u00df\u0005&\u0014\u0002\u00df!\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\u0007\u0011\u0002\u0002\u00e1\u00e2\u0007*\u0002",
    "\u0002\u00e2\u00e3\u0007?\u0002\u0002\u00e3\u00e4\u0007\u0007\u0002",
    "\u0002\u00e4\u00e5\u0007D\u0002\u0002\u00e5#\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0005J&\u0002\u00e7\u00e8\u00076\u0002\u0002\u00e8\u00e9",
    "\u0007@\u0002\u0002\u00e9\u00ea\u0005L\'\u0002\u00ea\u00eb\u0007D\u0002",
    "\u0002\u00eb%\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\u0012\u0002",
    "\u0002\u00ed\u00ee\u0007\u0013\u0002\u0002\u00ee\u00ef\u0007\u0007\u0002",
    "\u0002\u00ef\u00f0\u0007\r\u0002\u0002\u00f0\u00f1\u0007*\u0002\u0002",
    "\u00f1\u00f6\u0007D\u0002\u0002\u00f2\u00f3\u0007)\u0002\u0002\u00f3",
    "\u00f4\u0005L\'\u0002\u00f4\u00f5\u0007D\u0002\u0002\u00f5\u00f7\u0003",
    "\u0002\u0002\u0002\u00f6\u00f2\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003",
    "\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003",
    "\u0002\u0002\u0002\u00f9\'\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007",
    ".\u0002\u0002\u00fb\u00fc\u00074\u0002\u0002\u00fc\u00ff\u0007D\u0002",
    "\u0002\u00fd\u00ff\u0005*\u0016\u0002\u00fe\u00fa\u0003\u0002\u0002",
    "\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff)\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0007>\u0002\u0002\u0101\u0102\u0005L\'\u0002\u0102",
    "\u0103\u0007D\u0002\u0002\u0103+\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u0007$\u0002\u0002\u0105\u010c\u0005L\'\u0002\u0106\u0107\u0007\r\u0002",
    "\u0002\u0107\u0108\u0007\u0005\u0002\u0002\u0108\u0109\u0007\u0014\u0002",
    "\u0002\u0109\u010a\u0007@\u0002\u0002\u010a\u010b\u0007\u0005\u0002",
    "\u0002\u010b\u010d\u0007\u0015\u0002\u0002\u010c\u0106\u0003\u0002\u0002",
    "\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002",
    "\u0002\u010e\u010f\u0007D\u0002\u0002\u010f-\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0007%\u0002\u0002\u0111\u0112\u0005J&\u0002\u0112\u0113",
    "\u0007@\u0002\u0002\u0113\u0114\u0007?\u0002\u0002\u0114\u0115\u0005",
    "@!\u0002\u0115\u0116\u0007D\u0002\u0002\u0116/\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0007%\u0002\u0002\u0118\u0119\u0005L\'\u0002\u0119\u011a",
    "\u0007D\u0002\u0002\u011a1\u0003\u0002\u0002\u0002\u011b\u011c\u0005",
    "J&\u0002\u011c\u011d\u00076\u0002\u0002\u011d\u011e\u0007&\u0002\u0002",
    "\u011e\u011f\u0007\u0016\u0002\u0002\u011f\u0120\u0005L\'\u0002\u0120",
    "\u0121\u0007D\u0002\u0002\u0121\u0127\u0003\u0002\u0002\u0002\u0122",
    "\u0123\u0007&\u0002\u0002\u0123\u0124\u0005L\'\u0002\u0124\u0125\u0007",
    "D\u0002\u0002\u0125\u0127\u0003\u0002\u0002\u0002\u0126\u011b\u0003",
    "\u0002\u0002\u0002\u0126\u0122\u0003\u0002\u0002\u0002\u01273\u0003",
    "\u0002\u0002\u0002\u0128\u0129\u0007\'\u0002\u0002\u0129\u012a\u0005",
    "L\'\u0002\u012a5\u0003\u0002\u0002\u0002\u012b\u012c\u0005J&\u0002\u012c",
    "\u012e\u0007A\u0002\u0002\u012d\u012f\u0005L\'\u0002\u012e\u012d\u0003",
    "\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u0130\u0003",
    "\u0002\u0002\u0002\u0130\u0131\u0005<\u001f\u0002\u0131\u0132\u0005",
    "> \u0002\u01327\u0003\u0002\u0002\u0002\u0133\u0134\u0005J&\u0002\u0134",
    "\u0135\u0007A\u0002\u0002\u0135\u0136\u0005L\'\u0002\u0136\u0137\u0007",
    "\u0017\u0002\u0002\u0137\u0138\u0007\u0018\u0002\u0002\u01389\u0003",
    "\u0002\u0002\u0002\u0139\u013a\u0007\u0019\u0002\u0002\u013a\u013b\u0005",
    "L\'\u0002\u013b;\u0003\u0002\u0002\u0002\u013c\u013d\t\u0002\u0002\u0002",
    "\u013d\u013e\t\u0003\u0002\u0002\u013e=\u0003\u0002\u0002\u0002\u013f",
    "\u0140\u0007\u001a\u0002\u0002\u0140\u0141\u0007@\u0002\u0002\u0141",
    "\u0142\u0007\u0016\u0002\u0002\u0142\u0143\t\u0004\u0002\u0002\u0143",
    "\u0144\u0007\u001b\u0002\u0002\u0144?\u0003\u0002\u0002\u0002\u0145",
    "\u0146\u0007\u001a\u0002\u0002\u0146\u0147\u00073\u0002\u0002\u0147",
    "\u0148\u0007@\u0002\u0002\u0148\u0149\u0007\u0016\u0002\u0002\u0149",
    "\u014a\t\u0004\u0002\u0002\u014a\u014b\u0007\u001b\u0002\u0002\u014b",
    "A\u0003\u0002\u0002\u0002\u014c\u014d\u0005J&\u0002\u014d\u014e\u0007",
    "2\u0002\u0002\u014e\u014f\u0007,\u0002\u0002\u014f\u0150\u0007?\u0002",
    "\u0002\u0150C\u0003\u0002\u0002\u0002\u0151\u0152\u00077\u0002\u0002",
    "\u0152\u0153\u00076\u0002\u0002\u0153\u0154\u00075\u0002\u0002\u0154",
    "\u0155\u0005J&\u0002\u0155\u0156\u0007\u001c\u0002\u0002\u0156\u0157",
    "\u0007,\u0002\u0002\u0157\u0158\u0007?\u0002\u0002\u0158E\u0003\u0002",
    "\u0002\u0002\u0159\u015a\u0007\u001d\u0002\u0002\u015a\u015b\u0007*",
    "\u0002\u0002\u015b\u015c\u0007\u001e\u0002\u0002\u015c\u015d\u0007\r",
    "\u0002\u0002\u015d\u015e\u0007\u001f\u0002\u0002\u015e\u015f\u0007 ",
    "\u0002\u0002\u015f\u0160\u0007\u0015\u0002\u0002\u0160G\u0003\u0002",
    "\u0002\u0002\u0161\u0162\u0007!\u0002\u0002\u0162\u0163\u0007\"\u0002",
    "\u0002\u0163\u0164\u0007#\u0002\u0002\u0164I\u0003\u0002\u0002\u0002",
    "\u0165\u0167\u0007@\u0002\u0002\u0166\u0165\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0003\u0002\u0002\u0002\u0169K\u0003\u0002\u0002\u0002",
    "\u016a\u016c\u0007@\u0002\u0002\u016b\u016a\u0003\u0002\u0002\u0002",
    "\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002\u0002",
    "\u016d\u016e\u0003\u0002\u0002\u0002\u016eM\u0003\u0002\u0002\u0002",
    "\u0017Qbhp~\u0085\u008c\u0093\u00a1\u00ad\u00b5\u00bc\u00c1\u00dc\u00f8",
    "\u00fe\u010c\u0126\u012e\u0168\u016d"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StarRealmsParser extends antlr4.Parser {

    static grammarFileName = "StarRealms.g4";
    static literalNames = [ null, "'has'", "'won'", "'the'", "'game'", "'cards'", 
                            "'Chose'", "'Add'", "'and'", "'Redraw'", "'up'", 
                            "'to'", "'card(s)'", "'selecting'", "'Activating'", 
                            "'Resolving'", "'no'", "'more'", "'top'", "'deck'", 
                            "':'", "'ability'", "'available'", "'Destroyed'", 
                            "'('", "')'", "''s'", "'Shuffled'", "'pile'", 
                            "'form'", "'new'", "'Refresh'", "'ally'", "'indicators'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'</color>'", 
                            "'==='", "'.'", "'''", "'Played'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ACQUIRED", "ATTACKED", "SCRAPPING", 
                             "SCRAPPED", "SHUFFLED", "DISCARDED", "DISCARD", 
                             "RESOLVING", "TURN", "PILE", "PLAY", "FORM", 
                             "DECK", "DREW", "ENDS", "NEW", "ALL", "NOW", 
                             "IS", "IT", "WHITESPACE", "COLOR_START_TAG", 
                             "COLOR_END_TAG", "END_GAME_TAG", "DOT", "APOSTROPHE", 
                             "PLAYED", "INT", "WORD", "SEPARATOR", "INCREMENT", 
                             "DECREASE", "NEWLINE" ];
    static ruleNames = [ "battle", "winStatus", "turn", "action", "endPhase", 
                         "summaryAction", "actionDetail", "drawPhase", "drawCards", 
                         "activateBase", "increasePool", "discardAndDraw", 
                         "discardAndDrawDescription", "selectDiscardCard", 
                         "activateEffect", "discard", "resolveDiscard", 
                         "discardAction", "discardDetails", "play", "playSingle", 
                         "purchase", "attackPlayer", "attackBase", "scrap", 
                         "scrapDetail", "newBalanceDetail", "newAbility", 
                         "destroyBase", "effect", "balance", "newAuthority", 
                         "endTurn", "newTurn", "shuffleCards", "refreshIndicators", 
                         "name", "card" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 76;
	        		this.turn();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 79; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 81;
	        this.winStatus();
	        this.state = 82;
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



	winStatus() {
	    let localctx = new WinStatusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, StarRealmsParser.RULE_winStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.name();
	        this.state = 85;
	        this.match(StarRealmsParser.T__0);
	        this.state = 86;
	        this.match(StarRealmsParser.T__1);
	        this.state = 87;
	        this.match(StarRealmsParser.T__2);
	        this.state = 88;
	        this.match(StarRealmsParser.T__3);
	        this.state = 89;
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



	turn() {
	    let localctx = new TurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StarRealmsParser.RULE_turn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 91;
	                this.newBalanceDetail();
	                this.state = 92;
	                this.match(StarRealmsParser.NEWLINE); 
	            }
	            this.state = 98;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 100; 
	        this._errHandler.sync(this);
	        _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 99;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 102; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 104;
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
	    this.enterRule(localctx, 6, StarRealmsParser.RULE_action);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.summaryAction();
	        this.state = 110;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 107;
	                this.actionDetail(); 
	            }
	            this.state = 112;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	    this.enterRule(localctx, 8, StarRealmsParser.RULE_endPhase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.endTurn();
	        this.state = 114;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 115;
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
	    this.enterRule(localctx, 10, StarRealmsParser.RULE_summaryAction);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.play();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.purchase();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.attackPlayer();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.attackBase();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.scrap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 122;
	            this.discard();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 123;
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
	    this.enterRule(localctx, 12, StarRealmsParser.RULE_actionDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 126;
	            this.scrapDetail();
	            break;

	        case 2:
	            this.state = 127;
	            this.newBalanceDetail();
	            break;

	        case 3:
	            this.state = 128;
	            this.newAbility();
	            break;

	        case 4:
	            this.state = 129;
	            this.destroyBase();
	            break;

	        case 5:
	            this.state = 130;
	            this.drawCards();
	            break;

	        }
	        this.state = 133;
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
	    this.enterRule(localctx, 14, StarRealmsParser.RULE_drawPhase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.DREW) {
	            this.state = 135;
	            this.drawCards();
	            this.state = 136;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__26) {
	            this.state = 140;
	            this.shuffleCards();
	            this.state = 141;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 142;
	            this.drawCards();
	            this.state = 143;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 147;
	        this.refreshIndicators();
	        this.state = 148;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 149;
	        this.newTurn();
	        this.state = 150;
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
	    this.enterRule(localctx, 16, StarRealmsParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(StarRealmsParser.DREW);
	        this.state = 153;
	        this.match(StarRealmsParser.INT);
	        this.state = 154;
	        this.match(StarRealmsParser.T__4);
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
	    this.enterRule(localctx, 18, StarRealmsParser.RULE_activateBase);
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            this.increasePool();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 157;
	            this.discardAndDraw();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 158;
	            this.activateEffect();
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



	increasePool() {
	    let localctx = new IncreasePoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, StarRealmsParser.RULE_increasePool);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(StarRealmsParser.T__5);
	        this.state = 162;
	        this.match(StarRealmsParser.T__6);
	        this.state = 163;
	        this.match(StarRealmsParser.INT);
	        this.state = 164;
	        this.match(StarRealmsParser.WORD);
	        this.state = 165;
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



	discardAndDraw() {
	    let localctx = new DiscardAndDrawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StarRealmsParser.RULE_discardAndDraw);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.discardAndDrawDescription();
	        this.state = 169; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 168;
	        		this.selectDiscardCard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 171; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StarRealmsParser.DISCARDED) {
	            this.state = 173;
	            this.match(StarRealmsParser.DISCARDED);
	            this.state = 174;
	            this.card();
	            this.state = 175;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 191;
	        this._errHandler.sync(this);
	        _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 186;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case StarRealmsParser.T__26:
	                    this.state = 182;
	                    this.shuffleCards();
	                    break;
	                case StarRealmsParser.DREW:
	                    this.state = 183;
	                    this.match(StarRealmsParser.DREW);
	                    this.state = 184;
	                    this.match(StarRealmsParser.INT);
	                    this.state = 185;
	                    this.match(StarRealmsParser.T__4);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 188;
	                this.match(StarRealmsParser.NEWLINE); 
	            }
	            this.state = 193;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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



	discardAndDrawDescription() {
	    let localctx = new DiscardAndDrawDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StarRealmsParser.RULE_discardAndDrawDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(StarRealmsParser.T__5);
	        this.state = 195;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 196;
	        this.match(StarRealmsParser.T__7);
	        this.state = 197;
	        this.match(StarRealmsParser.T__8);
	        this.state = 198;
	        this.match(StarRealmsParser.T__9);
	        this.state = 199;
	        this.match(StarRealmsParser.T__10);
	        this.state = 200;
	        this.match(StarRealmsParser.INT);
	        this.state = 201;
	        this.match(StarRealmsParser.T__11);
	        this.state = 202;
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



	selectDiscardCard() {
	    let localctx = new SelectDiscardCardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StarRealmsParser.RULE_selectDiscardCard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.name();
	        this.state = 205;
	        this.match(StarRealmsParser.IS);
	        this.state = 206;
	        this.match(StarRealmsParser.T__12);
	        this.state = 207;
	        this.card();
	        this.state = 208;
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



	activateEffect() {
	    let localctx = new ActivateEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StarRealmsParser.RULE_activateEffect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(StarRealmsParser.T__13);
	        this.state = 211;
	        this.card();
	        this.state = 212;
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



	discard() {
	    let localctx = new DiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StarRealmsParser.RULE_discard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.resolveDiscard();
	        this.state = 216; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 215;
	            this.discardAction();
	            this.state = 218; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
	        this.state = 220;
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
	    this.enterRule(localctx, 32, StarRealmsParser.RULE_resolveDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(StarRealmsParser.T__14);
	        this.state = 223;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 224;
	        this.match(StarRealmsParser.INT);
	        this.state = 225;
	        this.match(StarRealmsParser.T__4);
	        this.state = 226;
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
	    this.enterRule(localctx, 34, StarRealmsParser.RULE_discardAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.name();
	        this.state = 229;
	        this.match(StarRealmsParser.IS);
	        this.state = 230;
	        this.match(StarRealmsParser.WORD);
	        this.state = 231;
	        this.card();
	        this.state = 232;
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
	    this.enterRule(localctx, 36, StarRealmsParser.RULE_discardDetails);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(StarRealmsParser.T__15);
	        this.state = 235;
	        this.match(StarRealmsParser.T__16);
	        this.state = 236;
	        this.match(StarRealmsParser.T__4);
	        this.state = 237;
	        this.match(StarRealmsParser.T__10);
	        this.state = 238;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 239;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 244; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 240;
	            this.match(StarRealmsParser.DISCARDED);
	            this.state = 241;
	            this.card();
	            this.state = 242;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 246; 
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
	    this.enterRule(localctx, 38, StarRealmsParser.RULE_play);
	    try {
	        this.state = 252;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.PLAY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            this.match(StarRealmsParser.PLAY);
	            this.state = 249;
	            this.match(StarRealmsParser.ALL);
	            this.state = 250;
	            this.match(StarRealmsParser.NEWLINE);
	            break;
	        case StarRealmsParser.PLAYED:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
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
	    this.enterRule(localctx, 40, StarRealmsParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(StarRealmsParser.PLAYED);
	        this.state = 255;
	        this.card();
	        this.state = 256;
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



	purchase() {
	    let localctx = new PurchaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, StarRealmsParser.RULE_purchase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(StarRealmsParser.ACQUIRED);
	        this.state = 259;
	        this.card();
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__10) {
	            this.state = 260;
	            this.match(StarRealmsParser.T__10);
	            this.state = 261;
	            this.match(StarRealmsParser.T__2);
	            this.state = 262;
	            this.match(StarRealmsParser.T__17);
	            this.state = 263;
	            this.match(StarRealmsParser.WORD);
	            this.state = 264;
	            this.match(StarRealmsParser.T__2);
	            this.state = 265;
	            this.match(StarRealmsParser.T__18);
	        }

	        this.state = 268;
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



	attackPlayer() {
	    let localctx = new AttackPlayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, StarRealmsParser.RULE_attackPlayer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 271;
	        this.name();
	        this.state = 272;
	        this.match(StarRealmsParser.WORD);
	        this.state = 273;
	        this.match(StarRealmsParser.INT);
	        this.state = 274;
	        this.newAuthority();
	        this.state = 275;
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



	attackBase() {
	    let localctx = new AttackBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, StarRealmsParser.RULE_attackBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 278;
	        this.card();
	        this.state = 279;
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



	scrap() {
	    let localctx = new ScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, StarRealmsParser.RULE_scrap);
	    try {
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.name();
	            this.state = 282;
	            this.match(StarRealmsParser.IS);
	            this.state = 283;
	            this.match(StarRealmsParser.SCRAPPING);
	            this.state = 284;
	            this.match(StarRealmsParser.T__19);
	            this.state = 285;
	            this.card();
	            this.state = 286;
	            this.match(StarRealmsParser.NEWLINE);
	            break;
	        case StarRealmsParser.SCRAPPING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            this.match(StarRealmsParser.SCRAPPING);
	            this.state = 289;
	            this.card();
	            this.state = 290;
	            this.match(StarRealmsParser.NEWLINE);
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
	    this.enterRule(localctx, 50, StarRealmsParser.RULE_scrapDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 295;
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
	    this.enterRule(localctx, 52, StarRealmsParser.RULE_newBalanceDetail);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.name();
	        this.state = 298;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.WORD) {
	            this.state = 299;
	            this.card();
	        }

	        this.state = 302;
	        this.effect();
	        this.state = 303;
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
	    this.enterRule(localctx, 54, StarRealmsParser.RULE_newAbility);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.name();
	        this.state = 306;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 307;
	        this.card();
	        this.state = 308;
	        this.match(StarRealmsParser.T__20);
	        this.state = 309;
	        this.match(StarRealmsParser.T__21);
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
	    this.enterRule(localctx, 56, StarRealmsParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.match(StarRealmsParser.T__22);
	        this.state = 312;
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
	    this.enterRule(localctx, 58, StarRealmsParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INCREMENT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 315;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.DISCARD || _la===StarRealmsParser.WORD)) {
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



	balance() {
	    let localctx = new BalanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, StarRealmsParser.RULE_balance);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(StarRealmsParser.T__23);
	        this.state = 318;
	        this.match(StarRealmsParser.WORD);
	        this.state = 319;
	        this.match(StarRealmsParser.T__19);
	        this.state = 320;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 321;
	        this.match(StarRealmsParser.T__24);
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
	    this.enterRule(localctx, 62, StarRealmsParser.RULE_newAuthority);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.match(StarRealmsParser.T__23);
	        this.state = 324;
	        this.match(StarRealmsParser.NEW);
	        this.state = 325;
	        this.match(StarRealmsParser.WORD);
	        this.state = 326;
	        this.match(StarRealmsParser.T__19);
	        this.state = 327;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 328;
	        this.match(StarRealmsParser.T__24);
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
	    this.enterRule(localctx, 64, StarRealmsParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.name();
	        this.state = 331;
	        this.match(StarRealmsParser.ENDS);
	        this.state = 332;
	        this.match(StarRealmsParser.TURN);
	        this.state = 333;
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
	    this.enterRule(localctx, 66, StarRealmsParser.RULE_newTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(StarRealmsParser.IT);
	        this.state = 336;
	        this.match(StarRealmsParser.IS);
	        this.state = 337;
	        this.match(StarRealmsParser.NOW);
	        this.state = 338;
	        this.name();
	        this.state = 339;
	        this.match(StarRealmsParser.T__25);
	        this.state = 340;
	        this.match(StarRealmsParser.TURN);
	        this.state = 341;
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
	    this.enterRule(localctx, 68, StarRealmsParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.match(StarRealmsParser.T__26);
	        this.state = 344;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 345;
	        this.match(StarRealmsParser.T__27);
	        this.state = 346;
	        this.match(StarRealmsParser.T__10);
	        this.state = 347;
	        this.match(StarRealmsParser.T__28);
	        this.state = 348;
	        this.match(StarRealmsParser.T__29);
	        this.state = 349;
	        this.match(StarRealmsParser.T__18);
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
	    this.enterRule(localctx, 70, StarRealmsParser.RULE_refreshIndicators);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(StarRealmsParser.T__30);
	        this.state = 352;
	        this.match(StarRealmsParser.T__31);
	        this.state = 353;
	        this.match(StarRealmsParser.T__32);
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
	    this.enterRule(localctx, 72, StarRealmsParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 355;
	        		this.match(StarRealmsParser.WORD);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 358; 
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



	card() {
	    let localctx = new CardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, StarRealmsParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 360;
	            this.match(StarRealmsParser.WORD);
	            this.state = 363; 
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
StarRealmsParser.T__23 = 24;
StarRealmsParser.T__24 = 25;
StarRealmsParser.T__25 = 26;
StarRealmsParser.T__26 = 27;
StarRealmsParser.T__27 = 28;
StarRealmsParser.T__28 = 29;
StarRealmsParser.T__29 = 30;
StarRealmsParser.T__30 = 31;
StarRealmsParser.T__31 = 32;
StarRealmsParser.T__32 = 33;
StarRealmsParser.ACQUIRED = 34;
StarRealmsParser.ATTACKED = 35;
StarRealmsParser.SCRAPPING = 36;
StarRealmsParser.SCRAPPED = 37;
StarRealmsParser.SHUFFLED = 38;
StarRealmsParser.DISCARDED = 39;
StarRealmsParser.DISCARD = 40;
StarRealmsParser.RESOLVING = 41;
StarRealmsParser.TURN = 42;
StarRealmsParser.PILE = 43;
StarRealmsParser.PLAY = 44;
StarRealmsParser.FORM = 45;
StarRealmsParser.DECK = 46;
StarRealmsParser.DREW = 47;
StarRealmsParser.ENDS = 48;
StarRealmsParser.NEW = 49;
StarRealmsParser.ALL = 50;
StarRealmsParser.NOW = 51;
StarRealmsParser.IS = 52;
StarRealmsParser.IT = 53;
StarRealmsParser.WHITESPACE = 54;
StarRealmsParser.COLOR_START_TAG = 55;
StarRealmsParser.COLOR_END_TAG = 56;
StarRealmsParser.END_GAME_TAG = 57;
StarRealmsParser.DOT = 58;
StarRealmsParser.APOSTROPHE = 59;
StarRealmsParser.PLAYED = 60;
StarRealmsParser.INT = 61;
StarRealmsParser.WORD = 62;
StarRealmsParser.SEPARATOR = 63;
StarRealmsParser.INCREMENT = 64;
StarRealmsParser.DECREASE = 65;
StarRealmsParser.NEWLINE = 66;

StarRealmsParser.RULE_battle = 0;
StarRealmsParser.RULE_winStatus = 1;
StarRealmsParser.RULE_turn = 2;
StarRealmsParser.RULE_action = 3;
StarRealmsParser.RULE_endPhase = 4;
StarRealmsParser.RULE_summaryAction = 5;
StarRealmsParser.RULE_actionDetail = 6;
StarRealmsParser.RULE_drawPhase = 7;
StarRealmsParser.RULE_drawCards = 8;
StarRealmsParser.RULE_activateBase = 9;
StarRealmsParser.RULE_increasePool = 10;
StarRealmsParser.RULE_discardAndDraw = 11;
StarRealmsParser.RULE_discardAndDrawDescription = 12;
StarRealmsParser.RULE_selectDiscardCard = 13;
StarRealmsParser.RULE_activateEffect = 14;
StarRealmsParser.RULE_discard = 15;
StarRealmsParser.RULE_resolveDiscard = 16;
StarRealmsParser.RULE_discardAction = 17;
StarRealmsParser.RULE_discardDetails = 18;
StarRealmsParser.RULE_play = 19;
StarRealmsParser.RULE_playSingle = 20;
StarRealmsParser.RULE_purchase = 21;
StarRealmsParser.RULE_attackPlayer = 22;
StarRealmsParser.RULE_attackBase = 23;
StarRealmsParser.RULE_scrap = 24;
StarRealmsParser.RULE_scrapDetail = 25;
StarRealmsParser.RULE_newBalanceDetail = 26;
StarRealmsParser.RULE_newAbility = 27;
StarRealmsParser.RULE_destroyBase = 28;
StarRealmsParser.RULE_effect = 29;
StarRealmsParser.RULE_balance = 30;
StarRealmsParser.RULE_newAuthority = 31;
StarRealmsParser.RULE_endTurn = 32;
StarRealmsParser.RULE_newTurn = 33;
StarRealmsParser.RULE_shuffleCards = 34;
StarRealmsParser.RULE_refreshIndicators = 35;
StarRealmsParser.RULE_name = 36;
StarRealmsParser.RULE_card = 37;

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

	winStatus() {
	    return this.getTypedRuleContext(WinStatusContext,0);
	};

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
        this.ruleIndex = StarRealmsParser.RULE_winStatus;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterWinStatus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitWinStatus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitWinStatus(this);
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

	newBalanceDetail = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NewBalanceDetailContext);
	    } else {
	        return this.getTypedRuleContext(NewBalanceDetailContext,i);
	    }
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

	drawCards() {
	    return this.getTypedRuleContext(DrawCardsContext,0);
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

	increasePool() {
	    return this.getTypedRuleContext(IncreasePoolContext,0);
	};

	discardAndDraw() {
	    return this.getTypedRuleContext(DiscardAndDrawContext,0);
	};

	activateEffect() {
	    return this.getTypedRuleContext(ActivateEffectContext,0);
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



class IncreasePoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_increasePool;
    }

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterIncreasePool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitIncreasePool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitIncreasePool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardAndDrawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discardAndDraw;
    }

	discardAndDrawDescription() {
	    return this.getTypedRuleContext(DiscardAndDrawDescriptionContext,0);
	};

	selectDiscardCard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectDiscardCardContext);
	    } else {
	        return this.getTypedRuleContext(SelectDiscardCardContext,i);
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


	shuffleCards = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ShuffleCardsContext);
	    } else {
	        return this.getTypedRuleContext(ShuffleCardsContext,i);
	    }
	};

	DREW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.DREW);
	    } else {
	        return this.getToken(StarRealmsParser.DREW, i);
	    }
	};


	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarRealmsParser.INT);
	    } else {
	        return this.getToken(StarRealmsParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDiscardAndDraw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscardAndDraw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscardAndDraw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardAndDrawDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discardAndDrawDescription;
    }

	DISCARD() {
	    return this.getToken(StarRealmsParser.DISCARD, 0);
	};

	INT() {
	    return this.getToken(StarRealmsParser.INT, 0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDiscardAndDrawDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscardAndDrawDescription(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscardAndDrawDescription(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SelectDiscardCardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_selectDiscardCard;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	IS() {
	    return this.getToken(StarRealmsParser.IS, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterSelectDiscardCard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitSelectDiscardCard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitSelectDiscardCard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivateEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activateEffect;
    }

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActivateEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivateEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivateEffect(this);
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

	DISCARD() {
	    return this.getToken(StarRealmsParser.DISCARD, 0);
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

	DISCARD() {
	    return this.getToken(StarRealmsParser.DISCARD, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	INCREMENT() {
	    return this.getToken(StarRealmsParser.INCREMENT, 0);
	};

	DECREASE() {
	    return this.getToken(StarRealmsParser.DECREASE, 0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	DISCARD() {
	    return this.getToken(StarRealmsParser.DISCARD, 0);
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

	DECREASE() {
	    return this.getToken(StarRealmsParser.DECREASE, 0);
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

	DECREASE() {
	    return this.getToken(StarRealmsParser.DECREASE, 0);
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

	DISCARD() {
	    return this.getToken(StarRealmsParser.DISCARD, 0);
	};

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
StarRealmsParser.WinStatusContext = WinStatusContext; 
StarRealmsParser.TurnContext = TurnContext; 
StarRealmsParser.ActionContext = ActionContext; 
StarRealmsParser.EndPhaseContext = EndPhaseContext; 
StarRealmsParser.SummaryActionContext = SummaryActionContext; 
StarRealmsParser.ActionDetailContext = ActionDetailContext; 
StarRealmsParser.DrawPhaseContext = DrawPhaseContext; 
StarRealmsParser.DrawCardsContext = DrawCardsContext; 
StarRealmsParser.ActivateBaseContext = ActivateBaseContext; 
StarRealmsParser.IncreasePoolContext = IncreasePoolContext; 
StarRealmsParser.DiscardAndDrawContext = DiscardAndDrawContext; 
StarRealmsParser.DiscardAndDrawDescriptionContext = DiscardAndDrawDescriptionContext; 
StarRealmsParser.SelectDiscardCardContext = SelectDiscardCardContext; 
StarRealmsParser.ActivateEffectContext = ActivateEffectContext; 
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
