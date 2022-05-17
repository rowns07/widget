import { FeedBackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackTypeStepProps {
  OnFeedBackTypeChanged: (type: FeedBackType) => void;
}

export function FeedBackTypStep({ OnFeedBackTypeChanged }: FeedBackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 text-neutral-700 dark:text-white">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-200 dark:bg-zinc-800 text-neutral-700 dark:text-white rounded-lg py-5 w-24 flex-1 flex flex-col items-center          gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => OnFeedBackTypeChanged(key as FeedBackType)}
              type='button'
            >
              <img src={value.image.source} alt={value.image.source} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}