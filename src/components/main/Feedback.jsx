
import FeedbackCart from "../cartComponent/FeedbackCart"

export default function Feeedback(){
  return(
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
            </section>
    </>
  )
}