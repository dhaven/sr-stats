# Star Realms battle log parser

This repo contains a grammar written in Antlr4 for the Star Realms Battle log file.
A visitor implementation is also included for parsing the generated tree.

Generate a lexer/parser implementation from the grammar by running:

```bash
antlr4 -Dlanguage=Python3 StarRealms.g4 -visitor
```

Run the visitor code with:
```bash
python main.py logfile
```