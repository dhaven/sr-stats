#!/usr/bin/env node

import { ListObjectsV2Command, GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import axios from 'axios';
import fs from 'fs';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const REGION = "eu-west-1";
const IAMCreds = {
    accessKeyId: "XXX",
    secretAccessKey: "XXX"
}
const s3Client = new S3Client({ region: REGION, credentials: IAMCreds });

const listCommand = new ListObjectsV2Command({
    Bucket: "star-realms-prod",
    Prefix: "games/"
});
let battleFilenames = [];

try {
    let isTruncated = true;
    while (isTruncated) {
        const { Contents, IsTruncated, NextContinuationToken } = await s3Client.send(listCommand);
        Contents.map((c) => battleFilenames.push(c.Key));
        isTruncated = IsTruncated;
        listCommand.input.ContinuationToken = NextContinuationToken;
    }
} catch (err) {
    console.error(err);
}
for(let i = 1; i < battleFilenames.length; i++){
    let battleData = ""
    const getCommand = new GetObjectCommand({
        Bucket: "star-realms-prod",
        Key: battleFilenames[i]
    });
    try {
        const response = await s3Client.send(getCommand);
        // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
        battleData = await response.Body.transformToString();
        fs.writeFileSync(battleFilenames[i] + ".txt", battleData, 'utf8');
    } catch (err) {
        console.error(err);
    }
    // await axios
    //     .post('http://localhost:3000/api/test', JSON.stringify(battleData),)
    //     .then(res => {
    //         try {
    //             fs.writeFileSync(battleFilenames[i] + ".json", JSON.stringify(res.data, null, 2), 'utf8');
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
}
