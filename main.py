import sys
from antlr4 import *
from StarRealmsLexer import StarRealmsLexer
from StarRealmsParser import StarRealmsParser
from StarRealmsVisitor import StarRealmsVisitor

class Card:
    CARD_SCOUT = 0
    CARD_VIPER = 1
    CARD_SUPPLY_BOT = 2
    CARD_EXPLORER = 3
    CARD_FEDERATION_SHUTTLE = 4

    def __init__(self, cardType=0, count=1):
        self.cardType = cardType # the name of this card
        self.count = count # the number of copies of this card

    def addNameFromString(self, cardName):
        if(cardName == "SupplyBot"):
            self.cardType = Card.CARD_SUPPLY_BOT
        if(cardName == "FederationShuttle"):
            self.cardType = Card.CARD_FEDERATION_SHUTTLE
        if(cardName == "Explorer"):
            self.cardType = Card.CARD_EXPLORER
        if(cardName == "Scout"):
            self.cardType = Card.CARD_SCOUT
        if(cardName == "Viper"):
            self.cardType = Card.CARD_VIPER
    
    def __str__(self):
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
        else:
            return "noname"

class Deck:
    
    def __init__(self, cards):
        self.cards = cards

# information representing a player during a game
class Player:

    def __init__(self, deck, name):
        self.deck = deck # the cards this plqyer has
        self.name = name # the nqme of this player

class Action:
    ACTION_PURCHASE = 0
    ACTION_PLAY = 1
    ACTION_ATTACK = 2
    POOL_COMBAT = 3
    POOL_TRADE = 4

    def __init__(self, actionType=0):
        self.actionType = actionType
        self.addedPoolCombat = 0
        self.removedPoolCombat = 0
        self.addedPoolTrade = 0
        self.removedPoolTrade = 0
        self.playedCards = list()
        self.purchasedCards = list()
    
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
    
    def __str__(self):
        action = "action type: " + str(self.actionType) + "\n"
        action += "Pool balance \n"
        action += "addedPoolCombat: " + str(self.addedPoolCombat) + ", removedPoolCombat: " + str(self.removedPoolCombat) + ", addedPoolTrade: " + str(self.addedPoolTrade) + ", removedPoolTrade: " + str(self.removedPoolTrade) + "\n"
        action += "Played Cards: \n"
        for card in self.playedCards:
            action += str(card)
            action += "\n"
        action += "Purchased Cards: \n"
        for card in self.purchasedCards:
            action += str(card)
            action += "\n"
        return action
    
    

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
    
    def __str__(self):
        battle = "Battle started! \n"
        for round in self.rounds:
            battle += str(round)
            battle += "\n"
            battle += "next round! \n"
        return battle

class MyVisitor(StarRealmsVisitor):

    def visitBattle(self, ctx):
        battle = Battle()
        for turn in ctx.turn():
            nextRound = self.visit(turn)
            battle.rounds.append(nextRound)
        return battle

    # for each turn, get the summary of action and the user who performed it
    def visitTurn(self, ctx):
        nextRound = Round(list(),self.visit(ctx.endTurn()))
        for action in ctx.action():
            nextBalance = self.visit(action)
            nextRound.actions.append(nextBalance)
        return nextRound

    # endTurn subtree has the name of the player who played this turn
    def visitEndTurn(self, ctx):
        playerName = ""
        for word in ctx.WORD():
            if word.getText() != "ends":
                playerName += word.getText()
            else:
                return playerName
            playerName += " "
        return playerName

    def visitAction(self, ctx):
        nextAction = Action()
        if ctx.summaryAction().purchase():
            nextAction.actionType = Action.ACTION_PURCHASE
            nextAction.purchasedCards.append(self.visit(ctx.summaryAction().purchase()))
        elif ctx.summaryAction().attack():
            nextAction.actionType = Action.ACTION_ATTACK
        elif  ctx.summaryAction().getText().startswith("Play"):
            nextAction.actionType = Action.ACTION_PLAY
        else:
            exit(1)
        for actionDetail in ctx.actionDetail():
            summary = self.visit(actionDetail)
            nextAction.addToPool(Action.POOL_TRADE,summary['effect']['addedPoolTrade'])
            nextAction.addToPool(Action.POOL_COMBAT,summary['effect']['addedPoolCombat'])
            nextAction.removeFromPool(Action.POOL_TRADE,summary['effect']['removedPoolTrade'])
            nextAction.removeFromPool(Action.POOL_COMBAT,summary['effect']['removedPoolCombat'])
            if summary['card']:
                nextAction.playedCards.append(summary['card'])
        return nextAction
    
    def visitActionDetail(self, ctx):
        card = None
        if ctx.card():
            card = self.visit(ctx.card())
        effect = self.visit(ctx.effect())
        return dict(card=card,effect=effect)

    def visitEffect(self, ctx):
        effect = dict(addedPoolTrade=0, removedPoolTrade=0, addedPoolCombat=0, removedPoolCombat=0)
        category = self.visit(ctx.category())
        if ctx.INCREMENT() and category == "Trade":
            effect['addedPoolTrade'] = int(ctx.INCREMENT().getText().strip('+'))
        elif ctx.DECREASE() and category == "Trade":
            effect['removedPoolTrade'] = int(ctx.DECREASE().getText().strip('-'))
        elif ctx.INCREMENT() and category == "Combat":
            effect['addedPoolCombat'] = int(ctx.INCREMENT().getText().strip('+'))
        elif ctx.DECREASE() and category == "Combat":
            effect['removedPoolCombat'] = int(ctx.DECREASE().getText().strip('-'))
        else:
            exit(1)
        return effect

    def visitPurchase(self, ctx):
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