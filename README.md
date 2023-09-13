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

## Testing

You can run the test suite using the following commands:

1. start the website:
```bash
cd website
npm run dev
```
2. In a separate window run:
```bash
antlr4 -Dlanguage=JavaScript StarRealms.g4 -visitor -o website/test/antlr4
cd website/test
node test.js
```

The test suite will check 3 things:
1. That the grammar can successfully be used to parse all the test cases (no parsing errors).
2. That that generated parse tree is the same as previous iterations of the app. This ensures we are not introducing errors (no tree generation errors)
3. That the json object representing a battle is the same as previous iterations of the app. This ensures we are not introducing errors (no battle object errors)

Some changes to the tree structure can be expected when the grammar changes. In that case the test cases need to be updated with the latest data
Changes to the battle object should be less frequent.


## Add support for a new extension
PREREQUISITE: All existing test cases need to pass before adding a new extension. Otherwise we won't be able to 
correctly identify regressions in the grammar or visitor file.

When a new Star Realms extension comes out these are the steps that need to be followed to fully support it within SR-stats.
1. **Add Assets for the extension**: For each extension there is a logo associated. All logos are located in the public/images/extensions folder.
Images of all new cards for the extension will need to be added to the folder images/<extension-name>. Image filenames should be lowercase with
no spacing and with the extension ".jpg". These images come from screenshots of the game which have then been cropped.
2. **Get logdata for the extension**: In order to be able to test the new extension logdata of games that include the extension need to be added 
to the folder test/logdata/<extension-name>. These files are usually named with the timestamp of when they were played.
3. **Adjust the grammar/visitor**: The first step is to check if the grammar can still generate a parse tree using the new logfiles. Usually this is 
tested using the test_grammar.bat file. If the tree can be generated, the next step is to verify that the API will return a correct json for
each logfile. This is to ensure that the tree is correctly parsed. Depending on where things go wrong, the grammar and/or the visitor code
will need to be updated.
4. **Test the new grammar/visitor**: See the testing sectioncd  
5. **Update the json model for the extension**: In order for the frontend to know what info to display it needs to have all the data relating to the
new extension. This is handled by adding a new javascript file lib/card_data/<extension_name>.js. Next you will need to import this structure in the
cards.js file



## Add battle log to the input field

Once you finished a game of Star Realms on desktop or mobile you can retrieve the battle logs and
use it as input to the parser. The following screenshots shows how to get the battle logs.

![1](./assets/1.png)

![2](./assets/2.png)

![3](./assets/3.png)