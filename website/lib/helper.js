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