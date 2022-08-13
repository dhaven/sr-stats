import PlayerOverviewV2 from '../components/playerOverviewV2'
import DeckOverviewV2 from '../components/deckOverviewV2'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AuthorityChart from '../components/authorityChart'
import OtherCharts from '../components/otherCharts'
import { getFinalDecks, getFinalAuthority, getCompletedMissions } from '../lib/helper.js'
import { ChevronUpIcon } from '@heroicons/react/solid'

function Test() {
    let winner = "Player"
    let firstPlayer = "HardAI"
    let rounds = [
        {
            "tradePool": 3,
            "combatPool": 0,
            "usedTrade": -3,
            "usedCombat": 0,
            "purchasedCards": [
                "supplybot"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {},
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": false,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    }
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": false,
                    "deck": {}
                }
            ]
        },
        {
            "tradePool": 3,
            "combatPool": 2,
            "usedTrade": -2,
            "usedCombat": -2,
            "purchasedCards": [
                "imperialfighter",
                "blobfighter"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "HardAI": {
                    "diff": -2,
                    "new": 48
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 48
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": false,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    }
                }
            ]
        },
        {
            "tradePool": 3,
            "combatPool": 2,
            "usedTrade": -3,
            "usedCombat": -2,
            "purchasedCards": [
                "surveyship"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "Player": {
                    "diff": -2,
                    "new": 48
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 48
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 48
                }
            ]
        },
        {
            "tradePool": 5,
            "combatPool": 0,
            "usedTrade": -4,
            "usedCombat": 0,
            "purchasedCards": [
                "blobdestroyer"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {},
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 48
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 48
                }
            ]
        },
        {
            "tradePool": 4,
            "combatPool": 1,
            "usedTrade": -4,
            "usedCombat": -1,
            "purchasedCards": [
                "barterworld"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "Player": {
                    "diff": -1,
                    "new": 47
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 48
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 47
                }
            ]
        },
        {
            "tradePool": 4,
            "combatPool": 6,
            "usedTrade": -4,
            "usedCombat": -6,
            "purchasedCards": [
                "tradepod",
                "explorer"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "HardAI": {
                    "diff": -6,
                    "new": 42
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 42
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 47
                }
            ]
        },
        {
            "tradePool": 5,
            "combatPool": 1,
            "usedTrade": -4,
            "usedCombat": -1,
            "purchasedCards": [
                "freighter"
            ],
            "completedMission": "",
            "playedCards": [
                "supplybot"
            ],
            "scrappedCards": [
                "viper"
            ],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "Player": {
                    "diff": -1,
                    "new": 46
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 42
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 46
                }
            ]
        },
        {
            "tradePool": 2,
            "combatPool": 6,
            "usedTrade": -2,
            "usedCombat": -6,
            "purchasedCards": [
                "explorer"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "HardAI": {
                    "diff": -6,
                    "new": 36
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 36
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 46
                }
            ]
        },
        {
            "tradePool": 8,
            "combatPool": 0,
            "usedTrade": -7,
            "usedCombat": 0,
            "purchasedCards": [
                "dreadnaught"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [
                "scout"
            ],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 1,
            "authority": {},
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 36
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 46
                }
            ]
        },
        {
            "tradePool": 4,
            "combatPool": 1,
            "usedTrade": -3,
            "usedCombat": -1,
            "purchasedCards": [
                "ram"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "HardAI": {
                    "diff": -1,
                    "new": 35
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 35
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 46
                }
            ]
        },
        {
            "tradePool": 6,
            "combatPool": 1,
            "usedTrade": -6,
            "usedCombat": -1,
            "purchasedCards": [
                "tradingpost",
                "blobwheel"
            ],
            "completedMission": "",
            "playedCards": [
                "barterworld",
                "supplybot"
            ],
            "scrappedCards": [
                "scout"
            ],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {
                "Player": {
                    "diff": -1,
                    "new": 45
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 2
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 1,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 35
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 45
                }
            ]
        },
        {
            "tradePool": 9,
            "combatPool": 4,
            "usedTrade": -9,
            "usedCombat": -4,
            "purchasedCards": [
                "corvette",
                "imperialfighter",
                "freighter",
                "cutter"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [
                "explorer",
                "explorer"
            ],
            "discardedCards": [],
            "destroyedBases": [
                "barterworld"
            ],
            "winner": "",
            "drawCount": 0,
            "authority": {},
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 2
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 1,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 35
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 45
                }
            ]
        },
        {
            "tradePool": 8,
            "combatPool": 0,
            "usedTrade": -8,
            "usedCombat": 0,
            "purchasedCards": [
                "battlestation",
                "surveyship",
                "missilebot"
            ],
            "completedMission": "",
            "playedCards": [
                "tradingpost"
            ],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 0,
            "authority": {},
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 2
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 1,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlestation": {
                            "name": "Battle Station",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "missilebot": {
                            "name": "Missile Bot",
                            "cost": 2,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 35
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 45
                }
            ]
        },
        {
            "tradePool": 2,
            "combatPool": 12,
            "usedTrade": -2,
            "usedCombat": -12,
            "purchasedCards": [
                "battlepod"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 1,
            "authority": {
                "HardAI": {
                    "diff": -12,
                    "new": 23
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 2
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 1,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlestation": {
                            "name": "Battle Station",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "missilebot": {
                            "name": "Missile Bot",
                            "cost": 2,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 23
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlepod": {
                            "name": "Battle Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 45
                }
            ]
        },
        {
            "tradePool": 9,
            "combatPool": 1,
            "usedTrade": -9,
            "usedCombat": -1,
            "purchasedCards": [
                "blobworld",
                "tradebot"
            ],
            "completedMission": "",
            "playedCards": [
                "blobwheel",
                "supplybot"
            ],
            "scrappedCards": [
                "viper",
                "blobwheel"
            ],
            "discardedCards": [
                "viper"
            ],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 2,
            "authority": {
                "Player": {
                    "diff": -1,
                    "new": 44
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 3
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 1,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "battlestation": {
                            "name": "Battle Station",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "missilebot": {
                            "name": "Missile Bot",
                            "cost": 2,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobworld": {
                            "name": "Blob World",
                            "cost": 8,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradebot": {
                            "name": "Trade Bot",
                            "cost": 1,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 23
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlepod": {
                            "name": "Battle Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 44
                }
            ]
        },
        {
            "tradePool": 7,
            "combatPool": 9,
            "usedTrade": -7,
            "usedCombat": -9,
            "purchasedCards": [
                "spacestation",
                "imperialfrigate"
            ],
            "completedMission": "",
            "playedCards": [],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 1,
            "authority": {
                "HardAI": {
                    "diff": -9,
                    "new": 14
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 3
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 1,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "battlestation": {
                            "name": "Battle Station",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "missilebot": {
                            "name": "Missile Bot",
                            "cost": 2,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobworld": {
                            "name": "Blob World",
                            "cost": 8,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradebot": {
                            "name": "Trade Bot",
                            "cost": 1,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 14
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlepod": {
                            "name": "Battle Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "spacestation": {
                            "name": "Space Station",
                            "cost": 4,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "imperialfrigate": {
                            "name": "Imperial Frigate",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 44
                }
            ]
        },
        {
            "tradePool": 2,
            "combatPool": 14,
            "usedTrade": -2,
            "usedCombat": -14,
            "purchasedCards": [
                "missilebot"
            ],
            "completedMission": "",
            "playedCards": [
                "blobworld",
                "missilebot"
            ],
            "scrappedCards": [
                "scout"
            ],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "",
            "drawCount": 1,
            "authority": {
                "Player": {
                    "diff": -14,
                    "new": 30
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 3
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 2,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "battlestation": {
                            "name": "Battle Station",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "missilebot": {
                            "name": "Missile Bot",
                            "cost": 2,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobworld": {
                            "name": "Blob World",
                            "cost": 8,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "tradebot": {
                            "name": "Trade Bot",
                            "cost": 1,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 14
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlepod": {
                            "name": "Battle Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "spacestation": {
                            "name": "Space Station",
                            "cost": 4,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "imperialfrigate": {
                            "name": "Imperial Frigate",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 30
                }
            ]
        },
        {
            "tradePool": 1,
            "combatPool": 16,
            "usedTrade": 0,
            "usedCombat": -16,
            "purchasedCards": [],
            "completedMission": "",
            "playedCards": [
                "battlepod"
            ],
            "scrappedCards": [],
            "discardedCards": [],
            "destroyedBases": [],
            "winner": "Player",
            "drawCount": 0,
            "authority": {
                "HardAI": {
                    "diff": -16,
                    "new": -2
                }
            },
            "players": [
                {
                    "name": "HardAI",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "supplybot": {
                            "name": "Supply Bot",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 3
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 2,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 1,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "surveyship": {
                            "name": "Survey Ship",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "barterworld": {
                            "name": "Barter World",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 1,
                            "playedCount": 1
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "dreadnaught": {
                            "name": "Dreadnaught",
                            "cost": 7,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradingpost": {
                            "name": "Trading Post",
                            "cost": 3,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobwheel": {
                            "name": "Blob Wheel",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 1,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "battlestation": {
                            "name": "Battle Station",
                            "cost": 3,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "missilebot": {
                            "name": "Missile Bot",
                            "cost": 2,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "blobworld": {
                            "name": "Blob World",
                            "cost": 8,
                            "faction": [
                                "Blob"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "tradebot": {
                            "name": "Trade Bot",
                            "cost": 1,
                            "faction": [
                                "Machine Cult"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": -2
                },
                {
                    "name": "Player",
                    "completedMissions": [],
                    "deckInitialized": true,
                    "deck": {
                        "imperialfighter": {
                            "name": "Imperial Fighter",
                            "cost": 1,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobfighter": {
                            "name": "Blob Fighter",
                            "cost": 1,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "scout": {
                            "name": "Scout",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 8,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "viper": {
                            "name": "Viper",
                            "cost": 0,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "blobdestroyer": {
                            "name": "Blob Destroyer",
                            "cost": 4,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "tradepod": {
                            "name": "Trade Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "explorer": {
                            "name": "Explorer",
                            "cost": 2,
                            "faction": [
                                "Unaligned"
                            ],
                            "type": "ship",
                            "count": 2,
                            "scrapCount": 2,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "ram": {
                            "name": "Ram",
                            "cost": 3,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "corvette": {
                            "name": "Corvette",
                            "cost": 2,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "freighter": {
                            "name": "Freighter",
                            "cost": 4,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "cutter": {
                            "name": "Cutter",
                            "cost": 2,
                            "faction": [
                                "Trade Federation"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "battlepod": {
                            "name": "Battle Pod",
                            "cost": 2,
                            "faction": [
                                "Blob"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 1
                        },
                        "spacestation": {
                            "name": "Space Station",
                            "cost": 4,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "base",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        },
                        "imperialfrigate": {
                            "name": "Imperial Frigate",
                            "cost": 3,
                            "faction": [
                                "Star Empire"
                            ],
                            "type": "ship",
                            "count": 1,
                            "scrapCount": 0,
                            "discardCount": 0,
                            "destroyedCount": 0,
                            "playedCount": 0
                        }
                    },
                    "authority": 30
                }
            ]
        }
    ]
    let decksData = getFinalDecks({firstPlayer, winner, rounds})
    let finalAuthority = getFinalAuthority(rounds[rounds.length -1])
    let completedMissions = getCompletedMissions(rounds[rounds.length -1])
    let [activePlayer, setActivePlayer] = useState(winner)
    let [open, setOpen] = useState(true)
    let updatVisibleDeck = function(player){
        if(player == activePlayer){
            setOpen(!open)
        }
        if(!open){
            setOpen(true)
        }
        setActivePlayer(player)
    }
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div id="test" className="flex flex-col gap-2">
                <div className="m-4 p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5">
                    <p className="text-scifi5 text-3xl font-medium">David won by defeating HardAI</p>
                </div>
                <Tab.Group>
                    <div className="flex flex-row mx-4">
                    <Tab.List className="flex space-x-2 grow-0 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 p-1">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'bg-white rounded-md border-2 border-scifi4 py-2.5 px-2 text-sm font-medium leading-5 text-scifi5' 
                                        : 'hover:bg-white/[0.12] ring-scifi-2 hover:ring rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-scifi5'
                                    }
                                >
                                Player stats
                                </button>
                            )}
                        </Tab>
                        <Tab>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'bg-white rounded-md border-2 border-scifi4 py-2.5 px-2 text-sm font-medium leading-5 text-scifi5'
                                        : 'hover:bg-white/[0.12] ring-scifi-2 hover:ring rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-scifi5'
                                    }
                                >
                                Game stats
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="flex flex-row gap-4 mx-4">
                                { 
                                    Object.keys(decksData).map((oneKey,i)=>{
                                        return (
                                            <div className="flex flex-col w-1/2 p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5">
                                                <PlayerOverviewV2 key={i} name={oneKey} deckData={decksData[oneKey]} authority={finalAuthority[oneKey]} missions={completedMissions[oneKey]}></PlayerOverviewV2>
                                                <div className="flex justify-center p-2">
                                                    <button onClick={() => updatVisibleDeck(oneKey)} 
                                                        className={ activePlayer == oneKey && open ?
                                                        "rounded-full bg-scifi3 ring-scifi-2 text-white hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium" :
                                                        "rounded-full bg-scifi1 ring-scifi-2 hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium"
                                                        }
                                                    >
                                                        <ChevronUpIcon
                                                            className={`${
                                                                activePlayer == oneKey && open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5`}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
        
                                        )
                                    })
                                }
                            </div>
                            {
                                open && <DeckOverviewV2 deckData={decksData[activePlayer]} ></DeckOverviewV2>
                            }
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="flex flex-col">
                                <AuthorityChart winner={winner} firstPlayer={firstPlayer} rounds={rounds}></AuthorityChart>
                                <OtherCharts  winner={winner} firstPlayer={firstPlayer} rounds={rounds}></OtherCharts>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout>
    )
  }
  
  export default Test