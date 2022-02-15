import sys
from antlr4 import *
from python.StarRealmsLexer import StarRealmsLexer
from python.StarRealmsParser import StarRealmsParser
from python.StarRealmsVisitor import StarRealmsVisitor

class Card:
    CARD_SCOUT = 0
    CARD_VIPER = 1
    CARD_SUPPLY_BOT = 2
    CARD_EXPLORER = 3
    CARD_FEDERATION_SHUTTLE = 4
    CARD_PATROL_MECH = 5
    CARD_ROYAL_REDOUBT = 6

    def __init__(self, cardType=0, count=1):
        self.cardType = cardType # the name of this card
        self.count = count # the number of copies of this card
        self.playedCount = 0
        self.scrappedCount = 0

    def addCount(self, count):
        self.count += count

    def addPlayed(self, count):
        self.playedCount += count
    
    def addScrappedCount(self, count):
        self.scrappedCount += count

    def addNameFromString(self, cardName):
        if cardName == "SupplyBot":
            self.cardType = Card.CARD_SUPPLY_BOT
        if cardName == "FederationShuttle":
            self.cardType = Card.CARD_FEDERATION_SHUTTLE
        if cardName == "Explorer":
            self.cardType = Card.CARD_EXPLORER
        if cardName == "Scout":
            self.cardType = Card.CARD_SCOUT
        if cardName == "Viper":
            self.cardType = Card.CARD_VIPER
        if cardName == "PatrolMech":
            self.cardType = Card.CARD_PATROL_MECH
        if cardName == "RoyalRedoubt":
            self.cardType = Card.CARD_ROYAL_REDOUBT
    
    def getString(self):
        if self.cardType == Card.CARD_SUPPLY_BOT:
            return "Supply Bot"
        elif self.cardType == Card.CARD_SCOUT:
            return "Scout"
        elif self.cardType == Card.CARD_VIPER:
            return "Viper"
        elif self.cardType == Card.CARD_FEDERATION_SHUTTLE:
            return "Federation Shuttle"
        elif self.cardType == Card.CARD_EXPLORER:
            return "Explorer"
        elif self.cardType == Card.CARD_PATROL_MECH:
            return "Patrol Mech"
        elif self.cardType == Card.CARD_ROYAL_REDOUBT:
            return "Royal Redoubt"
        else:
            return "noname"
    
    def __str__(self):
        return self.getString() + "-- count: " + str(self.count) + ", played times: " + str(self.playedCount) + ", scrapped times: " + str(self.scrappedCount)

class Deck:
    
    def __init__(self):
        self.cards = dict()
        cardScout = Card(Card.CARD_SCOUT, 8)
        cardViper = Card(Card.CARD_VIPER, 2)
        self.cards[cardScout.getString()] = cardScout
        self.cards[cardViper.getString()] = cardViper
    
    #
    def update(self, actions):
        for action in actions:
            if action.type == Action.ACTION_PURCHASE:
                for card in action.purchasedCards:
                    if card.getString() not in self.cards:
                        self.cards[card.getString()]= card
                    else:
                        self.cards[card.getString()].addCount(1)
            elif action.type == Action.ACTION_PLAY:
                for card in action.playedCards:
                    self.cards[card.getString()].addPlayed(1)
            elif action.type == Action.ACTION_SCRAP:
                for card in action.scrappedCards:
                    self.cards[card.getString()].addScrappedCount(1)
            else:
                pass
    
    def __str__(self):
        cardList = ""
        for card in self.cards:
            cardList += str(self.cards[card]) + "\n"
        return cardList
                

class Action:
    ACTION_PURCHASE = 0
    ACTION_PLAY = 1
    ACTION_ATTACK = 2
    ACTION_SCRAP = 3
    POOL_COMBAT = 4
    POOL_TRADE = 5

    def __init__(self):
        self.type = Action.ACTION_PURCHASE
        self.addedPoolCombat = 0
        self.removedPoolCombat = 0
        self.addedPoolTrade = 0
        self.removedPoolTrade = 0
        self.authorityChange = dict() #track to authority change for each player
        self.playedCards = list()
        self.purchasedCards = list()
        self.scrappedCards = list()
    
    def addToPool(self,poolCategory, amount):
        if poolCategory == Action.POOL_COMBAT:
            self.addedPoolCombat += amount
        elif poolCategory == Action.POOL_TRADE:
            self.addedPoolTrade += amount
        else:
            pass
    
    def removeFromPool(self, poolCategory, amount):
        if poolCategory == Action.POOL_COMBAT:
            self.removedPoolCombat -= amount
        elif poolCategory == Action.POOL_TRADE:
            self.removedPoolTrade -= amount
        else:
            pass
    
    def updateAuthority(self, name, amount):
        if name not in self.authorityChange:
            self.authorityChange[name] = list()
        self.authorityChange[name].append(amount)

    
    def getString(self):
        if self.type == Action.ACTION_PURCHASE:
            return "Purchase"
        elif self.type == Action.ACTION_PLAY:
            return "Play"
        elif self.type == Action.ACTION_ATTACK:
            return "Attack"
        else:
            return "Other"
        
    def __str__(self):
        action = "action type: " + self.getString() + "\n"
        action += "Authority: "
        action += str(self.authorityChange)
        action += "\n"
        action += "Pool balance \n"
        action += "addedPoolCombat: " + str(self.addedPoolCombat) + ", removedPoolCombat: " + str(self.removedPoolCombat) + ", addedPoolTrade: " + str(self.addedPoolTrade) + ", removedPoolTrade: " + str(self.removedPoolTrade) + "\n"
        return action
    

# information representing a player during a game
class Player:

    def __init__(self, name):
        self.deck = Deck() # the cards this player has which depends on first or second
        self.name = name # the name of this player
    
    def isPlayer(self, name):
        return self.name == name
    
    def __str__(self):
        return self.name + " with deck: \n" + str(self.deck) + "\n"


# information representing a round in a game
class Round:
    
    def __init__(self, actions=[], player=""):
        self.actions = actions
        self.player = player
    
    def __str__(self):
        roundActions = self.player + "\n"
        for action in self.actions:
            roundActions += str(action)
            roundActions += "\n"
        return roundActions

class Battle:

    def __init__(self):
      self.rounds = list() # the list of rounds played in the game
      self.players = list() # the list of players involved in the game
    
    def updatePlayer(self, name, actions):
        for player in self.players:
            if player.isPlayer(name):
                player.deck.update(actions)
                return
        nextPlayer = Player(name)
        nextPlayer.deck.update(actions)
        self.players.append(nextPlayer)

    
    def __str__(self):
        battle = "Battle started! \n"
        for round in self.rounds:
            battle += str(round)
            battle += "\n"
            battle += "next round! \n"
        for player in self.players:
            battle += str(player)
        return battle

class MyVisitor(StarRealmsVisitor):

    def visitBattle(self, ctx):
        battle = Battle()
        for turn in ctx.turn():
            nextRound = self.visit(turn)
            battle.rounds.append(nextRound)
            battle.updatePlayer(nextRound.player, nextRound.actions)
        return battle

    # for each turn, get the summary of action and the user who performed it
    # grammar: action+ endPhase ;
    def visitTurn(self, ctx):
        nextRound = Round(list(),self.visit(ctx.endPhase()))
        for action in ctx.action():
            nextAction = self.visit(action)
            nextRound.actions.append(nextAction)
        return nextRound

    def visitEndPhase(self, ctx):
        return self.visit(ctx.endTurn())

    # endTurn subtree has the name of the player who played this turn
    # grammar: WORD+ turnCount ;
    def visitEndTurn(self, ctx):
        playerName = ""
        for word in ctx.name().WORD():
            playerName += word.getText()
            playerName += " "
        return playerName

    # grammar: summaryAction NEWLINE actionDetail* ;
    def visitAction(self, ctx):
        nextAction = Action()
        if ctx.summaryAction().purchase():
            nextAction.type = Action.ACTION_PURCHASE
            nextAction.purchasedCards.append(self.visit(ctx.summaryAction().purchase()))
        elif ctx.summaryAction().attackPlayer():
            nextAction.type = Action.ACTION_ATTACK
        elif  ctx.summaryAction().play():
            nextAction.type = Action.ACTION_PLAY
        elif ctx.summaryAction().scrap():
            nextAction.type = Action.ACTION_SCRAP
        else:
            exit("error")
        for actionDetail in ctx.actionDetail():
            if actionDetail.newBalanceDetail():
                summary = self.visit(actionDetail.newBalanceDetail())
                if 'addedPoolTrade' in summary['effect']:
                    nextAction.addToPool(Action.POOL_TRADE,summary['effect']['addedPoolTrade'])
                if 'addedPoolCombat' in summary['effect']:
                    nextAction.addToPool(Action.POOL_COMBAT,summary['effect']['addedPoolCombat'])
                if 'removedPoolTrade' in summary['effect']:
                    nextAction.removeFromPool(Action.POOL_TRADE,summary['effect']['removedPoolTrade'])
                if 'removedPoolCombat' in summary['effect']:
                    nextAction.removeFromPool(Action.POOL_COMBAT,summary['effect']['removedPoolCombat'])
                if 'authority' in summary['effect']:
                    nextAction.updateAuthority(summary['name'], summary['effect']['authority'])
                if summary['card']:
                    nextAction.playedCards.append(summary['card'])
            elif actionDetail.scrapDetail():
                scrappedCard = self.visit(actionDetail.scrapDetail())
                nextAction.scrappedCards.append(scrappedCard)
            else:
                exit("error")
        return nextAction

    # grammar: name SEPARATOR card? effect balance ;
    def visitNewBalanceDetail(self, ctx):
        card = None
        if ctx.card():
            card = self.visit(ctx.card())
        effect = self.visit(ctx.effect())
        name = self.visit(ctx.name())
        return dict(name=name, card=card, effect=effect)
    
    # grammar: SCRAPPED card ;
    def visitScrapDetail(self, ctx):
        card = None
        if ctx.card():
            card = self.visit(ctx.card())
        return card

    # grammar: : (INCREMENT | DECREASE) WORD ;
    def visitEffect(self, ctx):
        effect = dict()
        category = ctx.WORD().getText()
        if ctx.INCREMENT() and category == "Trade":
            effect['addedPoolTrade'] = int(ctx.INCREMENT().getText().strip('+'))
        elif ctx.DECREASE() and category == "Trade":
            effect['removedPoolTrade'] = int(ctx.DECREASE().getText().strip('-'))
        elif ctx.INCREMENT() and category == "Combat":
            effect['addedPoolCombat'] = int(ctx.INCREMENT().getText().strip('+'))
        elif ctx.DECREASE() and category == "Combat":
            effect['removedPoolCombat'] = int(ctx.DECREASE().getText().strip('-'))
        elif ctx.INCREMENT() and category == "Authority":
            effect['authority'] = int(ctx.INCREMENT().getText().strip('+'))
        elif ctx.DECREASE() and category == "Authority":
            effect['authority'] = 0 - int(ctx.DECREASE().getText().strip('-'))
        else:
            exit("error")
        return effect

    def visitPurchase(self, ctx):
        return self.visit(ctx.card())

    def visitScrap(self, ctx):
        return self.visit(ctx.card())

    def visitCategory(self, ctx):
        return ctx.getText()

    def visitName(self, ctx):
        return ctx.getText()

    def visitCard(self, ctx):
        nextCard = Card()
        nextCard.addNameFromString(ctx.getText())
        return nextCard
    
def main(argv):
    input_stream = FileStream(argv[1])
    # lexer
    lexer = StarRealmsLexer(input_stream)
    stream = CommonTokenStream(lexer)
    # parser
    parser = StarRealmsParser(stream)
    tree = parser.battle()
    # evaluator
    visitor = MyVisitor()
    battle = visitor.visit(tree)
    print(battle)

if __name__ == '__main__':
    main(sys.argv)