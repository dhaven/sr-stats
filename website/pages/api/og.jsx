import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'experimental-edge',
};

const font = fetch(new URL('../../assets/DeathStar.otf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

export default async function handler(req) {
    const fontData = await font;
    const { searchParams } = new URL(req.url);
    const hasID = searchParams.has('id');
    const id = hasID ? searchParams.get('id') : 0;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/image?id=${id}`
    )
    const { data } = await res.json()
    return new ImageResponse(
        (
            <div 
                tw={"flex flex-col items-center h-full"}
                style={{
                    fontFamily: '"DeathStar"',
                  }}>
                <div tw={"flex pt-4 px-4"}>
                    <p tw={'text-8xl'}>{data['winner']['name']} won the game !</p>
                </div>
                <div tw={"flex flex-col w-1/2 items-center overflow-hidden"}>
                        {
                            data.extensions.map((value, i) => {
                                return (
                                    <div key={i} tw={"flex m-2"}>
                                        <img
                                            width="80"
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/extensions/${value}.png`}
                                        />
                                    </div>
                                )
                            })
                        }
                </div>
                <div tw={'flex items-center'}>
                    <div tw={'flex flex-col items-center w-2/5'}>
                        <div tw={"absolute border-[30px] w-96 h-96 rounded-full border-[#3d5a80]"}></div>
                        <p tw={'text-6xl pt-20'}>{data['winner']['name']}</p>
                        <div tw={"flex flex-col items-center"}>
                            <div tw={"flex pt-2"}>
                                <svg tw={"w-60 h-40"} fill="#0f8942" stroke="#0f8942" viewBox="0 0 166.88282 104.205" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(-148.13691,-117.23627)">
                                        <g transform="translate(1224.9083,528.21529)" />
                                        <g>
                                            <path
                                                style="stroke-width:30"
                                                transform="matrix(0.26458333,0,0,0.26458333,160.14083,138.06084)"
                                                d="m -45.369141,-78.707031 c 32.720429,39.856441 58.503954,70.2305195 92.419922,107.966797 h 73.953129 v 6.910156 H 51.007812 C 121.00391,128.81055 100.08649,100.36084 121.00391,128.81055 V 214 l 152.02929,101.13867 146.53711,-101.25 v -84.72461 c 59.00402,-80.196532 64.76462,-87.929249 0,0 l 70.25387,-92.994138 c -23.41797,0 -46.83594,0 -70.25391,0 v -6.923828 h 73.70117 c 32.15905,-34.7174165 61.84268,-71.576972 92.09766,-107.9375 -215.81612,-0.0017 -438.68331,-0.01571 -630.738241,-0.01563 z m 464.939451,19.982422 h 123.20508 c -18.65041,23.388818 -38.47176,45.732458 -58.41992,68.0019528 h -64.78516 z m -422.1914038,0.01563 H 121.00391 V 9.2636719 H 55.96875 C 35.496826,-12.581544 16.552601,-35.737847 -2.6210938,-58.708984 Z m 143.6210938,0 H 399.57422 V 203.39258 L 272.81836,290.97852 141,203.28125 V -58.708984 Z M 88.396484,54.152344 H 120.0293 V 97.128906 C 109.08609,82.241914 99.896453,69.770297 88.396484,54.152344 Z m 332.414066,0 h 31.625 c -10.9795,14.911122 -22.6391,30.760425 -31.625,42.976562 z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p tw={"absolute text-6xl pt-8"}>{data['winner']['authority']}</p>
                        </div>
                    </div>
                    <div tw={"flex w-1/5 flex-col items-center"}>
                        <p tw={"text-9xl"}>VS</p>
                    </div>
                    <div tw={'flex flex-col items-center w-2/5'}>
                        <div tw={"absolute border-[30px] w-96 h-96 rounded-full border-[#ee6c4d]"}></div>
                        <p tw={'text-6xl pt-20'}>{data['loser']['name']}</p>
                        <div tw={"flex flex-col items-center"}>
                            <div tw={"flex pt-2"}>
                                <svg tw={"w-60 h-40"} fill="#0f8942" stroke="#0f8942" viewBox="0 0 166.88282 104.205" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(-148.13691,-117.23627)">
                                        <g transform="translate(1224.9083,528.21529)" />
                                        <g>
                                            <path
                                                style="stroke-width:30"
                                                transform="matrix(0.26458333,0,0,0.26458333,160.14083,138.06084)"
                                                d="m -45.369141,-78.707031 c 32.720429,39.856441 58.503954,70.2305195 92.419922,107.966797 h 73.953129 v 6.910156 H 51.007812 C 121.00391,128.81055 100.08649,100.36084 121.00391,128.81055 V 214 l 152.02929,101.13867 146.53711,-101.25 v -84.72461 c 59.00402,-80.196532 64.76462,-87.929249 0,0 l 70.25387,-92.994138 c -23.41797,0 -46.83594,0 -70.25391,0 v -6.923828 h 73.70117 c 32.15905,-34.7174165 61.84268,-71.576972 92.09766,-107.9375 -215.81612,-0.0017 -438.68331,-0.01571 -630.738241,-0.01563 z m 464.939451,19.982422 h 123.20508 c -18.65041,23.388818 -38.47176,45.732458 -58.41992,68.0019528 h -64.78516 z m -422.1914038,0.01563 H 121.00391 V 9.2636719 H 55.96875 C 35.496826,-12.581544 16.552601,-35.737847 -2.6210938,-58.708984 Z m 143.6210938,0 H 399.57422 V 203.39258 L 272.81836,290.97852 141,203.28125 V -58.708984 Z M 88.396484,54.152344 H 120.0293 V 97.128906 C 109.08609,82.241914 99.896453,69.770297 88.396484,54.152344 Z m 332.414066,0 h 31.625 c -10.9795,14.911122 -22.6391,30.760425 -31.625,42.976562 z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p tw={"absolute text-6xl pt-8"}>{data['loser']['authority']}</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 600,
            fonts: [
                {
                    name: 'DeathStar',
                    data: fontData,
                    style: 'normal',
                },
            ],
        },
    );
}
