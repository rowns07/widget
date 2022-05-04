import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { FeedBackTypStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSucessStep";


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lampada'
    }
  },
  OTHER: {
    title: "outro",
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamentos'
    }
  }
}

export type FeedBackType = keyof typeof feedbackTypes
// Object.entries(feedbackTypes) => retorna um array de arrays 
// [
// ['BUG', { ...}],
// ['Idea', { ...}]
// ['Other', { ...}]
// ]
export function FormWidget() {

  const [feedbackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedBackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>

          {!feedbackType ? (
            <FeedBackTypStep
              OnFeedBackTypeChanged={setFeedBackType}
            />
          ) : (
            <FeedBackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2"> Rocketseat </a>
      </footer>
    </div >
  )
}