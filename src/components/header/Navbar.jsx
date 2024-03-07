
import Navbars from "../cartComponent/NavbarComponent"

export default function Header() {
    return (
      <>
        <header className="w-full pb-4 mt-4 sticky top-0 my-6 bg-slate-50 border-b1 border-purple-50">
          <Navbars></Navbars>
        </header>
      </>
    )
}
