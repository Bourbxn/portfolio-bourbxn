import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 w-screen md:h-screen scroll-smooth bg-dark-ocean">
        {children}
      </div>
    </div>
  );
};

export default Layout;
