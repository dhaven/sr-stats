import FinalAuthority from './finalAuthority'
import Slider from '@mui/material/Slider';

function PlayerOverviewV2({ decks, name, authority, setTurn, turn }) {
    return (
        <div className="flex flex-row lg:flex-wrap xl:flex-nowrap rounded-md border-scifi5 border-double border-4 bg-scifi1 mx-2 mt-2 p-2">
            <div className="">
                <FinalAuthority authority={authority}></FinalAuthority>
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="sm:p-2 text-xl md:text-3xl text-scifi5 font-bold whitespace-nowrap">{name}</p>
            </div>
            <div className="w-full flex flex-row items-center m-4">
                <Slider
                    defaultValue={turn}
                    valueLabelDisplay="auto"
                    className="text-scifi4"
                    valueLabelFormat={(value, index) => {return `turn ${value}`}}
                    step={1}
                    marks
                    min={0}
                    max={decks.length - 1}
                    onChange={(event, value) => {
                        setTurn(value)
                    }}
                />
            </div>
        </div>
    )
}

export default PlayerOverviewV2