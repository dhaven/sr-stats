//accepts a Battle object as input
// returns an object:
// {
//     "user1": [{"card1": x},{"card2": y},{"card3":z}, ...,{"cardN":w],
//     "user2": [{"card1": x},{"card2": y},{"card3":z}, ...,{"cardN":w],
// }
export function getDecks(battle){
    let finalDecks = {}
    let lastRound = battle['rounds'][battle['rounds'].length-1]
    for(let i = 0; i < lastRound['players'].length; i++){
        let player = lastRound['players'][i]
        finalDecks[player['name']] = []
        for(let card in player['deck']){
            let nextCard = {}
            nextCard[card] = player['deck'][card]['count']
            finalDecks[player['name']].push(nextCard)
        }

    }
    return finalDecks
}

export function getFinalDecks(battle){
    let finalDecks = {}
    let lastRound = battle['rounds'][battle['rounds'].length-1]
    for(let i = 0; i < lastRound['players'].length; i++){
        let player = lastRound['players'][i]
        finalDecks[player['name']] = lastRound['players'][i]['deck']
    }
    return finalDecks
}

//returns the summary of a deck
// -> number of cards of each faction
// -> total number of cards after scraps
// -> total cost to create the deck
export function getDeckSummary(deck){
    let blob_count = 0
    let trade_federation_count = 0
    let star_empire_count = 0
    let machine_cult_count = 0
    let total_count = 0
    let total_cost = 0
    for(let card in deck){
        total_cost += deck[card]['cost']
        let final_card_count = deck[card]['count']
        total_count += final_card_count
        if(deck[card]['faction'] == "Blob"){
            blob_count += final_card_count
        }else if(deck[card]['faction'] == "Trade Federation"){
            trade_federation_count += final_card_count
        }else if(deck[card]['faction'] == "Star Empire"){
            star_empire_count += final_card_count
        }else if(deck[card]['faction'] == "Machine Cult"){
            machine_cult_count += final_card_count
        }
    }
    return {
        total_cost: total_cost,
        total_count: total_count,
        blob_count: blob_count,
        trade_federation_count: trade_federation_count,
        star_empire_count: star_empire_count,
        machine_cult_count: machine_cult_count
    }
}

//return all chart data
export function getChartData(battle){
    return {
        authorityData: getAuthority(battle),
        combatData: getCombat(battle),
        tradeData: getTrade(battle),
        scrapData: getScrapAction(battle),
        discardData: getDiscardAction(battle),
        drawCount: getDrawCount(battle)
    }
}

//accept a Battle object as input
// each item in the array represent the amount of authority for that player 
// at the end of the current round
// returns a object:
// {
//     "user1": [50,48,48,56,52,...] length of array is number of rounds in the game
//     "user2": [50,49,47,42,...] length of arra is number of rounds in the game
// }
export function getAuthority(battle){
    let authorityData = {}
    for(let i = 0; i < battle['rounds'].length; i++){
        for(let j = 0; j < battle['rounds'][i]['players'].length; j++){
            let player = battle['rounds'][i]['players'][j]
            if(player['name'] in authorityData){
                authorityData[player['name']].push(player['authority'])
            }else{
                authorityData[player['name']] = [player['authority']]
            }
        }
    }
    return authorityData
}

//accept a Battle object as input
// each item in the array represents the total amount of Combat in a
// player's combat pool during a given turn
// returns a object:
// {
//     "user1": [4,3,6,2,5,...] length of array is number of rounds in the game
//     "user2": [3,4,3,8,...] length of arra is number of rounds in the game
// }
export function getCombat(battle){
    let combatData = {}
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
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            combatData[firstPlayer][i/2] = battle['rounds'][i]['combatPool']
        }else{
            combatData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['combatPool']
        }
    }
    return combatData
}

//accept a Battle object as input
// each item in the array represents the total amount of Trade in a
// player's trade pool during a given turn
// returns a object:
// {
//     "user1": [4,3,6,2,5,...] length of array is number of rounds in the game
//     "user2": [3,4,3,8,...] length of arra is number of rounds in the game
// }
export function getTrade(battle){
    let tradeData = {}
    let firstPlayer = battle['firstPlayer']
    let secondPlayer = ""
    for(let i = 0; i < battle['rounds'][0]['players'].length; i++){
        let player = battle['rounds'][0]['players'][i]
        if(player['name'] != battle['firstPlayer']){
            secondPlayer = player['name']
        }
    }
    let indivTurns = Math.ceil(battle['rounds'].length/2)
    tradeData[firstPlayer] = Array(indivTurns).fill(0)
    tradeData[secondPlayer] = Array(indivTurns).fill(0)
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            tradeData[firstPlayer][i/2] = battle['rounds'][i]['tradePool']
        }else{
            tradeData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['tradePool']
        }
    }
    return tradeData
}

export function getScrapAction(battle){
    let scrapData = {}
    let firstPlayer = battle['firstPlayer']
    let secondPlayer = ""
    for(let i = 0; i < battle['rounds'][0]['players'].length; i++){
        let player = battle['rounds'][0]['players'][i]
        if(player['name'] != battle['firstPlayer']){
            secondPlayer = player['name']
        }
    }
    let indivTurns = Math.ceil(battle['rounds'].length/2)
    scrapData[firstPlayer] = Array(indivTurns).fill(0)
    scrapData[secondPlayer] = Array(indivTurns).fill(0)
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            scrapData[firstPlayer][i/2] = battle['rounds'][i]['scrappedCards'].length
        }else{
            scrapData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['scrappedCards'].length
        }
    }
    return scrapData
}

export function getDiscardAction(battle){
    let discardData = {}
    let firstPlayer = battle['firstPlayer']
    let secondPlayer = ""
    for(let i = 0; i < battle['rounds'][0]['players'].length; i++){
        let player = battle['rounds'][0]['players'][i]
        if(player['name'] != battle['firstPlayer']){
            secondPlayer = player['name']
        }
    }
    let indivTurns = Math.ceil(battle['rounds'].length/2)
    discardData[firstPlayer] = Array(indivTurns).fill(0)
    discardData[secondPlayer] = Array(indivTurns).fill(0)
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            discardData[firstPlayer][i/2] = battle['rounds'][i]['discardedCards'].length
        }else{
            discardData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['discardedCards'].length
        }
    }
    return discardData
}

export function getDrawCount(battle){
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
    drawData[firstPlayer] = Array(indivTurns).fill(0)
    drawData[secondPlayer] = Array(indivTurns).fill(0)
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            drawData[firstPlayer][i/2] = battle['rounds'][i]['drawCount']
        }else{
            drawData[secondPlayer][parseInt(i/2)] = battle['rounds'][i]['drawCount']
        }
    }
    return drawData
}