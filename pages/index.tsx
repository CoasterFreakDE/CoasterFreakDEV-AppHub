import Image from 'next/image'

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center h-screen'}>
        <Image src="/android-chrome-512x512.png" alt="CoasterFreakDEV" width={512} height={512} />
        <br />
        <h1>CoasterFreakDEV</h1>
        <p>AppHub / Portfolio ~ All your favourite services</p>
        <br />
        <p>Coming soon...</p>
    </div>
  )
}
