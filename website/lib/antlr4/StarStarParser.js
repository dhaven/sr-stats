// Generated from StarStar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import StarStarListener from './StarStarListener.js';
import StarStarVisitor from './StarStarVisitor.js';

const serializedATN = [4,1,77,456,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,1,0,4,0,92,8,0,11,0,12,0,93,1,0,1,0,1,1,4,
1,99,8,1,11,1,12,1,100,1,1,3,1,104,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,121,8,2,3,2,123,8,2,1,3,1,3,5,3,127,8,3,10,
3,12,3,130,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,143,8,4,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,154,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,4,6,163,8,6,11,6,12,6,164,1,7,1,7,1,7,3,7,170,8,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,8,1,8,1,8,3,8,183,8,8,1,8,4,8,186,8,8,11,8,12,8,187,1,8,1,
8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
1,10,3,10,210,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,
1,12,1,12,3,12,225,8,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,
1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,
18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,
1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,
23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,
1,25,3,25,296,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,
28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,30,1,30,1,30,4,30,345,8,30,11,30,12,30,346,1,30,1,
30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,
33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,
36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,
41,1,41,1,41,1,42,1,42,3,42,442,8,42,1,42,4,42,445,8,42,11,42,12,42,446,
1,43,4,43,450,8,43,11,43,12,43,451,1,44,1,44,1,44,0,0,45,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,74,76,78,80,82,84,86,88,0,3,2,0,72,72,77,77,2,0,72,72,
76,77,3,0,5,22,24,64,73,73,468,0,91,1,0,0,0,2,98,1,0,0,0,4,122,1,0,0,0,6,
124,1,0,0,0,8,142,1,0,0,0,10,153,1,0,0,0,12,162,1,0,0,0,14,166,1,0,0,0,16,
179,1,0,0,0,18,191,1,0,0,0,20,205,1,0,0,0,22,214,1,0,0,0,24,218,1,0,0,0,
26,226,1,0,0,0,28,231,1,0,0,0,30,235,1,0,0,0,32,239,1,0,0,0,34,243,1,0,0,
0,36,247,1,0,0,0,38,253,1,0,0,0,40,263,1,0,0,0,42,267,1,0,0,0,44,271,1,0,
0,0,46,275,1,0,0,0,48,281,1,0,0,0,50,295,1,0,0,0,52,297,1,0,0,0,54,306,1,
0,0,0,56,318,1,0,0,0,58,332,1,0,0,0,60,341,1,0,0,0,62,350,1,0,0,0,64,362,
1,0,0,0,66,372,1,0,0,0,68,382,1,0,0,0,70,395,1,0,0,0,72,401,1,0,0,0,74,409,
1,0,0,0,76,416,1,0,0,0,78,422,1,0,0,0,80,431,1,0,0,0,82,434,1,0,0,0,84,444,
1,0,0,0,86,449,1,0,0,0,88,453,1,0,0,0,90,92,3,2,1,0,91,90,1,0,0,0,92,93,
1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,5,0,0,1,96,1,1,0,
0,0,97,99,3,4,2,0,98,97,1,0,0,0,99,100,1,0,0,0,100,98,1,0,0,0,100,101,1,
0,0,0,101,103,1,0,0,0,102,104,3,48,24,0,103,102,1,0,0,0,103,104,1,0,0,0,
104,3,1,0,0,0,105,123,3,34,17,0,106,123,3,22,11,0,107,123,3,32,16,0,108,
123,3,6,3,0,109,123,3,14,7,0,110,123,3,82,41,0,111,123,3,78,39,0,112,123,
3,18,9,0,113,123,3,46,23,0,114,123,3,24,12,0,115,123,3,30,15,0,116,123,3,
74,37,0,117,123,3,76,38,0,118,120,3,12,6,0,119,121,5,75,0,0,120,119,1,0,
0,0,120,121,1,0,0,0,121,123,1,0,0,0,122,105,1,0,0,0,122,106,1,0,0,0,122,
107,1,0,0,0,122,108,1,0,0,0,122,109,1,0,0,0,122,110,1,0,0,0,122,111,1,0,
0,0,122,112,1,0,0,0,122,113,1,0,0,0,122,114,1,0,0,0,122,115,1,0,0,0,122,
116,1,0,0,0,122,117,1,0,0,0,122,118,1,0,0,0,123,5,1,0,0,0,124,128,3,8,4,
0,125,127,3,10,5,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,
1,0,0,0,129,7,1,0,0,0,130,128,1,0,0,0,131,143,3,40,20,0,132,143,3,42,21,
0,133,143,3,44,22,0,134,143,3,26,13,0,135,143,3,28,14,0,136,143,3,50,25,
0,137,143,3,62,31,0,138,143,3,64,32,0,139,143,3,66,33,0,140,143,3,68,34,
0,141,143,3,70,35,0,142,131,1,0,0,0,142,132,1,0,0,0,142,133,1,0,0,0,142,
134,1,0,0,0,142,135,1,0,0,0,142,136,1,0,0,0,142,137,1,0,0,0,142,138,1,0,
0,0,142,139,1,0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,9,1,0,0,0,144,154,
3,14,7,0,145,154,3,30,15,0,146,154,3,20,10,0,147,154,3,82,41,0,148,154,3,
78,39,0,149,154,3,16,8,0,150,154,3,36,18,0,151,154,3,38,19,0,152,154,3,72,
36,0,153,144,1,0,0,0,153,145,1,0,0,0,153,146,1,0,0,0,153,147,1,0,0,0,153,
148,1,0,0,0,153,149,1,0,0,0,153,150,1,0,0,0,153,151,1,0,0,0,153,152,1,0,
0,0,154,11,1,0,0,0,155,163,3,88,44,0,156,163,5,72,0,0,157,163,5,77,0,0,158,
163,5,74,0,0,159,163,5,1,0,0,160,163,5,2,0,0,161,163,5,3,0,0,162,155,1,0,
0,0,162,156,1,0,0,0,162,157,1,0,0,0,162,158,1,0,0,0,162,159,1,0,0,0,162,
160,1,0,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,162,1,0,0,0,164,165,1,0,
0,0,165,13,1,0,0,0,166,167,3,86,43,0,167,169,5,74,0,0,168,170,3,84,42,0,
169,168,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,172,3,80,40,0,172,173,
5,1,0,0,173,174,3,88,44,0,174,175,5,2,0,0,175,176,7,0,0,0,176,177,5,3,0,
0,177,178,5,75,0,0,178,15,1,0,0,0,179,180,3,86,43,0,180,182,5,74,0,0,181,
183,3,84,42,0,182,181,1,0,0,0,182,183,1,0,0,0,183,185,1,0,0,0,184,186,3,
88,44,0,185,184,1,0,0,0,186,187,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,
188,189,1,0,0,0,189,190,5,75,0,0,190,17,1,0,0,0,191,192,5,49,0,0,192,193,
5,8,0,0,193,194,5,2,0,0,194,195,5,73,0,0,195,196,5,43,0,0,196,197,5,8,0,
0,197,198,5,2,0,0,198,199,5,73,0,0,199,200,5,43,0,0,200,201,5,8,0,0,201,
202,5,2,0,0,202,203,5,73,0,0,203,204,5,75,0,0,204,19,1,0,0,0,205,206,3,86,
43,0,206,207,5,35,0,0,207,209,5,52,0,0,208,210,5,2,0,0,209,208,1,0,0,0,209,
210,1,0,0,0,210,211,1,0,0,0,211,212,3,84,42,0,212,213,5,75,0,0,213,21,1,
0,0,0,214,215,5,23,0,0,215,216,3,84,42,0,216,217,5,75,0,0,217,23,1,0,0,0,
218,219,3,86,43,0,219,220,5,33,0,0,220,221,5,61,0,0,221,222,5,55,0,0,222,
224,5,31,0,0,223,225,5,75,0,0,224,223,1,0,0,0,224,225,1,0,0,0,225,25,1,0,
0,0,226,227,5,48,0,0,227,228,5,28,0,0,228,229,3,84,42,0,229,230,5,75,0,0,
230,27,1,0,0,0,231,232,5,48,0,0,232,233,3,84,42,0,233,234,5,75,0,0,234,29,
1,0,0,0,235,236,5,51,0,0,236,237,3,84,42,0,237,238,5,75,0,0,238,31,1,0,0,
0,239,240,5,21,0,0,240,241,3,84,42,0,241,242,5,75,0,0,242,33,1,0,0,0,243,
244,5,5,0,0,244,245,3,84,42,0,245,246,5,75,0,0,246,35,1,0,0,0,247,248,5,
5,0,0,248,249,3,84,42,0,249,250,5,56,0,0,250,251,5,32,0,0,251,252,5,75,0,
0,252,37,1,0,0,0,253,254,5,5,0,0,254,255,3,84,42,0,255,256,5,56,0,0,256,
257,5,55,0,0,257,258,5,57,0,0,258,259,5,41,0,0,259,260,5,55,0,0,260,261,
5,20,0,0,261,262,5,75,0,0,262,39,1,0,0,0,263,264,5,46,0,0,264,265,3,84,42,
0,265,266,5,75,0,0,266,41,1,0,0,0,267,268,5,6,0,0,268,269,3,84,42,0,269,
270,5,75,0,0,270,43,1,0,0,0,271,272,5,52,0,0,272,273,3,84,42,0,273,274,5,
75,0,0,274,45,1,0,0,0,275,276,3,86,43,0,276,277,5,27,0,0,277,278,5,58,0,
0,278,279,5,72,0,0,279,280,5,75,0,0,280,47,1,0,0,0,281,282,5,37,0,0,282,
283,5,35,0,0,283,284,5,40,0,0,284,285,3,86,43,0,285,286,5,4,0,0,286,287,
5,58,0,0,287,288,5,72,0,0,288,289,5,75,0,0,289,49,1,0,0,0,290,296,3,52,26,
0,291,296,3,54,27,0,292,296,3,56,28,0,293,296,3,58,29,0,294,296,3,60,30,
0,295,290,1,0,0,0,295,291,1,0,0,0,295,292,1,0,0,0,295,293,1,0,0,0,295,294,
1,0,0,0,296,51,1,0,0,0,297,298,5,49,0,0,298,299,5,50,0,0,299,300,5,73,0,
0,300,301,5,14,0,0,301,302,5,30,0,0,302,303,5,62,0,0,303,304,5,32,0,0,304,
305,5,75,0,0,305,53,1,0,0,0,306,307,5,49,0,0,307,308,5,50,0,0,308,309,5,
73,0,0,309,310,5,14,0,0,310,311,5,30,0,0,311,312,5,62,0,0,312,313,5,32,0,
0,313,314,5,43,0,0,314,315,5,22,0,0,315,316,5,44,0,0,316,317,5,75,0,0,317,
55,1,0,0,0,318,319,5,49,0,0,319,320,5,50,0,0,320,321,5,59,0,0,321,322,5,
56,0,0,322,323,5,72,0,0,323,324,5,15,0,0,324,325,5,30,0,0,325,326,5,62,0,
0,326,327,5,32,0,0,327,328,5,43,0,0,328,329,5,22,0,0,329,330,5,44,0,0,330,
331,5,75,0,0,331,57,1,0,0,0,332,333,5,49,0,0,333,334,5,16,0,0,334,335,5,
73,0,0,335,336,5,14,0,0,336,337,5,56,0,0,337,338,5,53,0,0,338,339,5,13,0,
0,339,340,5,75,0,0,340,59,1,0,0,0,341,344,5,49,0,0,342,345,3,88,44,0,343,
345,5,72,0,0,344,342,1,0,0,0,344,343,1,0,0,0,345,346,1,0,0,0,346,344,1,0,
0,0,346,347,1,0,0,0,347,348,1,0,0,0,348,349,5,75,0,0,349,61,1,0,0,0,350,
351,5,17,0,0,351,352,5,50,0,0,352,353,5,73,0,0,353,354,5,14,0,0,354,355,
5,30,0,0,355,356,5,62,0,0,356,357,5,32,0,0,357,358,5,43,0,0,358,359,5,22,
0,0,359,360,5,44,0,0,360,361,5,75,0,0,361,63,1,0,0,0,362,363,5,17,0,0,363,
364,5,50,0,0,364,365,5,73,0,0,365,366,5,14,0,0,366,367,5,30,0,0,367,368,
5,62,0,0,368,369,5,22,0,0,369,370,5,44,0,0,370,371,5,75,0,0,371,65,1,0,0,
0,372,373,5,17,0,0,373,374,5,9,0,0,374,375,5,72,0,0,375,376,5,18,0,0,376,
377,5,42,0,0,377,378,5,25,0,0,378,379,5,72,0,0,379,380,5,15,0,0,380,381,
5,75,0,0,381,67,1,0,0,0,382,383,5,17,0,0,383,384,5,9,0,0,384,385,5,72,0,
0,385,386,5,18,0,0,386,387,5,50,0,0,387,388,5,73,0,0,388,389,5,14,0,0,389,
390,5,36,0,0,390,391,5,55,0,0,391,392,5,63,0,0,392,393,5,64,0,0,393,394,
5,75,0,0,394,69,1,0,0,0,395,396,5,17,0,0,396,397,5,9,0,0,397,398,5,72,0,
0,398,399,5,7,0,0,399,400,5,75,0,0,400,71,1,0,0,0,401,402,3,86,43,0,402,
403,5,35,0,0,403,404,5,39,0,0,404,405,5,52,0,0,405,406,5,12,0,0,406,407,
5,15,0,0,407,408,5,75,0,0,408,73,1,0,0,0,409,410,3,86,43,0,410,411,5,1,0,
0,411,412,5,72,0,0,412,413,5,3,0,0,413,414,5,19,0,0,414,415,5,75,0,0,415,
75,1,0,0,0,416,417,3,86,43,0,417,418,5,60,0,0,418,419,5,55,0,0,419,420,5,
31,0,0,420,421,5,75,0,0,421,77,1,0,0,0,422,423,5,54,0,0,423,424,5,22,0,0,
424,425,5,44,0,0,425,426,5,56,0,0,426,427,5,29,0,0,427,428,5,38,0,0,428,
429,5,20,0,0,429,430,5,75,0,0,430,79,1,0,0,0,431,432,7,1,0,0,432,433,3,88,
44,0,433,81,1,0,0,0,434,435,5,26,0,0,435,436,5,72,0,0,436,437,5,15,0,0,437,
438,5,75,0,0,438,83,1,0,0,0,439,441,3,88,44,0,440,442,5,4,0,0,441,440,1,
0,0,0,441,442,1,0,0,0,442,445,1,0,0,0,443,445,5,72,0,0,444,439,1,0,0,0,444,
443,1,0,0,0,445,446,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,85,1,0,0,
0,448,450,3,88,44,0,449,448,1,0,0,0,450,451,1,0,0,0,451,449,1,0,0,0,451,
452,1,0,0,0,452,87,1,0,0,0,453,454,7,2,0,0,454,89,1,0,0,0,22,93,100,103,
120,122,128,142,153,162,164,169,182,187,209,224,295,344,346,441,444,446,
451];


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
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'</color>'", "'==='", 
                            "'.'", "';'", "','" ];
    static symbolicNames = [ null, null, null, null, null, "ACQUIRED", "ACTIVATING", 
                             "AUTHORITY", "COMMANDER", "ADD", "ALL", "ALLY", 
                             "ANY", "ASIDE", "CARD", "CARDS", "CHOOSE", 
                             "CHOSE", "COMBAT", "CONCEDED", "DECK", "DESTROYED", 
                             "DISCARD", "DISCARDED", "DISCARDING", "DISCARDS", 
                             "DREW", "ENDS", "EVENT", "FORM", "FROM", "GAME", 
                             "HAND", "HAS", "INDICATORS", "IS", "IN", "IT", 
                             "NEW", "NOT", "NOW", "OF", "OPPONENT", "OR", 
                             "PILE", "PLAY", "PLAYED", "REFRESH", "REVEALED", 
                             "RESOLVING", "SCRAP", "SCRAPPED", "SCRAPPING", 
                             "SET", "SHUFFLED", "THE", "TO", "TOP", "TURN", 
                             "UP", "WINS", "WON", "YOUR", "TRADE", "ROW", 
                             "WHITESPACE", "COLOR_START_TAG", "COLOR_END_TAG", 
                             "END_GAME_TAG", "DOT", "SEMICOLUM", "COMMA", 
                             "INT", "WORD", "SEPARATOR", "NEWLINE", "INCREMENT", 
                             "DECREASE" ];
    static ruleNames = [ "battle", "turn", "action", "cardAction", "cardTrigger", 
                         "cardEffect", "skipText", "balanceUpdate", "otherEffect", 
                         "resolveCommander", "scrapSummary", "discarded", 
                         "winStatus", "event", "mission", "scrapped", "destroyBase", 
                         "cardAcquisition", "acquireToHand", "acquireToDeck", 
                         "playSingle", "activate", "scrapSelf", "endTurn", 
                         "startTurn", "resolving", "resolveScrapHand", "resolveScrapHandOrDiscard", 
                         "resolveScrapMultiple", "resolvePatience", "resolveOthers", 
                         "choseScrapHandOrDiscard", "choseScrapDiscard", 
                         "choseBattleAndDiscard", "choseScrapTradeRow", 
                         "choseAddAuthority", "noScrap", "concede", "timeout", 
                         "shuffleCards", "effect", "drawCards", "card", 
                         "name", "customWord" ];

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
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 90;
	            this.turn();
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.T__0) | (1 << StarStarParser.T__1) | (1 << StarStarParser.T__2) | (1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.AUTHORITY) | (1 << StarStarParser.COMMANDER) | (1 << StarStarParser.ADD) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ANY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CHOSE) | (1 << StarStarParser.COMBAT) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDED) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DISCARDS) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.HAND - 32)) | (1 << (StarStarParser.HAS - 32)) | (1 << (StarStarParser.INDICATORS - 32)) | (1 << (StarStarParser.IS - 32)) | (1 << (StarStarParser.IN - 32)) | (1 << (StarStarParser.IT - 32)) | (1 << (StarStarParser.NEW - 32)) | (1 << (StarStarParser.NOT - 32)) | (1 << (StarStarParser.NOW - 32)) | (1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OPPONENT - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.TRADE - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (StarStarParser.ROW - 64)) | (1 << (StarStarParser.INT - 64)) | (1 << (StarStarParser.WORD - 64)) | (1 << (StarStarParser.SEPARATOR - 64)) | (1 << (StarStarParser.DECREASE - 64)))) !== 0));
	        this.state = 95;
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
	        this.state = 98; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 97;
	        		this.action();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 100; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 102;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.cardAcquisition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.discarded();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.destroyBase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.cardAction();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.balanceUpdate();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.drawCards();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.shuffleCards();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 112;
	            this.resolveCommander();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 113;
	            this.endTurn();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 114;
	            this.winStatus();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 115;
	            this.scrapped();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 116;
	            this.concede();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 117;
	            this.timeout();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 118;
	            this.skipText();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StarStarParser.NEWLINE) {
	                this.state = 119;
	                this.match(StarStarParser.NEWLINE);
	            }

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
	        this.state = 124;
	        this.cardTrigger();
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 125;
	                this.cardEffect(); 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.playSingle();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.activate();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            this.scrapSelf();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 134;
	            this.event();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 135;
	            this.mission();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 136;
	            this.resolving();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 137;
	            this.choseScrapHandOrDiscard();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 138;
	            this.choseScrapDiscard();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 139;
	            this.choseBattleAndDiscard();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 140;
	            this.choseScrapTradeRow();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 141;
	            this.choseAddAuthority();
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



	cardEffect() {
	    let localctx = new CardEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StarStarParser.RULE_cardEffect);
	    try {
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.balanceUpdate();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            this.scrapped();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 146;
	            this.scrapSummary();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 147;
	            this.drawCards();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 148;
	            this.shuffleCards();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 149;
	            this.otherEffect();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 150;
	            this.acquireToHand();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 151;
	            this.acquireToDeck();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 152;
	            this.noScrap();
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 162;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case StarStarParser.ACQUIRED:
	        		case StarStarParser.ACTIVATING:
	        		case StarStarParser.AUTHORITY:
	        		case StarStarParser.COMMANDER:
	        		case StarStarParser.ADD:
	        		case StarStarParser.ALL:
	        		case StarStarParser.ALLY:
	        		case StarStarParser.ANY:
	        		case StarStarParser.ASIDE:
	        		case StarStarParser.CARD:
	        		case StarStarParser.CARDS:
	        		case StarStarParser.CHOOSE:
	        		case StarStarParser.CHOSE:
	        		case StarStarParser.COMBAT:
	        		case StarStarParser.CONCEDED:
	        		case StarStarParser.DECK:
	        		case StarStarParser.DESTROYED:
	        		case StarStarParser.DISCARD:
	        		case StarStarParser.DISCARDING:
	        		case StarStarParser.DISCARDS:
	        		case StarStarParser.DREW:
	        		case StarStarParser.ENDS:
	        		case StarStarParser.EVENT:
	        		case StarStarParser.FORM:
	        		case StarStarParser.FROM:
	        		case StarStarParser.GAME:
	        		case StarStarParser.HAND:
	        		case StarStarParser.HAS:
	        		case StarStarParser.INDICATORS:
	        		case StarStarParser.IS:
	        		case StarStarParser.IN:
	        		case StarStarParser.IT:
	        		case StarStarParser.NEW:
	        		case StarStarParser.NOT:
	        		case StarStarParser.NOW:
	        		case StarStarParser.OF:
	        		case StarStarParser.OPPONENT:
	        		case StarStarParser.OR:
	        		case StarStarParser.PILE:
	        		case StarStarParser.PLAY:
	        		case StarStarParser.PLAYED:
	        		case StarStarParser.REFRESH:
	        		case StarStarParser.REVEALED:
	        		case StarStarParser.RESOLVING:
	        		case StarStarParser.SCRAP:
	        		case StarStarParser.SCRAPPED:
	        		case StarStarParser.SCRAPPING:
	        		case StarStarParser.SET:
	        		case StarStarParser.SHUFFLED:
	        		case StarStarParser.THE:
	        		case StarStarParser.TO:
	        		case StarStarParser.TOP:
	        		case StarStarParser.TURN:
	        		case StarStarParser.UP:
	        		case StarStarParser.WINS:
	        		case StarStarParser.WON:
	        		case StarStarParser.YOUR:
	        		case StarStarParser.TRADE:
	        		case StarStarParser.ROW:
	        		case StarStarParser.WORD:
	        		    this.state = 155;
	        		    this.customWord();
	        		    break;
	        		case StarStarParser.INT:
	        		    this.state = 156;
	        		    this.match(StarStarParser.INT);
	        		    break;
	        		case StarStarParser.DECREASE:
	        		    this.state = 157;
	        		    this.match(StarStarParser.DECREASE);
	        		    break;
	        		case StarStarParser.SEPARATOR:
	        		    this.state = 158;
	        		    this.match(StarStarParser.SEPARATOR);
	        		    break;
	        		case StarStarParser.T__0:
	        		    this.state = 159;
	        		    this.match(StarStarParser.T__0);
	        		    break;
	        		case StarStarParser.T__1:
	        		    this.state = 160;
	        		    this.match(StarStarParser.T__1);
	        		    break;
	        		case StarStarParser.T__2:
	        		    this.state = 161;
	        		    this.match(StarStarParser.T__2);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 164; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
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



	balanceUpdate() {
	    let localctx = new BalanceUpdateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StarStarParser.RULE_balanceUpdate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.name();
	        this.state = 167;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 168;
	            this.card();

	        }
	        this.state = 171;
	        this.effect();
	        this.state = 172;
	        this.match(StarStarParser.T__0);
	        this.state = 173;
	        this.customWord();
	        this.state = 174;
	        this.match(StarStarParser.T__1);
	        this.state = 175;
	        _la = this._input.LA(1);
	        if(!(_la===StarStarParser.INT || _la===StarStarParser.DECREASE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 176;
	        this.match(StarStarParser.T__2);
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



	otherEffect() {
	    let localctx = new OtherEffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StarStarParser.RULE_otherEffect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.name();
	        this.state = 180;
	        this.match(StarStarParser.SEPARATOR);
	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 181;
	            this.card();

	        }
	        this.state = 185; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 184;
	            this.customWord();
	            this.state = 187; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.AUTHORITY) | (1 << StarStarParser.COMMANDER) | (1 << StarStarParser.ADD) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ANY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CHOSE) | (1 << StarStarParser.COMBAT) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DISCARDS) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.HAND - 32)) | (1 << (StarStarParser.HAS - 32)) | (1 << (StarStarParser.INDICATORS - 32)) | (1 << (StarStarParser.IS - 32)) | (1 << (StarStarParser.IN - 32)) | (1 << (StarStarParser.IT - 32)) | (1 << (StarStarParser.NEW - 32)) | (1 << (StarStarParser.NOT - 32)) | (1 << (StarStarParser.NOW - 32)) | (1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OPPONENT - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.TRADE - 32)))) !== 0) || _la===StarStarParser.ROW || _la===StarStarParser.WORD);
	        this.state = 189;
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



	resolveCommander() {
	    let localctx = new ResolveCommanderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StarStarParser.RULE_resolveCommander);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 192;
	        this.match(StarStarParser.COMMANDER);
	        this.state = 193;
	        this.match(StarStarParser.T__1);
	        this.state = 194;
	        this.match(StarStarParser.WORD);
	        this.state = 195;
	        this.match(StarStarParser.OR);
	        this.state = 196;
	        this.match(StarStarParser.COMMANDER);
	        this.state = 197;
	        this.match(StarStarParser.T__1);
	        this.state = 198;
	        this.match(StarStarParser.WORD);
	        this.state = 199;
	        this.match(StarStarParser.OR);
	        this.state = 200;
	        this.match(StarStarParser.COMMANDER);
	        this.state = 201;
	        this.match(StarStarParser.T__1);
	        this.state = 202;
	        this.match(StarStarParser.WORD);
	        this.state = 203;
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
	        this.state = 205;
	        this.name();
	        this.state = 206;
	        this.match(StarStarParser.IS);
	        this.state = 207;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.T__1) {
	            this.state = 208;
	            this.match(StarStarParser.T__1);
	        }

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



	discarded() {
	    let localctx = new DiscardedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StarStarParser.RULE_discarded);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(StarStarParser.DISCARDED);
	        this.state = 215;
	        this.card();
	        this.state = 216;
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
	        this.state = 218;
	        this.name();
	        this.state = 219;
	        this.match(StarStarParser.HAS);
	        this.state = 220;
	        this.match(StarStarParser.WON);
	        this.state = 221;
	        this.match(StarStarParser.THE);
	        this.state = 222;
	        this.match(StarStarParser.GAME);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StarStarParser.NEWLINE) {
	            this.state = 223;
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



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StarStarParser.RULE_event);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(StarStarParser.REVEALED);
	        this.state = 227;
	        this.match(StarStarParser.EVENT);
	        this.state = 228;
	        this.card();
	        this.state = 229;
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



	mission() {
	    let localctx = new MissionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StarStarParser.RULE_mission);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(StarStarParser.REVEALED);
	        this.state = 232;
	        this.card();
	        this.state = 233;
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



	scrapped() {
	    let localctx = new ScrappedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StarStarParser.RULE_scrapped);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(StarStarParser.SCRAPPED);
	        this.state = 236;
	        this.card();
	        this.state = 237;
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
	    this.enterRule(localctx, 32, StarStarParser.RULE_destroyBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(StarStarParser.DESTROYED);
	        this.state = 240;
	        this.card();
	        this.state = 241;
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
	    this.enterRule(localctx, 34, StarStarParser.RULE_cardAcquisition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 244;
	        this.card();
	        this.state = 245;
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
	    this.enterRule(localctx, 36, StarStarParser.RULE_acquireToHand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 248;
	        this.card();
	        this.state = 249;
	        this.match(StarStarParser.TO);
	        this.state = 250;
	        this.match(StarStarParser.HAND);
	        this.state = 251;
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
	    this.enterRule(localctx, 38, StarStarParser.RULE_acquireToDeck);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(StarStarParser.ACQUIRED);
	        this.state = 254;
	        this.card();
	        this.state = 255;
	        this.match(StarStarParser.TO);
	        this.state = 256;
	        this.match(StarStarParser.THE);
	        this.state = 257;
	        this.match(StarStarParser.TOP);
	        this.state = 258;
	        this.match(StarStarParser.OF);
	        this.state = 259;
	        this.match(StarStarParser.THE);
	        this.state = 260;
	        this.match(StarStarParser.DECK);
	        this.state = 261;
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
	    this.enterRule(localctx, 40, StarStarParser.RULE_playSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(StarStarParser.PLAYED);
	        this.state = 264;
	        this.card();
	        this.state = 265;
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
	    this.enterRule(localctx, 42, StarStarParser.RULE_activate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(StarStarParser.ACTIVATING);
	        this.state = 268;
	        this.card();
	        this.state = 269;
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
	    this.enterRule(localctx, 44, StarStarParser.RULE_scrapSelf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 272;
	        this.card();
	        this.state = 273;
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
	    this.enterRule(localctx, 46, StarStarParser.RULE_endTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.name();
	        this.state = 276;
	        this.match(StarStarParser.ENDS);
	        this.state = 277;
	        this.match(StarStarParser.TURN);
	        this.state = 278;
	        this.match(StarStarParser.INT);
	        this.state = 279;
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
	    this.enterRule(localctx, 48, StarStarParser.RULE_startTurn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(StarStarParser.IT);
	        this.state = 282;
	        this.match(StarStarParser.IS);
	        this.state = 283;
	        this.match(StarStarParser.NOW);
	        this.state = 284;
	        this.name();
	        this.state = 285;
	        this.match(StarStarParser.T__3);
	        this.state = 286;
	        this.match(StarStarParser.TURN);
	        this.state = 287;
	        this.match(StarStarParser.INT);
	        this.state = 288;
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
	    this.enterRule(localctx, 50, StarStarParser.RULE_resolving);
	    try {
	        this.state = 295;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.resolveScrapHand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.resolveScrapHandOrDiscard();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 292;
	            this.resolveScrapMultiple();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 293;
	            this.resolvePatience();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 294;
	            this.resolveOthers();
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



	resolveScrapHand() {
	    let localctx = new ResolveScrapHandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, StarStarParser.RULE_resolveScrapHand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 298;
	        this.match(StarStarParser.SCRAP);
	        this.state = 299;
	        this.match(StarStarParser.WORD);
	        this.state = 300;
	        this.match(StarStarParser.CARD);
	        this.state = 301;
	        this.match(StarStarParser.FROM);
	        this.state = 302;
	        this.match(StarStarParser.YOUR);
	        this.state = 303;
	        this.match(StarStarParser.HAND);
	        this.state = 304;
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



	resolveScrapHandOrDiscard() {
	    let localctx = new ResolveScrapHandOrDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, StarStarParser.RULE_resolveScrapHandOrDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 307;
	        this.match(StarStarParser.SCRAP);
	        this.state = 308;
	        this.match(StarStarParser.WORD);
	        this.state = 309;
	        this.match(StarStarParser.CARD);
	        this.state = 310;
	        this.match(StarStarParser.FROM);
	        this.state = 311;
	        this.match(StarStarParser.YOUR);
	        this.state = 312;
	        this.match(StarStarParser.HAND);
	        this.state = 313;
	        this.match(StarStarParser.OR);
	        this.state = 314;
	        this.match(StarStarParser.DISCARD);
	        this.state = 315;
	        this.match(StarStarParser.PILE);
	        this.state = 316;
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



	resolveScrapMultiple() {
	    let localctx = new ResolveScrapMultipleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, StarStarParser.RULE_resolveScrapMultiple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 319;
	        this.match(StarStarParser.SCRAP);
	        this.state = 320;
	        this.match(StarStarParser.UP);
	        this.state = 321;
	        this.match(StarStarParser.TO);
	        this.state = 322;
	        this.match(StarStarParser.INT);
	        this.state = 323;
	        this.match(StarStarParser.CARDS);
	        this.state = 324;
	        this.match(StarStarParser.FROM);
	        this.state = 325;
	        this.match(StarStarParser.YOUR);
	        this.state = 326;
	        this.match(StarStarParser.HAND);
	        this.state = 327;
	        this.match(StarStarParser.OR);
	        this.state = 328;
	        this.match(StarStarParser.DISCARD);
	        this.state = 329;
	        this.match(StarStarParser.PILE);
	        this.state = 330;
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



	resolvePatience() {
	    let localctx = new ResolvePatienceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, StarStarParser.RULE_resolvePatience);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 333;
	        this.match(StarStarParser.CHOOSE);
	        this.state = 334;
	        this.match(StarStarParser.WORD);
	        this.state = 335;
	        this.match(StarStarParser.CARD);
	        this.state = 336;
	        this.match(StarStarParser.TO);
	        this.state = 337;
	        this.match(StarStarParser.SET);
	        this.state = 338;
	        this.match(StarStarParser.ASIDE);
	        this.state = 339;
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



	resolveOthers() {
	    let localctx = new ResolveOthersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, StarStarParser.RULE_resolveOthers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(StarStarParser.RESOLVING);
	        this.state = 344; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 344;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case StarStarParser.ACQUIRED:
	            case StarStarParser.ACTIVATING:
	            case StarStarParser.AUTHORITY:
	            case StarStarParser.COMMANDER:
	            case StarStarParser.ADD:
	            case StarStarParser.ALL:
	            case StarStarParser.ALLY:
	            case StarStarParser.ANY:
	            case StarStarParser.ASIDE:
	            case StarStarParser.CARD:
	            case StarStarParser.CARDS:
	            case StarStarParser.CHOOSE:
	            case StarStarParser.CHOSE:
	            case StarStarParser.COMBAT:
	            case StarStarParser.CONCEDED:
	            case StarStarParser.DECK:
	            case StarStarParser.DESTROYED:
	            case StarStarParser.DISCARD:
	            case StarStarParser.DISCARDING:
	            case StarStarParser.DISCARDS:
	            case StarStarParser.DREW:
	            case StarStarParser.ENDS:
	            case StarStarParser.EVENT:
	            case StarStarParser.FORM:
	            case StarStarParser.FROM:
	            case StarStarParser.GAME:
	            case StarStarParser.HAND:
	            case StarStarParser.HAS:
	            case StarStarParser.INDICATORS:
	            case StarStarParser.IS:
	            case StarStarParser.IN:
	            case StarStarParser.IT:
	            case StarStarParser.NEW:
	            case StarStarParser.NOT:
	            case StarStarParser.NOW:
	            case StarStarParser.OF:
	            case StarStarParser.OPPONENT:
	            case StarStarParser.OR:
	            case StarStarParser.PILE:
	            case StarStarParser.PLAY:
	            case StarStarParser.PLAYED:
	            case StarStarParser.REFRESH:
	            case StarStarParser.REVEALED:
	            case StarStarParser.RESOLVING:
	            case StarStarParser.SCRAP:
	            case StarStarParser.SCRAPPED:
	            case StarStarParser.SCRAPPING:
	            case StarStarParser.SET:
	            case StarStarParser.SHUFFLED:
	            case StarStarParser.THE:
	            case StarStarParser.TO:
	            case StarStarParser.TOP:
	            case StarStarParser.TURN:
	            case StarStarParser.UP:
	            case StarStarParser.WINS:
	            case StarStarParser.WON:
	            case StarStarParser.YOUR:
	            case StarStarParser.TRADE:
	            case StarStarParser.ROW:
	            case StarStarParser.WORD:
	                this.state = 342;
	                this.customWord();
	                break;
	            case StarStarParser.INT:
	                this.state = 343;
	                this.match(StarStarParser.INT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 346; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.AUTHORITY) | (1 << StarStarParser.COMMANDER) | (1 << StarStarParser.ADD) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ANY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CHOSE) | (1 << StarStarParser.COMBAT) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DISCARDS) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.HAND - 32)) | (1 << (StarStarParser.HAS - 32)) | (1 << (StarStarParser.INDICATORS - 32)) | (1 << (StarStarParser.IS - 32)) | (1 << (StarStarParser.IN - 32)) | (1 << (StarStarParser.IT - 32)) | (1 << (StarStarParser.NEW - 32)) | (1 << (StarStarParser.NOT - 32)) | (1 << (StarStarParser.NOW - 32)) | (1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OPPONENT - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.TRADE - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (StarStarParser.ROW - 64)) | (1 << (StarStarParser.INT - 64)) | (1 << (StarStarParser.WORD - 64)))) !== 0));
	        this.state = 348;
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



	choseScrapHandOrDiscard() {
	    let localctx = new ChoseScrapHandOrDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, StarStarParser.RULE_choseScrapHandOrDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.match(StarStarParser.CHOSE);
	        this.state = 351;
	        this.match(StarStarParser.SCRAP);
	        this.state = 352;
	        this.match(StarStarParser.WORD);
	        this.state = 353;
	        this.match(StarStarParser.CARD);
	        this.state = 354;
	        this.match(StarStarParser.FROM);
	        this.state = 355;
	        this.match(StarStarParser.YOUR);
	        this.state = 356;
	        this.match(StarStarParser.HAND);
	        this.state = 357;
	        this.match(StarStarParser.OR);
	        this.state = 358;
	        this.match(StarStarParser.DISCARD);
	        this.state = 359;
	        this.match(StarStarParser.PILE);
	        this.state = 360;
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



	choseScrapDiscard() {
	    let localctx = new ChoseScrapDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, StarStarParser.RULE_choseScrapDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(StarStarParser.CHOSE);
	        this.state = 363;
	        this.match(StarStarParser.SCRAP);
	        this.state = 364;
	        this.match(StarStarParser.WORD);
	        this.state = 365;
	        this.match(StarStarParser.CARD);
	        this.state = 366;
	        this.match(StarStarParser.FROM);
	        this.state = 367;
	        this.match(StarStarParser.YOUR);
	        this.state = 368;
	        this.match(StarStarParser.DISCARD);
	        this.state = 369;
	        this.match(StarStarParser.PILE);
	        this.state = 370;
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



	choseBattleAndDiscard() {
	    let localctx = new ChoseBattleAndDiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, StarStarParser.RULE_choseBattleAndDiscard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(StarStarParser.CHOSE);
	        this.state = 373;
	        this.match(StarStarParser.ADD);
	        this.state = 374;
	        this.match(StarStarParser.INT);
	        this.state = 375;
	        this.match(StarStarParser.COMBAT);
	        this.state = 376;
	        this.match(StarStarParser.OPPONENT);
	        this.state = 377;
	        this.match(StarStarParser.DISCARDS);
	        this.state = 378;
	        this.match(StarStarParser.INT);
	        this.state = 379;
	        this.match(StarStarParser.CARDS);
	        this.state = 380;
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



	choseScrapTradeRow() {
	    let localctx = new ChoseScrapTradeRowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, StarStarParser.RULE_choseScrapTradeRow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(StarStarParser.CHOSE);
	        this.state = 383;
	        this.match(StarStarParser.ADD);
	        this.state = 384;
	        this.match(StarStarParser.INT);
	        this.state = 385;
	        this.match(StarStarParser.COMBAT);
	        this.state = 386;
	        this.match(StarStarParser.SCRAP);
	        this.state = 387;
	        this.match(StarStarParser.WORD);
	        this.state = 388;
	        this.match(StarStarParser.CARD);
	        this.state = 389;
	        this.match(StarStarParser.IN);
	        this.state = 390;
	        this.match(StarStarParser.THE);
	        this.state = 391;
	        this.match(StarStarParser.TRADE);
	        this.state = 392;
	        this.match(StarStarParser.ROW);
	        this.state = 393;
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



	choseAddAuthority() {
	    let localctx = new ChoseAddAuthorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, StarStarParser.RULE_choseAddAuthority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(StarStarParser.CHOSE);
	        this.state = 396;
	        this.match(StarStarParser.ADD);
	        this.state = 397;
	        this.match(StarStarParser.INT);
	        this.state = 398;
	        this.match(StarStarParser.AUTHORITY);
	        this.state = 399;
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



	noScrap() {
	    let localctx = new NoScrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, StarStarParser.RULE_noScrap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.name();
	        this.state = 402;
	        this.match(StarStarParser.IS);
	        this.state = 403;
	        this.match(StarStarParser.NOT);
	        this.state = 404;
	        this.match(StarStarParser.SCRAPPING);
	        this.state = 405;
	        this.match(StarStarParser.ANY);
	        this.state = 406;
	        this.match(StarStarParser.CARDS);
	        this.state = 407;
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



	concede() {
	    let localctx = new ConcedeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, StarStarParser.RULE_concede);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.name();
	        this.state = 410;
	        this.match(StarStarParser.T__0);
	        this.state = 411;
	        this.match(StarStarParser.INT);
	        this.state = 412;
	        this.match(StarStarParser.T__2);
	        this.state = 413;
	        this.match(StarStarParser.CONCEDED);
	        this.state = 414;
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



	timeout() {
	    let localctx = new TimeoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, StarStarParser.RULE_timeout);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.name();
	        this.state = 417;
	        this.match(StarStarParser.WINS);
	        this.state = 418;
	        this.match(StarStarParser.THE);
	        this.state = 419;
	        this.match(StarStarParser.GAME);
	        this.state = 420;
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
	    this.enterRule(localctx, 78, StarStarParser.RULE_shuffleCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(StarStarParser.SHUFFLED);
	        this.state = 423;
	        this.match(StarStarParser.DISCARD);
	        this.state = 424;
	        this.match(StarStarParser.PILE);
	        this.state = 425;
	        this.match(StarStarParser.TO);
	        this.state = 426;
	        this.match(StarStarParser.FORM);
	        this.state = 427;
	        this.match(StarStarParser.NEW);
	        this.state = 428;
	        this.match(StarStarParser.DECK);
	        this.state = 429;
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
	    this.enterRule(localctx, 80, StarStarParser.RULE_effect);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        _la = this._input.LA(1);
	        if(!(((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (StarStarParser.INT - 72)) | (1 << (StarStarParser.INCREMENT - 72)) | (1 << (StarStarParser.DECREASE - 72)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 432;
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
	    this.enterRule(localctx, 82, StarStarParser.RULE_drawCards);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
	        this.match(StarStarParser.DREW);
	        this.state = 435;
	        this.match(StarStarParser.INT);
	        this.state = 436;
	        this.match(StarStarParser.CARDS);
	        this.state = 437;
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
	    this.enterRule(localctx, 84, StarStarParser.RULE_card);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 444;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case StarStarParser.ACQUIRED:
	        		case StarStarParser.ACTIVATING:
	        		case StarStarParser.AUTHORITY:
	        		case StarStarParser.COMMANDER:
	        		case StarStarParser.ADD:
	        		case StarStarParser.ALL:
	        		case StarStarParser.ALLY:
	        		case StarStarParser.ANY:
	        		case StarStarParser.ASIDE:
	        		case StarStarParser.CARD:
	        		case StarStarParser.CARDS:
	        		case StarStarParser.CHOOSE:
	        		case StarStarParser.CHOSE:
	        		case StarStarParser.COMBAT:
	        		case StarStarParser.CONCEDED:
	        		case StarStarParser.DECK:
	        		case StarStarParser.DESTROYED:
	        		case StarStarParser.DISCARD:
	        		case StarStarParser.DISCARDING:
	        		case StarStarParser.DISCARDS:
	        		case StarStarParser.DREW:
	        		case StarStarParser.ENDS:
	        		case StarStarParser.EVENT:
	        		case StarStarParser.FORM:
	        		case StarStarParser.FROM:
	        		case StarStarParser.GAME:
	        		case StarStarParser.HAND:
	        		case StarStarParser.HAS:
	        		case StarStarParser.INDICATORS:
	        		case StarStarParser.IS:
	        		case StarStarParser.IN:
	        		case StarStarParser.IT:
	        		case StarStarParser.NEW:
	        		case StarStarParser.NOT:
	        		case StarStarParser.NOW:
	        		case StarStarParser.OF:
	        		case StarStarParser.OPPONENT:
	        		case StarStarParser.OR:
	        		case StarStarParser.PILE:
	        		case StarStarParser.PLAY:
	        		case StarStarParser.PLAYED:
	        		case StarStarParser.REFRESH:
	        		case StarStarParser.REVEALED:
	        		case StarStarParser.RESOLVING:
	        		case StarStarParser.SCRAP:
	        		case StarStarParser.SCRAPPED:
	        		case StarStarParser.SCRAPPING:
	        		case StarStarParser.SET:
	        		case StarStarParser.SHUFFLED:
	        		case StarStarParser.THE:
	        		case StarStarParser.TO:
	        		case StarStarParser.TOP:
	        		case StarStarParser.TURN:
	        		case StarStarParser.UP:
	        		case StarStarParser.WINS:
	        		case StarStarParser.WON:
	        		case StarStarParser.YOUR:
	        		case StarStarParser.TRADE:
	        		case StarStarParser.ROW:
	        		case StarStarParser.WORD:
	        		    this.state = 439;
	        		    this.customWord();
	        		    this.state = 441;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		    if(_la===StarStarParser.T__3) {
	        		        this.state = 440;
	        		        this.match(StarStarParser.T__3);
	        		    }

	        		    break;
	        		case StarStarParser.INT:
	        		    this.state = 443;
	        		    this.match(StarStarParser.INT);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 446; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
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
	    this.enterRule(localctx, 86, StarStarParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 448;
	        		this.customWord();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 451; 
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



	customWord() {
	    let localctx = new CustomWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, StarStarParser.RULE_customWord);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StarStarParser.ACQUIRED) | (1 << StarStarParser.ACTIVATING) | (1 << StarStarParser.AUTHORITY) | (1 << StarStarParser.COMMANDER) | (1 << StarStarParser.ADD) | (1 << StarStarParser.ALL) | (1 << StarStarParser.ALLY) | (1 << StarStarParser.ANY) | (1 << StarStarParser.ASIDE) | (1 << StarStarParser.CARD) | (1 << StarStarParser.CARDS) | (1 << StarStarParser.CHOOSE) | (1 << StarStarParser.CHOSE) | (1 << StarStarParser.COMBAT) | (1 << StarStarParser.CONCEDED) | (1 << StarStarParser.DECK) | (1 << StarStarParser.DESTROYED) | (1 << StarStarParser.DISCARD) | (1 << StarStarParser.DISCARDING) | (1 << StarStarParser.DISCARDS) | (1 << StarStarParser.DREW) | (1 << StarStarParser.ENDS) | (1 << StarStarParser.EVENT) | (1 << StarStarParser.FORM) | (1 << StarStarParser.FROM) | (1 << StarStarParser.GAME))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StarStarParser.HAND - 32)) | (1 << (StarStarParser.HAS - 32)) | (1 << (StarStarParser.INDICATORS - 32)) | (1 << (StarStarParser.IS - 32)) | (1 << (StarStarParser.IN - 32)) | (1 << (StarStarParser.IT - 32)) | (1 << (StarStarParser.NEW - 32)) | (1 << (StarStarParser.NOT - 32)) | (1 << (StarStarParser.NOW - 32)) | (1 << (StarStarParser.OF - 32)) | (1 << (StarStarParser.OPPONENT - 32)) | (1 << (StarStarParser.OR - 32)) | (1 << (StarStarParser.PILE - 32)) | (1 << (StarStarParser.PLAY - 32)) | (1 << (StarStarParser.PLAYED - 32)) | (1 << (StarStarParser.REFRESH - 32)) | (1 << (StarStarParser.REVEALED - 32)) | (1 << (StarStarParser.RESOLVING - 32)) | (1 << (StarStarParser.SCRAP - 32)) | (1 << (StarStarParser.SCRAPPED - 32)) | (1 << (StarStarParser.SCRAPPING - 32)) | (1 << (StarStarParser.SET - 32)) | (1 << (StarStarParser.SHUFFLED - 32)) | (1 << (StarStarParser.THE - 32)) | (1 << (StarStarParser.TO - 32)) | (1 << (StarStarParser.TOP - 32)) | (1 << (StarStarParser.TURN - 32)) | (1 << (StarStarParser.UP - 32)) | (1 << (StarStarParser.WINS - 32)) | (1 << (StarStarParser.WON - 32)) | (1 << (StarStarParser.YOUR - 32)) | (1 << (StarStarParser.TRADE - 32)))) !== 0) || _la===StarStarParser.ROW || _la===StarStarParser.WORD)) {
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
StarStarParser.AUTHORITY = 7;
StarStarParser.COMMANDER = 8;
StarStarParser.ADD = 9;
StarStarParser.ALL = 10;
StarStarParser.ALLY = 11;
StarStarParser.ANY = 12;
StarStarParser.ASIDE = 13;
StarStarParser.CARD = 14;
StarStarParser.CARDS = 15;
StarStarParser.CHOOSE = 16;
StarStarParser.CHOSE = 17;
StarStarParser.COMBAT = 18;
StarStarParser.CONCEDED = 19;
StarStarParser.DECK = 20;
StarStarParser.DESTROYED = 21;
StarStarParser.DISCARD = 22;
StarStarParser.DISCARDED = 23;
StarStarParser.DISCARDING = 24;
StarStarParser.DISCARDS = 25;
StarStarParser.DREW = 26;
StarStarParser.ENDS = 27;
StarStarParser.EVENT = 28;
StarStarParser.FORM = 29;
StarStarParser.FROM = 30;
StarStarParser.GAME = 31;
StarStarParser.HAND = 32;
StarStarParser.HAS = 33;
StarStarParser.INDICATORS = 34;
StarStarParser.IS = 35;
StarStarParser.IN = 36;
StarStarParser.IT = 37;
StarStarParser.NEW = 38;
StarStarParser.NOT = 39;
StarStarParser.NOW = 40;
StarStarParser.OF = 41;
StarStarParser.OPPONENT = 42;
StarStarParser.OR = 43;
StarStarParser.PILE = 44;
StarStarParser.PLAY = 45;
StarStarParser.PLAYED = 46;
StarStarParser.REFRESH = 47;
StarStarParser.REVEALED = 48;
StarStarParser.RESOLVING = 49;
StarStarParser.SCRAP = 50;
StarStarParser.SCRAPPED = 51;
StarStarParser.SCRAPPING = 52;
StarStarParser.SET = 53;
StarStarParser.SHUFFLED = 54;
StarStarParser.THE = 55;
StarStarParser.TO = 56;
StarStarParser.TOP = 57;
StarStarParser.TURN = 58;
StarStarParser.UP = 59;
StarStarParser.WINS = 60;
StarStarParser.WON = 61;
StarStarParser.YOUR = 62;
StarStarParser.TRADE = 63;
StarStarParser.ROW = 64;
StarStarParser.WHITESPACE = 65;
StarStarParser.COLOR_START_TAG = 66;
StarStarParser.COLOR_END_TAG = 67;
StarStarParser.END_GAME_TAG = 68;
StarStarParser.DOT = 69;
StarStarParser.SEMICOLUM = 70;
StarStarParser.COMMA = 71;
StarStarParser.INT = 72;
StarStarParser.WORD = 73;
StarStarParser.SEPARATOR = 74;
StarStarParser.NEWLINE = 75;
StarStarParser.INCREMENT = 76;
StarStarParser.DECREASE = 77;

StarStarParser.RULE_battle = 0;
StarStarParser.RULE_turn = 1;
StarStarParser.RULE_action = 2;
StarStarParser.RULE_cardAction = 3;
StarStarParser.RULE_cardTrigger = 4;
StarStarParser.RULE_cardEffect = 5;
StarStarParser.RULE_skipText = 6;
StarStarParser.RULE_balanceUpdate = 7;
StarStarParser.RULE_otherEffect = 8;
StarStarParser.RULE_resolveCommander = 9;
StarStarParser.RULE_scrapSummary = 10;
StarStarParser.RULE_discarded = 11;
StarStarParser.RULE_winStatus = 12;
StarStarParser.RULE_event = 13;
StarStarParser.RULE_mission = 14;
StarStarParser.RULE_scrapped = 15;
StarStarParser.RULE_destroyBase = 16;
StarStarParser.RULE_cardAcquisition = 17;
StarStarParser.RULE_acquireToHand = 18;
StarStarParser.RULE_acquireToDeck = 19;
StarStarParser.RULE_playSingle = 20;
StarStarParser.RULE_activate = 21;
StarStarParser.RULE_scrapSelf = 22;
StarStarParser.RULE_endTurn = 23;
StarStarParser.RULE_startTurn = 24;
StarStarParser.RULE_resolving = 25;
StarStarParser.RULE_resolveScrapHand = 26;
StarStarParser.RULE_resolveScrapHandOrDiscard = 27;
StarStarParser.RULE_resolveScrapMultiple = 28;
StarStarParser.RULE_resolvePatience = 29;
StarStarParser.RULE_resolveOthers = 30;
StarStarParser.RULE_choseScrapHandOrDiscard = 31;
StarStarParser.RULE_choseScrapDiscard = 32;
StarStarParser.RULE_choseBattleAndDiscard = 33;
StarStarParser.RULE_choseScrapTradeRow = 34;
StarStarParser.RULE_choseAddAuthority = 35;
StarStarParser.RULE_noScrap = 36;
StarStarParser.RULE_concede = 37;
StarStarParser.RULE_timeout = 38;
StarStarParser.RULE_shuffleCards = 39;
StarStarParser.RULE_effect = 40;
StarStarParser.RULE_drawCards = 41;
StarStarParser.RULE_card = 42;
StarStarParser.RULE_name = 43;
StarStarParser.RULE_customWord = 44;

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

	resolveCommander() {
	    return this.getTypedRuleContext(ResolveCommanderContext,0);
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

	concede() {
	    return this.getTypedRuleContext(ConcedeContext,0);
	};

	timeout() {
	    return this.getTypedRuleContext(TimeoutContext,0);
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

	event() {
	    return this.getTypedRuleContext(EventContext,0);
	};

	mission() {
	    return this.getTypedRuleContext(MissionContext,0);
	};

	resolving() {
	    return this.getTypedRuleContext(ResolvingContext,0);
	};

	choseScrapHandOrDiscard() {
	    return this.getTypedRuleContext(ChoseScrapHandOrDiscardContext,0);
	};

	choseScrapDiscard() {
	    return this.getTypedRuleContext(ChoseScrapDiscardContext,0);
	};

	choseBattleAndDiscard() {
	    return this.getTypedRuleContext(ChoseBattleAndDiscardContext,0);
	};

	choseScrapTradeRow() {
	    return this.getTypedRuleContext(ChoseScrapTradeRowContext,0);
	};

	choseAddAuthority() {
	    return this.getTypedRuleContext(ChoseAddAuthorityContext,0);
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

	otherEffect() {
	    return this.getTypedRuleContext(OtherEffectContext,0);
	};

	acquireToHand() {
	    return this.getTypedRuleContext(AcquireToHandContext,0);
	};

	acquireToDeck() {
	    return this.getTypedRuleContext(AcquireToDeckContext,0);
	};

	noScrap() {
	    return this.getTypedRuleContext(NoScrapContext,0);
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



class ResolveCommanderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveCommander;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	COMMANDER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.COMMANDER);
	    } else {
	        return this.getToken(StarStarParser.COMMANDER, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.WORD);
	    } else {
	        return this.getToken(StarStarParser.WORD, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StarStarParser.OR);
	    } else {
	        return this.getToken(StarStarParser.OR, i);
	    }
	};


	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveCommander(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveCommander(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveCommander(this);
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



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_event;
    }

	REVEALED() {
	    return this.getToken(StarStarParser.REVEALED, 0);
	};

	EVENT() {
	    return this.getToken(StarStarParser.EVENT, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitEvent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitEvent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MissionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_mission;
    }

	REVEALED() {
	    return this.getToken(StarStarParser.REVEALED, 0);
	};

	card() {
	    return this.getTypedRuleContext(CardContext,0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterMission(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitMission(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitMission(this);
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

	resolveScrapHand() {
	    return this.getTypedRuleContext(ResolveScrapHandContext,0);
	};

	resolveScrapHandOrDiscard() {
	    return this.getTypedRuleContext(ResolveScrapHandOrDiscardContext,0);
	};

	resolveScrapMultiple() {
	    return this.getTypedRuleContext(ResolveScrapMultipleContext,0);
	};

	resolvePatience() {
	    return this.getTypedRuleContext(ResolvePatienceContext,0);
	};

	resolveOthers() {
	    return this.getTypedRuleContext(ResolveOthersContext,0);
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



class ResolveScrapHandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveScrapHand;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveScrapHand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveScrapHand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveScrapHand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveScrapHandOrDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveScrapHandOrDiscard;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveScrapHandOrDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveScrapHandOrDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveScrapHandOrDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveScrapMultipleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveScrapMultiple;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	UP() {
	    return this.getToken(StarStarParser.UP, 0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveScrapMultiple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveScrapMultiple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveScrapMultiple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolvePatienceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolvePatience;
    }

	RESOLVING() {
	    return this.getToken(StarStarParser.RESOLVING, 0);
	};

	CHOOSE() {
	    return this.getToken(StarStarParser.CHOOSE, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	TO() {
	    return this.getToken(StarStarParser.TO, 0);
	};

	SET() {
	    return this.getToken(StarStarParser.SET, 0);
	};

	ASIDE() {
	    return this.getToken(StarStarParser.ASIDE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolvePatience(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolvePatience(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolvePatience(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResolveOthersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_resolveOthers;
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


	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterResolveOthers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitResolveOthers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitResolveOthers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseScrapHandOrDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_choseScrapHandOrDiscard;
    }

	CHOSE() {
	    return this.getToken(StarStarParser.CHOSE, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	HAND() {
	    return this.getToken(StarStarParser.HAND, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterChoseScrapHandOrDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitChoseScrapHandOrDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitChoseScrapHandOrDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseScrapDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_choseScrapDiscard;
    }

	CHOSE() {
	    return this.getToken(StarStarParser.CHOSE, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	DISCARD() {
	    return this.getToken(StarStarParser.DISCARD, 0);
	};

	PILE() {
	    return this.getToken(StarStarParser.PILE, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterChoseScrapDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitChoseScrapDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitChoseScrapDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseBattleAndDiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_choseBattleAndDiscard;
    }

	CHOSE() {
	    return this.getToken(StarStarParser.CHOSE, 0);
	};

	ADD() {
	    return this.getToken(StarStarParser.ADD, 0);
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


	COMBAT() {
	    return this.getToken(StarStarParser.COMBAT, 0);
	};

	OPPONENT() {
	    return this.getToken(StarStarParser.OPPONENT, 0);
	};

	DISCARDS() {
	    return this.getToken(StarStarParser.DISCARDS, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterChoseBattleAndDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitChoseBattleAndDiscard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitChoseBattleAndDiscard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseScrapTradeRowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_choseScrapTradeRow;
    }

	CHOSE() {
	    return this.getToken(StarStarParser.CHOSE, 0);
	};

	ADD() {
	    return this.getToken(StarStarParser.ADD, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	COMBAT() {
	    return this.getToken(StarStarParser.COMBAT, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	WORD() {
	    return this.getToken(StarStarParser.WORD, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	IN() {
	    return this.getToken(StarStarParser.IN, 0);
	};

	THE() {
	    return this.getToken(StarStarParser.THE, 0);
	};

	TRADE() {
	    return this.getToken(StarStarParser.TRADE, 0);
	};

	ROW() {
	    return this.getToken(StarStarParser.ROW, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterChoseScrapTradeRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitChoseScrapTradeRow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitChoseScrapTradeRow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChoseAddAuthorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_choseAddAuthority;
    }

	CHOSE() {
	    return this.getToken(StarStarParser.CHOSE, 0);
	};

	ADD() {
	    return this.getToken(StarStarParser.ADD, 0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	AUTHORITY() {
	    return this.getToken(StarStarParser.AUTHORITY, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterChoseAddAuthority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitChoseAddAuthority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitChoseAddAuthority(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NoScrapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_noScrap;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	IS() {
	    return this.getToken(StarStarParser.IS, 0);
	};

	NOT() {
	    return this.getToken(StarStarParser.NOT, 0);
	};

	SCRAPPING() {
	    return this.getToken(StarStarParser.SCRAPPING, 0);
	};

	ANY() {
	    return this.getToken(StarStarParser.ANY, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterNoScrap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitNoScrap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitNoScrap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcedeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_concede;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	INT() {
	    return this.getToken(StarStarParser.INT, 0);
	};

	CONCEDED() {
	    return this.getToken(StarStarParser.CONCEDED, 0);
	};

	NEWLINE() {
	    return this.getToken(StarStarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.enterConcede(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitConcede(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitConcede(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TimeoutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StarStarParser.RULE_timeout;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	WINS() {
	    return this.getToken(StarStarParser.WINS, 0);
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
	        listener.enterTimeout(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StarStarListener ) {
	        listener.exitTimeout(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StarStarVisitor ) {
	        return visitor.visitTimeout(this);
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

	AUTHORITY() {
	    return this.getToken(StarStarParser.AUTHORITY, 0);
	};

	COMMANDER() {
	    return this.getToken(StarStarParser.COMMANDER, 0);
	};

	ADD() {
	    return this.getToken(StarStarParser.ADD, 0);
	};

	ALL() {
	    return this.getToken(StarStarParser.ALL, 0);
	};

	ALLY() {
	    return this.getToken(StarStarParser.ALLY, 0);
	};

	ANY() {
	    return this.getToken(StarStarParser.ANY, 0);
	};

	ASIDE() {
	    return this.getToken(StarStarParser.ASIDE, 0);
	};

	CARD() {
	    return this.getToken(StarStarParser.CARD, 0);
	};

	CARDS() {
	    return this.getToken(StarStarParser.CARDS, 0);
	};

	CHOOSE() {
	    return this.getToken(StarStarParser.CHOOSE, 0);
	};

	CHOSE() {
	    return this.getToken(StarStarParser.CHOSE, 0);
	};

	COMBAT() {
	    return this.getToken(StarStarParser.COMBAT, 0);
	};

	CONCEDED() {
	    return this.getToken(StarStarParser.CONCEDED, 0);
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

	DISCARDS() {
	    return this.getToken(StarStarParser.DISCARDS, 0);
	};

	DREW() {
	    return this.getToken(StarStarParser.DREW, 0);
	};

	ENDS() {
	    return this.getToken(StarStarParser.ENDS, 0);
	};

	EVENT() {
	    return this.getToken(StarStarParser.EVENT, 0);
	};

	FORM() {
	    return this.getToken(StarStarParser.FORM, 0);
	};

	FROM() {
	    return this.getToken(StarStarParser.FROM, 0);
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

	IN() {
	    return this.getToken(StarStarParser.IN, 0);
	};

	IT() {
	    return this.getToken(StarStarParser.IT, 0);
	};

	NEW() {
	    return this.getToken(StarStarParser.NEW, 0);
	};

	NOT() {
	    return this.getToken(StarStarParser.NOT, 0);
	};

	NOW() {
	    return this.getToken(StarStarParser.NOW, 0);
	};

	OF() {
	    return this.getToken(StarStarParser.OF, 0);
	};

	OPPONENT() {
	    return this.getToken(StarStarParser.OPPONENT, 0);
	};

	OR() {
	    return this.getToken(StarStarParser.OR, 0);
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

	REVEALED() {
	    return this.getToken(StarStarParser.REVEALED, 0);
	};

	SCRAP() {
	    return this.getToken(StarStarParser.SCRAP, 0);
	};

	SCRAPPED() {
	    return this.getToken(StarStarParser.SCRAPPED, 0);
	};

	SCRAPPING() {
	    return this.getToken(StarStarParser.SCRAPPING, 0);
	};

	SET() {
	    return this.getToken(StarStarParser.SET, 0);
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

	UP() {
	    return this.getToken(StarStarParser.UP, 0);
	};

	WINS() {
	    return this.getToken(StarStarParser.WINS, 0);
	};

	WON() {
	    return this.getToken(StarStarParser.WON, 0);
	};

	YOUR() {
	    return this.getToken(StarStarParser.YOUR, 0);
	};

	TRADE() {
	    return this.getToken(StarStarParser.TRADE, 0);
	};

	ROW() {
	    return this.getToken(StarStarParser.ROW, 0);
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
StarStarParser.ResolveCommanderContext = ResolveCommanderContext; 
StarStarParser.ScrapSummaryContext = ScrapSummaryContext; 
StarStarParser.DiscardedContext = DiscardedContext; 
StarStarParser.WinStatusContext = WinStatusContext; 
StarStarParser.EventContext = EventContext; 
StarStarParser.MissionContext = MissionContext; 
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
StarStarParser.ResolveScrapHandContext = ResolveScrapHandContext; 
StarStarParser.ResolveScrapHandOrDiscardContext = ResolveScrapHandOrDiscardContext; 
StarStarParser.ResolveScrapMultipleContext = ResolveScrapMultipleContext; 
StarStarParser.ResolvePatienceContext = ResolvePatienceContext; 
StarStarParser.ResolveOthersContext = ResolveOthersContext; 
StarStarParser.ChoseScrapHandOrDiscardContext = ChoseScrapHandOrDiscardContext; 
StarStarParser.ChoseScrapDiscardContext = ChoseScrapDiscardContext; 
StarStarParser.ChoseBattleAndDiscardContext = ChoseBattleAndDiscardContext; 
StarStarParser.ChoseScrapTradeRowContext = ChoseScrapTradeRowContext; 
StarStarParser.ChoseAddAuthorityContext = ChoseAddAuthorityContext; 
StarStarParser.NoScrapContext = NoScrapContext; 
StarStarParser.ConcedeContext = ConcedeContext; 
StarStarParser.TimeoutContext = TimeoutContext; 
StarStarParser.ShuffleCardsContext = ShuffleCardsContext; 
StarStarParser.EffectContext = EffectContext; 
StarStarParser.DrawCardsContext = DrawCardsContext; 
StarStarParser.CardContext = CardContext; 
StarStarParser.NameContext = NameContext; 
StarStarParser.CustomWordContext = CustomWordContext; 
