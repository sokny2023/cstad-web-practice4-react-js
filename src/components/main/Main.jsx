import FeedbackCart from "./Feedback";
import Product from "./Product";


export default function Main(){
    return (
        <>
          <main className="w-[95%] md:w-[90%] mx-auto">
            <h1 className="my-10 text-[30px] text-sky-500 text-center">Products</h1>
            <section className="grid mx-auto justify-center w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </section>

            <h1 className="my-10 text-[30px] text-sky-500 text-center">Users Feedback</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
                <FeedbackCart></FeedbackCart>
            </section>
            <p className="mb-20"></p>
          </main>

        </>
      )
    
}