// Generated from StarStar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,61,593,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,
56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,
7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
85,7,85,2,86,7,86,2,87,7,87,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,
1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,
13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,
1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,
27,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,
33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,
37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,
41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,
1,42,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,
45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,48,1,48,
1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
50,1,50,1,50,1,50,1,51,1,51,1,51,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,
1,54,1,54,1,54,1,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,
58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,
1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,
1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,
65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,
70,1,70,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,
1,73,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,
75,1,75,5,75,526,8,75,10,75,12,75,529,9,75,1,75,1,75,1,75,1,75,1,76,1,76,
1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,
77,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,81,4,81,
565,8,81,11,81,12,81,566,1,82,1,82,1,83,1,83,4,83,573,8,83,11,83,12,83,574,
1,84,1,84,1,85,3,85,580,8,85,1,85,1,85,4,85,584,8,85,11,85,12,85,585,1,86,
1,86,1,86,1,87,1,87,1,87,0,0,88,1,1,3,2,5,3,7,4,9,0,11,0,13,0,15,0,17,0,
19,0,21,0,23,0,25,0,27,0,29,0,31,0,33,0,35,0,37,0,39,0,41,0,43,0,45,0,47,
0,49,0,51,0,53,0,55,0,57,0,59,0,61,5,63,6,65,7,67,8,69,9,71,10,73,11,75,
12,77,13,79,14,81,15,83,16,85,17,87,18,89,19,91,20,93,21,95,22,97,23,99,
24,101,25,103,26,105,27,107,28,109,29,111,30,113,31,115,32,117,33,119,34,
121,35,123,36,125,37,127,38,129,39,131,40,133,41,135,42,137,43,139,44,141,
45,143,46,145,47,147,48,149,49,151,50,153,51,155,52,157,53,159,54,161,55,
163,56,165,0,167,57,169,58,171,59,173,60,175,61,1,0,30,2,0,65,65,97,97,2,
0,66,66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,2,0,70,
70,102,102,2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,105,105,2,0,74,
74,106,106,2,0,75,75,107,107,2,0,76,76,108,108,2,0,77,77,109,109,2,0,78,
78,110,110,2,0,79,79,111,111,2,0,80,80,112,112,2,0,81,81,113,113,2,0,82,
82,114,114,2,0,83,83,115,115,2,0,84,84,116,116,2,0,85,85,117,117,2,0,86,
86,118,118,2,0,87,87,119,119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,
90,122,122,2,0,9,9,32,32,1,0,48,57,2,0,65,90,97,122,3,0,45,45,60,60,62,62,
573,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,61,1,0,0,0,0,63,1,
0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,
75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,
0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,
1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,
0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,
0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,
0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,
139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,
1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,
0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,
0,0,0,173,1,0,0,0,0,175,1,0,0,0,1,177,1,0,0,0,3,179,1,0,0,0,5,181,1,0,0,
0,7,183,1,0,0,0,9,186,1,0,0,0,11,188,1,0,0,0,13,190,1,0,0,0,15,192,1,0,0,
0,17,194,1,0,0,0,19,196,1,0,0,0,21,198,1,0,0,0,23,200,1,0,0,0,25,202,1,0,
0,0,27,204,1,0,0,0,29,206,1,0,0,0,31,208,1,0,0,0,33,210,1,0,0,0,35,212,1,
0,0,0,37,214,1,0,0,0,39,216,1,0,0,0,41,218,1,0,0,0,43,220,1,0,0,0,45,222,
1,0,0,0,47,224,1,0,0,0,49,226,1,0,0,0,51,228,1,0,0,0,53,230,1,0,0,0,55,232,
1,0,0,0,57,234,1,0,0,0,59,236,1,0,0,0,61,238,1,0,0,0,63,247,1,0,0,0,65,258,
1,0,0,0,67,262,1,0,0,0,69,267,1,0,0,0,71,272,1,0,0,0,73,278,1,0,0,0,75,287,
1,0,0,0,77,292,1,0,0,0,79,302,1,0,0,0,81,310,1,0,0,0,83,320,1,0,0,0,85,331,
1,0,0,0,87,336,1,0,0,0,89,341,1,0,0,0,91,347,1,0,0,0,93,352,1,0,0,0,95,357,
1,0,0,0,97,362,1,0,0,0,99,367,1,0,0,0,101,371,1,0,0,0,103,382,1,0,0,0,105,
385,1,0,0,0,107,388,1,0,0,0,109,392,1,0,0,0,111,396,1,0,0,0,113,399,1,0,
0,0,115,402,1,0,0,0,117,407,1,0,0,0,119,412,1,0,0,0,121,419,1,0,0,0,123,
427,1,0,0,0,125,436,1,0,0,0,127,446,1,0,0,0,129,452,1,0,0,0,131,461,1,0,
0,0,133,471,1,0,0,0,135,480,1,0,0,0,137,484,1,0,0,0,139,487,1,0,0,0,141,
491,1,0,0,0,143,496,1,0,0,0,145,501,1,0,0,0,147,505,1,0,0,0,149,510,1,0,
0,0,151,514,1,0,0,0,153,534,1,0,0,0,155,545,1,0,0,0,157,551,1,0,0,0,159,
555,1,0,0,0,161,559,1,0,0,0,163,564,1,0,0,0,165,568,1,0,0,0,167,572,1,0,
0,0,169,576,1,0,0,0,171,583,1,0,0,0,173,587,1,0,0,0,175,590,1,0,0,0,177,
178,5,40,0,0,178,2,1,0,0,0,179,180,5,58,0,0,180,4,1,0,0,0,181,182,5,41,0,
0,182,6,1,0,0,0,183,184,5,39,0,0,184,185,5,115,0,0,185,8,1,0,0,0,186,187,
7,0,0,0,187,10,1,0,0,0,188,189,7,1,0,0,189,12,1,0,0,0,190,191,7,2,0,0,191,
14,1,0,0,0,192,193,7,3,0,0,193,16,1,0,0,0,194,195,7,4,0,0,195,18,1,0,0,0,
196,197,7,5,0,0,197,20,1,0,0,0,198,199,7,6,0,0,199,22,1,0,0,0,200,201,7,
7,0,0,201,24,1,0,0,0,202,203,7,8,0,0,203,26,1,0,0,0,204,205,7,9,0,0,205,
28,1,0,0,0,206,207,7,10,0,0,207,30,1,0,0,0,208,209,7,11,0,0,209,32,1,0,0,
0,210,211,7,12,0,0,211,34,1,0,0,0,212,213,7,13,0,0,213,36,1,0,0,0,214,215,
7,14,0,0,215,38,1,0,0,0,216,217,7,15,0,0,217,40,1,0,0,0,218,219,7,16,0,0,
219,42,1,0,0,0,220,221,7,17,0,0,221,44,1,0,0,0,222,223,7,18,0,0,223,46,1,
0,0,0,224,225,7,19,0,0,225,48,1,0,0,0,226,227,7,20,0,0,227,50,1,0,0,0,228,
229,7,21,0,0,229,52,1,0,0,0,230,231,7,22,0,0,231,54,1,0,0,0,232,233,7,23,
0,0,233,56,1,0,0,0,234,235,7,24,0,0,235,58,1,0,0,0,236,237,7,25,0,0,237,
60,1,0,0,0,238,239,3,9,4,0,239,240,3,13,6,0,240,241,3,41,20,0,241,242,3,
49,24,0,242,243,3,25,12,0,243,244,3,43,21,0,244,245,3,17,8,0,245,246,3,15,
7,0,246,62,1,0,0,0,247,248,3,9,4,0,248,249,3,13,6,0,249,250,3,47,23,0,250,
251,3,25,12,0,251,252,3,51,25,0,252,253,3,9,4,0,253,254,3,47,23,0,254,255,
3,25,12,0,255,256,3,35,17,0,256,257,3,21,10,0,257,64,1,0,0,0,258,259,3,9,
4,0,259,260,3,31,15,0,260,261,3,31,15,0,261,66,1,0,0,0,262,263,3,9,4,0,263,
264,3,31,15,0,264,265,3,31,15,0,265,266,3,57,28,0,266,68,1,0,0,0,267,268,
3,13,6,0,268,269,3,9,4,0,269,270,3,43,21,0,270,271,3,15,7,0,271,70,1,0,0,
0,272,273,3,13,6,0,273,274,3,9,4,0,274,275,3,43,21,0,275,276,3,15,7,0,276,
277,3,45,22,0,277,72,1,0,0,0,278,279,3,13,6,0,279,280,3,37,18,0,280,281,
3,35,17,0,281,282,3,13,6,0,282,283,3,17,8,0,283,284,3,15,7,0,284,285,3,17,
8,0,285,286,3,15,7,0,286,74,1,0,0,0,287,288,3,15,7,0,288,289,3,17,8,0,289,
290,3,13,6,0,290,291,3,29,14,0,291,76,1,0,0,0,292,293,3,15,7,0,293,294,3,
17,8,0,294,295,3,45,22,0,295,296,3,47,23,0,296,297,3,43,21,0,297,298,3,37,
18,0,298,299,3,57,28,0,299,300,3,17,8,0,300,301,3,15,7,0,301,78,1,0,0,0,
302,303,3,15,7,0,303,304,3,25,12,0,304,305,3,45,22,0,305,306,3,13,6,0,306,
307,3,9,4,0,307,308,3,43,21,0,308,309,3,15,7,0,309,80,1,0,0,0,310,311,3,
15,7,0,311,312,3,25,12,0,312,313,3,45,22,0,313,314,3,13,6,0,314,315,3,9,
4,0,315,316,3,43,21,0,316,317,3,15,7,0,317,318,3,17,8,0,318,319,3,15,7,0,
319,82,1,0,0,0,320,321,3,15,7,0,321,322,3,25,12,0,322,323,3,45,22,0,323,
324,3,13,6,0,324,325,3,9,4,0,325,326,3,43,21,0,326,327,3,15,7,0,327,328,
3,25,12,0,328,329,3,35,17,0,329,330,3,21,10,0,330,84,1,0,0,0,331,332,3,15,
7,0,332,333,3,43,21,0,333,334,3,17,8,0,334,335,3,53,26,0,335,86,1,0,0,0,
336,337,3,17,8,0,337,338,3,35,17,0,338,339,3,15,7,0,339,340,3,45,22,0,340,
88,1,0,0,0,341,342,3,17,8,0,342,343,3,51,25,0,343,344,3,17,8,0,344,345,3,
35,17,0,345,346,3,47,23,0,346,90,1,0,0,0,347,348,3,19,9,0,348,349,3,37,18,
0,349,350,3,43,21,0,350,351,3,33,16,0,351,92,1,0,0,0,352,353,3,19,9,0,353,
354,3,43,21,0,354,355,3,37,18,0,355,356,3,33,16,0,356,94,1,0,0,0,357,358,
3,21,10,0,358,359,3,9,4,0,359,360,3,33,16,0,360,361,3,17,8,0,361,96,1,0,
0,0,362,363,3,23,11,0,363,364,3,9,4,0,364,365,3,35,17,0,365,366,3,15,7,0,
366,98,1,0,0,0,367,368,3,23,11,0,368,369,3,9,4,0,369,370,3,45,22,0,370,100,
1,0,0,0,371,372,3,25,12,0,372,373,3,35,17,0,373,374,3,15,7,0,374,375,3,25,
12,0,375,376,3,13,6,0,376,377,3,9,4,0,377,378,3,47,23,0,378,379,3,37,18,
0,379,380,3,43,21,0,380,381,3,45,22,0,381,102,1,0,0,0,382,383,3,25,12,0,
383,384,3,45,22,0,384,104,1,0,0,0,385,386,3,25,12,0,386,387,3,47,23,0,387,
106,1,0,0,0,388,389,3,35,17,0,389,390,3,17,8,0,390,391,3,53,26,0,391,108,
1,0,0,0,392,393,3,35,17,0,393,394,3,37,18,0,394,395,3,53,26,0,395,110,1,
0,0,0,396,397,3,37,18,0,397,398,3,19,9,0,398,112,1,0,0,0,399,400,3,37,18,
0,400,401,3,43,21,0,401,114,1,0,0,0,402,403,3,39,19,0,403,404,3,25,12,0,
404,405,3,31,15,0,405,406,3,17,8,0,406,116,1,0,0,0,407,408,3,39,19,0,408,
409,3,31,15,0,409,410,3,9,4,0,410,411,3,57,28,0,411,118,1,0,0,0,412,413,
3,39,19,0,413,414,3,31,15,0,414,415,3,9,4,0,415,416,3,57,28,0,416,417,3,
17,8,0,417,418,3,15,7,0,418,120,1,0,0,0,419,420,3,43,21,0,420,421,3,17,8,
0,421,422,3,19,9,0,422,423,3,43,21,0,423,424,3,17,8,0,424,425,3,45,22,0,
425,426,3,23,11,0,426,122,1,0,0,0,427,428,3,43,21,0,428,429,3,17,8,0,429,
430,3,51,25,0,430,431,3,17,8,0,431,432,3,9,4,0,432,433,3,31,15,0,433,434,
3,17,8,0,434,435,3,15,7,0,435,124,1,0,0,0,436,437,3,43,21,0,437,438,3,17,
8,0,438,439,3,45,22,0,439,440,3,37,18,0,440,441,3,31,15,0,441,442,3,51,25,
0,442,443,3,25,12,0,443,444,3,35,17,0,444,445,3,21,10,0,445,126,1,0,0,0,
446,447,3,45,22,0,447,448,3,13,6,0,448,449,3,43,21,0,449,450,3,9,4,0,450,
451,3,39,19,0,451,128,1,0,0,0,452,453,3,45,22,0,453,454,3,13,6,0,454,455,
3,43,21,0,455,456,3,9,4,0,456,457,3,39,19,0,457,458,3,39,19,0,458,459,3,
17,8,0,459,460,3,15,7,0,460,130,1,0,0,0,461,462,3,45,22,0,462,463,3,13,6,
0,463,464,3,43,21,0,464,465,3,9,4,0,465,466,3,39,19,0,466,467,3,39,19,0,
467,468,3,25,12,0,468,469,3,35,17,0,469,470,3,21,10,0,470,132,1,0,0,0,471,
472,3,45,22,0,472,473,3,23,11,0,473,474,3,49,24,0,474,475,3,19,9,0,475,476,
3,19,9,0,476,477,3,31,15,0,477,478,3,17,8,0,478,479,3,15,7,0,479,134,1,0,
0,0,480,481,3,47,23,0,481,482,3,23,11,0,482,483,3,17,8,0,483,136,1,0,0,0,
484,485,3,47,23,0,485,486,3,37,18,0,486,138,1,0,0,0,487,488,3,47,23,0,488,
489,3,37,18,0,489,490,3,39,19,0,490,140,1,0,0,0,491,492,3,47,23,0,492,493,
3,49,24,0,493,494,3,43,21,0,494,495,3,35,17,0,495,142,1,0,0,0,496,497,3,
53,26,0,497,498,3,25,12,0,498,499,3,35,17,0,499,500,3,45,22,0,500,144,1,
0,0,0,501,502,3,53,26,0,502,503,3,37,18,0,503,504,3,35,17,0,504,146,1,0,
0,0,505,506,3,57,28,0,506,507,3,37,18,0,507,508,3,49,24,0,508,509,3,43,21,
0,509,148,1,0,0,0,510,511,7,26,0,0,511,512,1,0,0,0,512,513,6,74,0,0,513,
150,1,0,0,0,514,515,5,60,0,0,515,516,5,99,0,0,516,517,5,111,0,0,517,518,
5,108,0,0,518,519,5,111,0,0,519,520,5,114,0,0,520,521,5,61,0,0,521,522,5,
35,0,0,522,527,1,0,0,0,523,526,3,165,82,0,524,526,3,163,81,0,525,523,1,0,
0,0,525,524,1,0,0,0,526,529,1,0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,
530,1,0,0,0,529,527,1,0,0,0,530,531,5,62,0,0,531,532,1,0,0,0,532,533,6,75,
0,0,533,152,1,0,0,0,534,535,5,60,0,0,535,536,5,47,0,0,536,537,5,99,0,0,537,
538,5,111,0,0,538,539,5,108,0,0,539,540,5,111,0,0,540,541,5,114,0,0,541,
542,5,62,0,0,542,543,1,0,0,0,543,544,6,76,0,0,544,154,1,0,0,0,545,546,5,
61,0,0,546,547,5,61,0,0,547,548,5,61,0,0,548,549,1,0,0,0,549,550,6,77,0,
0,550,156,1,0,0,0,551,552,5,46,0,0,552,553,1,0,0,0,553,554,6,78,0,0,554,
158,1,0,0,0,555,556,5,59,0,0,556,557,1,0,0,0,557,558,6,79,0,0,558,160,1,
0,0,0,559,560,5,44,0,0,560,561,1,0,0,0,561,562,6,80,0,0,562,162,1,0,0,0,
563,565,7,27,0,0,564,563,1,0,0,0,565,566,1,0,0,0,566,564,1,0,0,0,566,567,
1,0,0,0,567,164,1,0,0,0,568,569,7,28,0,0,569,166,1,0,0,0,570,573,3,165,82,
0,571,573,3,163,81,0,572,570,1,0,0,0,572,571,1,0,0,0,573,574,1,0,0,0,574,
572,1,0,0,0,574,575,1,0,0,0,575,168,1,0,0,0,576,577,7,29,0,0,577,170,1,0,
0,0,578,580,5,13,0,0,579,578,1,0,0,0,579,580,1,0,0,0,580,581,1,0,0,0,581,
584,5,10,0,0,582,584,5,13,0,0,583,579,1,0,0,0,583,582,1,0,0,0,584,585,1,
0,0,0,585,583,1,0,0,0,585,586,1,0,0,0,586,172,1,0,0,0,587,588,5,43,0,0,588,
589,3,163,81,0,589,174,1,0,0,0,590,591,5,45,0,0,591,592,3,163,81,0,592,176,
1,0,0,0,9,0,525,527,566,572,574,579,583,585,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class StarStarLexer extends antlr4.Lexer {

    static grammarFileName = "StarStar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "':'", "')'", "''s'", null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, "'</color>'", "'==='", 
                         "'.'", "';'", "','" ];
	static symbolicNames = [ null, null, null, null, null, "ACQUIRED", "ACTIVATING", 
                          "ALL", "ALLY", "CARD", "CARDS", "CONCEDED", "DECK", 
                          "DESTROYED", "DISCARD", "DISCARDED", "DISCARDING", 
                          "DREW", "ENDS", "EVENT", "FORM", "FROM", "GAME", 
                          "HAND", "HAS", "INDICATORS", "IS", "IT", "NEW", 
                          "NOW", "OF", "OR", "PILE", "PLAY", "PLAYED", "REFRESH", 
                          "REVEALED", "RESOLVING", "SCRAP", "SCRAPPED", 
                          "SCRAPPING", "SHUFFLED", "THE", "TO", "TOP", "TURN", 
                          "WINS", "WON", "YOUR", "WHITESPACE", "COLOR_START_TAG", 
                          "COLOR_END_TAG", "END_GAME_TAG", "DOT", "SEMICOLUM", 
                          "COMMA", "INT", "WORD", "SEPARATOR", "NEWLINE", 
                          "INCREMENT", "DECREASE" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "A", "B", "C", "D", 
                      "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
                      "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
                      "Y", "Z", "ACQUIRED", "ACTIVATING", "ALL", "ALLY", 
                      "CARD", "CARDS", "CONCEDED", "DECK", "DESTROYED", 
                      "DISCARD", "DISCARDED", "DISCARDING", "DREW", "ENDS", 
                      "EVENT", "FORM", "FROM", "GAME", "HAND", "HAS", "INDICATORS", 
                      "IS", "IT", "NEW", "NOW", "OF", "OR", "PILE", "PLAY", 
                      "PLAYED", "REFRESH", "REVEALED", "RESOLVING", "SCRAP", 
                      "SCRAPPED", "SCRAPPING", "SHUFFLED", "THE", "TO", 
                      "TOP", "TURN", "WINS", "WON", "YOUR", "WHITESPACE", 
                      "COLOR_START_TAG", "COLOR_END_TAG", "END_GAME_TAG", 
                      "DOT", "SEMICOLUM", "COMMA", "INT", "LETTER", "WORD", 
                      "SEPARATOR", "NEWLINE", "INCREMENT", "DECREASE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

StarStarLexer.EOF = antlr4.Token.EOF;
StarStarLexer.T__0 = 1;
StarStarLexer.T__1 = 2;
StarStarLexer.T__2 = 3;
StarStarLexer.T__3 = 4;
StarStarLexer.ACQUIRED = 5;
StarStarLexer.ACTIVATING = 6;
StarStarLexer.ALL = 7;
StarStarLexer.ALLY = 8;
StarStarLexer.CARD = 9;
StarStarLexer.CARDS = 10;
StarStarLexer.CONCEDED = 11;
StarStarLexer.DECK = 12;
StarStarLexer.DESTROYED = 13;
StarStarLexer.DISCARD = 14;
StarStarLexer.DISCARDED = 15;
StarStarLexer.DISCARDING = 16;
StarStarLexer.DREW = 17;
StarStarLexer.ENDS = 18;
StarStarLexer.EVENT = 19;
StarStarLexer.FORM = 20;
StarStarLexer.FROM = 21;
StarStarLexer.GAME = 22;
StarStarLexer.HAND = 23;
StarStarLexer.HAS = 24;
StarStarLexer.INDICATORS = 25;
StarStarLexer.IS = 26;
StarStarLexer.IT = 27;
StarStarLexer.NEW = 28;
StarStarLexer.NOW = 29;
StarStarLexer.OF = 30;
StarStarLexer.OR = 31;
StarStarLexer.PILE = 32;
StarStarLexer.PLAY = 33;
StarStarLexer.PLAYED = 34;
StarStarLexer.REFRESH = 35;
StarStarLexer.REVEALED = 36;
StarStarLexer.RESOLVING = 37;
StarStarLexer.SCRAP = 38;
StarStarLexer.SCRAPPED = 39;
StarStarLexer.SCRAPPING = 40;
StarStarLexer.SHUFFLED = 41;
StarStarLexer.THE = 42;
StarStarLexer.TO = 43;
StarStarLexer.TOP = 44;
StarStarLexer.TURN = 45;
StarStarLexer.WINS = 46;
StarStarLexer.WON = 47;
StarStarLexer.YOUR = 48;
StarStarLexer.WHITESPACE = 49;
StarStarLexer.COLOR_START_TAG = 50;
StarStarLexer.COLOR_END_TAG = 51;
StarStarLexer.END_GAME_TAG = 52;
StarStarLexer.DOT = 53;
StarStarLexer.SEMICOLUM = 54;
StarStarLexer.COMMA = 55;
StarStarLexer.INT = 56;
StarStarLexer.WORD = 57;
StarStarLexer.SEPARATOR = 58;
StarStarLexer.NEWLINE = 59;
StarStarLexer.INCREMENT = 60;
StarStarLexer.DECREASE = 61;



