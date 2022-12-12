import { core_set } from './core_set.js';
import { colony_wars } from './colony_wars.js';
import { frontiers } from './frontiers.js';
import { bases_battleships } from './bases_battleships.js';
import { fleets_fortresses } from './fleets_fortresses.js';
import { frontiers_promos } from './frontiers_promos.js';
import { assault } from './assault.js';
import { command } from './command.js';
import { stellar_allies } from './stellar_allies.js';
import { united_heroes } from './united_heroes.js';
import { crisis_heroes } from './crisis_heroes.js';
import { promo1 } from './promo1.js';
import { promo2 } from './promo2.js';
import { tech } from './tech.js';
import { command_decks } from './command_decks.js'
import { missions } from './missions.js'
import { events } from './events.js'
import { frontiers_events } from './frontiers_events.js'
import { requisition } from './requisition.js'

export default Object.assign(
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