const Ancers = ({ key, message }) => {
  return (
    <>
      <ol className="text-[#0f136d] text-[12px]">
        <li className="w-74.25">
          <a id={key} href="#" className="pointer hover:underline ">
            {message}
          </a>
        </li>
      </ol>
    </>
  );
};
export default Ancers;
