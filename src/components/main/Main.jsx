import Feeedback from "./Feedback";
import Product from "./Product";


export default function Main(){
    return (
        <>
          <main className="w-[95%] md:w-[90%] mx-auto">
            <h1 className="my-10 text-[30px] text-sky-500 text-center">Products</h1>
            <Product></Product>

            <h1 className="my-10 text-[30px] text-sky-500 text-center">Users Feedback</h1>
            <Feeedback></Feeedback>
            <p className="mb-20"></p>
          </main>

        </>
      )
    
}