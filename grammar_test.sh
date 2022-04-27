# 1. Compile grammar to folder
# 2. Loop through all files in the logdata folder
# 3. For each file parse it using the grammar
# 4. the output should always be empty. An non-empt output indicates an error

java org.antlr.v4.Tool StarRealms.g4 -o java
cd java
javac StarRealms*.java

filenames=$(find ../logdata -maxdepth 2 -mindepth 1 -type f)
errorCount=0
for filepath in $filenames
do
    filename=$(basename $filepath)
    java org.antlr.v4.gui.TestRig StarRealms battle  -gui $filepath > ../test-output/${filename} 2> ../test-error/${filename}
    if [ -s ../test-error/${filename} ]; then
        echo "Unable to parse input file ${filepath}"
        errorCount=$((errorCount+1))
    fi
done
echo "Found ${errorCount} errors while parsing the test files"