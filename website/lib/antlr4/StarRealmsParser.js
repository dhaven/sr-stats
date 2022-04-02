// Generated from StarRealms.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import StarRealmsListener from './StarRealmsListener.js';
import StarRealmsVisitor from './StarRealmsVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003G\u018c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002",
    "\u0006\u0002T\n\u0002\r\u0002\u000e\u0002U\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004e",
    "\n\u0004\f\u0004\u000e\u0004h\u000b\u0004\u0003\u0004\u0006\u0004k\n",
    "\u0004\r\u0004\u000e\u0004l\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0007\u0005s\n\u0005\f\u0005\u000e\u0005v\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u0084\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0093\n\t",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u009d\n\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a2\n\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a9\n\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00b7\n\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0006\u000f\u00c6\n\u000f\r\u000f",
    "\u000e\u000f\u00c7\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u00ce\n\u000f\f\u000f\u000e\u000f\u00d1\u000b\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00d7\n\u000f\u0003",
    "\u000f\u0007\u000f\u00da\n\u000f\f\u000f\u000e\u000f\u00dd\u000b\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0006\u0013\u00f5\n",
    "\u0013\r\u0013\u000e\u0013\u00f6\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0006\u0016\u0111\n\u0016\r\u0016",
    "\u000e\u0016\u0112\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u0119\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0005\u0019\u0127\n\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u013a\n\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u0143\n\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u014b\n\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003(\u0006(\u0183\n(\r(\u000e(\u0184\u0003)\u0006)\u0188",
    "\n)\r)\u000e)\u0189\u0003)\u0002\u0002*\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNP\u0002\u0005\u0003\u0002EF\u0004\u0002--CC\u0004\u0002BBFF\u0002",
    "\u0186\u0002S\u0003\u0002\u0002\u0002\u0004Z\u0003\u0002\u0002\u0002",
    "\u0006f\u0003\u0002\u0002\u0002\bp\u0003\u0002\u0002\u0002\nw\u0003",
    "\u0002\u0002\u0002\f\u0083\u0003\u0002\u0002\u0002\u000e\u0085\u0003",
    "\u0002\u0002\u0002\u0010\u0092\u0003\u0002\u0002\u0002\u0012\u009c\u0003",
    "\u0002\u0002\u0002\u0014\u00af\u0003\u0002\u0002\u0002\u0016\u00b6\u0003",
    "\u0002\u0002\u0002\u0018\u00b8\u0003\u0002\u0002\u0002\u001a\u00bd\u0003",
    "\u0002\u0002\u0002\u001c\u00c3\u0003\u0002\u0002\u0002\u001e\u00de\u0003",
    "\u0002\u0002\u0002 \u00e8\u0003\u0002\u0002\u0002\"\u00ee\u0003\u0002",
    "\u0002\u0002$\u00f2\u0003\u0002\u0002\u0002&\u00fa\u0003\u0002\u0002",
    "\u0002(\u0100\u0003\u0002\u0002\u0002*\u0106\u0003\u0002\u0002\u0002",
    ",\u0118\u0003\u0002\u0002\u0002.\u011a\u0003\u0002\u0002\u00020\u011e",
    "\u0003\u0002\u0002\u00022\u012a\u0003\u0002\u0002\u00024\u0131\u0003",
    "\u0002\u0002\u00026\u0142\u0003\u0002\u0002\u00028\u0144\u0003\u0002",
    "\u0002\u0002:\u0147\u0003\u0002\u0002\u0002<\u014f\u0003\u0002\u0002",
    "\u0002>\u0155\u0003\u0002\u0002\u0002@\u0158\u0003\u0002\u0002\u0002",
    "B\u015b\u0003\u0002\u0002\u0002D\u0161\u0003\u0002\u0002\u0002F\u0168",
    "\u0003\u0002\u0002\u0002H\u016d\u0003\u0002\u0002\u0002J\u0175\u0003",
    "\u0002\u0002\u0002L\u017d\u0003\u0002\u0002\u0002N\u0182\u0003\u0002",
    "\u0002\u0002P\u0187\u0003\u0002\u0002\u0002RT\u0005\u0006\u0004\u0002",
    "SR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0005\u0004",
    "\u0003\u0002XY\u0007\u0002\u0002\u0003Y\u0003\u0003\u0002\u0002\u0002",
    "Z[\u0005N(\u0002[\\\u0007\u0003\u0002\u0002\\]\u0007\u0004\u0002\u0002",
    "]^\u0007\u0005\u0002\u0002^_\u0007\u0006\u0002\u0002_`\u0007G\u0002",
    "\u0002`\u0005\u0003\u0002\u0002\u0002ab\u0005:\u001e\u0002bc\u0007G",
    "\u0002\u0002ce\u0003\u0002\u0002\u0002da\u0003\u0002\u0002\u0002eh\u0003",
    "\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002ik\u0005\b\u0005",
    "\u0002ji\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lj\u0003\u0002",
    "\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002no\u0005",
    "\n\u0006\u0002o\u0007\u0003\u0002\u0002\u0002pt\u0005\f\u0007\u0002",
    "qs\u0005\u0010\t\u0002rq\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\t\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0005F$\u0002xy\u0007",
    "G\u0002\u0002yz\u0005\u0012\n\u0002z\u000b\u0003\u0002\u0002\u0002{",
    "\u0084\u0005,\u0017\u0002|\u0084\u00050\u0019\u0002}\u0084\u00052\u001a",
    "\u0002~\u0084\u00054\u001b\u0002\u007f\u0084\u00056\u001c\u0002\u0080",
    "\u0084\u0005$\u0013\u0002\u0081\u0084\u0005\u0016\f\u0002\u0082\u0084",
    "\u0005\u000e\b\u0002\u0083{\u0003\u0002\u0002\u0002\u0083|\u0003\u0002",
    "\u0002\u0002\u0083}\u0003\u0002\u0002\u0002\u0083~\u0003\u0002\u0002",
    "\u0002\u0083\u007f\u0003\u0002\u0002\u0002\u0083\u0080\u0003\u0002\u0002",
    "\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0082\u0003\u0002\u0002",
    "\u0002\u0084\r\u0003\u0002\u0002\u0002\u0085\u0086\u0005N(\u0002\u0086",
    "\u0087\u0007\u0007\u0002\u0002\u0087\u0088\u0007\b\u0002\u0002\u0088",
    "\u0089\u0005N(\u0002\u0089\u008a\u0007G\u0002\u0002\u008a\u000f\u0003",
    "\u0002\u0002\u0002\u008b\u0093\u00058\u001d\u0002\u008c\u0093\u0005",
    ":\u001e\u0002\u008d\u0093\u0005<\u001f\u0002\u008e\u0093\u0005> \u0002",
    "\u008f\u0093\u0005\u0014\u000b\u0002\u0090\u0093\u0005\u0018\r\u0002",
    "\u0091\u0093\u0005J&\u0002\u0092\u008b\u0003\u0002\u0002\u0002\u0092",
    "\u008c\u0003\u0002\u0002\u0002\u0092\u008d\u0003\u0002\u0002\u0002\u0092",
    "\u008e\u0003\u0002\u0002\u0002\u0092\u008f\u0003\u0002\u0002\u0002\u0092",
    "\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093",
    "\u0094\u0003\u0002\u0002\u0002\u0094\u0095\u0007G\u0002\u0002\u0095",
    "\u0011\u0003\u0002\u0002\u0002\u0096\u0097\u0007\t\u0002\u0002\u0097",
    "\u0098\u0005P)\u0002\u0098\u0099\u0007\n\u0002\u0002\u0099\u009a\u0007",
    "\u000b\u0002\u0002\u009a\u009b\u0007G\u0002\u0002\u009b\u009d\u0003",
    "\u0002\u0002\u0002\u009c\u0096\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u00a1\u0003\u0002\u0002\u0002\u009e\u009f\u0005",
    "\u0014\u000b\u0002\u009f\u00a0\u0007G\u0002\u0002\u00a0\u00a2\u0003",
    "\u0002\u0002\u0002\u00a1\u009e\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003",
    "\u0002\u0002\u0002\u00a2\u00a8\u0003\u0002\u0002\u0002\u00a3\u00a4\u0005",
    "J&\u0002\u00a4\u00a5\u0007G\u0002\u0002\u00a5\u00a6\u0005\u0014\u000b",
    "\u0002\u00a6\u00a7\u0007G\u0002\u0002\u00a7\u00a9\u0003\u0002\u0002",
    "\u0002\u00a8\u00a3\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0005L\'\u0002",
    "\u00ab\u00ac\u0007G\u0002\u0002\u00ac\u00ad\u0005H%\u0002\u00ad\u00ae",
    "\u0007G\u0002\u0002\u00ae\u0013\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u00074\u0002\u0002\u00b0\u00b1\u0007B\u0002\u0002\u00b1\u00b2\u0007",
    "\f\u0002\u0002\u00b2\u0015\u0003\u0002\u0002\u0002\u00b3\u00b7\u0005",
    "\u001a\u000e\u0002\u00b4\u00b7\u0005\u001c\u000f\u0002\u00b5\u00b7\u0005",
    "\"\u0012\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u0017\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9\u00ba\u0005",
    "P)\u0002\u00ba\u00bb\u0007\n\u0002\u0002\u00bb\u00bc\u0005P)\u0002\u00bc",
    "\u0019\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\r\u0002\u0002\u00be",
    "\u00bf\u0007\u000e\u0002\u0002\u00bf\u00c0\u0007B\u0002\u0002\u00c0",
    "\u00c1\u0007C\u0002\u0002\u00c1\u00c2\u0007G\u0002\u0002\u00c2\u001b",
    "\u0003\u0002\u0002\u0002\u00c3\u00c5\u0005\u001e\u0010\u0002\u00c4\u00c6",
    "\u0005 \u0011\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8",
    "\u0003\u0002\u0002\u0002\u00c8\u00cf\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0007,\u0002\u0002\u00ca\u00cb\u0005P)\u0002\u00cb\u00cc\u0007G\u0002",
    "\u0002\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00c9\u0003\u0002\u0002",
    "\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00db\u0003\u0002\u0002",
    "\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d7\u0005J&\u0002",
    "\u00d3\u00d4\u00074\u0002\u0002\u00d4\u00d5\u0007B\u0002\u0002\u00d5",
    "\u00d7\u0007\f\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d6",
    "\u00d3\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8",
    "\u00da\u0007G\u0002\u0002\u00d9\u00d6\u0003\u0002\u0002\u0002\u00da",
    "\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0003\u0002\u0002\u0002\u00dc\u001d\u0003\u0002\u0002\u0002\u00dd",
    "\u00db\u0003\u0002\u0002\u0002\u00de\u00df\u0007\r\u0002\u0002\u00df",
    "\u00e0\u0007-\u0002\u0002\u00e0\u00e1\u0007\u000f\u0002\u0002\u00e1",
    "\u00e2\u0007\u0010\u0002\u0002\u00e2\u00e3\u0007\u0011\u0002\u0002\u00e3",
    "\u00e4\u0007\n\u0002\u0002\u00e4\u00e5\u0007B\u0002\u0002\u00e5\u00e6",
    "\u0007\u0012\u0002\u0002\u00e6\u00e7\u0007G\u0002\u0002\u00e7\u001f",
    "\u0003\u0002\u0002\u0002\u00e8\u00e9\u0005N(\u0002\u00e9\u00ea\u0007",
    "9\u0002\u0002\u00ea\u00eb\u0007\u0007\u0002\u0002\u00eb\u00ec\u0005",
    "P)\u0002\u00ec\u00ed\u0007G\u0002\u0002\u00ed!\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0007\u0013\u0002\u0002\u00ef\u00f0\u0005P)\u0002\u00f0",
    "\u00f1\u0007G\u0002\u0002\u00f1#\u0003\u0002\u0002\u0002\u00f2\u00f4",
    "\u0005&\u0014\u0002\u00f3\u00f5\u0005(\u0015\u0002\u00f4\u00f3\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003",
    "\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0005*\u0016\u0002\u00f9%\u0003\u0002",
    "\u0002\u0002\u00fa\u00fb\u0007\u0014\u0002\u0002\u00fb\u00fc\u0007-",
    "\u0002\u0002\u00fc\u00fd\u0007B\u0002\u0002\u00fd\u00fe\u0007\f\u0002",
    "\u0002\u00fe\u00ff\u0007G\u0002\u0002\u00ff\'\u0003\u0002\u0002\u0002",
    "\u0100\u0101\u0005N(\u0002\u0101\u0102\u00079\u0002\u0002\u0102\u0103",
    "\u0007C\u0002\u0002\u0103\u0104\u0005P)\u0002\u0104\u0105\u0007G\u0002",
    "\u0002\u0105)\u0003\u0002\u0002\u0002\u0106\u0107\u0007\u0015\u0002",
    "\u0002\u0107\u0108\u0007\u0016\u0002\u0002\u0108\u0109\u0007\f\u0002",
    "\u0002\u0109\u010a\u0007\n\u0002\u0002\u010a\u010b\u0007-\u0002\u0002",
    "\u010b\u0110\u0007G\u0002\u0002\u010c\u010d\u0007,\u0002\u0002\u010d",
    "\u010e\u0005P)\u0002\u010e\u010f\u0007G\u0002\u0002\u010f\u0111\u0003",
    "\u0002\u0002\u0002\u0110\u010c\u0003\u0002\u0002\u0002\u0111\u0112\u0003",
    "\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0113\u0003",
    "\u0002\u0002\u0002\u0113+\u0003\u0002\u0002\u0002\u0114\u0115\u0007",
    "1\u0002\u0002\u0115\u0116\u00077\u0002\u0002\u0116\u0119\u0007G\u0002",
    "\u0002\u0117\u0119\u0005.\u0018\u0002\u0118\u0114\u0003\u0002\u0002",
    "\u0002\u0118\u0117\u0003\u0002\u0002\u0002\u0119-\u0003\u0002\u0002",
    "\u0002\u011a\u011b\u0007A\u0002\u0002\u011b\u011c\u0005P)\u0002\u011c",
    "\u011d\u0007G\u0002\u0002\u011d/\u0003\u0002\u0002\u0002\u011e\u011f",
    "\u0007\'\u0002\u0002\u011f\u0126\u0005P)\u0002\u0120\u0121\u0007\n\u0002",
    "\u0002\u0121\u0122\u0007\u0005\u0002\u0002\u0122\u0123\u0007\u0017\u0002",
    "\u0002\u0123\u0124\u0007C\u0002\u0002\u0124\u0125\u0007\u0005\u0002",
    "\u0002\u0125\u0127\u0007\u0018\u0002\u0002\u0126\u0120\u0003\u0002\u0002",
    "\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002",
    "\u0002\u0128\u0129\u0007G\u0002\u0002\u01291\u0003\u0002\u0002\u0002",
    "\u012a\u012b\u0007(\u0002\u0002\u012b\u012c\u0005N(\u0002\u012c\u012d",
    "\u0007C\u0002\u0002\u012d\u012e\u0007B\u0002\u0002\u012e\u012f\u0005",
    "D#\u0002\u012f\u0130\u0007G\u0002\u0002\u01303\u0003\u0002\u0002\u0002",
    "\u0131\u0132\u0007(\u0002\u0002\u0132\u0133\u0005P)\u0002\u0133\u0134",
    "\u0007G\u0002\u0002\u01345\u0003\u0002\u0002\u0002\u0135\u0136\u0005",
    "N(\u0002\u0136\u0137\u00079\u0002\u0002\u0137\u0139\u0007)\u0002\u0002",
    "\u0138\u013a\u0007\u0019\u0002\u0002\u0139\u0138\u0003\u0002\u0002\u0002",
    "\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002",
    "\u013b\u013c\u0005P)\u0002\u013c\u013d\u0007G\u0002\u0002\u013d\u0143",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0007)\u0002\u0002\u013f\u0140",
    "\u0005P)\u0002\u0140\u0141\u0007G\u0002\u0002\u0141\u0143\u0003\u0002",
    "\u0002\u0002\u0142\u0135\u0003\u0002\u0002\u0002\u0142\u013e\u0003\u0002",
    "\u0002\u0002\u01437\u0003\u0002\u0002\u0002\u0144\u0145\u0007*\u0002",
    "\u0002\u0145\u0146\u0005P)\u0002\u01469\u0003\u0002\u0002\u0002\u0147",
    "\u0148\u0005N(\u0002\u0148\u014a\u0007D\u0002\u0002\u0149\u014b\u0005",
    "P)\u0002\u014a\u0149\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002",
    "\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014d\u0005@",
    "!\u0002\u014d\u014e\u0005B\"\u0002\u014e;\u0003\u0002\u0002\u0002\u014f",
    "\u0150\u0005N(\u0002\u0150\u0151\u0007D\u0002\u0002\u0151\u0152\u0005",
    "P)\u0002\u0152\u0153\u0007\u001a\u0002\u0002\u0153\u0154\u0007\u001b",
    "\u0002\u0002\u0154=\u0003\u0002\u0002\u0002\u0155\u0156\u0007\u001c",
    "\u0002\u0002\u0156\u0157\u0005P)\u0002\u0157?\u0003\u0002\u0002\u0002",
    "\u0158\u0159\t\u0002\u0002\u0002\u0159\u015a\t\u0003\u0002\u0002\u015a",
    "A\u0003\u0002\u0002\u0002\u015b\u015c\u0007\u001d\u0002\u0002\u015c",
    "\u015d\u0007C\u0002\u0002\u015d\u015e\u0007\u0019\u0002\u0002\u015e",
    "\u015f\t\u0004\u0002\u0002\u015f\u0160\u0007\u001e\u0002\u0002\u0160",
    "C\u0003\u0002\u0002\u0002\u0161\u0162\u0007\u001d\u0002\u0002\u0162",
    "\u0163\u00076\u0002\u0002\u0163\u0164\u0007C\u0002\u0002\u0164\u0165",
    "\u0007\u0019\u0002\u0002\u0165\u0166\t\u0004\u0002\u0002\u0166\u0167",
    "\u0007\u001e\u0002\u0002\u0167E\u0003\u0002\u0002\u0002\u0168\u0169",
    "\u0005N(\u0002\u0169\u016a\u00075\u0002\u0002\u016a\u016b\u0007/\u0002",
    "\u0002\u016b\u016c\u0007B\u0002\u0002\u016cG\u0003\u0002\u0002\u0002",
    "\u016d\u016e\u0007:\u0002\u0002\u016e\u016f\u00079\u0002\u0002\u016f",
    "\u0170\u00078\u0002\u0002\u0170\u0171\u0005N(\u0002\u0171\u0172\u0007",
    "\u001f\u0002\u0002\u0172\u0173\u0007/\u0002\u0002\u0173\u0174\u0007",
    "B\u0002\u0002\u0174I\u0003\u0002\u0002\u0002\u0175\u0176\u0007 \u0002",
    "\u0002\u0176\u0177\u0007-\u0002\u0002\u0177\u0178\u0007!\u0002\u0002",
    "\u0178\u0179\u0007\n\u0002\u0002\u0179\u017a\u0007\"\u0002\u0002\u017a",
    "\u017b\u0007#\u0002\u0002\u017b\u017c\u0007\u0018\u0002\u0002\u017c",
    "K\u0003\u0002\u0002\u0002\u017d\u017e\u0007$\u0002\u0002\u017e\u017f",
    "\u0007%\u0002\u0002\u017f\u0180\u0007&\u0002\u0002\u0180M\u0003\u0002",
    "\u0002\u0002\u0181\u0183\u0007C\u0002\u0002\u0182\u0181\u0003\u0002",
    "\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002",
    "\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002\u0185O\u0003\u0002",
    "\u0002\u0002\u0186\u0188\u0007C\u0002\u0002\u0187\u0186\u0003\u0002",
    "\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u0187\u0003\u0002",
    "\u0002\u0002\u0189\u018a\u0003\u0002\u0002\u0002\u018aQ\u0003\u0002",
    "\u0002\u0002\u0019Uflt\u0083\u0092\u009c\u00a1\u00a8\u00b6\u00c7\u00cf",
    "\u00d6\u00db\u00f6\u0112\u0118\u0126\u0139\u0142\u014a\u0184\u0189"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StarRealmsParser extends antlr4.Parser {

    static grammarFileName = "StarRealms.g4";
    static literalNames = [ null, "'has'", "'won'", "'the'", "'game'", "'selecting'", 
                            "'ship'", "'Changed'", "'to'", "'Unaligned'", 
                            "'cards'", "'Chose'", "'Add'", "'and'", "'Redraw'", 
                            "'up'", "'card(s)'", "'Activating'", "'Resolving'", 
                            "'no'", "'more'", "'top'", "'deck'", "':'", 
                            "'ability'", "'available'", "'Destroyed'", "'('", 
                            "')'", "''s'", "'Shuffled'", "'pile'", "'form'", 
                            "'new'", "'Refresh'", "'ally'", "'indicators'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'</color>'", 
                            "'==='", "'.'", "'''", "'Played'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "ACQUIRED", "ATTACKED", 
                             "SCRAPPING", "SCRAPPED", "SHUFFLED", "DISCARDED", 
                             "DISCARD", "RESOLVING", "TURN", "PILE", "PLAY", 
                             "FORM", "DECK", "DREW", "ENDS", "NEW", "ALL", 
                             "NOW", "IS", "IT", "WHITESPACE", "COLOR_START_TAG", 
                             "COLOR_END_TAG", "END_GAME_TAG", "DOT", "APOSTROPHE", 
                             "PLAYED", "INT", "WORD", "SEPARATOR", "INCREMENT", 
                             "DECREASE", "NEWLINE" ];
    static ruleNames = [ "battle", "winStatus", "turn", "action", "endPhase", 
                         "summaryAction", "activateCard", "actionDetail", 
                         "drawPhase", "drawCards", "activateBase", "activateCardEffect", 
                         "increasePool", "discardAndDraw", "discardAndDrawDescription", 
                         "selectDiscardCard", "activateEffect", "discard", 
                         "resolveDiscard", "discardAction", "discardDetails", 
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 80;
	        		this.turn();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 83; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 85;
	        this.winStatus();
	        this.state = 86;
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
	        this.state = 88;
	        this.name();
	        this.state = 89;
	        this.match(StarRealmsParser.T__0);
	        this.state = 90;
	        this.match(StarRealmsParser.T__1);
	        this.state = 91;
	        this.match(StarRealmsParser.T__2);
	        this.state = 92;
	        this.match(StarRealmsParser.T__3);
	        this.state = 93;
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
	        this.state = 100;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 95;
	                this.newBalanceDetail();
	                this.state = 96;
	                this.match(StarRealmsParser.NEWLINE); 
	            }
	            this.state = 102;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 104; 
	        this._errHandler.sync(this);
	        _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 103;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 106; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 108;
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
	        this.state = 110;
	        this.summaryAction();
	        this.state = 114;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 111;
	                this.actionDetail(); 
	            }
	            this.state = 116;
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
	        this.state = 117;
	        this.endTurn();
	        this.state = 118;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 119;
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
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.play();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.purchase();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
	            this.attackPlayer();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 124;
	            this.attackBase();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 125;
	            this.scrap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 126;
	            this.discard();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 127;
	            this.activateBase();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 128;
	            this.activateCard();
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



	activateCard() {
	    let localctx = new ActivateCardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StarRealmsParser.RULE_activateCard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.name();
	        this.state = 132;
	        this.match(StarRealmsParser.T__4);
	        this.state = 133;
	        this.match(StarRealmsParser.T__5);
	        this.state = 134;
	        this.name();
	        this.state = 135;
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



	actionDetail() {
	    let localctx = new ActionDetailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StarRealmsParser.RULE_actionDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 137;
	            this.scrapDetail();
	            break;

	        case 2:
	            this.state = 138;
	            this.newBalanceDetail();
	            break;

	        case 3:
	            this.state = 139;
	            this.newAbility();
	            break;

	        case 4:
	            this.state = 140;
	            this.destroyBase();
	            break;

	        case 5:
	            this.state = 141;
	            this.drawCards();
	            break;

	        case 6:
	            this.state = 142;
	            this.activateCardEffect();
	            break;

	        case 7:
	            this.state = 143;
	            this.shuffleCards();
	            break;

	        }
	        this.state = 146;
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
	    this.enterRule(localctx, 16, StarRealmsParser.RULE_drawPhase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__6) {
	            this.state = 148;
	            this.match(StarRealmsParser.T__6);
	            this.state = 149;
	            this.card();
	            this.state = 150;
	            this.match(StarRealmsParser.T__7);
	            this.state = 151;
	            this.match(StarRealmsParser.T__8);
	            this.state = 152;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.DREW) {
	            this.state = 156;
	            this.drawCards();
	            this.state = 157;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__29) {
	            this.state = 161;
	            this.shuffleCards();
	            this.state = 162;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 163;
	            this.drawCards();
	            this.state = 164;
	            this.match(StarRealmsParser.NEWLINE);
	        }

	        this.state = 168;
	        this.refreshIndicators();
	        this.state = 169;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 170;
	        this.newTurn();
	        this.state = 171;
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
	    this.enterRule(localctx, 18, StarRealmsParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(StarRealmsParser.DREW);
	        this.state = 174;
	        this.match(StarRealmsParser.INT);
	        this.state = 175;
	        this.match(StarRealmsParser.T__9);
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
	    this.enterRule(localctx, 20, StarRealmsParser.RULE_activateBase);
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.increasePool();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.discardAndDraw();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
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



	activateCardEffect() {
	    let localctx = new ActivateCardEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StarRealmsParser.RULE_activateCardEffect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(StarRealmsParser.T__6);
	        this.state = 183;
	        this.card();
	        this.state = 184;
	        this.match(StarRealmsParser.T__7);
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



	increasePool() {
	    let localctx = new IncreasePoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StarRealmsParser.RULE_increasePool);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(StarRealmsParser.T__10);
	        this.state = 188;
	        this.match(StarRealmsParser.T__11);
	        this.state = 189;
	        this.match(StarRealmsParser.INT);
	        this.state = 190;
	        this.match(StarRealmsParser.WORD);
	        this.state = 191;
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
	    this.enterRule(localctx, 26, StarRealmsParser.RULE_discardAndDraw);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.discardAndDrawDescription();
	        this.state = 195; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 194;
	        		this.selectDiscardCard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 197; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StarRealmsParser.DISCARDED) {
	            this.state = 199;
	            this.match(StarRealmsParser.DISCARDED);
	            this.state = 200;
	            this.card();
	            this.state = 201;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 217;
	        this._errHandler.sync(this);
	        _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 212;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case StarRealmsParser.T__29:
	                    this.state = 208;
	                    this.shuffleCards();
	                    break;
	                case StarRealmsParser.DREW:
	                    this.state = 209;
	                    this.match(StarRealmsParser.DREW);
	                    this.state = 210;
	                    this.match(StarRealmsParser.INT);
	                    this.state = 211;
	                    this.match(StarRealmsParser.T__9);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 214;
	                this.match(StarRealmsParser.NEWLINE); 
	            }
	            this.state = 219;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	    this.enterRule(localctx, 28, StarRealmsParser.RULE_discardAndDrawDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(StarRealmsParser.T__10);
	        this.state = 221;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 222;
	        this.match(StarRealmsParser.T__12);
	        this.state = 223;
	        this.match(StarRealmsParser.T__13);
	        this.state = 224;
	        this.match(StarRealmsParser.T__14);
	        this.state = 225;
	        this.match(StarRealmsParser.T__7);
	        this.state = 226;
	        this.match(StarRealmsParser.INT);
	        this.state = 227;
	        this.match(StarRealmsParser.T__15);
	        this.state = 228;
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
	    this.enterRule(localctx, 30, StarRealmsParser.RULE_selectDiscardCard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.name();
	        this.state = 231;
	        this.match(StarRealmsParser.IS);
	        this.state = 232;
	        this.match(StarRealmsParser.T__4);
	        this.state = 233;
	        this.card();
	        this.state = 234;
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
	    this.enterRule(localctx, 32, StarRealmsParser.RULE_activateEffect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(StarRealmsParser.T__16);
	        this.state = 237;
	        this.card();
	        this.state = 238;
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
	    this.enterRule(localctx, 34, StarRealmsParser.RULE_discard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.resolveDiscard();
	        this.state = 242; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 241;
	            this.discardAction();
	            this.state = 244; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StarRealmsParser.WORD);
	        this.state = 246;
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
	    this.enterRule(localctx, 36, StarRealmsParser.RULE_resolveDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(StarRealmsParser.T__17);
	        this.state = 249;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 250;
	        this.match(StarRealmsParser.INT);
	        this.state = 251;
	        this.match(StarRealmsParser.T__9);
	        this.state = 252;
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
	    this.enterRule(localctx, 38, StarRealmsParser.RULE_discardAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.name();
	        this.state = 255;
	        this.match(StarRealmsParser.IS);
	        this.state = 256;
	        this.match(StarRealmsParser.WORD);
	        this.state = 257;
	        this.card();
	        this.state = 258;
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
	    this.enterRule(localctx, 40, StarRealmsParser.RULE_discardDetails);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(StarRealmsParser.T__18);
	        this.state = 261;
	        this.match(StarRealmsParser.T__19);
	        this.state = 262;
	        this.match(StarRealmsParser.T__9);
	        this.state = 263;
	        this.match(StarRealmsParser.T__7);
	        this.state = 264;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 265;
	        this.match(StarRealmsParser.NEWLINE);
	        this.state = 270; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 266;
	            this.match(StarRealmsParser.DISCARDED);
	            this.state = 267;
	            this.card();
	            this.state = 268;
	            this.match(StarRealmsParser.NEWLINE);
	            this.state = 272; 
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
	    this.enterRule(localctx, 42, StarRealmsParser.RULE_play);
	    try {
	        this.state = 278;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.PLAY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.match(StarRealmsParser.PLAY);
	            this.state = 275;
	            this.match(StarRealmsParser.ALL);
	            this.state = 276;
	            this.match(StarRealmsParser.NEWLINE);
	            break;
	        case StarRealmsParser.PLAYED:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
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
	    this.enterRule(localctx, 44, StarRealmsParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(StarRealmsParser.PLAYED);
	        this.state = 281;
	        this.card();
	        this.state = 282;
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
	    this.enterRule(localctx, 46, StarRealmsParser.RULE_purchase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(StarRealmsParser.ACQUIRED);
	        this.state = 285;
	        this.card();
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.T__7) {
	            this.state = 286;
	            this.match(StarRealmsParser.T__7);
	            this.state = 287;
	            this.match(StarRealmsParser.T__2);
	            this.state = 288;
	            this.match(StarRealmsParser.T__20);
	            this.state = 289;
	            this.match(StarRealmsParser.WORD);
	            this.state = 290;
	            this.match(StarRealmsParser.T__2);
	            this.state = 291;
	            this.match(StarRealmsParser.T__21);
	        }

	        this.state = 294;
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
	    this.enterRule(localctx, 48, StarRealmsParser.RULE_attackPlayer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 297;
	        this.name();
	        this.state = 298;
	        this.match(StarRealmsParser.WORD);
	        this.state = 299;
	        this.match(StarRealmsParser.INT);
	        this.state = 300;
	        this.newAuthority();
	        this.state = 301;
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
	    this.enterRule(localctx, 50, StarRealmsParser.RULE_attackBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(StarRealmsParser.ATTACKED);
	        this.state = 304;
	        this.card();
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



	scrap() {
	    let localctx = new ScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, StarRealmsParser.RULE_scrap);
	    var _la = 0; // Token type
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StarRealmsParser.WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.name();
	            this.state = 308;
	            this.match(StarRealmsParser.IS);
	            this.state = 309;
	            this.match(StarRealmsParser.SCRAPPING);
	            this.state = 311;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StarRealmsParser.T__22) {
	                this.state = 310;
	                this.match(StarRealmsParser.T__22);
	            }

	            this.state = 313;
	            this.card();
	            this.state = 314;
	            this.match(StarRealmsParser.NEWLINE);
	            break;
	        case StarRealmsParser.SCRAPPING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            this.match(StarRealmsParser.SCRAPPING);
	            this.state = 317;
	            this.card();
	            this.state = 318;
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
	    this.enterRule(localctx, 54, StarRealmsParser.RULE_scrapDetail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(StarRealmsParser.SCRAPPED);
	        this.state = 323;
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
	    this.enterRule(localctx, 56, StarRealmsParser.RULE_newBalanceDetail);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.name();
	        this.state = 326;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 328;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarRealmsParser.WORD) {
	            this.state = 327;
	            this.card();
	        }

	        this.state = 330;
	        this.effect();
	        this.state = 331;
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
	    this.enterRule(localctx, 58, StarRealmsParser.RULE_newAbility);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.name();
	        this.state = 334;
	        this.match(StarRealmsParser.SEPARATOR);
	        this.state = 335;
	        this.card();
	        this.state = 336;
	        this.match(StarRealmsParser.T__23);
	        this.state = 337;
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



	destroyBase() {
	    let localctx = new DestroyBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, StarRealmsParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(StarRealmsParser.T__25);
	        this.state = 340;
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
	    this.enterRule(localctx, 62, StarRealmsParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INCREMENT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 343;
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
	    this.enterRule(localctx, 64, StarRealmsParser.RULE_balance);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.match(StarRealmsParser.T__26);
	        this.state = 346;
	        this.match(StarRealmsParser.WORD);
	        this.state = 347;
	        this.match(StarRealmsParser.T__22);
	        this.state = 348;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 349;
	        this.match(StarRealmsParser.T__27);
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
	    this.enterRule(localctx, 66, StarRealmsParser.RULE_newAuthority);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(StarRealmsParser.T__26);
	        this.state = 352;
	        this.match(StarRealmsParser.NEW);
	        this.state = 353;
	        this.match(StarRealmsParser.WORD);
	        this.state = 354;
	        this.match(StarRealmsParser.T__22);
	        this.state = 355;
	        _la = this._input.LA(1);
	        if(!(_la===StarRealmsParser.INT || _la===StarRealmsParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 356;
	        this.match(StarRealmsParser.T__27);
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
	    this.enterRule(localctx, 68, StarRealmsParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.name();
	        this.state = 359;
	        this.match(StarRealmsParser.ENDS);
	        this.state = 360;
	        this.match(StarRealmsParser.TURN);
	        this.state = 361;
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
	    this.enterRule(localctx, 70, StarRealmsParser.RULE_newTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.match(StarRealmsParser.IT);
	        this.state = 364;
	        this.match(StarRealmsParser.IS);
	        this.state = 365;
	        this.match(StarRealmsParser.NOW);
	        this.state = 366;
	        this.name();
	        this.state = 367;
	        this.match(StarRealmsParser.T__28);
	        this.state = 368;
	        this.match(StarRealmsParser.TURN);
	        this.state = 369;
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
	    this.enterRule(localctx, 72, StarRealmsParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(StarRealmsParser.T__29);
	        this.state = 372;
	        this.match(StarRealmsParser.DISCARD);
	        this.state = 373;
	        this.match(StarRealmsParser.T__30);
	        this.state = 374;
	        this.match(StarRealmsParser.T__7);
	        this.state = 375;
	        this.match(StarRealmsParser.T__31);
	        this.state = 376;
	        this.match(StarRealmsParser.T__32);
	        this.state = 377;
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



	refreshIndicators() {
	    let localctx = new RefreshIndicatorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, StarRealmsParser.RULE_refreshIndicators);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(StarRealmsParser.T__33);
	        this.state = 380;
	        this.match(StarRealmsParser.T__34);
	        this.state = 381;
	        this.match(StarRealmsParser.T__35);
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
	    this.enterRule(localctx, 76, StarRealmsParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 383;
	        		this.match(StarRealmsParser.WORD);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 386; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,21, this._ctx);
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
	    this.enterRule(localctx, 78, StarRealmsParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 388;
	            this.match(StarRealmsParser.WORD);
	            this.state = 391; 
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
StarRealmsParser.ACQUIRED = 37;
StarRealmsParser.ATTACKED = 38;
StarRealmsParser.SCRAPPING = 39;
StarRealmsParser.SCRAPPED = 40;
StarRealmsParser.SHUFFLED = 41;
StarRealmsParser.DISCARDED = 42;
StarRealmsParser.DISCARD = 43;
StarRealmsParser.RESOLVING = 44;
StarRealmsParser.TURN = 45;
StarRealmsParser.PILE = 46;
StarRealmsParser.PLAY = 47;
StarRealmsParser.FORM = 48;
StarRealmsParser.DECK = 49;
StarRealmsParser.DREW = 50;
StarRealmsParser.ENDS = 51;
StarRealmsParser.NEW = 52;
StarRealmsParser.ALL = 53;
StarRealmsParser.NOW = 54;
StarRealmsParser.IS = 55;
StarRealmsParser.IT = 56;
StarRealmsParser.WHITESPACE = 57;
StarRealmsParser.COLOR_START_TAG = 58;
StarRealmsParser.COLOR_END_TAG = 59;
StarRealmsParser.END_GAME_TAG = 60;
StarRealmsParser.DOT = 61;
StarRealmsParser.APOSTROPHE = 62;
StarRealmsParser.PLAYED = 63;
StarRealmsParser.INT = 64;
StarRealmsParser.WORD = 65;
StarRealmsParser.SEPARATOR = 66;
StarRealmsParser.INCREMENT = 67;
StarRealmsParser.DECREASE = 68;
StarRealmsParser.NEWLINE = 69;

StarRealmsParser.RULE_battle = 0;
StarRealmsParser.RULE_winStatus = 1;
StarRealmsParser.RULE_turn = 2;
StarRealmsParser.RULE_action = 3;
StarRealmsParser.RULE_endPhase = 4;
StarRealmsParser.RULE_summaryAction = 5;
StarRealmsParser.RULE_activateCard = 6;
StarRealmsParser.RULE_actionDetail = 7;
StarRealmsParser.RULE_drawPhase = 8;
StarRealmsParser.RULE_drawCards = 9;
StarRealmsParser.RULE_activateBase = 10;
StarRealmsParser.RULE_activateCardEffect = 11;
StarRealmsParser.RULE_increasePool = 12;
StarRealmsParser.RULE_discardAndDraw = 13;
StarRealmsParser.RULE_discardAndDrawDescription = 14;
StarRealmsParser.RULE_selectDiscardCard = 15;
StarRealmsParser.RULE_activateEffect = 16;
StarRealmsParser.RULE_discard = 17;
StarRealmsParser.RULE_resolveDiscard = 18;
StarRealmsParser.RULE_discardAction = 19;
StarRealmsParser.RULE_discardDetails = 20;
StarRealmsParser.RULE_play = 21;
StarRealmsParser.RULE_playSingle = 22;
StarRealmsParser.RULE_purchase = 23;
StarRealmsParser.RULE_attackPlayer = 24;
StarRealmsParser.RULE_attackBase = 25;
StarRealmsParser.RULE_scrap = 26;
StarRealmsParser.RULE_scrapDetail = 27;
StarRealmsParser.RULE_newBalanceDetail = 28;
StarRealmsParser.RULE_newAbility = 29;
StarRealmsParser.RULE_destroyBase = 30;
StarRealmsParser.RULE_effect = 31;
StarRealmsParser.RULE_balance = 32;
StarRealmsParser.RULE_newAuthority = 33;
StarRealmsParser.RULE_endTurn = 34;
StarRealmsParser.RULE_newTurn = 35;
StarRealmsParser.RULE_shuffleCards = 36;
StarRealmsParser.RULE_refreshIndicators = 37;
StarRealmsParser.RULE_name = 38;
StarRealmsParser.RULE_card = 39;

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

	activateCard() {
	    return this.getTypedRuleContext(ActivateCardContext,0);
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



class ActivateCardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activateCard;
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

	NEWLINE() {
	    return this.getToken(StarRealmsParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.enterActivateCard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivateCard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivateCard(this);
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

	activateCardEffect() {
	    return this.getTypedRuleContext(ActivateCardEffectContext,0);
	};

	shuffleCards() {
	    return this.getTypedRuleContext(ShuffleCardsContext,0);
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

	card() {
	    return this.getTypedRuleContext(CardContext,0);
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



class ActivateCardEffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarRealmsParser.RULE_activateCardEffect;
    }

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
	        listener.enterActivateCardEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarRealmsListener ) {
	        listener.exitActivateCardEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarRealmsVisitor ) {
	        return visitor.visitActivateCardEffect(this);
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
StarRealmsParser.ActivateCardContext = ActivateCardContext; 
StarRealmsParser.ActionDetailContext = ActionDetailContext; 
StarRealmsParser.DrawPhaseContext = DrawPhaseContext; 
StarRealmsParser.DrawCardsContext = DrawCardsContext; 
StarRealmsParser.ActivateBaseContext = ActivateBaseContext; 
StarRealmsParser.ActivateCardEffectContext = ActivateCardEffectContext; 
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
