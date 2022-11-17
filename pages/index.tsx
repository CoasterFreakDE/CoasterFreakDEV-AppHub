import Image from 'next/image'
import {useEffect} from "react";

interface CustomTile {
    gridarea: string;
    title: string;
    description: string;
    image?: string;
    link: string;
}

const customTiles = [
    {
        gridarea: "2 / 2 / 5 / 5",
        title: "DevSky",
        description: "Bot Hosting",
        link: "https://devsky.one",
        image: "https://avatars.githubusercontent.com/u/85437640?s=200&v=4"
    }, {
        gridarea: "3 / 7 / 6 / 10",
        title: "TempMailMX",
        description: "Temporary Emails",
        link: "https://tempmail.mx",
    }, {
        gridarea: "8 / 3 / 11 / 6",
        title: "Drop Bot",
        description: "Discord Bot for Drops",
        link: "https://github.com/DevSkyOne/Drops",
    }
]

export default function Home() {

    useEffect(() => {
        const wrapper = document.getElementById("tiles");

        let columns = 0,
            rows = 0;

        const createTile = (index: number) => {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            return tile;
        }

        const createCustomTile = (tileJson: CustomTile) => {
            const tile = document.createElement("div");
            tile.classList.add("tile", "column");
            tile.style.gridArea = tileJson.gridarea;
            tile.onclick = () => window.open(tileJson.link, "_blank");

            const tileContent = document.createElement("div");
            tileContent.classList.add("tile-content");

            const tileTitle = document.createElement("div");
            tileTitle.classList.add("tile-title");
            const tileDescription = document.createElement("div");
            tileDescription.classList.add("tile-description");

            tileTitle.innerText = tileJson.title;
            tileDescription.innerText = tileJson.description;

            if(tileJson.image) {
                tile.style.backgroundImage = `url(${tileJson.image})`;
            }

            tileContent.appendChild(tileTitle);
            tileContent.appendChild(tileDescription);
            tile.appendChild(tileContent);

            return tile;
        }

        const createTiles = (quantity: number) => {
            Array.from(Array(quantity)).map((tile, index) => {
                // @ts-ignore
                wrapper.appendChild(createTile(index));
            });
            customTiles.map((tile: CustomTile) => {
                // @ts-ignore
                wrapper.appendChild(createCustomTile(tile));
            });
        }

        const createGrid = () => {
            // @ts-ignore
            wrapper.innerHTML = "";

            const size = document.body.clientWidth > 800 ? 100 : 50;

            columns = Math.floor(document.body.clientWidth / size);
            rows = Math.floor(document.body.clientHeight / size);

            // @ts-ignore
            wrapper.style.setProperty("--columns", columns);
            // @ts-ignore
            wrapper.style.setProperty("--rows", rows);

            createTiles((columns * rows) - (customTiles.length * 9));
        }

        createGrid();

        window.onresize = () => createGrid();
    }, []);

  return (
      <>
        <div><div id="tiles">
        </div></div>
        <div className={'z-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'}>
            <div className={'text-center font-bold'}>
                <Image src="/android-chrome-512x512.png" alt="CoasterFreakDEV" width={512} height={512} />
                <br />
                <h1>CoasterFreakDEV</h1>
                <p>AppHub / Portfolio ~ All your favourite services</p>
                <br />
                <p>Coming soon...</p>
            </div>
        </div>
      </>
  )
}
