// These styles apply to every route in the application
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import linkedinIco from "../src/assets/images/linkedin-ico.png";
import githubIco from "../src/assets/images/github-ico.png";
import xIco from "../src/assets/images/x-ico.png";
import gmailIco from "../src/assets/images/gmail.png";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  robots: { index: true, follow: true },
  title: "gopelkujo",
  description: "my professional journey.",
  verification: {
    google: '6drGFjAogw6sco26TtJog-67aejfpo1VFgB68oz_gv4',
  },
};

export default function RootLayout({ children }) {
  const contacts = [
    {
      title: "Linked In",
      icon: linkedinIco,
      link: "https://www.linkedin.com/in/gopel-kujo/",
    },
    {
      title: "Github",
      icon: githubIco,
      link: "https://github.com/gopelkujo/",
    },
    {
      title: "Twitter",
      icon: xIco,
      link: "https://twitter.com/kujoowannabee",
    },
    {
      title: "Gmail",
      icon: gmailIco,
      link: "mailto:mn.dwisatya@gmail.com",
    },
  ];

  function BuildMenu() {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <Link href="/">
            <h1>gopelkujo</h1>
          </Link>
          <Link
            className={styles.menuResumeButton}
            href="https://drive.google.com/file/d/1vvnZ_9ryFLeTnEPwUZXWXbHpakjNcXAF/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    );
  }

  function BuildContacts() {
    return (
      <div className={styles.footerContacts}>
        {contacts.map((item, index) => {
          return (
            <a key={index} href={item.link} target="_blank">
              <Image src={item.icon} alt={item.title} height={25} width={25} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <html lang="en">
      <body>
        <div className={styles.baseLayout}>
          <BuildMenu />
          {children}
          <span className={styles.footer}>
            <p>Built in Next JS and pure css. Deploy on Vercel. Made with ❤</p>
            <BuildContacts />
          </span>
        </div>
      </body>
    </html>
  );
}
