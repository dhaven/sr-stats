import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, XCircleIcon } from '@heroicons/react/20/solid'

function SearchPlayer({ opponents, selectedPlayer, setSelectedPlayer }) {
  const [query, setQuery] = useState('')
  const filteredPlayers =
    query === ''
      ? opponents
      : opponents.filter((player) => {
        return player.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
      })

  return (
    <div className="flex flex-row gap-2">
      <Combobox value={selectedPlayer} onChange={setSelectedPlayer}>
        <div className="z-10 relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(player) => player}
              placeholder='Search player'
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPlayers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPlayers.map((player, index) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={player}
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {player}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <button onClick={(e) => { setSelectedPlayer("") }} className="inline-flex items-center text-white rounded-full" type="button">
        <XCircleIcon
          className="h-8 w-8 rounded-full"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

export default SearchPlayer