import Navbar from "./Navbar"

type Props = {
    children: JSX.Element;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className="h-screen bg-[#03001C]">{children}</div>
    </div>
  )
}

export default Layout