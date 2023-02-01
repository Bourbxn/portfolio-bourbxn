import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" h-screen scroll-smooth bg-green-500">
        {children}
      </div>
    </div>
  );
};

export default Layout;
