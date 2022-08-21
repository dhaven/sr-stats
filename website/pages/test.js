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
import Tooltip from '../components/tooltip.js'

function Test() {
    let winner = "Player"
    let firstPlayer = "Player"
    let rounds = [
                {
                    "tradePool": 2,
                    "combatPool": 1,
                    "usedTrade": -2,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "cutter"
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
                            "diff": -1,
                            "new": 49
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                }
                            }
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                    "tradePool": 4,
                    "combatPool": 1,
                    "usedTrade": -4,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "freighter"
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
                            "name": "Player",
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
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                        "tradepod",
                        "federationshuttle"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {},
                    "players": [
                        {
                            "name": "Player",
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 49
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 49
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
                            "new": 48
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 48
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 49
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
                            "diff": -2,
                            "new": 47
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 47
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 6,
                    "usedTrade": -6,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "royalredoubt"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [
                        "ram"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": -6,
                            "new": 42
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 42
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "ram": {
                                    "name": "Ram",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                            "authority": 47
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 0,
                    "usedTrade": -8,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "commandship"
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
                            "new": 46
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                            "authority": 46
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "ram": {
                                    "name": "Ram",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                            "authority": 47
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 0,
                    "usedTrade": -7,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "machinebase"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {},
                    "players": [
                        {
                            "name": "Player",
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                            "authority": 46
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "ram": {
                                    "name": "Ram",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                            "authority": 47
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 4,
                    "usedTrade": -8,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "tradepod",
                        "junkyard"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "scout"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "Player": {
                            "diff": 8,
                            "new": 54
                        },
                        "HardAI": {
                            "diff": -4,
                            "new": 43
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                    "playedCount": 1
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                            "authority": 54
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "ram": {
                                    "name": "Ram",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                            "authority": 43
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 2,
                    "usedTrade": -3,
                    "usedCombat": -2,
                    "purchasedCards": [
                        "ram"
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
                            "diff": -2,
                            "new": 52
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
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
                                    "playedCount": 1
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                            "authority": 52
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                            "authority": 43
                        }
                    ]
                },
                {
                    "tradePool": 12,
                    "combatPool": 10,
                    "usedTrade": -12,
                    "usedCombat": -10,
                    "purchasedCards": [
                        "missilebot",
                        "missilebot",
                        "supplybot",
                        "blobdestroyer",
                        "tradebot"
                    ],
                    "completedMissions": [
                        "diversify"
                    ],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": 8,
                            "new": 60
                        },
                        "HardAI": {
                            "diff": -10,
                            "new": 33
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 1
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                            "authority": 60
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                            "authority": 33
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 9,
                    "usedTrade": -6,
                    "usedCombat": -9,
                    "purchasedCards": [
                        "imperialfrigate",
                        "patrolmech",
                        "corvette"
                    ],
                    "completedMissions": [
                        "rule"
                    ],
                    "events": [],
                    "playedCards": [
                        "machinebase",
                        "royalredoubt"
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
                            "diff": -9,
                            "new": 51
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 1
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                            "authority": 51
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                }
                            },
                            "authority": 33
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 11,
                    "usedTrade": -3,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "supplybot"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "missilebot",
                        "tradebot",
                        "scout"
                    ],
                    "scrappedCards": [
                        "viper",
                        "scout"
                    ],
                    "discardedCards": [
                        "scout",
                        "viper"
                    ],
                    "destroyedBases": [
                        "royalredoubt"
                    ],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 55
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
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
                                }
                            },
                            "authority": 55
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                }
                            },
                            "authority": 33
                        }
                    ]
                },
                {
                    "tradePool": 10,
                    "combatPool": 5,
                    "usedTrade": -10,
                    "usedCombat": -5,
                    "purchasedCards": [
                        "brainworld",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [
                        "viper",
                        "ram"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "Player": {
                            "diff": -5,
                            "new": 50
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
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
                                }
                            },
                            "authority": 50
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                            "authority": 33
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 6,
                    "usedTrade": -3,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "battlestation"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "surveyship"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [
                        "machinebase"
                    ],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {},
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
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
                            "authority": 50
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                            "authority": 33
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 10,
                    "usedTrade": -5,
                    "usedCombat": -10,
                    "purchasedCards": [
                        "embassyyacht",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "patrolmech"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "Player": {
                            "diff": -10,
                            "new": 40
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
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
                            "authority": 40
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                            "authority": 33
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 6,
                    "usedTrade": -6,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "portofcall"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "junkyard",
                        "supplybot"
                    ],
                    "scrappedCards": [
                        "scout",
                        "scout"
                    ],
                    "discardedCards": [
                        "tradepod"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 8,
                            "new": 48
                        },
                        "HardAI": {
                            "diff": -6,
                            "new": 27
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                            "authority": 27
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 6,
                    "usedTrade": -3,
                    "usedCombat": -6,
                    "purchasedCards": [
                        "blobwheel"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "patrolmech"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [
                        "junkyard"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 3,
                            "new": 30
                        },
                        "Player": {
                            "diff": -1,
                            "new": 47
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                            "authority": 47
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                    "tradePool": 6,
                    "combatPool": 3,
                    "usedTrade": -5,
                    "usedCombat": -3,
                    "purchasedCards": [
                        "warworld"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "missilebot"
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
                            "diff": 4,
                            "new": 51
                        },
                        "HardAI": {
                            "diff": -3,
                            "new": 27
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 4,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 2
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                            "authority": 51
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                            "authority": 27
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 11,
                    "usedTrade": -3,
                    "usedCombat": -11,
                    "purchasedCards": [
                        "battlepod",
                        "tradebot"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "machinebase"
                    ],
                    "scrappedCards": [
                        "scout",
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": -11,
                            "new": 40
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 4,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 2
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                            "authority": 40
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "playedCount": 2
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
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
                            "authority": 27
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 8,
                    "usedTrade": -4,
                    "usedCombat": -8,
                    "purchasedCards": [
                        "barterworld"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "supplybot",
                        "junkyard"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
                    "discardedCards": [
                        "scout"
                    ],
                    "destroyedBases": [
                        "machinebase"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 44
                        },
                        "HardAI": {
                            "diff": -2,
                            "new": 25
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 5,
                                    "discardCount": 2,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 2
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                            "authority": 44
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "explorer": {
                                    "name": "Explorer",
                                    "cost": 2,
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
                            "authority": 25
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 9,
                    "usedTrade": -8,
                    "usedCombat": -9,
                    "purchasedCards": [
                        "fleethq"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "brainworld",
                        "royalredoubt",
                        "battlepod"
                    ],
                    "scrappedCards": [
                        "viper",
                        "scout",
                        "mothership",
                        "explorer"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "junkyard"
                    ],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": -4,
                            "new": 40
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
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
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 5,
                                    "discardCount": 2,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                    "discardCount": 1,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 2
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                            "authority": 40
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 25
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 16,
                    "usedTrade": -6,
                    "usedCombat": -16,
                    "purchasedCards": [
                        "recyclingstation",
                        "cutter"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "commandship",
                        "warworld",
                        "tradebot",
                        "missilebot",
                        "supplybot",
                        "tradepod"
                    ],
                    "scrappedCards": [
                        "viper",
                        "supplybot"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "royalredoubt",
                        "brainworld"
                    ],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 44
                        },
                        "HardAI": {
                            "diff": -4,
                            "new": 21
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 5,
                                    "discardCount": 2,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 3
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 44
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 21
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 10,
                    "usedTrade": -6,
                    "usedCombat": -10,
                    "purchasedCards": [
                        "battleblob"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "blobwheel",
                        "patrolmech"
                    ],
                    "scrappedCards": [
                        "blobwheel"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "warworld"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 3,
                            "new": 24
                        },
                        "Player": {
                            "diff": -6,
                            "new": 38
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 5,
                                    "discardCount": 2,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                    "playedCount": 1
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 3
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 38
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 24
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 4,
                    "usedTrade": 0,
                    "usedCombat": -4,
                    "purchasedCards": [],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "missilebot",
                        "battlestation",
                        "surveyship",
                        "federationshuttle",
                        "scout"
                    ],
                    "scrappedCards": [
                        "scout",
                        "surveyship"
                    ],
                    "discardedCards": [
                        "scout"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "HardAI": {
                            "diff": -4,
                            "new": 20
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 6,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 4
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 38
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 20
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 2,
                    "usedTrade": -3,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "surveyship"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "machinebase",
                        "tradebot"
                    ],
                    "scrappedCards": [
                        "scout",
                        "corvette"
                    ],
                    "discardedCards": [
                        "scout"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "HardAI": {
                            "diff": 3,
                            "new": 23
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 6,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 4
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 38
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 4,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 23
                        }
                    ]
                },
                {
                    "tradePool": 11,
                    "combatPool": 11,
                    "usedTrade": 0,
                    "usedCombat": -11,
                    "purchasedCards": [],
                    "completedMissions": [
                        "defend"
                    ],
                    "events": [],
                    "playedCards": [
                        "portofcall",
                        "warworld",
                        "cutter",
                        "cutter",
                        "tradepod",
                        "scout"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "Player": {
                            "diff": 8,
                            "new": 42
                        },
                        "HardAI": {
                            "diff": -11,
                            "new": 12
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 6,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 4
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 46
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 4,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 12
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 16,
                    "usedTrade": -4,
                    "usedCombat": -16,
                    "purchasedCards": [
                        "blobwheel",
                        "imperialfighter"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "brainworld",
                        "machinebase",
                        "fleethq",
                        "royalredoubt",
                        "battlepod"
                    ],
                    "scrappedCards": [
                        "tradebot",
                        "scout",
                        "scout",
                        "freighter"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "portofcall",
                        "battlestation",
                        "warworld"
                    ],
                    "winner": "",
                    "drawCount": 3,
                    "authority": {
                        "Player": {
                            "diff": -1,
                            "new": 45
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 6,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
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
                                    "playedCount": 4
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                }
                            },
                            "authority": 45
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
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
                                    "destroyedCount": 2,
                                    "playedCount": 4
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
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
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
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 12
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 13,
                    "usedTrade": 0,
                    "usedCombat": -13,
                    "purchasedCards": [],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "commandship",
                        "recyclingstation",
                        "junkyard",
                        "blobdestroyer",
                        "tradepod"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
                    "discardedCards": [
                        "tradebot",
                        "barterworld"
                    ],
                    "destroyedBases": [
                        "brainworld",
                        "royalredoubt"
                    ],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 49
                        },
                        "HardAI": {
                            "diff": -1,
                            "new": 11
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 7,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                    "playedCount": 4
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "discardCount": 1,
                                    "destroyedCount": 0,
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                "barterworld": {
                                    "name": "Barter World",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
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
                                }
                            },
                            "authority": 49
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "destroyedCount": 2,
                                    "playedCount": 4
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
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
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
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                            "authority": 11
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 26,
                    "usedTrade": -3,
                    "usedCombat": -26,
                    "purchasedCards": [
                        "blobfighter",
                        "federationshuttle",
                        "tradebot"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "patrolmech",
                        "battlepod",
                        "blobwheel"
                    ],
                    "scrappedCards": [
                        "battlemech"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "junkyard",
                        "recyclingstation"
                    ],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "Player": {
                            "diff": -17,
                            "new": 32
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 3,
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
                                    "scrapCount": 7,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "playedCount": 4
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
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
                                    "discardCount": 1,
                                    "destroyedCount": 0,
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                "barterworld": {
                                    "name": "Barter World",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
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
                                }
                            },
                            "authority": 32
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "destroyedCount": 2,
                                    "playedCount": 4
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
                                    "playedCount": 4
                                },
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                    "playedCount": 3
                                },
                                "tradebot": {
                                    "name": "Trade Bot",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 11
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 10,
                    "usedTrade": -4,
                    "usedCombat": -10,
                    "purchasedCards": [
                        "blobdestroyer"
                    ],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "supplybot",
                        "cutter",
                        "missilebot",
                        "federationshuttle"
                    ],
                    "scrappedCards": [
                        "scout",
                        "tradebot"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "fleethq"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 8,
                            "new": 36
                        },
                        "HardAI": {
                            "diff": -2,
                            "new": 9
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 8,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "playedCount": 5
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 4
                                },
                                "blobdestroyer": {
                                    "name": "Blob Destroyer",
                                    "cost": 4,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
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
                                    "scrapCount": 1,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                "barterworld": {
                                    "name": "Barter World",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
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
                                }
                            },
                            "authority": 40
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "destroyedCount": 2,
                                    "playedCount": 4
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
                                    "playedCount": 4
                                },
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
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
                                    "playedCount": 3
                                },
                                "tradebot": {
                                    "name": "Trade Bot",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 9
                        }
                    ]
                },
                {
                    "tradePool": 10,
                    "combatPool": 38,
                    "usedTrade": -9,
                    "usedCombat": -38,
                    "purchasedCards": [
                        "stealthneedle",
                        "dreadnaught",
                        "corvette"
                    ],
                    "completedMissions": [
                        "ally"
                    ],
                    "events": [],
                    "playedCards": [
                        "royalredoubt"
                    ],
                    "scrappedCards": [
                        "blobwheel",
                        "imperialfrigate",
                        "stealthneedle",
                        "dreadnaught"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 3,
                    "authority": {
                        "HardAI": {
                            "diff": 3,
                            "new": 12
                        },
                        "Player": {
                            "diff": -38,
                            "new": 2
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 8,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "playedCount": 5
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 4
                                },
                                "blobdestroyer": {
                                    "name": "Blob Destroyer",
                                    "cost": 4,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
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
                                    "scrapCount": 1,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                "barterworld": {
                                    "name": "Barter World",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
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
                                }
                            },
                            "authority": 2
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule",
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 4
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
                                    "destroyedCount": 2,
                                    "playedCount": 4
                                },
                                "imperialfrigate": {
                                    "name": "Imperial Frigate",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
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
                                    "playedCount": 4
                                },
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                    "playedCount": 3
                                },
                                "tradebot": {
                                    "name": "Trade Bot",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 12
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 8,
                    "usedTrade": 0,
                    "usedCombat": -8,
                    "purchasedCards": [],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [
                        "missilebot",
                        "blobdestroyer",
                        "barterworld"
                    ],
                    "destroyedBases": [
                        "royalredoubt"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "Player": {
                            "diff": 8,
                            "new": 10
                        },
                        "HardAI": {
                            "diff": -2,
                            "new": 10
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 8,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 5
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 4
                                },
                                "blobdestroyer": {
                                    "name": "Blob Destroyer",
                                    "cost": 4,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
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
                                    "scrapCount": 1,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                "barterworld": {
                                    "name": "Barter World",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 2,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
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
                                }
                            },
                            "authority": 10
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule",
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 6,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 4,
                                    "playedCount": 4
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
                                    "destroyedCount": 2,
                                    "playedCount": 4
                                },
                                "imperialfrigate": {
                                    "name": "Imperial Frigate",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
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
                                    "playedCount": 4
                                },
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
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
                                    "playedCount": 3
                                },
                                "tradebot": {
                                    "name": "Trade Bot",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 1
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 10
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 22,
                    "usedTrade": 0,
                    "usedCombat": -22,
                    "purchasedCards": [],
                    "completedMissions": [],
                    "events": [],
                    "playedCards": [
                        "machinebase",
                        "tradebot",
                        "brainworld",
                        "patrolmech"
                    ],
                    "scrappedCards": [
                        "scout",
                        "scout",
                        "imperialfighter",
                        "corvette",
                        "battlepod",
                        "surveyship",
                        "battleblob"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "HardAI",
                    "drawCount": 6,
                    "authority": {
                        "HardAI": {
                            "diff": 4,
                            "new": 14
                        },
                        "Player": {
                            "diff": -22,
                            "new": -12
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "diversify",
                                "defend"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "cutter": {
                                    "name": "Cutter",
                                    "cost": 2,
                                    "faction": [
                                        "Trade Federation"
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
                                    "scrapCount": 8,
                                    "discardCount": 3,
                                    "destroyedCount": 0,
                                    "playedCount": 4
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
                                "tradepod": {
                                    "name": "Trade Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "surveyship": {
                                    "name": "Survey Ship",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "commandship": {
                                    "name": "Command Ship",
                                    "cost": 8,
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
                                "junkyard": {
                                    "name": "Junkyard",
                                    "cost": 6,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                    "discardCount": 1,
                                    "destroyedCount": 0,
                                    "playedCount": 5
                                },
                                "supplybot": {
                                    "name": "Supply Bot",
                                    "cost": 3,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 4
                                },
                                "blobdestroyer": {
                                    "name": "Blob Destroyer",
                                    "cost": 4,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 1,
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
                                    "scrapCount": 1,
                                    "discardCount": 1,
                                    "destroyedCount": 0,
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
                                    "playedCount": 1
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
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
                                "warworld": {
                                    "name": "War World",
                                    "cost": 5,
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
                                "barterworld": {
                                    "name": "Barter World",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 2,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
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
                                }
                            },
                            "authority": -12
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "rule",
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
                                "scout": {
                                    "name": "Scout",
                                    "cost": 0,
                                    "faction": [
                                        "Unaligned"
                                    ],
                                    "type": "ship",
                                    "count": 8,
                                    "scrapCount": 8,
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
                                "freighter": {
                                    "name": "Freighter",
                                    "cost": 4,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                "royalredoubt": {
                                    "name": "Royal Redoubt",
                                    "cost": 6,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 4,
                                    "playedCount": 4
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
                                    "destroyedCount": 2,
                                    "playedCount": 5
                                },
                                "imperialfrigate": {
                                    "name": "Imperial Frigate",
                                    "cost": 3,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 1,
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
                                    "playedCount": 5
                                },
                                "corvette": {
                                    "name": "Corvette",
                                    "cost": 2,
                                    "faction": [
                                        "Star Empire"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 2,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                },
                                "brainworld": {
                                    "name": "Brain World",
                                    "cost": 8,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "base",
                                    "count": 1,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                "battlepod": {
                                    "name": "Battle Pod",
                                    "cost": 2,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "tradebot": {
                                    "name": "Trade Bot",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 2,
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 2
                                },
                                "fleethq": {
                                    "name": "Fleet HQ",
                                    "cost": 8,
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
                                "battleblob": {
                                    "name": "Battle Blob",
                                    "cost": 6,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "ship",
                                    "count": 1,
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
                                    "scrapCount": 1,
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
                                    "scrapCount": 1,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                                "stealthneedle": {
                                    "name": "Stealth Needle",
                                    "cost": 1,
                                    "faction": [
                                        "Machine Cult"
                                    ],
                                    "type": "ship",
                                    "count": 1,
                                    "scrapCount": 1,
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
                                    "scrapCount": 1,
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 0
                                }
                            },
                            "authority": 14
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
            <div className="flex flex-col gap-2 w-screen sm:w-full lg:w-5/6 2xl:w-2/3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-8 m-4 p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 outline outline-offset-2 outline-double outline-scifi1">
                    <p className="text-scifi5 text-lg md:text-3xl font-medium">{winCondition}</p>
                    <div className="flex flex-wrap items-center gap-2">
                        {
                            Object.keys(extensions).map((oneKey,i)=>{
                                return (
                                    <div key={i} className="flex w-10 2xl:w-16">
                                        <Image
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
                    <div className="flex flex-row">
                    <Tab.List className="flex space-x-2 px-4">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium px-6 m-1 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 border-2 border-scifi4 rounded-lg"
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
                                        selected ? "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium px-6 py-1 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 border-2 border-scifi4 rounded-lg"
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
                            <div className="flex flex-row flex-wrap md:flex-nowrap px-4">
                            { 
                                    Object.keys(decksData).map((oneKey,i)=>{
                                        return (
                                            <div key={i} className={`${activePlayer == oneKey && open ? 'bg-scifi4 rounded-t-xl': ''} flex flex-col w-full`}>
                                                <div  className="md:m-2 lg:m-4 flex flex-col justify-between p-2 sm:p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 gap-4">
                                                    <PlayerOverviewV2 name={oneKey} deckData={decksData[oneKey]} authority={finalAuthority[oneKey]} missions={completedMissions[oneKey]}></PlayerOverviewV2>
                                                    <div className="flex justify-center px-2">
                                                        <button onClick={() => updatVisibleDeck(oneKey)} 
                                                            className={ activePlayer == oneKey && open ?
                                                            "rounded-full bg-scifi3 ring-scifi2 text-white hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium" :
                                                            "rounded-full bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium"
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
                                                {
                                                    activePlayer == oneKey && open && 
                                                    <div className="md:hidden bg-scifi4 rounded-b-xl">
                                                        <DeckOverviewV2 deckData={decksData[activePlayer]} ></DeckOverviewV2>
                                                    </div>
                                                }
                                            </div>

                                        )
                                    })
                            }
                            </div>
                            {
                                open && 
                                <div className="hidden md:flex bg-scifi4 sm:py-4 lg:py-6 sm:px-2 lg:px-4 sm:mx-4 lg:p-2 rounded-b-xl">
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
                                                <div key={index} className="group relative">
                                                    <EventCard mission={value}></EventCard>
                                                    <Tooltip hint={value}></Tooltip>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex h-40 sm:h-80 w-full">
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