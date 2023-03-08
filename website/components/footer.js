
export default function Footer() {
    return (
        <footer className="">
            <div className="flex justify-center gap-2 m-2">
                <a href="https://discord.gg/q4kqH775FA" target="_blank">
                    <div className="flex bg-white rounded-lg py-2 px-1 border-black border">
                        <div className="flex items-center mx-2">
                            <Image
                                src={discord_img}
                                height="24"
                                width="24"
                            />
                        </div>
                        <p>Join the community! </p>
                    </div>
                </a>
            </div>
        </footer>
    )

}