import FinalAuthority from './finalAuthority'

// import dynamic method from next
import dynamic from 'next/dynamic';
// import your component with dynamic and disable SSR
const ReactSlider = dynamic(
    () => import('react-slider'),
    { ssr: false }
);

function PlayerOverviewV2({decks, name, authority, setTurn, turn}) {
    return (
        <div className="flex flex-row items-grow rounded-md border-scifi5 border-double border-4 bg-scifi1 mx-2 mt-2 p-2">
            <div className="">
                <FinalAuthority authority={authority}></FinalAuthority>
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="sm:p-2 text-xl md:text-3xl text-scifi5 font-bold whitespace-nowrap">{name}</p>
            </div>
            <div className="w-full h-full flex flex-row items-stretch justify-center">
                <ReactSlider
                    className="flex w-full h-full horizontal-slider"
                    thumbClassName="example-thumb rounded-xl text-lg"
                    trackClassName="example-track"
                    max={decks.length - 1}
                    defaultValue={turn}
                    onChange={(value, index) => {
                        setTurn(value)
                    }}
                    renderThumb={(props, state) => <div {...props}>turn {state.valueNow}</div>}
                />
            </div>
        </div>
    )
}

export default PlayerOverviewV2