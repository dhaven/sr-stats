let battleSchema =
{
    $jsonSchema: {
        properties: {
            _id: { bsonType: "objectId" },
            status: { bsonType: "string" },
            createdAt: { bsonType: "date" },
            data: {
                bsonType: "object",
                properties: {
                    winCondition: { bsonType: "string" },
                    firstPlayer: { bsonType: "string" },
                    winner: { bsonType: "string" },
                    rounds: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            properties: {
                                tradePool: { bsonType: "int" },
                                combatPool: { bsonType: "int" },
                                usedTrade: { bsonType: "int" },
                                usedCombat: { bsonType: "int" },
                                purchasedCards: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                completedMissions: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                events: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                scrappedCards: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                discardedCards: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                destroyedBases: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                winner: { bsonType: "string" },
                                winCondition: { bsonType: "string" },
                                drawCount: { bsonType: "int" },
                                shuffleCount: { bsonType: "int" },
                                authority: {
                                    bsonType: "object",
                                    patternProperties: {
                                        "^.*$": {
                                            bsonType: "object",
                                            properties: {
                                                diff: { bsonType: "int" },
                                                new: { bsonType: "int" },
                                            }
                                        },
                                    },
                                    additionalProperties: false
                                },
                                player: { bsonType: "string" },
                                tradeRowSlot: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                                foundGambits: {
                                    bsonType: "array",
                                    items: { bsonType: "string" }
                                },
                            },
                            additionalProperties: false
                        }
                    }
                },
                additionalProperties: false
            }
        },
        additionalProperties: false
    }
}

export default battleSchema