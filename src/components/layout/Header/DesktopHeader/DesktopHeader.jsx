import HeaderRight from "../HeaderRight";
import NavBar from "../NavBar";

const DesktopHeader = () => {
  return (
    <>
      <div className="hidden xl:block">
        <NavBar />
      </div>

      <div className="hidden xl:block">
        <HeaderRight />
      </div>
    </>
  );
};

export default DesktopHeader;
