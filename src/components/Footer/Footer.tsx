import contacts from "../../contacts/contacts.json";
import TelegramIcon from "../../assets/contacts/telegram.svg";
import GithubIcon from "../../assets/contacts/github.svg";

type IconMap = {
  [key: string]: string;
};

const iconMap: IconMap = {
  Telegram: TelegramIcon,
  GitHub: GithubIcon,
  // Add other mappings here as needed
};

const Footer = () => {
  return (
    <div className="footer">
      {contacts.map((contact) => {
        const IconComponent = iconMap[contact.name];
        return (
          <a href={contact.link} target="_blank" className="contact-container">
            <img src={IconComponent} alt={contact.name} className="icon" />
            <p>{contact.name}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Footer;
