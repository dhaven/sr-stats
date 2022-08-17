import PlayerOverviewV2 from '../components/playerOverviewV2'
import DeckOverviewV2 from '../components/deckOverviewV2'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AuthorityChart from '../components/authorityChart'
import OtherCharts from '../components/otherCharts'
import { getFinalDecks, getFinalAuthority, getCompletedMissions, getExtensions, getWinCondition, getEvents } from '../lib/helper.js'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import EventCard from '../components/eventCard'
import { events } from '../lib/card_data/events.js'
import { frontiers_events } from '../lib/card_data/frontiers_events.js'

function Test() {
    let winner = "Player"
    let firstPlayer = "Player"
    let rounds = [
                {
                    "tradePool": 5,
                    "combatPool": 0,
                    "usedTrade": -5,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "cutter",
                        "blobfighter",
                        "missilebot"
                    ],
                    "completedMissions": [],
                    "events": [
                        "mobilization",
                        "patiencerewarded",
                        "reconmission"
                    ],
                    "playedCards": [],
                    "scrappedCards": [
                        "federationshuttle"
                    ],
                    "discardedCards": [
                        "scout",
                        "scout",
                        "viper",
                        "viper"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 4,
                    "authority": {},
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": false,
                            "deck": {
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
                    "tradePool": 5,
                    "combatPool": 2,
                    "usedTrade": -5,
                    "usedCombat": -2,
                    "purchasedCards": [
                        "recyclingstation",
                        "tradebot"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [
                        "flagship"
                    ],
                    "discardedCards": [
                        "scout",
                        "scout",
                        "scout",
                        "scout"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 4,
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
                                "recyclingstation": {
                                    "name": "Recycling Station",
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
                            }
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 1,
                    "usedTrade": -4,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "patrolmech"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": -1,
                            "new": 49
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                            "authority": 48
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
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
                            "authority": 49
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 0,
                    "usedTrade": -5,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "cutter",
                        "supplybot"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "tradebot"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                            "authority": 48
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
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
                                    "scrapCount": 1,
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
                            },
                            "authority": 49
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 4,
                    "usedTrade": -3,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "surveyship"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": -4,
                            "new": 45
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "recyclingstation": {
                                    "name": "Recycling Station",
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
                                    "scrapCount": 1,
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
                            },
                            "authority": 45
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 1,
                    "usedTrade": -3,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "tradepod",
                        "blobfighter"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "recyclingstation"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                            "authority": 47
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
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
                                    "scrapCount": 1,
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
                            },
                            "authority": 45
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 4,
                    "usedTrade": -5,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "battlemech"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "missilebot"
                    ],
                    "scrappedCards": [
                        "scout",
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "recyclingstation"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 4,
                            "new": 51
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                            "authority": 51
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "scrapCount": 1,
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
                            },
                            "authority": 45
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 1,
                    "usedTrade": -5,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "mechworld"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 49
                        },
                        "HardAI": {
                            "diff": -1,
                            "new": 50
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                            "authority": 50
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "scrapCount": 1,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 49
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 8,
                    "usedTrade": -3,
                    "usedCombat": -8,
                    "purchasedCards": [
                        "blobwheel",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "events": [
                        "supplyrun"
                    ],
                    "playedCards": [
                        "patrolmech"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": -8,
                            "new": 41
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                            "authority": 50
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "scrapCount": 1,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 41
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 4,
                    "usedTrade": -3,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "battlestation"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -4,
                            "new": 46
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "scrapCount": 1,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 41
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 2,
                    "usedTrade": -5,
                    "usedCombat": -2,
                    "purchasedCards": [
                        "ram",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "events": [
                        "powerfulbacking"
                    ],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 3,
                            "new": 46
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "scrapCount": 1,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 44
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 6,
                    "usedTrade": -8,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "tradeescort",
                        "embassyyacht"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "supplybot",
                        "tradebot",
                        "recyclingstation"
                    ],
                    "scrappedCards": [
                        "viper",
                        "viper",
                        "explorer"
                    ],
                    "discardedCards": [
                        "scout"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "HardAI": {
                            "diff": -6,
                            "new": 40
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                            "authority": 40
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
                                    "playedCount": 2
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
                                    "scrapCount": 2,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
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
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
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
                            "authority": 44
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 4,
                    "usedTrade": -5,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "ram",
                        "cutter"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "battlemech"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "recyclingstation"
                    ],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {},
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 2,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 40
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 2,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
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
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
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
                            "authority": 44
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 3,
                    "usedTrade": -4,
                    "usedCombat": -3,
                    "purchasedCards": [
                        "explorer",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -3,
                            "new": 37
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 2,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 37
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 2,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
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
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
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
                            "authority": 44
                        }
                    ]
                },
                {
                    "tradePool": 9,
                    "combatPool": 3,
                    "usedTrade": -9,
                    "usedCombat": -3,
                    "purchasedCards": [
                        "machinebase",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "events": [
                        "tacticalmaneuver"
                    ],
                    "playedCards": [
                        "blobwheel",
                        "missilebot"
                    ],
                    "scrappedCards": [
                        "scout",
                        "blobwheel"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": -3,
                            "new": 41
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 3,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 37
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 2,
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
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
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
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
                            "authority": 41
                        }
                    ]
                },
                {
                    "tradePool": 9,
                    "combatPool": 12,
                    "usedTrade": -7,
                    "usedCombat": -12,
                    "purchasedCards": [
                        "mothership"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "mechworld",
                        "supplybot",
                        "tradeescort",
                        "cutter",
                        "embassyyacht"
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
                            "diff": 17,
                            "new": 47
                        },
                        "HardAI": {
                            "diff": -12,
                            "new": 25
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 3,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 25
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                            "authority": 58
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 12,
                    "usedTrade": -4,
                    "usedCombat": -12,
                    "purchasedCards": [
                        "blobdestroyer"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "patrolmech"
                    ],
                    "scrappedCards": [
                        "ram"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "mechworld"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 4,
                            "new": 29
                        },
                        "Player": {
                            "diff": -6,
                            "new": 52
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 3,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
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
                            "authority": 29
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                            "authority": 52
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 2,
                    "usedTrade": -4,
                    "usedCombat": -2,
                    "purchasedCards": [
                        "spacestation"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "tradebot"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -2,
                            "new": 27
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 3,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
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
                            "authority": 27
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 3,
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                                }
                            },
                            "authority": 52
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 7,
                    "usedTrade": -6,
                    "usedCombat": -7,
                    "purchasedCards": [
                        "battleblob"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [
                        "explorer",
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "battlestation"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": -2,
                            "new": 50
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 3,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                            "authority": 27
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 3,
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                                }
                            },
                            "authority": 50
                        }
                    ]
                },
                {
                    "tradePool": 11,
                    "combatPool": 4,
                    "usedTrade": -11,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "battlepod",
                        "embassyyacht"
                    ],
                    "completedMissions": [],
                    "events": [
                        "reconmission"
                    ],
                    "playedCards": [
                        "explorer"
                    ],
                    "scrappedCards": [
                        "traderowslot",
                        "explorer",
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 54
                        },
                        "HardAI": {
                            "diff": -4,
                            "new": 23
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 3,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                            "authority": 23
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 3,
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                    "playedCount": 1
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                            "authority": 54
                        }
                    ]
                },
                {
                    "tradePool": 9,
                    "combatPool": 13,
                    "usedTrade": -9,
                    "usedCombat": -13,
                    "purchasedCards": [
                        "blobwheel",
                        "missilemech"
                    ],
                    "completedMissions": [],
                    "events": [
                        "wormhole"
                    ],
                    "playedCards": [
                        "battlemech",
                        "blobwheel"
                    ],
                    "scrappedCards": [
                        "scout",
                        "explorer",
                        "battlecruiser",
                        "blobwheel"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 4,
                            "new": 27
                        },
                        "Player": {
                            "diff": -13,
                            "new": 41
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 4,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
                                    "scrapCount": 3,
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
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                                "missilemech": {
                                    "name": "Missile Mech",
                                    "cost": 6,
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
                            "authority": 27
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "scrapCount": 3,
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                    "playedCount": 1
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                            "authority": 41
                        }
                    ]
                },
                {
                    "tradePool": 12,
                    "combatPool": 18,
                    "usedTrade": -10,
                    "usedCombat": -18,
                    "purchasedCards": [
                        "dreadnaught",
                        "blobwheel"
                    ],
                    "completedMissions": [],
                    "events": [
                        "tacticalmaneuver"
                    ],
                    "playedCards": [
                        "supplybot",
                        "tradebot",
                        "embassyyacht",
                        "explorer"
                    ],
                    "scrappedCards": [
                        "scout",
                        "scout",
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": 3,
                            "new": 44
                        },
                        "HardAI": {
                            "diff": -18,
                            "new": 13
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 4,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
                                    "scrapCount": 3,
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
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                                "missilemech": {
                                    "name": "Missile Mech",
                                    "cost": 6,
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
                            "authority": 9
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "playedCount": 4
                                },
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 5,
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 3,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                            "authority": 44
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 14,
                    "usedTrade": -6,
                    "usedCombat": -14,
                    "purchasedCards": [
                        "stealthneedle",
                        "imperialfighter",
                        "tradebot"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "machinebase",
                        "patrolmech",
                        "missilebot"
                    ],
                    "scrappedCards": [
                        "viper",
                        "scout",
                        "scout",
                        "ram"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "HardAI": {
                            "diff": 10,
                            "new": 15
                        },
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
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 6,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
                                    "scrapCount": 3,
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
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                                "missilemech": {
                                    "name": "Missile Mech",
                                    "cost": 6,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
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
                                },
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
                            "authority": 19
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "playedCount": 4
                                },
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 5,
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
                                    "playedCount": 1
                                },
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
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 3,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                            "authority": 30
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 15,
                    "usedTrade": 0,
                    "usedCombat": -15,
                    "purchasedCards": [],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "mechworld",
                        "tradeescort",
                        "blobfighter",
                        "recyclingstation",
                        "spacestation",
                        "tradebot",
                        "tradepod"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
                    "discardedCards": [
                        "scout",
                        "supplybot"
                    ],
                    "destroyedBases": [
                        "machinebase"
                    ],
                    "winner": "",
                    "drawCount": 4,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 34
                        },
                        "HardAI": {
                            "diff": -9,
                            "new": 10
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 6,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
                                    "scrapCount": 3,
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
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
                                    "playedCount": 1
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                                "missilemech": {
                                    "name": "Missile Mech",
                                    "cost": 6,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
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
                                },
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
                            "authority": 10
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                    "playedCount": 5
                                },
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
                                    "discardCount": 2,
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
                                    "playedCount": 1
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
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
                                    "playedCount": 1
                                },
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
                                    "playedCount": 2
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 3,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                                    "playedCount": 1
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
                            "authority": 34
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 7,
                    "usedTrade": -5,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "missilebot",
                        "blobfighter",
                        "missilebot"
                    ],
                    "completedMissions": [],
                    "events": [
                        "powerfulbacking"
                    ],
                    "playedCards": [],
                    "scrappedCards": [
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "mechworld"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 5,
                            "new": 39
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "count": 2,
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
                                    "count": 3,
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
                                    "scrapCount": 6,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
                                    "scrapCount": 4,
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
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
                                    "playedCount": 1
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                                "missilemech": {
                                    "name": "Missile Mech",
                                    "cost": 6,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
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
                                },
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
                            "authority": 10
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                    "playedCount": 5
                                },
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
                                    "discardCount": 2,
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
                                    "playedCount": 1
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
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
                                    "playedCount": 1
                                },
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                    "destroyedCount": 1,
                                    "playedCount": 0
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 3,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                                    "playedCount": 1
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
                            "authority": 39
                        }
                    ]
                },
                {
                    "tradePool": 17,
                    "combatPool": 47,
                    "usedTrade": -17,
                    "usedCombat": -47,
                    "purchasedCards": [
                        "blobworld",
                        "thehive",
                        "imperialfrigate",
                        "imperialfighter"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "flagship",
                        "dreadnaught",
                        "mothership",
                        "embassyyacht",
                        "embassyyacht",
                        "tradebot",
                        "cutter",
                        "battlepod",
                        "battlestation"
                    ],
                    "scrappedCards": [
                        "scout",
                        "battlestation",
                        "spacestation",
                        "blobwheel",
                        "dreadnaught"
                    ],
                    "discardedCards": [
                        "blobwheel",
                        "battlestation",
                        "scout"
                    ],
                    "destroyedBases": [],
                    "winner": "Player",
                    "drawCount": 10,
                    "authority": {
                        "Player": {
                            "diff": 15,
                            "new": 47
                        },
                        "HardAI": {
                            "diff": -47,
                            "new": -37
                        }
                    },
                    "players": [
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "count": 2,
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
                                    "count": 3,
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
                                    "scrapCount": 6,
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
                                "patrolmech": {
                                    "name": "Patrol Mech",
                                    "cost": 4,
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
                                "battlemech": {
                                    "name": "Battle Mech",
                                    "cost": 5,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 3,
                                    "scrapCount": 4,
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
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "machinebase": {
                                    "name": "Machine Base",
                                    "cost": 7,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 1,
                                    "playedCount": 1
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
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
                                "missilemech": {
                                    "name": "Missile Mech",
                                    "cost": 6,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
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
                                },
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
                            "authority": -37
                        },
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
                                "recyclingstation": {
                                    "name": "Recycling Station",
                                    "cost": 4,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                    "playedCount": 6
                                },
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 7,
                                    "discardCount": 3,
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
                                    "playedCount": 2
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
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
                                    "playedCount": 1
                                },
                                "mechworld": {
                                    "name": "Mech World",
                                    "cost": 5,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
                                },
                                "battlestation": {
                                    "name": "Battle Station",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 1,
                                    "destroyedCount": 1,
                                    "playedCount": 1
                                },
                                "tradeescort": {
                                    "name": "Trade Escort",
                                    "cost": 5,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "embassyyacht": {
                                    "name": "Embassy Yacht",
                                    "cost": 3,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 4
                                },
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 3,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "mothership": {
                                    "name": "Mothership",
                                    "cost": 7,
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
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
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
                                "dreadnaught": {
                                    "name": "Dreadnaught",
                                    "cost": 7,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                    "discardCount": 1,
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
                                "thehive": {
                                    "name": "The Hive",
                                    "cost": 5,
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
                                },
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
                                }
                            },
                            "authority": 54
                        }
                    ]
                }
            ]
    let decksData = getFinalDecks({firstPlayer, winner, rounds})
    let finalAuthority = getFinalAuthority(rounds[rounds.length -1])
    let completedMissions = getCompletedMissions(rounds[rounds.length -1])
    console.log(completedMissions)
    let winCondition = getWinCondition(rounds[rounds.length -1])
    let extensions = getExtensions(decksData)
    let eventslist = getEvents({firstPlayer, winner, rounds})
    for(let i = 0; i < eventslist.length; i++){
        if(eventslist[i] in events['cards']){
            extensions[events['name']] = {
                'name': events['name'] + '.png',
                'width': 180,
                'height': 84
            }
        }
        if(eventslist[i] in frontiers_events['cards']){
            extensions[frontiers_events['name']] = {
                'name': frontiers_events['name'] + '.png',
                'width': 98,
                'height': 107
            }
        }
    }
    for(let player in completedMissions){
        if(completedMissions[player].length != 0){
            extensions['missions'] = {
                'name': 'missions.png',
                'width': 158,
                'height': 78
            }
        }
    }
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
            <div id="test" className="flex flex-col gap-2 w-2/3">
                <div className="flex flex-row items-center gap-4 m-4 p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 outline outline-offset-2 outline-double outline-scifi1">
                    <p className="text-scifi5 text-3xl font-medium">{winCondition}</p>
                    <div className="flex flex-wrap items-center gap-2">
                        {
                            Object.keys(extensions).map((oneKey,i)=>{
                                return (
                                    <div className="flex w-10">
                                        <Image
                                            key={i}
                                            src={"/images/extensions/" + extensions[oneKey]['name']} // Route of the image file
                                            height={extensions[oneKey]['height']} // Desired size with correct aspect ratio
                                            width={extensions[oneKey]['width']} // Desired size with correct aspect ratio
                                            alt="Step 1"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Tab.Group>
                    <div className="flex flex-row mx-4">
                    <Tab.List className="flex space-x-2 p-1">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? "bg-slate-600 text-white text-md border border-2 font-medium px-6 py-1 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi1 text-md font-medium px-6 py-2 border rounded-lg"
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
                                        selected ? "bg-slate-600 text-white text-md border border-2 font-medium px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi1 text-md font-medium px-6 py-2 border rounded-lg"
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
                            <div className="flex flex-row gap-4">
                            { 
                                    Object.keys(decksData).map((oneKey,i)=>{
                                        return (
                                            <div className={`${activePlayer == oneKey && open ? 'bg-scifi4 rounded-t-xl': ''} flex w-full`}>
                                                <div key={i} className={`${activePlayer == oneKey && open ? 'mt-4 mx-8': 'm-4 mx-8'} flex flex-col justify-between w-full p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 gap-4`}>
                                                    <PlayerOverviewV2 name={oneKey} deckData={decksData[oneKey]} authority={finalAuthority[oneKey]} missions={completedMissions[oneKey]}></PlayerOverviewV2>
                                                    <div className="flex justify-center px-2">
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
                                            </div>

                                        )
                                    })
                            }
                            </div>
                            {
                                open && 
                                <div className="bg-scifi4 p-4 rounded-b-xl rounded-t-xl">
                                    <DeckOverviewV2 deckData={decksData[activePlayer]} ></DeckOverviewV2>
                                </div>
                            }
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="flex flex-col gap-4 mx-4">
                                <div className="flex flex-row gap-2 p-2">
                                    {
                                        eventslist.map((value, index) => {
                                            return (
                                                <EventCard key={index} mission={value}></EventCard>
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex h-80 w-full">
                                    <AuthorityChart winner={winner} firstPlayer={firstPlayer} rounds={rounds}></AuthorityChart>
                                </div>
                                <div className="flex w-full">
                                    <OtherCharts  winner={winner} firstPlayer={firstPlayer} rounds={rounds}></OtherCharts>
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout>
    )
  }
  
  export default Test