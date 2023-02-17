import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen scroll-smooth bg-indigo-600">
        {children}
      </div>
    </div>
  );
};

export default Layout;
