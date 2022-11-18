import Image from 'next/image'
import React, {useEffect} from "react";

interface CustomTile {
    title: string;
    description: string;
    image: string;
    link: string;
}

const customTiles = [
    {
        title: "DevSky",
        description: "Bot Hosting",
        link: "https://devsky.one",
        image: "https://avatars.githubusercontent.com/u/85437640?s=200&v=4"
    }, {
        title: "TempMailMX",
        description: "Temporary Emails",
        link: "https://tempmail.mx",
        image: "/assets/tempmail-mx.png"
    }, {
        title: "Drop Bot",
        description: "Discord Bot for Drops",
        link: "https://github.com/DevSkyOne/Drops",
        image: "https://github.com/DevSkyOne/Drops/raw/main/assets/present.png"
    }, {
        title: "Darker",
        description: "DarkMode Color Palettes",
        link: "https://darker.page",
        image: "/assets/darker-logo.png"
    }, {
        title: "Python V3",
        description: "CoasterFreak Coding Tutorials - Python V3",
        link: "https://www.youtube.com/playlist?list=PLSgiAkLaBUJ8mHzmKg1gm8lfL3iV_RYxG",
        image: "/assets/python-v3.png"
    }, {
        title: "Python Reboot",
        description: "CoasterFreak Coding Tutorials - Python V2",
        link: "https://www.youtube.com/playlist?list=PLSgiAkLaBUJ_Ut5U5LbjGMK8IB-JGKzDA",
        image: "/assets/python-v2.png"
    }, {
        title: "Python",
        description: "CoasterFreak Coding Tutorials - Python V1",
        link: "https://www.youtube.com/playlist?list=PLSgiAkLaBUJ8hZUaDs1AcEQ-e1oSBChy1",
        image: "/assets/python-v1.png"
    }, {
        title: "Minecraft",
        description: "CoasterFreak Coding Tutorials - MC Kotlin",
        link: "https://www.youtube.com/playlist?list=PLSgiAkLaBUJ_yD9HZT3Vxto22VHIo6RqX",
        image: "/assets/mc-kotlin.png"
    }, {
        title: "JDA",
        description: "CoasterFreak Coding Tutorials - Java JDA",
        link: "https://www.youtube.com/playlist?list=PLSgiAkLaBUJ_N-xBWrmNWNmm8M-WlLg9O",
        image: "/assets/java-jda.png"
    }
]

export default function Home() {
    const galleryRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const gallery = galleryRef.current;

        if (gallery) {
            window.onmousemove = e => {
                const mouseX = e.clientX,
                    mouseY = e.clientY;

                const xDecimal = mouseX / window.innerWidth,
                    yDecimal = mouseY / window.innerHeight;

                const maxX = gallery.offsetWidth - window.innerWidth,
                    maxY = gallery.offsetHeight - window.innerHeight;

                const panX = maxX * xDecimal * -1,
                    panY = maxY * yDecimal * -1;

                gallery.animate({
                    transform: `translate(${panX}px, ${panY}px)`
                }, {
                    duration: 4000,
                    fill: "forwards",
                    easing: "ease"
                })
            }
        }
    }, [galleryRef]);

  return (
      <>
          <div id="gallery" ref={galleryRef}>
              {customTiles.map((tile: CustomTile, index: number) => {
                  return <div key={index} className="tile" onClick={() => location.href = `${tile.link}`}>
                      <Image src={tile.image} alt={tile.description} fill={true}/>
                  </div>
              })}
          </div>

          <a id="dev-link" className="meta-link" href="https://coasterfreak.de" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link"></i>
              <span>Lebenslauf</span>
          </a>

          <a id="source-link" className="meta-link" href="https://devsky.one/impressum" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link"></i>
              <span>Impressum</span>
          </a>

          <a id="yt-link" className="meta-link" href="https://www.youtube.com/channel/UCDvHH-ATRjVX4dfOA-HZGNA" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
              <span>Channel</span>
          </a>
      </>
  )
}
