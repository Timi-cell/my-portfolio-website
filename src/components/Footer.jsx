import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/x";
import "react-social-icons/github";
import "react-social-icons/whatsapp";
// import "react-social-icons/";

const Footer = () => {
  return (
    <div className="bg-tertiary pt-10 pb-5 px-5 flex flex-col items-center justify-center gap-10 text-base md:text-lg text-center">
      <h2 className="text-base md:text-lg">
        You can also connect with me via:
      </h2>

      <div className="flex items-center justify-center gap-6 flex-wrap">
        <SocialIcon
          url="https://www.linkedin.com/in/samuelaluko"
          target="_blank"
        />
        <SocialIcon
          network="whatsapp"
          url="https://wa.link/2e0fdq"
          target="_blank"
        />
        <SocialIcon url="https://x.com/heistimiii" target="_blank" />
        <SocialIcon url="https://www.github.com/Timi-cell" target="_blank" />
        {/* <SocialIcon network="mailto" bgColor="red" url="https://x.com/heistimiii" /> */}
      </div>
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} - Samuel The Crack Dev.
      </p>
    </div>
  );
};

export default Footer;
