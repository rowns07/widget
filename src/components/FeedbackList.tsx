import { useEffect, useState } from "react";
import { api } from "../lib/api";

type FeedbackProps = {
  id: string,
  comment: string,
  screenshot: string,
  type: string
}

export function FeedbackList() {

  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>();

  async function feedbackList() {

    await api.get('/feedbacks').then((response) => {
      setFeedbacks(response.data)
      console.log('FEEDBACK = ', feedbacks)
    })
  }
  useEffect(() => {
    feedbackList();
  }, [])

  return (
    <>
      <h1 className="w-4/5  m-auto text-neutral-700 dark:text-neutral-200 mt-5 ">FEEDBACKS</h1>
      <div className="flex items-center justify-around w-4/5 m-auto flex-wrap flex-row">

        {feedbacks?.map((feedback) =>
          <div
            className="flex bg-slate-300 dark:bg-zinc-800 text-neutral-700 dark:text-neutral-400 items-center justify-around p-2 w-full box-border m-2 transition-all"
            key={feedback.id}>
            <span>
              TIPO: {feedback.type} <br />
              COMENTARIO: {feedback.comment}
            </span>
            <span>
              <img src={feedback.screenshot} alt="imagem teste" className="max-w-full w-40" />
            </span>
          </div>
        )}

      </div>
    </>
  )
}