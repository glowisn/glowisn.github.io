import { IconType } from "react-icons";
import { IoMail, IoCall, IoLogoGithub } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="m-auto max-w-[50rem] flex justify-between">
      <div className=" w-[200px] h-[300px] bg-blue-500"></div>
      <div className="max-w-[32rem]">
        <h2 className="text-2xl">Contact</h2>
        <ul className="text-lg">
          <ContactListElements href="mailto:asdxcv1998@gmail.com" text="asdxcv1998@gmail.com " Icon={IoMail} />
          <ContactListElements href="tel:+821042477515" text="010-4247-7515" Icon={IoCall} />
          <ContactListElements href="https://github.com/glowisn" text="Github Profile" Icon={IoLogoGithub} />
          
        </ul>
      </div>
    </section>
  );
}

interface ContactListElementsProps {
  href: string;
  text: string;
  Icon: IconType;
}

function ContactListElements(props: ContactListElementsProps) {
  const { href, text, Icon } = props;
  return (
    <li className="flex m-[0.2rem]">
      <div className="flex items-center m-0.5">
        <Icon />
      </div>
      <a
        href={href}
        className="text-blue-500 hover:text-blue-700 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
      >
        {text}
      </a>
    </li>
  );
}
