import { core_set } from './card_data/core_set.js';
import { colony_wars } from './card_data/colony_wars.js';
import { frontiers } from './card_data/frontiers.js';
import { bases_battleships } from './card_data/bases_battleships.js';
import { fleets_fortresses } from './card_data/fleets_fortresses.js';
import { frontiers_promos } from './card_data/frontiers_promos.js';
import { assault } from './card_data/assault.js';
import { command } from './card_data/command.js';
import { stellar_allies } from './card_data/stellar_allies.js';
import { united_heroes } from './card_data/united_heroes.js';
import { crisis_heroes } from './card_data/crisis_heroes.js';
import { promo1 } from './card_data/promo1.js';
import { promo2 } from './card_data/promo2.js';
import { tech } from './card_data/tech.js';
import { command_decks } from './card_data/command_decks.js';
import { missions } from './card_data/missions.js';
import { events } from './card_data/events.js';
import { frontiers_events } from './card_data/frontiers_events.js';
import { requisition } from './card_data/requisition.js';

import { open } from 'node:fs/promises';
import path from 'path';

var card_list = Object.assign(
    core_set['cards'], 
    frontiers['cards'], 
    colony_wars['cards'],
    bases_battleships['cards'],
    fleets_fortresses['cards'],
    frontiers_promos['cards'],
    assault['cards'],
    command['cards'],
    stellar_allies['cards'],
    united_heroes['cards'],
    crisis_heroes['cards'],
    promo1['cards'],
    promo2['cards'],
    tech['cards'],
    command_decks['cards'],
    missions['cards'],
    events['cards'],
    frontiers_events['cards'],
    requisition['cards']
)
let output = "../../CardWords.g4"
let file = null
let cardWords = {}
try{
    file = await open(output, "w+")
    await file.write("grammar CardWords; \n\n")
    await file.write("cardWord: \n")
    for(let card in card_list){
        let nextCardWords = card_list[card]["name"].split(" ")
        for(let i = 0; i < nextCardWords.length; i++){
            if(!(nextCardWords[i].replace("'","") in cardWords)){
                cardWords[nextCardWords[i].replace("'","")] = true
            }
        }
    }
    let cardNames = Object.keys(cardWords)
    cardNames.sort()
    await file.write(`    ${cardNames[0].toUpperCase()}\n`)
    for(let i = 1; i < cardNames.length -1;i++){
        await file.write(`    | ${cardNames[i].toUpperCase()}\n`)
    }
    await file.write(`    | ${cardNames[cardNames.length-1].toUpperCase()} ;\n`)

    await file.write("\n\n")
    for(let i = 0; i < cardNames.length; i++){
        await file.write(`${cardNames[i].toUpperCase()}: ${cardNames[i].split("").join(" ").toUpperCase()};\n`)
    }
} catch (err){
    console.log(err)
}
file.close()