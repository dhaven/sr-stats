import Image from 'next/image'

function Card() {
    return (
        <div className=" w-full flex flex-row">
            <Image src="/images/powerful_backing.jpg" alt="me" width="350" height="450" />
        </div>
    )
  }
  
  export default Card