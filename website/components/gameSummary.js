import styles from './gameSummary.module.css'
import { getDeckSummary, getFinalAuthority  } from '../lib/helper.js'

export default function GameSummary({winner, decksData, lastRound}) {
    let finalAuthority = getFinalAuthority(lastRound)
    let classNames = {}
    let loser = ""
    for(let key in decksData){
        if(key == winner){
            classNames[winner] = []
        }else{
            loser = key
            classNames[loser] = []
        }
        let {blob_count, machine_cult_count, star_empire_count, trade_federation_count} = getDeckSummary(decksData[key])
        let totalFactions = blob_count + machine_cult_count + star_empire_count + trade_federation_count
        for(let i = 0; i < 4; i++){
            classNames[key].push({})
            if(i == 0 && blob_count != 0){
                let normalizedVal = Math.round((blob_count/totalFactions)*100)
                classNames[key][i]['background'] = "#46a24d"
                classNames[key][i]["width"] = normalizedVal
            }else if(i == 1 && machine_cult_count != 0){
                let normalizedVal = Math.round((machine_cult_count/totalFactions)*100)
                classNames[key][i]["background"] = "#ba2028"
                classNames[key][i]["width"] = normalizedVal
            }else if(i == 2 && star_empire_count != 0){
                let normalizedVal = Math.round((star_empire_count/totalFactions)*100)
                classNames[key][i]["background"] = "#f1c61a"
                classNames[key][i]["width"] = normalizedVal
            }else if(i == 3 && trade_federation_count != 0){
                let normalizedVal = Math.round((trade_federation_count/totalFactions)*100)
                classNames[key][i]["background"] = "#4850a2"
                classNames[key][i]["width"] = normalizedVal
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <p className="p-2 text-xl text-scifi5 font-bold">{winner} won 🥇</p>
                <div className="relative p-2 w-24 h-20">
                    <svg className="absolute inset-x-0 drop-shadow-md" fill="#0f8942" stroke="#0f8942" viewBox="0 0 166.88282 104.205" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-148.13691,-117.23627)">
                            <g transform="translate(1224.9083,528.21529)" />
                            <g>
                                <path
                                    transform="matrix(0.26458333,0,0,0.26458333,160.14083,138.06084)"
                                    d="m -45.369141,-78.707031 c 32.720429,39.856441 58.503954,70.2305195 92.419922,107.966797 h 73.953129 v 6.910156 H 51.007812 C 121.00391,128.81055 100.08649,100.36084 121.00391,128.81055 V 214 l 152.02929,101.13867 146.53711,-101.25 v -84.72461 c 59.00402,-80.196532 64.76462,-87.929249 0,0 l 70.25387,-92.994138 c -23.41797,0 -46.83594,0 -70.25391,0 v -6.923828 h 73.70117 c 32.15905,-34.7174165 61.84268,-71.576972 92.09766,-107.9375 -215.81612,-0.0017 -438.68331,-0.01571 -630.738241,-0.01563 z m 464.939451,19.982422 h 123.20508 c -18.65041,23.388818 -38.47176,45.732458 -58.41992,68.0019528 h -64.78516 z m -422.1914038,0.01563 H 121.00391 V 9.2636719 H 55.96875 C 35.496826,-12.581544 16.552601,-35.737847 -2.6210938,-58.708984 Z m 143.6210938,0 H 399.57422 V 203.39258 L 272.81836,290.97852 141,203.28125 V -58.708984 Z M 88.396484,54.152344 H 120.0293 V 97.128906 C 109.08609,82.241914 99.896453,69.770297 88.396484,54.152344 Z m 332.414066,0 h 31.625 c -10.9795,14.911122 -22.6391,30.760425 -31.625,42.976562 z"/>
                            </g>
                        </g>
                    </svg>
                    <p className="font-bold text-scifi5 text-lg absolute text-center inset-x-2 inset-y-4">{finalAuthority[winner]}</p>
                </div>
                <div className="drop-shadow-md flex flex-row h-4 w-1/2 m-2">
                    {
                        classNames[winner].map((item, index)=>{
                            return (
                                <div key={index}>
                                    <style jsx>{`
                                        div {
                                            background: ${item['background']};
                                            width: ${item['width']}%;
                                        }
                                    `}</style>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
            <div className={styles.invert}>
                <p className="text-xl p-2 text-scifi5 font-bold">{loser}</p>
                <div className="relative p-2 w-24 h-20">
                    <svg className="absolute inset-x-0 drop-shadow-md" fill="#0f8942" stroke="#0f8942" viewBox="0 0 166.88282 104.205" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-148.13691,-117.23627)">
                            <g transform="translate(1224.9083,528.21529)" />
                            <g>
                                <path
                                    transform="matrix(0.26458333,0,0,0.26458333,160.14083,138.06084)"
                                    d="m -45.369141,-78.707031 c 32.720429,39.856441 58.503954,70.2305195 92.419922,107.966797 h 73.953129 v 6.910156 H 51.007812 C 121.00391,128.81055 100.08649,100.36084 121.00391,128.81055 V 214 l 152.02929,101.13867 146.53711,-101.25 v -84.72461 c 59.00402,-80.196532 64.76462,-87.929249 0,0 l 70.25387,-92.994138 c -23.41797,0 -46.83594,0 -70.25391,0 v -6.923828 h 73.70117 c 32.15905,-34.7174165 61.84268,-71.576972 92.09766,-107.9375 -215.81612,-0.0017 -438.68331,-0.01571 -630.738241,-0.01563 z m 464.939451,19.982422 h 123.20508 c -18.65041,23.388818 -38.47176,45.732458 -58.41992,68.0019528 h -64.78516 z m -422.1914038,0.01563 H 121.00391 V 9.2636719 H 55.96875 C 35.496826,-12.581544 16.552601,-35.737847 -2.6210938,-58.708984 Z m 143.6210938,0 H 399.57422 V 203.39258 L 272.81836,290.97852 141,203.28125 V -58.708984 Z M 88.396484,54.152344 H 120.0293 V 97.128906 C 109.08609,82.241914 99.896453,69.770297 88.396484,54.152344 Z m 332.414066,0 h 31.625 c -10.9795,14.911122 -22.6391,30.760425 -31.625,42.976562 z"/>
                            </g>
                        </g>
                    </svg>
                    <p className="text-lg text-scifi5 font-bold absolute text-center inset-x-2 inset-y-4">{finalAuthority[loser]}</p>
                </div>
                <div className="drop-shadow-md flex flex-row h-4 w-1/3 m-2">
                    {
                        classNames[loser].map((item, index)=>{
                            return (
                                 <div key={index}>
                                     <style jsx>{`
                                        div {
                                            background: ${item['background']};
                                            width: ${item['width']}%;
                                        }
                                    `}</style>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}