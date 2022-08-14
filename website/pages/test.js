import PlayerOverviewV2 from '../components/playerOverviewV2'
import DeckOverviewV2 from '../components/deckOverviewV2'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AuthorityChart from '../components/authorityChart'
import OtherCharts from '../components/otherCharts'
import { getFinalDecks, getFinalAuthority, getCompletedMissions, getExtensions } from '../lib/helper.js'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function Test() {
    let winner = "Player"
    let firstPlayer = "Player"
    let rounds = [
                {
                    "tradePool": 3,
                    "combatPool": 0,
                    "usedTrade": -3,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "ram"
                    ],
                    "completedMissions": [],
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
                            "deckInitialized": false,
                            "deck": {
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
                            }
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [],
                            "deckInitialized": false,
                            "deck": {}
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 1,
                    "usedTrade": -3,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "supplybot"
                    ],
                    "completedMissions": [],
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
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 1,
                    "usedTrade": -3,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "imperialfrigate"
                    ],
                    "completedMissions": [],
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
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 49
                        },
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
                        "barterworld"
                    ],
                    "completedMissions": [],
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
                            "authority": 48
                        },
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
                        "supplybot"
                    ],
                    "completedMissions": [],
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
                            "authority": 48
                        },
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
                            "authority": 47
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 1,
                    "usedTrade": -5,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "patrolmech",
                        "federationshuttle"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "barterworld"
                    ],
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
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 47
                        },
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
                            "authority": 47
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 9,
                    "usedTrade": -6,
                    "usedCombat": -9,
                    "purchasedCards": [
                        "portofcall"
                    ],
                    "completedMissions": [],
                    "playedCards": [],
                    "scrappedCards": [
                        "ram"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "barterworld"
                    ],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -5,
                            "new": 42
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 42
                        }
                    ]
                },
                {
                    "tradePool": 5,
                    "combatPool": 0,
                    "usedTrade": -4,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "embassyyacht",
                        "federationshuttle"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "supplybot"
                    ],
                    "scrappedCards": [
                        "viper"
                    ],
                    "discardedCards": [
                        "viper"
                    ],
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
                                    "discardCount": 1,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 42
                        }
                    ]
                },
                {
                    "tradePool": 6,
                    "combatPool": 1,
                    "usedTrade": -5,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "surveyship",
                        "tradepod"
                    ],
                    "completedMissions": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -1,
                            "new": 41
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                }
                            },
                            "authority": 47
                        },
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
                                    "discardCount": 1,
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 41
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 0,
                    "usedTrade": -7,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "machinebase"
                    ],
                    "completedMissions": [
                        "monopolize"
                    ],
                    "playedCards": [
                        "barterworld"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 13,
                            "new": 44
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                                }
                            },
                            "authority": 47
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 1,
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
                                    "playedCount": 2
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 54
                        }
                    ]
                },
                {
                    "tradePool": 8,
                    "combatPool": 4,
                    "usedTrade": -8,
                    "usedCombat": -4,
                    "purchasedCards": [
                        "commandship"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "supplybot"
                    ],
                    "scrappedCards": [
                        "viper"
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
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 47
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 1,
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
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 54
                        }
                    ]
                },
                {
                    "tradePool": 4,
                    "combatPool": 5,
                    "usedTrade": -4,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "barterworld"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "patrolmech"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [
                        "viper"
                    ],
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
                            "authority": 47
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 54
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 1,
                    "usedTrade": -6,
                    "usedCombat": -1,
                    "purchasedCards": [
                        "spacestation",
                        "battlepod"
                    ],
                    "completedMissions": [],
                    "playedCards": [],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -1,
                            "new": 53
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 47
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 53
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 0,
                    "usedTrade": -6,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "junkyard"
                    ],
                    "completedMissions": [],
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
                    "authority": {},
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [],
                            "deckInitialized": true,
                            "deck": {
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
                            "authority": 47
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "scrapCount": 2,
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 53
                        }
                    ]
                },
                {
                    "tradePool": 12,
                    "combatPool": 11,
                    "usedTrade": -12,
                    "usedCombat": -11,
                    "purchasedCards": [
                        "freighter",
                        "mechworld",
                        "warworld",
                        "missilebot"
                    ],
                    "completedMissions": [
                        "ally"
                    ],
                    "playedCards": [
                        "commandship",
                        "surveyship",
                        "imperialfrigate",
                        "tradepod",
                        "supplybot"
                    ],
                    "scrappedCards": [
                        "viper"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 3,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 51
                        },
                        "HardAI": {
                            "diff": -11,
                            "new": 42
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                            "authority": 51
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "scrapCount": 2,
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 2
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 42
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 0,
                    "usedTrade": -7,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "mothership"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "barterworld",
                        "supplybot"
                    ],
                    "scrappedCards": [
                        "scout"
                    ],
                    "discardedCards": [
                        "scout"
                    ],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 4,
                            "new": 46
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                            "authority": 51
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 46
                        }
                    ]
                },
                {
                    "tradePool": 12,
                    "combatPool": 2,
                    "usedTrade": -11,
                    "usedCombat": -2,
                    "purchasedCards": [
                        "battleblob",
                        "stealthneedle",
                        "blobfighter"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "mechworld",
                        "freighter"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": -2,
                            "new": 44
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                            "authority": 51
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 44
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 0,
                    "usedTrade": -6,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "thehive",
                        "tradebot"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "junkyard"
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
                            "diff": 4,
                            "new": 48
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                            "authority": 51
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 2,
                                    "playedCount": 3
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 48
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 14,
                    "usedTrade": -6,
                    "usedCombat": -14,
                    "purchasedCards": [
                        "blobwheel",
                        "blobwheel"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "battleblob",
                        "battlepod"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [
                        "junkyard",
                        "barterworld"
                    ],
                    "winner": "",
                    "drawCount": 1,
                    "authority": {
                        "HardAI": {
                            "diff": -5,
                            "new": 43
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                    "playedCount": 1
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
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
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 3
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 43
                        }
                    ]
                },
                {
                    "tradePool": 7,
                    "combatPool": 0,
                    "usedTrade": -7,
                    "usedCombat": 0,
                    "purchasedCards": [
                        "battlemech",
                        "explorer"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "barterworld"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "",
                    "drawCount": 0,
                    "authority": {
                        "HardAI": {
                            "diff": 3,
                            "new": 46
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                    "playedCount": 1
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
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
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 3,
                                    "playedCount": 4
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                    "tradePool": 12,
                    "combatPool": 38,
                    "usedTrade": -12,
                    "usedCombat": -38,
                    "purchasedCards": [
                        "explorer",
                        "explorer",
                        "recyclingstation",
                        "imperialfrigate",
                        "blobfighter",
                        "battlestation",
                        "imperialfighter"
                    ],
                    "completedMissions": [
                        "influence"
                    ],
                    "playedCards": [
                        "commandship",
                        "warworld",
                        "spacestation",
                        "imperialfrigate",
                        "explorer",
                        "explorer",
                        "supplybot",
                        "missilebot",
                        "surveyship",
                        "battlepod"
                    ],
                    "scrappedCards": [
                        "portofcall",
                        "scout",
                        "scout",
                        "explorer",
                        "explorer",
                        "imperialfrigate"
                    ],
                    "discardedCards": [],
                    "destroyedBases": [
                        "barterworld"
                    ],
                    "winner": "",
                    "drawCount": 5,
                    "authority": {
                        "Player": {
                            "diff": 4,
                            "new": 55
                        },
                        "HardAI": {
                            "diff": -38,
                            "new": 14
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally",
                                "influence"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 1,
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
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
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
                                    "playedCount": 2
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
                                    "playedCount": 2
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
                                    "playedCount": 1
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
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
                                    "playedCount": 2
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
                            "authority": 55
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 4,
                                    "playedCount": 4
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 8
                        }
                    ]
                },
                {
                    "tradePool": 3,
                    "combatPool": 13,
                    "usedTrade": -2,
                    "usedCombat": -10,
                    "purchasedCards": [
                        "battlepod"
                    ],
                    "completedMissions": [],
                    "playedCards": [
                        "machinebase",
                        "patrolmech",
                        "tradebot"
                    ],
                    "scrappedCards": [
                        "scout",
                        "scout"
                    ],
                    "discardedCards": [
                        "scout"
                    ],
                    "destroyedBases": [
                        "mechworld",
                        "spacestation"
                    ],
                    "winner": "",
                    "drawCount": 2,
                    "authority": {
                        "HardAI": {
                            "diff": 3,
                            "new": 11
                        }
                    },
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally",
                                "influence"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 1,
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
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
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
                                    "playedCount": 2
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
                                    "destroyedCount": 1,
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
                                    "playedCount": 1
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
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
                                    "count": 2,
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
                                    "playedCount": 2
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
                            "authority": 55
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "scrapCount": 4,
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 4,
                                    "playedCount": 4
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 11
                        }
                    ]
                },
                {
                    "tradePool": 0,
                    "combatPool": 18,
                    "usedTrade": 0,
                    "usedCombat": 0,
                    "purchasedCards": [],
                    "completedMissions": [
                        "exterminate"
                    ],
                    "playedCards": [
                        "blobfighter",
                        "battleblob",
                        "blobwheel"
                    ],
                    "scrappedCards": [],
                    "discardedCards": [],
                    "destroyedBases": [],
                    "winner": "Player",
                    "drawCount": 2,
                    "authority": {},
                    "players": [
                        {
                            "name": "Player",
                            "completedMissions": [
                                "ally",
                                "influence",
                                "exterminate"
                            ],
                            "deckInitialized": true,
                            "deck": {
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
                                    "scrapCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 1,
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
                                    "discardCount": 0,
                                    "destroyedCount": 0,
                                    "playedCount": 3
                                },
                                "portofcall": {
                                    "name": "Port of Call",
                                    "cost": 6,
                                    "faction": [
                                        "Trade Federation"
                                    ],
                                    "type": "base",
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
                                    "playedCount": 2
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
                                    "destroyedCount": 1,
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
                                    "playedCount": 2
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
                                    "playedCount": 1
                                },
                                "blobwheel": {
                                    "name": "Blob Wheel",
                                    "cost": 3,
                                    "faction": [
                                        "Blob"
                                    ],
                                    "type": "base",
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
                                    "playedCount": 2
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
                            "authority": 55
                        },
                        {
                            "name": "HardAI",
                            "completedMissions": [
                                "monopolize"
                            ],
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
                                    "scrapCount": 4,
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
                                    "discardCount": 2,
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
                                    "count": 2,
                                    "scrapCount": 0,
                                    "discardCount": 0,
                                    "destroyedCount": 4,
                                    "playedCount": 4
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
                                "federationshuttle": {
                                    "name": "Federation Shuttle",
                                    "cost": 1,
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
                            "authority": 11
                        }
                    ]
                }
            ]
    let decksData = getFinalDecks({firstPlayer, winner, rounds})
    let finalAuthority = getFinalAuthority(rounds[rounds.length -1])
    let completedMissions = getCompletedMissions(rounds[rounds.length -1])
    console.log(completedMissions)
    let extensions = getExtensions(decksData)
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
                    <p className="text-scifi5 text-3xl font-medium">David won by defeating HardAI</p>
                    <div className="flex flex-wrap items-center gap-2">
                        {
                            Object.keys(extensions).map((oneKey,i)=>{
                                return (
                                    <div className="flex w-10">
                                        <Image
                                            key={i}
                                            src={"/images/extensions/" + extensions[oneKey]['name']} // Route of the image file
                                            height={extensions[oneKey]['width']} // Desired size with correct aspect ratio
                                            width={extensions[oneKey]['height']} // Desired size with correct aspect ratio
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
                            <div className="flex flex-row gap-4 mx-4">
                                { 
                                    Object.keys(decksData).map((oneKey,i)=>{
                                        return (
                                            <div key={i} className="flex flex-col w-full p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 gap-4">
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
        
                                        )
                                    })
                                }
                            </div>
                            {
                                open && <DeckOverviewV2 deckData={decksData[activePlayer]} ></DeckOverviewV2>
                            }
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="flex flex-col gap-4 mx-4">
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