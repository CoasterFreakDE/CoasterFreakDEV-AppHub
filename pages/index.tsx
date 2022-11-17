import Image from 'next/image'
import {useEffect} from "react";

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

        const createTiles = (quantity: number) => {
            Array.from(Array(quantity)).map((tile, index) => {
                // @ts-ignore
                wrapper.appendChild(createTile(index));
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

            createTiles(columns * rows);
        }

        createGrid();

        window.onresize = () => createGrid();
    }, []);

  return (
      <>
        <div><div id="tiles"></div></div>
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
