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
import { command_decks } from './card_data/command_decks.js'

//returns the summary of a deck
// -> number of cards of each faction after scrap
// -> total number of cards after scrap
// -> total cost to create the deck
export function getDeckSummary(deck){
    let blob_count = 0
    let trade_federation_count = 0
    let star_empire_count = 0
    let machine_cult_count = 0
    let unaligned_count = 0
    let total_count = 0
    let total_cost = 0
    let total_base_count = 0
    let total_ship_count = 0
    for(let card in deck){
        total_cost += deck[card]['cost']
        let final_card_count = deck[card]['count']
        total_count += final_card_count
        if(deck[card]['type'] == "ship"){
            total_ship_count += final_card_count
        }else if((deck[card]['type'] == "base")){
            total_base_count += final_card_count
        }
        for(let i = 0; i < deck[card]['faction'].length; i++){
            if(deck[card]['faction'][i] == "Blob"){
                blob_count += final_card_count
            }else if(deck[card]['faction'][i] == "Trade Federation"){
                trade_federation_count += final_card_count
            }else if(deck[card]['faction'][i] == "Star Empire"){
                star_empire_count += final_card_count
            }else if(deck[card]['faction'][i] == "Machine Cult"){
                machine_cult_count += final_card_count
            }else{
                unaligned_count += final_card_count
            }
        }
    }
    return {
        total_cost: total_cost,
        total_count: total_count,
        blob_count: blob_count,
        trade_federation_count: trade_federation_count,
        star_empire_count: star_empire_count,
        machine_cult_count: machine_cult_count,
        unaligned_count : unaligned_count,
        total_ship_count: total_ship_count,
        total_base_count: total_base_count,
    }
}

export function getAggrChartData(battle){
    let firstPlayer = battle['firstPlayer']
    let secondPlayer = ""
    for(let i = 0; i < battle['rounds'][0]['players'].length; i++){
        let player = battle['rounds'][0]['players'][i]
        if(player['name'] != battle['firstPlayer']){
            secondPlayer = player['name']
        }
    }
    let combatData = {}
    combatData[firstPlayer] = 0
    combatData[secondPlayer] = 0
    let tradeData =  {}
    tradeData[firstPlayer] = 0
    tradeData[secondPlayer] = 0
    let discardData =  {}
    discardData[firstPlayer] = 0
    discardData[secondPlayer] = 0
    let drawData =  {}
    drawData[firstPlayer] = 0
    drawData[secondPlayer] = 0
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            combatData[firstPlayer] += battle['rounds'][i]['combatPool']
            tradeData[firstPlayer] += battle['rounds'][i]['tradePool']
            discardData[firstPlayer] += battle['rounds'][i]['discardedCards'].length
            drawData[firstPlayer] += battle['rounds'][i]['drawCount']
        }else{
            combatData[secondPlayer] += battle['rounds'][i]['combatPool']
            tradeData[secondPlayer] += battle['rounds'][i]['tradePool']
            discardData[secondPlayer] += battle['rounds'][i]['discardedCards'].length
            drawData[secondPlayer] += battle['rounds'][i]['drawCount']
        }
    }
    return {
        combatData: combatData,
        tradeData: tradeData,
        discardData: discardData,
        drawCount: drawData
    }
}

//return all chart data
export function getChartData(battle){
    let authorityData = {}
    let combatData = {}
    let tradeData = {}
    let scrapData = {}
    let discardData = {}
    let drawData = {}
    let firstPlayer = battle['firstPlayer']
    let secondPlayer = ""
    for(let i = 0; i < battle['rounds'][0]['players'].length; i++){
        let player = battle['rounds'][0]['players'][i]
        if(player['name'] != battle['firstPlayer']){
            secondPlayer = player['name']
        }
    }
    let indivTurns = Math.ceil(battle['rounds'].length/2)
    combatData[firstPlayer] = Array(indivTurns).fill(0)
    combatData[secondPlayer] = Array(indivTurns).fill(0)
    tradeData[firstPlayer] = Array(indivTurns).fill(0)
    tradeData[secondPlayer] = Array(indivTurns).fill(0)
    scrapData[firstPlayer] = Array(indivTurns).fill(0)
    scrapData[secondPlayer] = Array(indivTurns).fill(0)
    discardData[firstPlayer] = Array(indivTurns).fill(0)
    discardData[secondPlayer] = Array(indivTurns).fill(0)
    drawData[firstPlayer] = Array(indivTurns).fill(0)
    drawData[secondPlayer] = Array(indivTurns).fill(0)
    for(let i = 0; i < battle['rounds'].length; i++){
        for(let j = 0; j < battle['rounds'][i]['players'].length; j++){
            let player = battle['rounds'][i]['players'][j]
            if(player['name'] in authorityData){
                authorityData[player['name']].push(player['authority'])
            }else{
                authorityData[player['name']] = [player['authority']]
            }
        }
        if(i % 2 == 0){
            combatData[firstPlayer][i/2] = battle['rounds'][i]['combatPool']
            tradeData[firstPlayer][i/2] = battle['rounds'][i]['tradePool']
            scrapData[firstPlayer][i/2] = battle['rounds'][i]['scrappedCards'].length
            discardData[firstPlayer][i/2] = battle['rounds'][i]['discardedCards'].length
            drawData[firstPlayer][i/2] = battle['rounds'][i]['drawCount']
        }else{
            combatData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['combatPool']
            tradeData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['tradePool']
            scrapData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['scrappedCards'].length
            discardData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['discardedCards'].length
            drawData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['drawCount']
        }
    }
    return {
        authorityData: authorityData,
        combatData: combatData,
        tradeData: tradeData,
        scrapData: scrapData,
        discardData: discardData,
        drawCount: drawData
    }
}