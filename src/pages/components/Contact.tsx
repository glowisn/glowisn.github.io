import type { IconType } from "react-icons";
import { IoDocument, IoMail, IoCall, IoLogoGithub } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex justify-between mt-[2em]">
      <div>
        <h1 className="text-5xl font-extrabold leading-[1.1]">정예찬 이력서</h1>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-[0.2em]">Contact</h2>
        <ul className="text-lg">
          <ContactListElements
            href="https://glowisn.github.io"
            text="이력서 페이지"
            Icon={IoDocument}></ContactListElements>
          <ContactListElements
            href="mailto:asdxcv1998@gmail.com"
            text="asdxcv1998@gmail.com "
            Icon={IoMail}
          />
          <ContactListElements href="tel:+821042477515" text="010-4247-7515" Icon={IoCall} />
          <ContactListElements
            href="https://github.com/glowisn"
            text="Github Profile"
            Icon={IoLogoGithub}
          />
        </ul>
      </div>
    </div>
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
    <li className="flex my-[0.2rem]">
      <div className="flex items-center m-0.5">
        <Icon />
      </div>
      <a href={href} className="mx-[0.2em]">
        {text}
      </a>
    </li>
  );
}
