# Star Realms battle log parser

## Prerequisite

Node.js needs to be installed in order to run the website built with Next.js

Antlr4 jar file needs to be available in order to generated the lexer/parser from the library
See the getting started guide [here](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)

## Work on the grammar

This repo contains a grammar written in Antlr4 for the Star Realms Battle log file.

Any language  can be used while testing the grammar in isolation

The `test_grammar.bat` file will generate a lexer/parser in Java from the grammar file
and use `logfile` as input to generate a parse tree

## Generate the antlr4 code used by the website

```bash
antlr4 -Dlanguage=JavaScript StarRealms.g4 -visitor -o website/lib/antlr4
```

Any changes in the grammar will mean the visitor file (`website/lib/visitor.js`) will need to be updated

## Run the website

```bash
cd website
npm run dev
```