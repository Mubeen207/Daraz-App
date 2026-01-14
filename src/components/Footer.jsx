import AllLinks from "./AllLinks";
import Payments from "./Payments";
import TextFooter from "./TextFooter";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <AllLinks />
        <Payments />
        <TextFooter />
      </div>
    </>
  );
};
export default Footer;
