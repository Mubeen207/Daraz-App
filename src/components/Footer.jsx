import AllLinks from "./AllLinks";
import End from "./End";
import Payments from "./Payments";
import TextFooter from "./TextFooter";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <AllLinks />
        <Payments />
        <TextFooter />
        <End />
      </div>
    </>
  );
};
export default Footer;
