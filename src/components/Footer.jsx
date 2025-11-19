const Footer = () => {
  return (
    <>
      <div className="flex md:flex-row-reverse md:justify-between items-center flex-col px-10 h-30">
        <div className="flex md:flex-row flex-col md:gap-2 items-center justify-center">
          <p className="text-center text-sm">Got a question ?</p>
          <a
            href="mailto:essienabasiama11@gmail.com"
            className="text-sm text-center font-semibold text-indigo-500"
          >
            hello@kingx.com
          </a>
        </div>
        <div className="flex justify-center items-center pt-3 text-center font-light text-sm gap-0.5">
          <span>Made with</span>
          <span>by me</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
