import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenShot: string | null;
  onScreenshootTook: (screenshoot: string | null) => void;
}

export function ScreenshotButton({ screenShot, onScreenshootTook }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshoot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshoot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshootTook(base64image);
    setIsTakingScreenshoot(false);
  }
  if (screenShot) {
    return (
      <button
        type="button"
        className="p-1 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={()=> onScreenshootTook}
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (

    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >

      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}

    </button>
  )
}