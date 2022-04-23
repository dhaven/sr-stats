// Generated from StarRealms.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import StarRealmsListener from './StarRealmsListener.js';
import StarRealmsVisitor from './StarRealmsVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003M\u0236\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0004",
    "2\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u0004",
    "9\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004",
    "@\t@\u0004A\tA\u0004B\tB\u0003\u0002\u0006\u0002\u0086\n\u0002\r\u0002",
    "\u000e\u0002\u0087\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003\u008d",
    "\n\u0003\r\u0003\u000e\u0003\u008e\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0093\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u009e",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006\u00a9\n",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u00bd\n\t\u0003\n\u0003\n\u0007\n\u00c1\n",
    "\n\f\n\u000e\n\u00c4\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00ca\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00d6\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00e6\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0005\u0011\u00ec\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0006\u0013\u00f8\n\u0013\r\u0013\u000e\u0013",
    "\u00f9\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0006\u001a\u011b\n\u001a\r\u001a\u000e\u001a\u011c",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u0126\n\u001c\u0003\u001d\u0003\u001d\u0006",
    "\u001d\u012a\n\u001d\r\u001d\u000e\u001d\u012b\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0006 \u0146\n \r \u000e \u0147\u0003!\u0003!\u0005!\u014c\n!\u0003",
    "\"\u0003\"\u0006\"\u0150\n\"\r\"\u000e\"\u0151\u0003\"\u0006\"\u0155",
    "\n\"\r\"\u000e\"\u0156\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003\'\u0003\'\u0005\'\u0178\n\'\u0003(\u0003(\u0003",
    "(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u0184\n)\u0003",
    "*\u0003*\u0003*\u0003+\u0006+\u018a\n+\r+\u000e+\u018b\u0003+\u0006",
    "+\u018f\n+\r+\u000e+\u0190\u0003,\u0003,\u0003,\u0003-\u0003-\u0003",
    "-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u00030\u00030\u00030\u0003",
    "0\u00030\u00050\u01ae\n0\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00032\u00032\u00032\u00032\u00052\u01be\n2\u0003",
    "2\u00032\u00032\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u00036\u0003",
    "6\u00036\u00036\u00036\u00036\u00037\u00037\u00037\u00037\u00037\u0003",
    "7\u00057\u01df\n7\u00037\u00037\u00037\u00037\u00038\u00038\u00038\u0003",
    "8\u00038\u00039\u00039\u00039\u00039\u00039\u00039\u00039\u00039\u0003",
    "9\u0003:\u0006:\u01f4\n:\r:\u000e:\u01f5\u0003:\u0003:\u0006:\u01fa",
    "\n:\r:\u000e:\u01fb\u0003:\u0005:\u01ff\n:\u0003:\u0006:\u0202\n:\r",
    ":\u000e:\u0203\u0005:\u0206\n:\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    "<\u0003<\u0003<\u0005<\u0210\n<\u0003<\u0003<\u0003<\u0003<\u0003=\u0003",
    "=\u0003=\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003?\u0003?\u0003",
    "?\u0003?\u0003@\u0003@\u0003@\u0003@\u0003@\u0003@\u0003@\u0003@\u0003",
    "@\u0003A\u0006A\u022d\nA\rA\u000eA\u022e\u0003B\u0006B\u0232\nB\rB\u000e",
    "B\u0233\u0003B\u0002\u0002C\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnprtvxz|~\u0080\u0082\u0002\u0005\u0004\u0002HHLL\u0003\u0002",
    "KL\u0004\u000233II\u0002\u0227\u0002\u0085\u0003\u0002\u0002\u0002\u0004",
    "\u008c\u0003\u0002\u0002\u0002\u0006\u009d\u0003\u0002\u0002\u0002\b",
    "\u009f\u0003\u0002\u0002\u0002\n\u00a8\u0003\u0002\u0002\u0002\f\u00aa",
    "\u0003\u0002\u0002\u0002\u000e\u00ad\u0003\u0002\u0002\u0002\u0010\u00b1",
    "\u0003\u0002\u0002\u0002\u0012\u00be\u0003\u0002\u0002\u0002\u0014\u00c9",
    "\u0003\u0002\u0002\u0002\u0016\u00cb\u0003\u0002\u0002\u0002\u0018\u00d5",
    "\u0003\u0002\u0002\u0002\u001a\u00d7\u0003\u0002\u0002\u0002\u001c\u00de",
    "\u0003\u0002\u0002\u0002\u001e\u00e1\u0003\u0002\u0002\u0002 \u00eb",
    "\u0003\u0002\u0002\u0002\"\u00f1\u0003\u0002\u0002\u0002$\u00f5\u0003",
    "\u0002\u0002\u0002&\u00fb\u0003\u0002\u0002\u0002(\u0102\u0003\u0002",
    "\u0002\u0002*\u0109\u0003\u0002\u0002\u0002,\u010d\u0003\u0002\u0002",
    "\u0002.\u0111\u0003\u0002\u0002\u00020\u0114\u0003\u0002\u0002\u0002",
    "2\u0118\u0003\u0002\u0002\u00024\u011e\u0003\u0002\u0002\u00026\u0125",
    "\u0003\u0002\u0002\u00028\u0127\u0003\u0002\u0002\u0002:\u012f\u0003",
    "\u0002\u0002\u0002<\u0135\u0003\u0002\u0002\u0002>\u013b\u0003\u0002",
    "\u0002\u0002@\u014b\u0003\u0002\u0002\u0002B\u014d\u0003\u0002\u0002",
    "\u0002D\u015a\u0003\u0002\u0002\u0002F\u0164\u0003\u0002\u0002\u0002",
    "H\u016a\u0003\u0002\u0002\u0002J\u016e\u0003\u0002\u0002\u0002L\u0175",
    "\u0003\u0002\u0002\u0002N\u0179\u0003\u0002\u0002\u0002P\u0183\u0003",
    "\u0002\u0002\u0002R\u0185\u0003\u0002\u0002\u0002T\u0189\u0003\u0002",
    "\u0002\u0002V\u0192\u0003\u0002\u0002\u0002X\u0195\u0003\u0002\u0002",
    "\u0002Z\u0198\u0003\u0002\u0002\u0002\\\u019d\u0003\u0002\u0002\u0002",
    "^\u01ad\u0003\u0002\u0002\u0002`\u01af\u0003\u0002\u0002\u0002b\u01b9",
    "\u0003\u0002\u0002\u0002d\u01c2\u0003\u0002\u0002\u0002f\u01c6\u0003",
    "\u0002\u0002\u0002h\u01cf\u0003\u0002\u0002\u0002j\u01d2\u0003\u0002",
    "\u0002\u0002l\u01de\u0003\u0002\u0002\u0002n\u01e4\u0003\u0002\u0002",
    "\u0002p\u01e9\u0003\u0002\u0002\u0002r\u0205\u0003\u0002\u0002\u0002",
    "t\u0207\u0003\u0002\u0002\u0002v\u020c\u0003\u0002\u0002\u0002x\u0215",
    "\u0003\u0002\u0002\u0002z\u0218\u0003\u0002\u0002\u0002|\u021e\u0003",
    "\u0002\u0002\u0002~\u0222\u0003\u0002\u0002\u0002\u0080\u022c\u0003",
    "\u0002\u0002\u0002\u0082\u0231\u0003\u0002\u0002\u0002\u0084\u0086\u0005",
    "\u0004\u0003\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0007",
    "\u0002\u0002\u0003\u008a\u0003\u0003\u0002\u0002\u0002\u008b\u008d\u0005",
    "\u0006\u0004\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003",
    "\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u0093\u0005",
    "h5\u0002\u0091\u0093\u0005\b\u0005\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0005\u0003\u0002\u0002",
    "\u0002\u0094\u009e\u0005\n\u0006\u0002\u0095\u009e\u0005\f\u0007\u0002",
    "\u0096\u009e\u0005\u0012\n\u0002\u0097\u009e\u0005$\u0013\u0002\u0098",
    "\u009e\u0005*\u0016\u0002\u0099\u009e\u0005.\u0018\u0002\u009a\u009e",
    "\u00058\u001d\u0002\u009b\u009e\u0005@!\u0002\u009c\u009e\u0005L\'\u0002",
    "\u009d\u0094\u0003\u0002\u0002\u0002\u009d\u0095\u0003\u0002\u0002\u0002",
    "\u009d\u0096\u0003\u0002\u0002\u0002\u009d\u0097\u0003\u0002\u0002\u0002",
    "\u009d\u0098\u0003\u0002\u0002\u0002\u009d\u0099\u0003\u0002\u0002\u0002",
    "\u009d\u009a\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002",
    "\u009d\u009c\u0003\u0002\u0002\u0002\u009e\u0007\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0005\u0080A\u0002\u00a0\u00a1\u0007\u0003\u0002\u0002",
    "\u00a1\u00a2\u0007\u0004\u0002\u0002\u00a2\u00a3\u0007\u0005\u0002\u0002",
    "\u00a3\u00a4\u0007\u0006\u0002\u0002\u00a4\u00a5\u0007M\u0002\u0002",
    "\u00a5\t\u0003\u0002\u0002\u0002\u00a6\u00a9\u0005v<\u0002\u00a7\u00a9",
    "\u0005r:\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a7\u0003",
    "\u0002\u0002\u0002\u00a9\u000b\u0003\u0002\u0002\u0002\u00aa\u00ab\u0005",
    "\u000e\b\u0002\u00ab\u00ac\u0005\u0010\t\u0002\u00ac\r\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0007-\u0002\u0002\u00ae\u00af\u0005\u0082B\u0002",
    "\u00af\u00b0\u0007M\u0002\u0002\u00b0\u000f\u0003\u0002\u0002\u0002",
    "\u00b1\u00bc\u0005v<\u0002\u00b2\u00b3\u0007-\u0002\u0002\u00b3\u00b4",
    "\u0005\u0082B\u0002\u00b4\u00b5\u0007\u0007\u0002\u0002\u00b5\u00b6",
    "\u0007\u0005\u0002\u0002\u00b6\u00b7\u0007\b\u0002\u0002\u00b7\u00b8",
    "\u0007I\u0002\u0002\u00b8\u00b9\u0007\u0005\u0002\u0002\u00b9\u00ba",
    "\u0007\t\u0002\u0002\u00ba\u00bb\u0007M\u0002\u0002\u00bb\u00bd\u0003",
    "\u0002\u0002\u0002\u00bc\u00b2\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\u0011\u0003\u0002\u0002\u0002\u00be\u00c2\u0005",
    "\u0014\u000b\u0002\u00bf\u00c1\u0005\u0018\r\u0002\u00c0\u00bf\u0003",
    "\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003",
    "\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u0013\u0003",
    "\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007",
    "7\u0002\u0002\u00c6\u00c7\u0007=\u0002\u0002\u00c7\u00ca\u0007M\u0002",
    "\u0002\u00c8\u00ca\u0005\u0016\f\u0002\u00c9\u00c5\u0003\u0002\u0002",
    "\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca\u0015\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0007G\u0002\u0002\u00cc\u00cd\u0005\u0082B\u0002",
    "\u00cd\u00ce\u0007M\u0002\u0002\u00ce\u0017\u0003\u0002\u0002\u0002",
    "\u00cf\u00d6\u0005v<\u0002\u00d0\u00d6\u0005\u001a\u000e\u0002\u00d1",
    "\u00d6\u0005r:\u0002\u00d2\u00d6\u0005\u001c\u000f\u0002\u00d3\u00d6",
    "\u0005\"\u0012\u0002\u00d4\u00d6\u0005|?\u0002\u00d5\u00cf\u0003\u0002",
    "\u0002\u0002\u00d5\u00d0\u0003\u0002\u0002\u0002\u00d5\u00d1\u0003\u0002",
    "\u0002\u0002\u00d5\u00d2\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002",
    "\u0002\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d6\u0019\u0003\u0002",
    "\u0002\u0002\u00d7\u00d8\u0005\u0080A\u0002\u00d8\u00d9\u0007J\u0002",
    "\u0002\u00d9\u00da\u0005\u0082B\u0002\u00da\u00db\u0007\n\u0002\u0002",
    "\u00db\u00dc\u0007\u000b\u0002\u0002\u00dc\u00dd\u0007M\u0002\u0002",
    "\u00dd\u001b\u0003\u0002\u0002\u0002\u00de\u00df\u0005\u001e\u0010\u0002",
    "\u00df\u00e0\u0005 \u0011\u0002\u00e0\u001d\u0003\u0002\u0002\u0002",
    "\u00e1\u00e2\u0005\u0080A\u0002\u00e2\u00e3\u0007?\u0002\u0002\u00e3",
    "\u00e5\u0007/\u0002\u0002\u00e4\u00e6\u0007\f\u0002\u0002\u00e5\u00e4",
    "\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e7",
    "\u0003\u0002\u0002\u0002\u00e7\u00e8\u0005\u0082B\u0002\u00e8\u00e9",
    "\u0007M\u0002\u0002\u00e9\u001f\u0003\u0002\u0002\u0002\u00ea\u00ec",
    "\u0005v<\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007",
    "0\u0002\u0002\u00ee\u00ef\u0005\u0082B\u0002\u00ef\u00f0\u0007M\u0002",
    "\u0002\u00f0!\u0003\u0002\u0002\u0002\u00f1\u00f2\u00070\u0002\u0002",
    "\u00f2\u00f3\u0005\u0082B\u0002\u00f3\u00f4\u0007M\u0002\u0002\u00f4",
    "#\u0003\u0002\u0002\u0002\u00f5\u00f7\u0005&\u0014\u0002\u00f6\u00f8",
    "\u0005v<\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003",
    "\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003",
    "\u0002\u0002\u0002\u00fa%\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007",
    ".\u0002\u0002\u00fc\u00fd\u0005\u0080A\u0002\u00fd\u00fe\u0007I\u0002",
    "\u0002\u00fe\u00ff\u0007H\u0002\u0002\u00ff\u0100\u0005(\u0015\u0002",
    "\u0100\u0101\u0007M\u0002\u0002\u0101\'\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0007\r\u0002\u0002\u0103\u0104\u0007<\u0002\u0002\u0104\u0105",
    "\u0007I\u0002\u0002\u0105\u0106\u0007\f\u0002\u0002\u0106\u0107\t\u0002",
    "\u0002\u0002\u0107\u0108\u0007\u000e\u0002\u0002\u0108)\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0005,\u0017\u0002\u010a\u010b\u0005v<\u0002",
    "\u010b\u010c\u0005|?\u0002\u010c+\u0003\u0002\u0002\u0002\u010d\u010e",
    "\u0007.\u0002\u0002\u010e\u010f\u0005\u0082B\u0002\u010f\u0110\u0007",
    "M\u0002\u0002\u0110-\u0003\u0002\u0002\u0002\u0111\u0112\u00050\u0019",
    "\u0002\u0112\u0113\u00052\u001a\u0002\u0113/\u0003\u0002\u0002\u0002",
    "\u0114\u0115\u0007/\u0002\u0002\u0115\u0116\u0005\u0082B\u0002\u0116",
    "\u0117\u0007M\u0002\u0002\u01171\u0003\u0002\u0002\u0002\u0118\u011a",
    "\u00054\u001b\u0002\u0119\u011b\u00056\u001c\u0002\u011a\u0119\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011a\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d3\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u00070\u0002\u0002\u011f\u0120\u0005",
    "\u0082B\u0002\u0120\u0121\u0007M\u0002\u0002\u01215\u0003\u0002\u0002",
    "\u0002\u0122\u0126\u0005r:\u0002\u0123\u0126\u0005|?\u0002\u0124\u0126",
    "\u0005v<\u0002\u0125\u0122\u0003\u0002\u0002\u0002\u0125\u0123\u0003",
    "\u0002\u0002\u0002\u0125\u0124\u0003\u0002\u0002\u0002\u01267\u0003",
    "\u0002\u0002\u0002\u0127\u0129\u0005:\u001e\u0002\u0128\u012a\u0005",
    "<\u001f\u0002\u0129\u0128\u0003\u0002\u0002\u0002\u012a\u012b\u0003",
    "\u0002\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012b\u012c\u0003",
    "\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002\u012d\u012e\u0005",
    "> \u0002\u012e9\u0003\u0002\u0002\u0002\u012f\u0130\u0007\u000f\u0002",
    "\u0002\u0130\u0131\u00073\u0002\u0002\u0131\u0132\u0007H\u0002\u0002",
    "\u0132\u0133\u0007\u0010\u0002\u0002\u0133\u0134\u0007M\u0002\u0002",
    "\u0134;\u0003\u0002\u0002\u0002\u0135\u0136\u0005\u0080A\u0002\u0136",
    "\u0137\u0007?\u0002\u0002\u0137\u0138\u0007I\u0002\u0002\u0138\u0139",
    "\u0005\u0082B\u0002\u0139\u013a\u0007M\u0002\u0002\u013a=\u0003\u0002",
    "\u0002\u0002\u013b\u013c\u0007\u0011\u0002\u0002\u013c\u013d\u0007\u0012",
    "\u0002\u0002\u013d\u013e\u0007\u0010\u0002\u0002\u013e\u013f\u0007\u0007",
    "\u0002\u0002\u013f\u0140\u00073\u0002\u0002\u0140\u0145\u0007M\u0002",
    "\u0002\u0141\u0142\u00072\u0002\u0002\u0142\u0143\u0005\u0082B\u0002",
    "\u0143\u0144\u0007M\u0002\u0002\u0144\u0146\u0003\u0002\u0002\u0002",
    "\u0145\u0141\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002",
    "\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002",
    "\u0148?\u0003\u0002\u0002\u0002\u0149\u014c\u0005B\"\u0002\u014a\u014c",
    "\u0005J&\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014a\u0003",
    "\u0002\u0002\u0002\u014cA\u0003\u0002\u0002\u0002\u014d\u014f\u0005",
    "D#\u0002\u014e\u0150\u0005F$\u0002\u014f\u014e\u0003\u0002\u0002\u0002",
    "\u0150\u0151\u0003\u0002\u0002\u0002\u0151\u014f\u0003\u0002\u0002\u0002",
    "\u0151\u0152\u0003\u0002\u0002\u0002\u0152\u0154\u0003\u0002\u0002\u0002",
    "\u0153\u0155\u0005H%\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0155",
    "\u0156\u0003\u0002\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0156",
    "\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002\u0002\u0158",
    "\u0159\u0005r:\u0002\u0159C\u0003\u0002\u0002\u0002\u015a\u015b\u0007",
    "\u0013\u0002\u0002\u015b\u015c\u00073\u0002\u0002\u015c\u015d\u0007",
    "\u0014\u0002\u0002\u015d\u015e\u0007\u0015\u0002\u0002\u015e\u015f\u0007",
    "\u0016\u0002\u0002\u015f\u0160\u0007\u0007\u0002\u0002\u0160\u0161\u0007",
    "H\u0002\u0002\u0161\u0162\u0007\u0017\u0002\u0002\u0162\u0163\u0007",
    "M\u0002\u0002\u0163E\u0003\u0002\u0002\u0002\u0164\u0165\u0005\u0080",
    "A\u0002\u0165\u0166\u0007?\u0002\u0002\u0166\u0167\u0007\u0018\u0002",
    "\u0002\u0167\u0168\u0005\u0082B\u0002\u0168\u0169\u0007M\u0002\u0002",
    "\u0169G\u0003\u0002\u0002\u0002\u016a\u016b\u00072\u0002\u0002\u016b",
    "\u016c\u0005\u0082B\u0002\u016c\u016d\u0007M\u0002\u0002\u016dI\u0003",
    "\u0002\u0002\u0002\u016e\u016f\u0007\u0013\u0002\u0002\u016f\u0170\u0007",
    "\u0019\u0002\u0002\u0170\u0171\u0007H\u0002\u0002\u0171\u0172\u0007",
    "I\u0002\u0002\u0172\u0173\u0007M\u0002\u0002\u0173\u0174\u0005v<\u0002",
    "\u0174K\u0003\u0002\u0002\u0002\u0175\u0177\u0005N(\u0002\u0176\u0178",
    "\u0005P)\u0002\u0177\u0176\u0003\u0002\u0002\u0002\u0177\u0178\u0003",
    "\u0002\u0002\u0002\u0178M\u0003\u0002\u0002\u0002\u0179\u017a\u0007",
    "\u001a\u0002\u0002\u017a\u017b\u0005\u0082B\u0002\u017b\u017c\u0007",
    "M\u0002\u0002\u017cO\u0003\u0002\u0002\u0002\u017d\u0184\u0005V,\u0002",
    "\u017e\u0184\u0005R*\u0002\u017f\u0184\u0005T+\u0002\u0180\u0184\u0005",
    "Z.\u0002\u0181\u0184\u0005^0\u0002\u0182\u0184\u0005\\/\u0002\u0183",
    "\u017d\u0003\u0002\u0002\u0002\u0183\u017e\u0003\u0002\u0002\u0002\u0183",
    "\u017f\u0003\u0002\u0002\u0002\u0183\u0180\u0003\u0002\u0002\u0002\u0183",
    "\u0181\u0003\u0002\u0002\u0002\u0183\u0182\u0003\u0002\u0002\u0002\u0184",
    "Q\u0003\u0002\u0002\u0002\u0185\u0186\u0005T+\u0002\u0186\u0187\u0005",
    "r:\u0002\u0187S\u0003\u0002\u0002\u0002\u0188\u018a\u0005b2\u0002\u0189",
    "\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b",
    "\u0189\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002\u018c",
    "\u018e\u0003\u0002\u0002\u0002\u018d\u018f\u0005d3\u0002\u018e\u018d",
    "\u0003\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190\u018e",
    "\u0003\u0002\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191U",
    "\u0003\u0002\u0002\u0002\u0192\u0193\u0005r:\u0002\u0193\u0194\u0005",
    "X-\u0002\u0194W\u0003\u0002\u0002\u0002\u0195\u0196\u0005f4\u0002\u0196",
    "\u0197\u0005d3\u0002\u0197Y\u0003\u0002\u0002\u0002\u0198\u0199\u0007",
    "-\u0002\u0002\u0199\u019a\u0005\u0082B\u0002\u019a\u019b\u0007M\u0002",
    "\u0002\u019b\u019c\u0005`1\u0002\u019c[\u0003\u0002\u0002\u0002\u019d",
    "\u019e\u0005\u0080A\u0002\u019e\u019f\u0007\u0018\u0002\u0002\u019f",
    "\u01a0\u0007\u001b\u0002\u0002\u01a0\u01a1\u0005\u0080A\u0002\u01a1",
    "\u01a2\u0007M\u0002\u0002\u01a2\u01a3\u0007\u001c\u0002\u0002\u01a3",
    "\u01a4\u0005\u0082B\u0002\u01a4\u01a5\u0007\u0007\u0002\u0002\u01a5",
    "\u01a6\u0005\u0082B\u0002\u01a6\u01a7\u0007M\u0002\u0002\u01a7]\u0003",
    "\u0002\u0002\u0002\u01a8\u01ae\u0005|?\u0002\u01a9\u01ae\u0005d3\u0002",
    "\u01aa\u01ab\u0005|?\u0002\u01ab\u01ac\u0005d3\u0002\u01ac\u01ae\u0003",
    "\u0002\u0002\u0002\u01ad\u01a8\u0003\u0002\u0002\u0002\u01ad\u01a9\u0003",
    "\u0002\u0002\u0002\u01ad\u01aa\u0003\u0002\u0002\u0002\u01ae_\u0003",
    "\u0002\u0002\u0002\u01af\u01b0\u0007-\u0002\u0002\u01b0\u01b1\u0005",
    "\u0082B\u0002\u01b1\u01b2\u0007\u0007\u0002\u0002\u01b2\u01b3\u0007",
    "\u0005\u0002\u0002\u01b3\u01b4\u0007\b\u0002\u0002\u01b4\u01b5\u0007",
    "I\u0002\u0002\u01b5\u01b6\u0007\u0005\u0002\u0002\u01b6\u01b7\u0007",
    "\t\u0002\u0002\u01b7\u01b8\u0007M\u0002\u0002\u01b8a\u0003\u0002\u0002",
    "\u0002\u01b9\u01ba\u0005\u0080A\u0002\u01ba\u01bb\u0007?\u0002\u0002",
    "\u01bb\u01bd\u0007/\u0002\u0002\u01bc\u01be\u0007\f\u0002\u0002\u01bd",
    "\u01bc\u0003\u0002\u0002\u0002\u01bd\u01be\u0003\u0002\u0002\u0002\u01be",
    "\u01bf\u0003\u0002\u0002\u0002\u01bf\u01c0\u0005\u0082B\u0002\u01c0",
    "\u01c1\u0007M\u0002\u0002\u01c1c\u0003\u0002\u0002\u0002\u01c2\u01c3",
    "\u00070\u0002\u0002\u01c3\u01c4\u0005\u0082B\u0002\u01c4\u01c5\u0007",
    "M\u0002\u0002\u01c5e\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007\u000f",
    "\u0002\u0002\u01c7\u01c8\u0007\u001d\u0002\u0002\u01c8\u01c9\u0007\u001e",
    "\u0002\u0002\u01c9\u01ca\u0007\u001f\u0002\u0002\u01ca\u01cb\u0007 ",
    "\u0002\u0002\u01cb\u01cc\u0007!\u0002\u0002\u01cc\u01cd\u0007\"\u0002",
    "\u0002\u01cd\u01ce\u0007M\u0002\u0002\u01ceg\u0003\u0002\u0002\u0002",
    "\u01cf\u01d0\u0005j6\u0002\u01d0\u01d1\u0005l7\u0002\u01d1i\u0003\u0002",
    "\u0002\u0002\u01d2\u01d3\u0005\u0080A\u0002\u01d3\u01d4\u0007;\u0002",
    "\u0002\u01d4\u01d5\u00075\u0002\u0002\u01d5\u01d6\u0007H\u0002\u0002",
    "\u01d6\u01d7\u0007M\u0002\u0002\u01d7k\u0003\u0002\u0002\u0002\u01d8",
    "\u01d9\u0007\u001c\u0002\u0002\u01d9\u01da\u0005\u0082B\u0002\u01da",
    "\u01db\u0007\u0007\u0002\u0002\u01db\u01dc\u0007#\u0002\u0002\u01dc",
    "\u01dd\u0007M\u0002\u0002\u01dd\u01df\u0003\u0002\u0002\u0002\u01de",
    "\u01d8\u0003\u0002\u0002\u0002\u01de\u01df\u0003\u0002\u0002\u0002\u01df",
    "\u01e0\u0003\u0002\u0002\u0002\u01e0\u01e1\u0005r:\u0002\u01e1\u01e2",
    "\u0005n8\u0002\u01e2\u01e3\u0005p9\u0002\u01e3m\u0003\u0002\u0002\u0002",
    "\u01e4\u01e5\u0007$\u0002\u0002\u01e5\u01e6\u0007%\u0002\u0002\u01e6",
    "\u01e7\u0007&\u0002\u0002\u01e7\u01e8\u0007M\u0002\u0002\u01e8o\u0003",
    "\u0002\u0002\u0002\u01e9\u01ea\u0007@\u0002\u0002\u01ea\u01eb\u0007",
    "?\u0002\u0002\u01eb\u01ec\u0007>\u0002\u0002\u01ec\u01ed\u0005\u0080",
    "A\u0002\u01ed\u01ee\u0007\'\u0002\u0002\u01ee\u01ef\u00075\u0002\u0002",
    "\u01ef\u01f0\u0007H\u0002\u0002\u01f0\u01f1\u0007M\u0002\u0002\u01f1",
    "q\u0003\u0002\u0002\u0002\u01f2\u01f4\u0005t;\u0002\u01f3\u01f2\u0003",
    "\u0002\u0002\u0002\u01f4\u01f5\u0003\u0002\u0002\u0002\u01f5\u01f3\u0003",
    "\u0002\u0002\u0002\u01f5\u01f6\u0003\u0002\u0002\u0002\u01f6\u01f7\u0003",
    "\u0002\u0002\u0002\u01f7\u01f9\u0005~@\u0002\u01f8\u01fa\u0005t;\u0002",
    "\u01f9\u01f8\u0003\u0002\u0002\u0002\u01fa\u01fb\u0003\u0002\u0002\u0002",
    "\u01fb\u01f9\u0003\u0002\u0002\u0002\u01fb\u01fc\u0003\u0002\u0002\u0002",
    "\u01fc\u0206\u0003\u0002\u0002\u0002\u01fd\u01ff\u0005~@\u0002\u01fe",
    "\u01fd\u0003\u0002\u0002\u0002\u01fe\u01ff\u0003\u0002\u0002\u0002\u01ff",
    "\u0201\u0003\u0002\u0002\u0002\u0200\u0202\u0005t;\u0002\u0201\u0200",
    "\u0003\u0002\u0002\u0002\u0202\u0203\u0003\u0002\u0002\u0002\u0203\u0201",
    "\u0003\u0002\u0002\u0002\u0203\u0204\u0003\u0002\u0002\u0002\u0204\u0206",
    "\u0003\u0002\u0002\u0002\u0205\u01f3\u0003\u0002\u0002\u0002\u0205\u01fe",
    "\u0003\u0002\u0002\u0002\u0206s\u0003\u0002\u0002\u0002\u0207\u0208",
    "\u0007:\u0002\u0002\u0208\u0209\u0007H\u0002\u0002\u0209\u020a\u0007",
    "\u0010\u0002\u0002\u020a\u020b\u0007M\u0002\u0002\u020bu\u0003\u0002",
    "\u0002\u0002\u020c\u020d\u0005\u0080A\u0002\u020d\u020f\u0007J\u0002",
    "\u0002\u020e\u0210\u0005\u0082B\u0002\u020f\u020e\u0003\u0002\u0002",
    "\u0002\u020f\u0210\u0003\u0002\u0002\u0002\u0210\u0211\u0003\u0002\u0002",
    "\u0002\u0211\u0212\u0005x=\u0002\u0212\u0213\u0005z>\u0002\u0213\u0214",
    "\u0007M\u0002\u0002\u0214w\u0003\u0002\u0002\u0002\u0215\u0216\t\u0003",
    "\u0002\u0002\u0216\u0217\t\u0004\u0002\u0002\u0217y\u0003\u0002\u0002",
    "\u0002\u0218\u0219\u0007\r\u0002\u0002\u0219\u021a\u0007I\u0002\u0002",
    "\u021a\u021b\u0007\f\u0002\u0002\u021b\u021c\t\u0002\u0002\u0002\u021c",
    "\u021d\u0007\u000e\u0002\u0002\u021d{\u0003\u0002\u0002\u0002\u021e",
    "\u021f\u0007(\u0002\u0002\u021f\u0220\u0005\u0082B\u0002\u0220\u0221",
    "\u0007M\u0002\u0002\u0221}\u0003\u0002\u0002\u0002\u0222\u0223\u0007",
    ")\u0002\u0002\u0223\u0224\u00073\u0002\u0002\u0224\u0225\u0007*\u0002",
    "\u0002\u0225\u0226\u0007\u0007\u0002\u0002\u0226\u0227\u0007+\u0002",
    "\u0002\u0227\u0228\u0007,\u0002\u0002\u0228\u0229\u0007\t\u0002\u0002",
    "\u0229\u022a\u0007M\u0002\u0002\u022a\u007f\u0003\u0002\u0002\u0002",
    "\u022b\u022d\u0007I\u0002\u0002\u022c\u022b\u0003\u0002\u0002\u0002",
    "\u022d\u022e\u0003\u0002\u0002\u0002\u022e\u022c\u0003\u0002\u0002\u0002",
    "\u022e\u022f\u0003\u0002\u0002\u0002\u022f\u0081\u0003\u0002\u0002\u0002",
    "\u0230\u0232\u0007I\u0002\u0002\u0231\u0230\u0003\u0002\u0002\u0002",
    "\u0232\u0233\u0003\u0002\u0002\u0002\u0233\u0231\u0003\u0002\u0002\u0002",
    "\u0233\u0234\u0003\u0002\u0002\u0002\u0234\u0083\u0003\u0002\u0002\u0002",
    "$\u0087\u008e\u0092\u009d\u00a8\u00bc\u00c2\u00c9\u00d5\u00e5\u00eb",
    "\u00f9\u011c\u0125\u012b\u0147\u014b\u0151\u0156\u0177\u0183\u018b\u0190",
    "\u01ad\u01bd\u01de\u01f5\u01fb\u01fe\u0203\u0205\u020f\u022e\u0233"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StarRealmsParser extends antlr4.Parser {

    static grammarFileName = "StarRealms.g4";
    static literalNames = [ null, "'has'", "'won'", "'the'", "'game'", "'to'", 
                            "'top'", "'deck'", "'ability'", "'available'", 
                            "':'", "'('", "')'", "'Resolving'", "'cards'", 
                            "'no'", "'more'", "'Chose'", "'and'", "'Redraw'", 
                            "'up'", "'card(s)'", "'selecting'", "'Add'", 
                            "'Activating'", "'ship'", "'Changed'", "'Scrap'", 
                            "'a'", "'card'", "'from'", "'your'", "'hand'", 
                            "'Unaligned'", "'Refresh'", "'ally'", "'indicators'", 
                            "''s'", "'Destroyed'", "'Shuffled'", "'pile'", 
                            "'form'", "'new'", null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'</color>'", "'==='", "'.'", "'''", "'Played'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "ACQUIRED", "ATTACKED", "SCRAPPING", 
                             "SCRAPPED", "SHUFFLED", "DISCARDED", "DISCARD", 
                             "RESOLVING", "TURN", "PILE", "PLAY", "FORM", 
                             "DECK", "DREW", "ENDS", "NEW", "ALL", "NOW", 
                             "IS", "IT", "WHITESPACE", "COLOR_START_TAG", 
                             "COLOR_END_TAG", "END_GAME_TAG", "DOT", "APOSTROPHE", 
                             "PLAYED", "INT", "WORD", "SEPARATOR", "INCREMENT", 
                             "DECREASE", "NEWLINE" ];
    static ruleNames = [ "battle", "turn", "action", "winStatus", "baseInstantEffect", 
                         "purchase", "purchaseSummary", "purchaseDetail", 
                         "play", "playSummary", "playSingle", "playDetail", 
                         "newAbility", "scrapCardEffect", "scrapCardEffectSummary", 
                         "scrapCardEffectDetail", "simpleScrap", "attackPlayer", 
                         "attackPlayerSummary", "newAuthority", "attackBase", 
                         "attackBaseSummary", "scrapCard", "scrappingSummary", 
                         "scrappingDetail", "scrapAction", "scrapEffect", 
                         "discard", "resolveDiscard", "discardAction", "discardDetails", 
                         "choseEffect", "choseDiscardAndDraw", "discardAndDrawSummary", 
                         "selectDiscard", "discarding", "choseIncreasePool", 
                         "activatingEffect", "activatingSummary", "activatingDetail", 
                         "scrapAndDraw", "scrap", "drawAndScrapFromHand", 
                         "resolveHandScrap", "freeAcquireToTop", "stealthNeedle", 
                         "destroyAndScrap", "purchaseToTop", "scrapSummary", 
                         "scrapDetail", "resolveHandScrapSummary", "endPhase", 
                         "endTurn", "drawPhase", "refreshIndicators", "newTurn", 
                         "drawCardsWithShuffle", "drawCards", "newBalanceDetail", 
                         "effect", "balance", "destroyBase", "shuffleCards", 
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this.turn();
	            this.state = 133; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (StarRealmsParser.T__12 - 13)) | (1 << (StarRealmsParser.T__16 - 13)) | (1 << (StarRealmsParser.T__23 - 13)) | (1 << (StarRealmsParser.T__38 - 13)) | (1 << (StarRealmsParser.ACQUIRED - 13)) | (1 << (StarRealmsParser.ATTACKED - 13)))) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (StarRealmsParser.SCRAPPING - 45)) | (1 << (StarRealmsParser.PLAY - 45)) | (1 << (StarRealmsParser.DREW - 45)) | (1 << (StarRealmsParser.PLAYED - 45)) | (1 << (StarRealmsParser.WORD - 45)))) !== 0));
	        this.state = 135;
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
	        this.state = 138; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 137;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 140; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 142;
	            this.endPhase();
	            break;

	        case 2:
	            this.state = 143;
	            this.winStatus();
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



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StarRealmsParser.RULE_action);
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.baseInstantEffect();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.purchase();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 148;
	            this.play();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 149;
	            this.attackPlayer();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 150;
	            this.attackBase();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 151;
	            this.scrapCard();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 152;
	            this.discard();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 153;
	            this.choseEffect();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 154;
	            this.activatingEffect();
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



	winStatus() {
	    let localctx = new WinStatusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StarRealmsParser.RULE_winStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.name();
	        this.state = 158;
	        this.match(StarRealmsParser.T__0);
	        this.state = 159;
	        this.match(StarRealmsParser.T__1);
	        this.state = 160;
	        this.match(StarRealmsParser.T__2);
	        this.state = 161;
	        this.match(StarRealmsParser.T__3);
	        this.state = 162;
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



	baseInstantEffect() {
	    let localctx = new BaseInstantEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, StarRealmsParser.RULE_baseInstantEffect);
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.newBalanceDetail();
	            break;
	        case StarRealmsParser.T__38:
	        case StarRealmsParser.DREW:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.drawCardsWithShuffle();
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



	purchase() {
	    let localctx = new PurchaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StarRealmsParser.RULE_purchase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.purchaseSummary();
	        this.state = 169;
	        this.purchaseDetail();
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



	purchaseSummary() {
	    let localctx = new PurchaseSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StarRealmsParser.RULE_purchaseSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(StarRealmsParser.ACQUIRED);
	        this.state = 172;
	        this.card();
	        this.state = 173;
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



	purchaseDetail() {
	    let localctx = new PurchaseDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StarRealmsParser.RULE_purchaseDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.newBalanceDetail();
	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 176;
	            this.match(StarRealmsParser.ACQUIRED);
	            this.state = 177;
	            this.card();
	            this.state = 178;
	            this.match(StarRealmsParser.T__4);
	            this.state = 179;
	            this.match(StarRealmsParser.T__2);
	            this.state = 180;
	            this.match(StarRealmsParser.T__5);
	            this.state = 181;
	            this.match(StarRealmsParser.WORD);
	            this.state = 182;
	            this.match(StarRealmsParser.T__2);
	            this.state = 183;
	            this.match(StarRealmsParser.T__6);
	            this.state = 184;
	            this.match(StarRealmsParser.NEWLINE);

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



	play() {
	    let localctx = new PlayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StarRealmsParser.RULE_play);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.playSummary();
	        this.state = 192;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 189;
	                this.playDetail(); 
	            }
	            this.state = 194;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	playSummary() {
	    let localctx = new PlaySummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StarRealmsParser.RULE_playSummary);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.PLAY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.match(StarRealmsParser.PLAY);
	            this.state = 196;
	            this.match(StarRealmsParser.ALL);
	            this.state = 197;
	            this.match(StarRealmsParser.NEWLINE);
	            break;
	        case StarRealmsParser.PLAYED:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
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
	    this.enterRule(localctx, 20, StarRealmsParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(StarRealmsParser.PLAYED);
	        this.state = 202;
	        this.card();
	        this.state = 203;
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



	playDetail() {
	    let localctx = new PlayDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StarRealmsParser.RULE_playDetail);
	    try {
	        this.state = 211;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.newBalanceDetail();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 206;
	            this.newAbility();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 207;
	            this.drawCardsWithShuffle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 208;
	            this.scrapCardEffect();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 209;
	            this.simpleScrap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 210;
	            this.destroyBase();
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



	newAbility() {
	    let localctx = new NewAbilityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StarRealmsParser.RULE_newAbility);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.name();
	        this.state = 214;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 215;
	        this.card();
	        this.state = 216;
	        this.match(StarRealmsParser.T__7);
	        this.state = 217;
	        this.match(StarRealmsParser.T__8);
	        this.state = 218;
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



	scrapCardEffect() {
	    let localctx = new ScrapCardEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StarRealmsParser.RULE_scrapCardEffect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.scrapCardEffectSummary();
	        this.state = 221;
	        this.scrapCardEffectDetail();
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



	scrapCardEffectSummary() {
	    let localctx = new ScrapCardEffectSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StarRealmsParser.RULE_scrapCardEffectSummary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.name();
	        this.state = 224;
	        this.match(StarRealmsParser.IS);
	        this.state = 225;
	        this.match(StarRealmsParser.SCRAPPING);
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__9) {
	            this.state = 226;
	            this.match(StarRealmsParser.T__9);
	        }

	        this.state = 229;
	        this.card();
	        this.state = 230;
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



	scrapCardEffectDetail() {
	    let localctx = new ScrapCardEffectDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StarRealmsParser.RULE_scrapCardEffectDetail);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.WORD) {
	            this.state = 232;
	            this.newBalanceDetail();
	        }

	        this.state = 235;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 236;
	        this.card();
	        this.state = 237;
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



	simpleScrap() {
	    let localctx = new SimpleScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, StarRealmsParser.RULE_simpleScrap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 240;
	        this.card();
	        this.state = 241;
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
	    this.enterRule(localctx, 34, StarRealmsParser.RULE_attackPlayer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.attackPlayerSummary();
	        this.state = 245; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 244;
	        		this.newBalanceDetail();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 247; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
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



	attackPlayerSummary() {
	    let localctx = new AttackPlayerSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, StarRealmsParser.RULE_attackPlayerSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 250;
	        this.name();
	        this.state = 251;
	        this.match(StarRealmsParser.WORD);
	        this.state = 252;
	        this.match(StarRealmsParser.INT);
	        this.state = 253;
	        this.newAuthority();
	        this.state = 254;
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



	newAuthority() {
	    let localctx = new NewAuthorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, StarRealmsParser.RULE_newAuthority);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(StarRealmsParser.T__10);
	        this.state = 257;
	        this.match(StarRealmsParser.NEW);
	        this.state = 258;
	        this.match(StarRealmsParser.WORD);
	        this.state = 259;
	        this.match(StarRealmsParser.T__9);
	        this.state = 260;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 261;
	        this.match(StarRealmsParser.T__11);
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
	    this.enterRule(localctx, 40, StarRealmsParser.RULE_attackBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.attackBaseSummary();
	        this.state = 264;
	        this.newBalanceDetail();
	        this.state = 265;
	        this.destroyBase();
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



	attackBaseSummary() {
	    let localctx = new AttackBaseSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, StarRealmsParser.RULE_attackBaseSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 268;
	        this.card();
	        this.state = 269;
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



	scrapCard() {
	    let localctx = new ScrapCardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, StarRealmsParser.RULE_scrapCard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.scrappingSummary();
	        this.state = 272;
	        this.scrappingDetail();
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



	scrappingSummary() {
	    let localctx = new ScrappingSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, StarRealmsParser.RULE_scrappingSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(StarRealmsParser.SCRAPPING);
	        this.state = 275;
	        this.card();
	        this.state = 276;
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



	scrappingDetail() {
	    let localctx = new ScrappingDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, StarRealmsParser.RULE_scrappingDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.scrapAction();
	        this.state = 280; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 279;
	        		this.scrapEffect();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 282; 
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



	scrapAction() {
	    let localctx = new ScrapActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, StarRealmsParser.RULE_scrapAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 285;
	        this.card();
	        this.state = 286;
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



	scrapEffect() {
	    let localctx = new ScrapEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, StarRealmsParser.RULE_scrapEffect);
	    try {
	        this.state = 291;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.T__38:
	        case StarRealmsParser.DREW:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 288;
	            this.drawCardsWithShuffle();
	            break;
	        case StarRealmsParser.T__37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.destroyBase();
	            break;
	        case StarRealmsParser.WORD:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 290;
	            this.newBalanceDetail();
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



	discard() {
	    let localctx = new DiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, StarRealmsParser.RULE_discard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.resolveDiscard();
	        this.state = 295; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 294;
	            this.discardAction();
	            this.state = 297; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
	        this.state = 299;
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
	    this.enterRule(localctx, 56, StarRealmsParser.RULE_resolveDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(StarRealmsParser.T__12);
	        this.state = 302;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 303;
	        this.match(StarRealmsParser.INT);
	        this.state = 304;
	        this.match(StarRealmsParser.T__13);
	        this.state = 305;
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
	    this.enterRule(localctx, 58, StarRealmsParser.RULE_discardAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.name();
	        this.state = 308;
	        this.match(StarRealmsParser.IS);
	        this.state = 309;
	        this.match(StarRealmsParser.WORD);
	        this.state = 310;
	        this.card();
	        this.state = 311;
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
	    this.enterRule(localctx, 60, StarRealmsParser.RULE_discardDetails);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(StarRealmsParser.T__14);
	        this.state = 314;
	        this.match(StarRealmsParser.T__15);
	        this.state = 315;
	        this.match(StarRealmsParser.T__13);
	        this.state = 316;
	        this.match(StarRealmsParser.T__4);
	        this.state = 317;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 318;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 323; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 319;
	            this.match(StarRealmsParser.DISCARDED);
	            this.state = 320;
	            this.card();
	            this.state = 321;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 325; 
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



	choseEffect() {
	    let localctx = new ChoseEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, StarRealmsParser.RULE_choseEffect);
	    try {
	        this.state = 329;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.choseDiscardAndDraw();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.choseIncreasePool();
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



	choseDiscardAndDraw() {
	    let localctx = new ChoseDiscardAndDrawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, StarRealmsParser.RULE_choseDiscardAndDraw);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.discardAndDrawSummary();
	        this.state = 333; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 332;
	            this.selectDiscard();
	            this.state = 335; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
	        this.state = 338; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 337;
	            this.discarding();
	            this.state = 340; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.DISCARDED);
	        this.state = 342;
	        this.drawCardsWithShuffle();
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



	discardAndDrawSummary() {
	    let localctx = new DiscardAndDrawSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, StarRealmsParser.RULE_discardAndDrawSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(StarRealmsParser.T__16);
	        this.state = 345;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 346;
	        this.match(StarRealmsParser.T__17);
	        this.state = 347;
	        this.match(StarRealmsParser.T__18);
	        this.state = 348;
	        this.match(StarRealmsParser.T__19);
	        this.state = 349;
	        this.match(StarRealmsParser.T__4);
	        this.state = 350;
	        this.match(StarRealmsParser.INT);
	        this.state = 351;
	        this.match(StarRealmsParser.T__20);
	        this.state = 352;
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



	selectDiscard() {
	    let localctx = new SelectDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, StarRealmsParser.RULE_selectDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.name();
	        this.state = 355;
	        this.match(StarRealmsParser.IS);
	        this.state = 356;
	        this.match(StarRealmsParser.T__21);
	        this.state = 357;
	        this.card();
	        this.state = 358;
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



	discarding() {
	    let localctx = new DiscardingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, StarRealmsParser.RULE_discarding);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(StarRealmsParser.DISCARDED);
	        this.state = 361;
	        this.card();
	        this.state = 362;
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



	choseIncreasePool() {
	    let localctx = new ChoseIncreasePoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, StarRealmsParser.RULE_choseIncreasePool);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(StarRealmsParser.T__16);
	        this.state = 365;
	        this.match(StarRealmsParser.T__22);
	        this.state = 366;
	        this.match(StarRealmsParser.INT);
	        this.state = 367;
	        this.match(StarRealmsParser.WORD);
	        this.state = 368;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 369;
	        this.newBalanceDetail();
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



	activatingEffect() {
	    let localctx = new ActivatingEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, StarRealmsParser.RULE_activatingEffect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.activatingSummary();
	        this.state = 373;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 372;
	            this.activatingDetail();

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



	activatingSummary() {
	    let localctx = new ActivatingSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, StarRealmsParser.RULE_activatingSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(StarRealmsParser.T__23);
	        this.state = 376;
	        this.card();
	        this.state = 377;
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



	activatingDetail() {
	    let localctx = new ActivatingDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, StarRealmsParser.RULE_activatingDetail);
	    try {
	        this.state = 385;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 379;
	            this.drawAndScrapFromHand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 380;
	            this.scrapAndDraw();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 381;
	            this.scrap();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 382;
	            this.freeAcquireToTop();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 383;
	            this.destroyAndScrap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 384;
	            this.stealthNeedle();
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



	scrapAndDraw() {
	    let localctx = new ScrapAndDrawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, StarRealmsParser.RULE_scrapAndDraw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.scrap();
	        this.state = 388;
	        this.drawCardsWithShuffle();
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
	    this.enterRule(localctx, 82, StarRealmsParser.RULE_scrap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 390;
	            this.scrapSummary();
	            this.state = 393; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
	        this.state = 396; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 395;
	            this.scrapDetail();
	            this.state = 398; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.SCRAPPED);
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



	drawAndScrapFromHand() {
	    let localctx = new DrawAndScrapFromHandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, StarRealmsParser.RULE_drawAndScrapFromHand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.drawCardsWithShuffle();
	        this.state = 401;
	        this.resolveHandScrap();
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



	resolveHandScrap() {
	    let localctx = new ResolveHandScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, StarRealmsParser.RULE_resolveHandScrap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.resolveHandScrapSummary();
	        this.state = 404;
	        this.scrapDetail();
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



	freeAcquireToTop() {
	    let localctx = new FreeAcquireToTopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, StarRealmsParser.RULE_freeAcquireToTop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(StarRealmsParser.ACQUIRED);
	        this.state = 407;
	        this.card();
	        this.state = 408;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 409;
	        this.purchaseToTop();
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



	stealthNeedle() {
	    let localctx = new StealthNeedleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, StarRealmsParser.RULE_stealthNeedle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.name();
	        this.state = 412;
	        this.match(StarRealmsParser.T__21);
	        this.state = 413;
	        this.match(StarRealmsParser.T__24);
	        this.state = 414;
	        this.name();
	        this.state = 415;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 416;
	        this.match(StarRealmsParser.T__25);
	        this.state = 417;
	        this.card();
	        this.state = 418;
	        this.match(StarRealmsParser.T__4);
	        this.state = 419;
	        this.card();
	        this.state = 420;
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



	destroyAndScrap() {
	    let localctx = new DestroyAndScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, StarRealmsParser.RULE_destroyAndScrap);
	    try {
	        this.state = 427;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 422;
	            this.destroyBase();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 423;
	            this.scrapDetail();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 424;
	            this.destroyBase();
	            this.state = 425;
	            this.scrapDetail();
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



	purchaseToTop() {
	    let localctx = new PurchaseToTopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, StarRealmsParser.RULE_purchaseToTop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(StarRealmsParser.ACQUIRED);
	        this.state = 430;
	        this.card();
	        this.state = 431;
	        this.match(StarRealmsParser.T__4);
	        this.state = 432;
	        this.match(StarRealmsParser.T__2);
	        this.state = 433;
	        this.match(StarRealmsParser.T__5);
	        this.state = 434;
	        this.match(StarRealmsParser.WORD);
	        this.state = 435;
	        this.match(StarRealmsParser.T__2);
	        this.state = 436;
	        this.match(StarRealmsParser.T__6);
	        this.state = 437;
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



	scrapSummary() {
	    let localctx = new ScrapSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, StarRealmsParser.RULE_scrapSummary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        this.name();
	        this.state = 440;
	        this.match(StarRealmsParser.IS);
	        this.state = 441;
	        this.match(StarRealmsParser.SCRAPPING);
	        this.state = 443;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__9) {
	            this.state = 442;
	            this.match(StarRealmsParser.T__9);
	        }

	        this.state = 445;
	        this.card();
	        this.state = 446;
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



	scrapDetail() {
	    let localctx = new ScrapDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, StarRealmsParser.RULE_scrapDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 449;
	        this.card();
	        this.state = 450;
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



	resolveHandScrapSummary() {
	    let localctx = new ResolveHandScrapSummaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, StarRealmsParser.RULE_resolveHandScrapSummary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(StarRealmsParser.T__12);
	        this.state = 453;
	        this.match(StarRealmsParser.T__26);
	        this.state = 454;
	        this.match(StarRealmsParser.T__27);
	        this.state = 455;
	        this.match(StarRealmsParser.T__28);
	        this.state = 456;
	        this.match(StarRealmsParser.T__29);
	        this.state = 457;
	        this.match(StarRealmsParser.T__30);
	        this.state = 458;
	        this.match(StarRealmsParser.T__31);
	        this.state = 459;
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



	endPhase() {
	    let localctx = new EndPhaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, StarRealmsParser.RULE_endPhase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this.endTurn();
	        this.state = 462;
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



	endTurn() {
	    let localctx = new EndTurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, StarRealmsParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this.name();
	        this.state = 465;
	        this.match(StarRealmsParser.ENDS);
	        this.state = 466;
	        this.match(StarRealmsParser.TURN);
	        this.state = 467;
	        this.match(StarRealmsParser.INT);
	        this.state = 468;
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
	    this.enterRule(localctx, 106, StarRealmsParser.RULE_drawPhase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__25) {
	            this.state = 470;
	            this.match(StarRealmsParser.T__25);
	            this.state = 471;
	            this.card();
	            this.state = 472;
	            this.match(StarRealmsParser.T__4);
	            this.state = 473;
	            this.match(StarRealmsParser.T__32);
	            this.state = 474;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 478;
	        this.drawCardsWithShuffle();
	        this.state = 479;
	        this.refreshIndicators();
	        this.state = 480;
	        this.newTurn();
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
	    this.enterRule(localctx, 108, StarRealmsParser.RULE_refreshIndicators);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 482;
	        this.match(StarRealmsParser.T__33);
	        this.state = 483;
	        this.match(StarRealmsParser.T__34);
	        this.state = 484;
	        this.match(StarRealmsParser.T__35);
	        this.state = 485;
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



	newTurn() {
	    let localctx = new NewTurnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, StarRealmsParser.RULE_newTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        this.match(StarRealmsParser.IT);
	        this.state = 488;
	        this.match(StarRealmsParser.IS);
	        this.state = 489;
	        this.match(StarRealmsParser.NOW);
	        this.state = 490;
	        this.name();
	        this.state = 491;
	        this.match(StarRealmsParser.T__36);
	        this.state = 492;
	        this.match(StarRealmsParser.TURN);
	        this.state = 493;
	        this.match(StarRealmsParser.INT);
	        this.state = 494;
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



	drawCardsWithShuffle() {
	    let localctx = new DrawCardsWithShuffleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, StarRealmsParser.RULE_drawCardsWithShuffle);
	    var _la = 0; // Token type
		let _alt;
	    try {
	        this.state = 515;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 497; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 496;
	                this.drawCards();
	                this.state = 499; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===StarRealmsParser.DREW);
	            this.state = 501;
	            this.shuffleCards();
	            this.state = 503; 
	            this._errHandler.sync(this);
	            _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 502;
	            		this.drawCards();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 505; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 508;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StarRealmsParser.T__38) {
	                this.state = 507;
	                this.shuffleCards();
	            }

	            this.state = 511; 
	            this._errHandler.sync(this);
	            _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 510;
	            		this.drawCards();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 513; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,29, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	drawCards() {
	    let localctx = new DrawCardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, StarRealmsParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.match(StarRealmsParser.DREW);
	        this.state = 518;
	        this.match(StarRealmsParser.INT);
	        this.state = 519;
	        this.match(StarRealmsParser.T__13);
	        this.state = 520;
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



	newBalanceDetail() {
	    let localctx = new NewBalanceDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, StarRealmsParser.RULE_newBalanceDetail);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.name();
	        this.state = 523;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 525;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.WORD) {
	            this.state = 524;
	            this.card();
	        }

	        this.state = 527;
	        this.effect();
	        this.state = 528;
	        this.balance();
	        this.state = 529;
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



	effect() {
	    let localctx = new EffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, StarRealmsParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 531;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INCREMENT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 532;
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
	    this.enterRule(localctx, 120, StarRealmsParser.RULE_balance);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.match(StarRealmsParser.T__10);
	        this.state = 535;
	        this.match(StarRealmsParser.WORD);
	        this.state = 536;
	        this.match(StarRealmsParser.T__9);
	        this.state = 537;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 538;
	        this.match(StarRealmsParser.T__11);
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
	    this.enterRule(localctx, 122, StarRealmsParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 540;
	        this.match(StarRealmsParser.T__37);
	        this.state = 541;
	        this.card();
	        this.state = 542;
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



	shuffleCards() {
	    let localctx = new ShuffleCardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, StarRealmsParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.match(StarRealmsParser.T__38);
	        this.state = 545;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 546;
	        this.match(StarRealmsParser.T__39);
	        this.state = 547;
	        this.match(StarRealmsParser.T__4);
	        this.state = 548;
	        this.match(StarRealmsParser.T__40);
	        this.state = 549;
	        this.match(StarRealmsParser.T__41);
	        this.state = 550;
	        this.match(StarRealmsParser.T__6);
	        this.state = 551;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, StarRealmsParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 553;
	        		this.match(StarRealmsParser.WORD);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 556; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
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
	    this.enterRule(localctx, 128, StarRealmsParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 558;
	            this.match(StarRealmsParser.WORD);
	            this.state = 561; 
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
StarRealmsParser.T__33 = 34;
StarRealmsParser.T__34 = 35;
StarRealmsParser.T__35 = 36;
StarRealmsParser.T__36 = 37;
StarRealmsParser.T__37 = 38;
StarRealmsParser.T__38 = 39;
StarRealmsParser.T__39 = 40;
StarRealmsParser.T__40 = 41;
StarRealmsParser.T__41 = 42;
StarRealmsParser.ACQUIRED = 43;
StarRealmsParser.ATTACKED = 44;
StarRealmsParser.SCRAPPING = 45;
StarRealmsParser.SCRAPPED = 46;
StarRealmsParser.SHUFFLED = 47;
StarRealmsParser.DISCARDED = 48;
StarRealmsParser.DISCARD = 49;
StarRealmsParser.RESOLVING = 50;
StarRealmsParser.TURN = 51;
StarRealmsParser.PILE = 52;
StarRealmsParser.PLAY = 53;
StarRealmsParser.FORM = 54;
StarRealmsParser.DECK = 55;
StarRealmsParser.DREW = 56;
StarRealmsParser.ENDS = 57;
StarRealmsParser.NEW = 58;
StarRealmsParser.ALL = 59;
StarRealmsParser.NOW = 60;
StarRealmsParser.IS = 61;
StarRealmsParser.IT = 62;
StarRealmsParser.WHITESPACE = 63;
StarRealmsParser.COLOR_START_TAG = 64;
StarRealmsParser.COLOR_END_TAG = 65;
StarRealmsParser.END_GAME_TAG = 66;
StarRealmsParser.DOT = 67;
StarRealmsParser.APOSTROPHE = 68;
StarRealmsParser.PLAYED = 69;
StarRealmsParser.INT = 70;
StarRealmsParser.WORD = 71;
StarRealmsParser.SEPARATOR = 72;
StarRealmsParser.INCREMENT = 73;
StarRealmsParser.DECREASE = 74;
StarRealmsParser.NEWLINE = 75;

StarRealmsParser.RULE_battle = 0;
StarRealmsParser.RULE_turn = 1;
StarRealmsParser.RULE_action = 2;
StarRealmsParser.RULE_winStatus = 3;
StarRealmsParser.RULE_baseInstantEffect = 4;
StarRealmsParser.RULE_purchase = 5;
StarRealmsParser.RULE_purchaseSummary = 6;
StarRealmsParser.RULE_purchaseDetail = 7;
StarRealmsParser.RULE_play = 8;
StarRealmsParser.RULE_playSummary = 9;
StarRealmsParser.RULE_playSingle = 10;
StarRealmsParser.RULE_playDetail = 11;
StarRealmsParser.RULE_newAbility = 12;
StarRealmsParser.RULE_scrapCardEffect = 13;
StarRealmsParser.RULE_scrapCardEffectSummary = 14;
StarRealmsParser.RULE_scrapCardEffectDetail = 15;
StarRealmsParser.RULE_simpleScrap = 16;
StarRealmsParser.RULE_attackPlayer = 17;
StarRealmsParser.RULE_attackPlayerSummary = 18;
StarRealmsParser.RULE_newAuthority = 19;
StarRealmsParser.RULE_attackBase = 20;
StarRealmsParser.RULE_attackBaseSummary = 21;
StarRealmsParser.RULE_scrapCard = 22;
StarRealmsParser.RULE_scrappingSummary = 23;
StarRealmsParser.RULE_scrappingDetail = 24;
StarRealmsParser.RULE_scrapAction = 25;
StarRealmsParser.RULE_scrapEffect = 26;
StarRealmsParser.RULE_discard = 27;
StarRealmsParser.RULE_resolveDiscard = 28;
StarRealmsParser.RULE_discardAction = 29;
StarRealmsParser.RULE_discardDetails = 30;
StarRealmsParser.RULE_choseEffect = 31;
StarRealmsParser.RULE_choseDiscardAndDraw = 32;
StarRealmsParser.RULE_discardAndDrawSummary = 33;
StarRealmsParser.RULE_selectDiscard = 34;
StarRealmsParser.RULE_discarding = 35;
StarRealmsParser.RULE_choseIncreasePool = 36;
StarRealmsParser.RULE_activatingEffect = 37;
StarRealmsParser.RULE_activatingSummary = 38;
StarRealmsParser.RULE_activatingDetail = 39;
StarRealmsParser.RULE_scrapAndDraw = 40;
StarRealmsParser.RULE_scrap = 41;
StarRealmsParser.RULE_drawAndScrapFromHand = 42;
StarRealmsParser.RULE_resolveHandScrap = 43;
StarRealmsParser.RULE_freeAcquireToTop = 44;
StarRealmsParser.RULE_stealthNeedle = 45;
StarRealmsParser.RULE_destroyAndScrap = 46;
StarRealmsParser.RULE_purchaseToTop = 47;
StarRealmsParser.RULE_scrapSummary = 48;
StarRealmsParser.RULE_scrapDetail = 49;
StarRealmsParser.RULE_resolveHandScrapSummary = 50;
StarRealmsParser.RULE_endPhase = 51;
StarRealmsParser.RULE_endTurn = 52;
StarRealmsParser.RULE_drawPhase = 53;
StarRealmsParser.RULE_refreshIndicators = 54;
StarRealmsParser.RULE_newTurn = 55;
StarRealmsParser.RULE_drawCardsWithShuffle = 56;
StarRealmsParser.RULE_drawCards = 57;
StarRealmsParser.RULE_newBalanceDetail = 58;
StarRealmsParser.RULE_effect = 59;
StarRealmsParser.RULE_balance = 60;
StarRealmsParser.RULE_destroyBase = 61;
StarRealmsParser.RULE_shuffleCards = 62;
StarRealmsParser.RULE_name = 63;
StarRealmsParser.RULE_card = 64;

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

	winStatus() {
	    return this.getTypedRuleContext(WinStatusContext,0);
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

	baseInstantEffect() {
	    return this.getTypedRuleContext(BaseInstantEffectContext,0);
	};

	purchase() {
	    return this.getTypedRuleContext(PurchaseContext,0);
	};

	play() {
	    return this.getTypedRuleContext(PlayContext,0);
	};

	attackPlayer() {
	    return this.getTypedRuleContext(AttackPlayerContext,0);
	};

	attackBase() {
	    return this.getTypedRuleContext(AttackBaseContext,0);
	};

	scrapCard() {
	    return this.getTypedRuleContext(ScrapCardContext,0);
	};

	discard() {
	    return this.getTypedRuleContext(DiscardContext,0);
	};

	choseEffect() {
	    return this.getTypedRuleContext(ChoseEffectContext,0);
	};

	activatingEffect() {
	    return this.getTypedRuleContext(ActivatingEffectContext,0);
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



class BaseInstantEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_baseInstantEffect;
    }

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterBaseInstantEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitBaseInstantEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitBaseInstantEffect(this);
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

	purchaseSummary() {
	    return this.getTypedRuleContext(PurchaseSummaryContext,0);
	};

	purchaseDetail() {
	    return this.getTypedRuleContext(PurchaseDetailContext,0);
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



class PurchaseSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_purchaseSummary;
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

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPurchaseSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPurchaseSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPurchaseSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PurchaseDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_purchaseDetail;
    }

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	ACQUIRED() {
	    return this.getToken(StarRealmsParser.ACQUIRED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPurchaseDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPurchaseDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPurchaseDetail(this);
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

	playSummary() {
	    return this.getTypedRuleContext(PlaySummaryContext,0);
	};

	playDetail = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PlayDetailContext);
	    } else {
	        return this.getTypedRuleContext(PlayDetailContext,i);
	    }
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



class PlaySummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_playSummary;
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
	        listener.enterPlaySummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPlaySummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPlaySummary(this);
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



class PlayDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_playDetail;
    }

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	newAbility() {
	    return this.getTypedRuleContext(NewAbilityContext,0);
	};

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	scrapCardEffect() {
	    return this.getTypedRuleContext(ScrapCardEffectContext,0);
	};

	simpleScrap() {
	    return this.getTypedRuleContext(SimpleScrapContext,0);
	};

	destroyBase() {
	    return this.getTypedRuleContext(DestroyBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPlayDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPlayDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPlayDetail(this);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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



class ScrapCardEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapCardEffect;
    }

	scrapCardEffectSummary() {
	    return this.getTypedRuleContext(ScrapCardEffectSummaryContext,0);
	};

	scrapCardEffectDetail() {
	    return this.getTypedRuleContext(ScrapCardEffectDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapCardEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapCardEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapCardEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapCardEffectSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapCardEffectSummary;
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
	        listener.enterScrapCardEffectSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapCardEffectSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapCardEffectSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapCardEffectDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapCardEffectDetail;
    }

	SCRAPPED() {
	    return this.getToken(StarRealmsParser.SCRAPPED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapCardEffectDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapCardEffectDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapCardEffectDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleScrapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_simpleScrap;
    }

	SCRAPPED() {
	    return this.getToken(StarRealmsParser.SCRAPPED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterSimpleScrap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitSimpleScrap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitSimpleScrap(this);
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

	attackPlayerSummary() {
	    return this.getTypedRuleContext(AttackPlayerSummaryContext,0);
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



class AttackPlayerSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_attackPlayerSummary;
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
	        listener.enterAttackPlayerSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitAttackPlayerSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitAttackPlayerSummary(this);
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

	attackBaseSummary() {
	    return this.getTypedRuleContext(AttackBaseSummaryContext,0);
	};

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	destroyBase() {
	    return this.getTypedRuleContext(DestroyBaseContext,0);
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



class AttackBaseSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_attackBaseSummary;
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
	        listener.enterAttackBaseSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitAttackBaseSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitAttackBaseSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapCardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapCard;
    }

	scrappingSummary() {
	    return this.getTypedRuleContext(ScrappingSummaryContext,0);
	};

	scrappingDetail() {
	    return this.getTypedRuleContext(ScrappingDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapCard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapCard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapCard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrappingSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrappingSummary;
    }

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
	        listener.enterScrappingSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrappingSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrappingSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrappingDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrappingDetail;
    }

	scrapAction() {
	    return this.getTypedRuleContext(ScrapActionContext,0);
	};

	scrapEffect = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScrapEffectContext);
	    } else {
	        return this.getTypedRuleContext(ScrapEffectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrappingDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrappingDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrappingDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapAction;
    }

	SCRAPPED() {
	    return this.getToken(StarRealmsParser.SCRAPPED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapEffect;
    }

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	destroyBase() {
	    return this.getTypedRuleContext(DestroyBaseContext,0);
	};

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapEffect(this);
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



class ChoseEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_choseEffect;
    }

	choseDiscardAndDraw() {
	    return this.getTypedRuleContext(ChoseDiscardAndDrawContext,0);
	};

	choseIncreasePool() {
	    return this.getTypedRuleContext(ChoseIncreasePoolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterChoseEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitChoseEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitChoseEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseDiscardAndDrawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_choseDiscardAndDraw;
    }

	discardAndDrawSummary() {
	    return this.getTypedRuleContext(DiscardAndDrawSummaryContext,0);
	};

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	selectDiscard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectDiscardContext);
	    } else {
	        return this.getTypedRuleContext(SelectDiscardContext,i);
	    }
	};

	discarding = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DiscardingContext);
	    } else {
	        return this.getTypedRuleContext(DiscardingContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterChoseDiscardAndDraw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitChoseDiscardAndDraw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitChoseDiscardAndDraw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardAndDrawSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discardAndDrawSummary;
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
	        listener.enterDiscardAndDrawSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscardAndDrawSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscardAndDrawSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SelectDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_selectDiscard;
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
	        listener.enterSelectDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitSelectDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitSelectDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiscardingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_discarding;
    }

	DISCARDED() {
	    return this.getToken(StarRealmsParser.DISCARDED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDiscarding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDiscarding(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDiscarding(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseIncreasePoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_choseIncreasePool;
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

	newBalanceDetail() {
	    return this.getTypedRuleContext(NewBalanceDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterChoseIncreasePool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitChoseIncreasePool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitChoseIncreasePool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivatingEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activatingEffect;
    }

	activatingSummary() {
	    return this.getTypedRuleContext(ActivatingSummaryContext,0);
	};

	activatingDetail() {
	    return this.getTypedRuleContext(ActivatingDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActivatingEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivatingEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivatingEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivatingSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activatingSummary;
    }

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActivatingSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivatingSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivatingSummary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivatingDetailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activatingDetail;
    }

	drawAndScrapFromHand() {
	    return this.getTypedRuleContext(DrawAndScrapFromHandContext,0);
	};

	scrapAndDraw() {
	    return this.getTypedRuleContext(ScrapAndDrawContext,0);
	};

	scrap() {
	    return this.getTypedRuleContext(ScrapContext,0);
	};

	freeAcquireToTop() {
	    return this.getTypedRuleContext(FreeAcquireToTopContext,0);
	};

	destroyAndScrap() {
	    return this.getTypedRuleContext(DestroyAndScrapContext,0);
	};

	stealthNeedle() {
	    return this.getTypedRuleContext(StealthNeedleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActivatingDetail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivatingDetail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivatingDetail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScrapAndDrawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_scrapAndDraw;
    }

	scrap() {
	    return this.getTypedRuleContext(ScrapContext,0);
	};

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterScrapAndDraw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapAndDraw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapAndDraw(this);
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

	scrapSummary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScrapSummaryContext);
	    } else {
	        return this.getTypedRuleContext(ScrapSummaryContext,i);
	    }
	};

	scrapDetail = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScrapDetailContext);
	    } else {
	        return this.getTypedRuleContext(ScrapDetailContext,i);
	    }
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



class DrawAndScrapFromHandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_drawAndScrapFromHand;
    }

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	resolveHandScrap() {
	    return this.getTypedRuleContext(ResolveHandScrapContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDrawAndScrapFromHand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDrawAndScrapFromHand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDrawAndScrapFromHand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveHandScrapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_resolveHandScrap;
    }

	resolveHandScrapSummary() {
	    return this.getTypedRuleContext(ResolveHandScrapSummaryContext,0);
	};

	scrapDetail() {
	    return this.getTypedRuleContext(ScrapDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterResolveHandScrap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitResolveHandScrap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitResolveHandScrap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FreeAcquireToTopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_freeAcquireToTop;
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

	purchaseToTop() {
	    return this.getTypedRuleContext(PurchaseToTopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterFreeAcquireToTop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitFreeAcquireToTop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitFreeAcquireToTop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StealthNeedleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_stealthNeedle;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
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
	        listener.enterStealthNeedle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitStealthNeedle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitStealthNeedle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DestroyAndScrapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_destroyAndScrap;
    }

	destroyBase() {
	    return this.getTypedRuleContext(DestroyBaseContext,0);
	};

	scrapDetail() {
	    return this.getTypedRuleContext(ScrapDetailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDestroyAndScrap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDestroyAndScrap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDestroyAndScrap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PurchaseToTopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_purchaseToTop;
    }

	ACQUIRED() {
	    return this.getToken(StarRealmsParser.ACQUIRED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	WORD() {
	    return this.getToken(StarRealmsParser.WORD, 0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterPurchaseToTop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitPurchaseToTop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitPurchaseToTop(this);
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
        this.ruleIndex = StarRealmsParser.RULE_scrapSummary;
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
	        listener.enterScrapSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitScrapSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitScrapSummary(this);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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



class ResolveHandScrapSummaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_resolveHandScrapSummary;
    }

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterResolveHandScrapSummary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitResolveHandScrapSummary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitResolveHandScrapSummary(this);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	drawCardsWithShuffle() {
	    return this.getTypedRuleContext(DrawCardsWithShuffleContext,0);
	};

	refreshIndicators() {
	    return this.getTypedRuleContext(RefreshIndicatorsContext,0);
	};

	newTurn() {
	    return this.getTypedRuleContext(NewTurnContext,0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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



class DrawCardsWithShuffleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_drawCardsWithShuffle;
    }

	shuffleCards() {
	    return this.getTypedRuleContext(ShuffleCardsContext,0);
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

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterDrawCardsWithShuffle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitDrawCardsWithShuffle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitDrawCardsWithShuffle(this);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
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
StarRealmsParser.WinStatusContext = WinStatusContext; 
StarRealmsParser.BaseInstantEffectContext = BaseInstantEffectContext; 
StarRealmsParser.PurchaseContext = PurchaseContext; 
StarRealmsParser.PurchaseSummaryContext = PurchaseSummaryContext; 
StarRealmsParser.PurchaseDetailContext = PurchaseDetailContext; 
StarRealmsParser.PlayContext = PlayContext; 
StarRealmsParser.PlaySummaryContext = PlaySummaryContext; 
StarRealmsParser.PlaySingleContext = PlaySingleContext; 
StarRealmsParser.PlayDetailContext = PlayDetailContext; 
StarRealmsParser.NewAbilityContext = NewAbilityContext; 
StarRealmsParser.ScrapCardEffectContext = ScrapCardEffectContext; 
StarRealmsParser.ScrapCardEffectSummaryContext = ScrapCardEffectSummaryContext; 
StarRealmsParser.ScrapCardEffectDetailContext = ScrapCardEffectDetailContext; 
StarRealmsParser.SimpleScrapContext = SimpleScrapContext; 
StarRealmsParser.AttackPlayerContext = AttackPlayerContext; 
StarRealmsParser.AttackPlayerSummaryContext = AttackPlayerSummaryContext; 
StarRealmsParser.NewAuthorityContext = NewAuthorityContext; 
StarRealmsParser.AttackBaseContext = AttackBaseContext; 
StarRealmsParser.AttackBaseSummaryContext = AttackBaseSummaryContext; 
StarRealmsParser.ScrapCardContext = ScrapCardContext; 
StarRealmsParser.ScrappingSummaryContext = ScrappingSummaryContext; 
StarRealmsParser.ScrappingDetailContext = ScrappingDetailContext; 
StarRealmsParser.ScrapActionContext = ScrapActionContext; 
StarRealmsParser.ScrapEffectContext = ScrapEffectContext; 
StarRealmsParser.DiscardContext = DiscardContext; 
StarRealmsParser.ResolveDiscardContext = ResolveDiscardContext; 
StarRealmsParser.DiscardActionContext = DiscardActionContext; 
StarRealmsParser.DiscardDetailsContext = DiscardDetailsContext; 
StarRealmsParser.ChoseEffectContext = ChoseEffectContext; 
StarRealmsParser.ChoseDiscardAndDrawContext = ChoseDiscardAndDrawContext; 
StarRealmsParser.DiscardAndDrawSummaryContext = DiscardAndDrawSummaryContext; 
StarRealmsParser.SelectDiscardContext = SelectDiscardContext; 
StarRealmsParser.DiscardingContext = DiscardingContext; 
StarRealmsParser.ChoseIncreasePoolContext = ChoseIncreasePoolContext; 
StarRealmsParser.ActivatingEffectContext = ActivatingEffectContext; 
StarRealmsParser.ActivatingSummaryContext = ActivatingSummaryContext; 
StarRealmsParser.ActivatingDetailContext = ActivatingDetailContext; 
StarRealmsParser.ScrapAndDrawContext = ScrapAndDrawContext; 
StarRealmsParser.ScrapContext = ScrapContext; 
StarRealmsParser.DrawAndScrapFromHandContext = DrawAndScrapFromHandContext; 
StarRealmsParser.ResolveHandScrapContext = ResolveHandScrapContext; 
StarRealmsParser.FreeAcquireToTopContext = FreeAcquireToTopContext; 
StarRealmsParser.StealthNeedleContext = StealthNeedleContext; 
StarRealmsParser.DestroyAndScrapContext = DestroyAndScrapContext; 
StarRealmsParser.PurchaseToTopContext = PurchaseToTopContext; 
StarRealmsParser.ScrapSummaryContext = ScrapSummaryContext; 
StarRealmsParser.ScrapDetailContext = ScrapDetailContext; 
StarRealmsParser.ResolveHandScrapSummaryContext = ResolveHandScrapSummaryContext; 
StarRealmsParser.EndPhaseContext = EndPhaseContext; 
StarRealmsParser.EndTurnContext = EndTurnContext; 
StarRealmsParser.DrawPhaseContext = DrawPhaseContext; 
StarRealmsParser.RefreshIndicatorsContext = RefreshIndicatorsContext; 
StarRealmsParser.NewTurnContext = NewTurnContext; 
StarRealmsParser.DrawCardsWithShuffleContext = DrawCardsWithShuffleContext; 
StarRealmsParser.DrawCardsContext = DrawCardsContext; 
StarRealmsParser.NewBalanceDetailContext = NewBalanceDetailContext; 
StarRealmsParser.EffectContext = EffectContext; 
StarRealmsParser.BalanceContext = BalanceContext; 
StarRealmsParser.DestroyBaseContext = DestroyBaseContext; 
StarRealmsParser.ShuffleCardsContext = ShuffleCardsContext; 
StarRealmsParser.NameContext = NameContext; 
StarRealmsParser.CardContext = CardContext; 
