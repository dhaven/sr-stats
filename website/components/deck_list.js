import styles from './form.module.css'

export default function DeckList({deckData}) {
    console.log(deckData)
    return (
        <div className={styles.container}>
            {   deckData &&
                Object.keys(deckData).map((oneKey,i)=>{
                    return (
                    <div key={i}>
                        <h2 key={i}>{oneKey}</h2>
                        {deckData[oneKey].map((card)=>{
                        return Object.keys(card).map((cardName,i)=>{
                            return (
                            <li key={i}>
                            {cardName} {card[cardName]}x
                            </li>
                            )
                        })
                        })}
                    </div>
                    )
                })
            }
        </div>
    )
  }