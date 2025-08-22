import styles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";

// Import PHC images
import PhcIcon from "../src/assets/images/phc/icon.jpg";
import PhcLogin from "../src/assets/images/phc/login.png";
import PhcHome from "../src/assets/images/phc/home.png";
import PhcAttendance from "../src/assets/images/phc/attendance.png";
import PhcAttendanceForm from "../src/assets/images/phc/attendance_form.png";
import PhcNotification from "../src/assets/images/phc/notification.png";
import PhcProfile from "../src/assets/images/phc/profile.png";
import AppStoreBadge from "../src/assets/images/app_store_badge.svg";
import GooglePlayBadge from "../src/assets/images/google_play_badge.png";

// Import Periplus Apps images
import PPlusIcon from "../src/assets/images/periplus_apps/icon.jpeg";
import PPlusHome from "../src/assets/images/periplus_apps/home.png";
import PPlusCategory from "../src/assets/images/periplus_apps/category.png";
import PPlusLogin from "../src/assets/images/periplus_apps/login.png";
import PPlusProfile from "../src/assets/images/periplus_apps/profile.png";
import PPlusBook from "../src/assets/images/periplus_apps/book.png";
import PPlusCart from "../src/assets/images/periplus_apps/cart.png";
import PPlusPayment from "../src/assets/images/periplus_apps/payment.png";
import PPlusTransaction from "../src/assets/images/periplus_apps/transaction.png";

// Import Multi Piranti Jaya images
import MpjIcon from "../src/assets/images/mpj2/icon.png";
import MpjHome1 from "../src/assets/images/mpj2/home_1.png";
import MpjHome2 from "../src/assets/images/mpj2/home_2.png";
import MpjHome3 from "../src/assets/images/mpj2/home_3.png";
import MpjHome4 from "../src/assets/images/mpj2/home_4.png";
import MpjHome5 from "../src/assets/images/mpj2/home_5.png";
import MpjAbout from "../src/assets/images/mpj2/about.png";
import MpjActivity from "../src/assets/images/mpj2/activity.png";
import MpjService from "../src/assets/images/mpj2/service.png";
import MpjContactUs from "../src/assets/images/mpj2/contact_us.png";

// Import SINBADA images
import Sinbada from "../src/assets/images/sinbada/1.png";

// Import SIINVENT images
import Siinvent from "../src/assets/images/siinvent/1.png";

// Import GORAS images
import Goras from "../src/assets/images/goras/goras_main.png";

// Import Github images
import GithubIcon from "../src/assets/images/github.svg";

// Import Stackoverflow images
import StackoverflowIcon from "../src/assets/images/stackoverflow.png";

export default function Home() {
  const greetingText = "Hello, nice to meet you. I am Gopel!";

  const introductionText =
    "Hey! I'm a front-end web and mobile developer with a passion for turning \
    beautiful designs into user-friendly apps. I really enjoy coding because, \
    let's be real, it just looks cool to me, haha. When I'm not busy with \
    code, you'll probably find me out exploring nature on my motorcycle ─ it's \
    the perfect escape!";

  const phcImages = [
    { img: PhcLogin, alt: "Login Page" },
    { img: PhcHome, alt: "Home Page" },
    { img: PhcAttendance, alt: "Attendance Page" },
    { img: PhcAttendanceForm, alt: "Attendance Form Page" },
    { img: PhcNotification, alt: "Notification Page" },
    { img: PhcProfile, alt: "Profile Page" },
  ];

  const pplusImages = [
    { img: PPlusHome, alt: "Home" },
    { img: PPlusCategory, alt: "Category" },
    { img: PPlusLogin, alt: "Login" },
    { img: PPlusProfile, alt: "Profile" },
    { img: PPlusBook, alt: "Book" },
    { img: PPlusCart, alt: "Cart" },
    { img: PPlusPayment, alt: "Payment" },
    { img: PPlusTransaction, alt: "Transaction" },
  ];

  const mpjImages = [
    { img: MpjHome1, alt: "Home 1" },
    { img: MpjHome2, alt: "Home 2" },
    { img: MpjHome3, alt: "Home 3" },
    { img: MpjHome4, alt: "Home 4" },
    { img: MpjHome5, alt: "Home 5" },
    { img: MpjAbout, alt: "About" },
    { img: MpjActivity, alt: "Activity" },
    { img: MpjService, alt: "Service" },
    { img: MpjContactUs, alt: "Contact Us" },
  ];

  function BuildHeader() {
    return (
      <div className={styles.greetContainer}>
        <div className={styles.greetAndTourTextContainer}>
          <span className={styles.greetText}>{greetingText}</span>
          <span className={styles.takeATourText}>{introductionText}</span>
        </div>
        <div className={styles.profileImage} />
      </div>
    );
  }

  function BuildSelectedWork() {
    const selectedWorks = [
      {
        icon: PPlusIcon,
        title: "Periplus",
        description: "Periplus online bookstore, 10k+ total downloads.",
        appstoreLink: "https://apps.apple.com/id/app/periplus/id6444208499",
        playstoreLink:
          "https://play.google.com/store/apps/details?id=com.bookindo.periplus.periplus&hl=en",
        techs: ["Figma, Flutter, Firebase, Midtrans"],
        images: pplusImages,
      },
      {
        icon: PhcIcon,
        title: "Periplus Human Capital",
        description:
          "An application for employee management, mainly for employee attendance. Published privately on App Store and Play Store.",
        techs: ["Figma, Flutter, Firebase, Geolocation"],
        images: phcImages,
      },
      {
        icon: MpjIcon,
        title: "Multi Piranti Jaya",
        description: "Profile company website of Multi Piranti Jaya.",
        websiteLink: "https://multipirantijaya.com/",
        techs: ["React JS, MUI, Wordpress, Javascript"],
        images: mpjImages,
        isImageWide: true,
      },
    ];

    return (
      <div className={styles.pageContainer}>
        <div className={styles.selectedWork}>Some of My Selected Works</div>

        {selectedWorks.map((item, index) => {
          return (
            <BuildWork
              key={index}
              icon={item.icon}
              title={item.title}
              appstoreLink={item.appstoreLink}
              playstoreLink={item.playstoreLink}
              description={item.description}
              websiteLink={item.websiteLink}
              techs={item.techs}
              images={item.images}
              isImageWide={item.isImageWide ?? false}
            />
          );
        })}
      </div>
    );
  }

  function BuildWork({
    icon,
    title,
    description,
    appstoreLink,
    playstoreLink,
    websiteLink,
    techs,
    images,
    isImageWide = false,
  }) {
    return (
      <div className={styles.selectedWorkBox}>
        <div className={styles.selectedWorkBoxtitle}>
          <Image src={icon} alt="logo" className={styles.selectedWorkBoxIcon} />

          <div className={styles.selectedWorkBoxtitleDesc}>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>

          {appstoreLink == null &&
          playstoreLink == null &&
          websiteLink == null ? null : (
            <div className={styles.selectedWorkBoxStore}>
              {appstoreLink ? (
                <Link
                  href={appstoreLink}
                  target="_blank"
                  style={{ marginRight: "0.5rem" }}
                >
                  <Image
                    src={AppStoreBadge}
                    alt="Google Play Store Icon"
                    width="auto"
                    height="auto"
                  />
                </Link>
              ) : null}
              {playstoreLink != null ? (
                <Link href={playstoreLink} target="_blank">
                  <Image
                    src={GooglePlayBadge}
                    alt="Google Play Store Icon"
                    width={115}
                    height={100}
                    loading="lazy"
                  />
                </Link>
              ) : null}
              {websiteLink != null ? (
                <Link
                  href={websiteLink}
                  target="_blank"
                  className={styles.visitWebsiteBox}
                >
                  Visit Website
                </Link>
              ) : null}
            </div>
          )}
        </div>

        <div className={styles.selectedWorkBoxStoreMobile}>
          {appstoreLink ? (
            <Link
              href={appstoreLink}
              target="_blank"
              style={{ marginRight: "0.5rem" }}
            >
              <Image
                src={AppStoreBadge}
                alt="Google Play Store Icon"
                width="auto"
                height="auto"
              />
            </Link>
          ) : null}
          {playstoreLink != null ? (
            <Link href={playstoreLink} target="_blank">
              <Image
                src={GooglePlayBadge}
                alt="Google Play Store Icon"
                width={115}
                height={100}
                loading="lazy"
              />
            </Link>
          ) : null}
          {websiteLink != null ? (
            <Link
              href={websiteLink}
              target="_blank"
              className={styles.visitWebsiteBox}
            >
              Visit Website
            </Link>
          ) : null}
        </div>

        <div className={styles.selectedWorkBoxTech}>
          <ul>
            {techs.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>

        <div className={styles.selectedWorkBoxImages}>
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.img}
                alt={item.alt}
                className={
                  isImageWide
                    ? styles.selectedWorkBoxWideImg
                    : styles.selectedWorkBoxLongImg
                }
              />
            );
          })}
        </div>
      </div>
    );
  }

  function BuildOtherWorks() {
    const otherWorksData = [
      {
        img: { url: Sinbada, alt: "test" },
        url: "https://github.com/SekelompokOrangKuat/PROJECTCUAN/tree/frontend",
        title: "SINBADA",
        desc: "Inventory system website based on ReactJS and Ruby.",
        stacks: ["ReactJS", "MUI", "Javascript"],
      },
      {
        img: { url: Siinvent, alt: "test" },
        url: "https://github.com/SekelompokOrangKuat/ProjectInventaris/tree/dev",
        title: "SIINVENT",
        desc: "Inventory system website based on ReactJS and ExpressJS.",
        stacks: ["ReactJS", "MUI", "Javascript"],
      },
      {
        img: { url: Goras, alt: "test" },
        url: "https://github.com/gopelkujo/gorasproject",
        title: "Goras Ludo Games",
        desc: "My team project at first year in collage. Goras Ludo Games is a board game that is similar to playing snakes and ladders.",
        stacks: ["C"],
      },
    ];

    function BuildItem({ img, url, title, desc, stacks }) {
      return (
        <Link href={url} target="_blank">
          <div className={styles.projectBox}>
            <Image src={img.url} alt={img.alt} loading="lazy" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <ul>
              {stacks.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </Link>
      );
    }

    return (
      <div className={styles.otherProjectBox}>
        <span className={styles.subTitle}>Other Project</span>
        <br />
        <div className={styles.projectContainer}>
          {otherWorksData.map((item, index) => {
            return (
              <BuildItem
                key={index}
                img={item.img}
                url={item.url}
                title={item.title}
                desc={item.desc}
                stacks={item.stacks}
              />
            );
          })}
        </div>
      </div>
    );
  }

  function BuildContributions() {
    const contributionDataList = [
      {
        title: "Stackoverflow",
        desc: "Stack Overflow is best known for its public Q&A platform, which attracts millions of visitors every month who come to ask questions, learn, and share technical knowledge.",
        link: "https://stackoverflow.com/users/12566347/gopelkujo",
        icon: StackoverflowIcon,
        data: [
          {
            title: "More than 700++ reputation",
            desc: "Actively answers for questions on stackoverflow. And due to over 500 reputaion, i have side quest that review other use question/answer for give some feedback, such as what question/answer that can be improved or if the question/answer not easly can be understood by other user i can give a feedback that how the question/answer can be more easly understood by other.",
          },
          {
            title: "50+ Answer and question",
            desc: "Most answer and question are in flutter section, but does not close for other parts of discussion.",
          },
        ],
      },
      {
        title: "Github",
        desc: "GitHub is a proprietary developer platform that allows developers to create, store, manage, and share their code. It uses Git to provide distributed version control. It is commonly used to host open source software development projects.",
        link: "https://github.com/gopelkujo",
        icon: GithubIcon,
        data: [
          {
            title: "Open issue on open source project",
            desc: "Most project that i had openned the issue are open source project that i used in my project. If the project that i had opened an issue doesn't mantained anymore, and my project needed so much, then i fork the repo and fix it by myself for my project.",
          },
          {
            title: "Contribute on open source project",
            desc: "I contributed to some open source project that related with my expertise as a frontend developer such as npm package (npmjs.com) and flutter package (pub.dev).",
          },
        ],
      },
    ];

    return (
      <div className={styles.contributionsWork}>
        <span className={styles.subTitle}>Contribution</span>

        {contributionDataList.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className={styles.contribution}>
              <div className={styles.contributionHeader}>
                <Image
                  src={item.icon}
                  alt={item.title + " logo"}
                  className={styles.selectedWorkBoxIcon}
                />
                <div className={styles.contributionTitle}>
                  <Link href={item.link} target="_blank">
                    {item.title}
                  </Link>
                  <h2>{item.desc}</h2>
                </div>
              </div>
              <ul>
                {item.data.map((data, dataIndex) => {
                  return (
                    <li key={dataIndex}>
                      <a href="#">{data.title}</a>
                      <p>{data.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  function BuildQuote() {
    return (
      <div className={styles.quoteBox}>
        <p>
          &quot;When you arise in the morning, think of what a precious
          privilege it is to be alive - to breathe, to think, to enjoy, to
          love.&quot;
        </p>
        <footer>— Aurelius, Marcus</footer>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <BuildHeader />
      <BuildSelectedWork />
      <BuildOtherWorks />
      <BuildContributions />
      <BuildQuote />
    </div>
  );
}

/*
 * Page Routing Note
 *
 * Page route based on folder in top-level folder "app".
 * Structure:
 *  /app:
 *      /contact (folder)
 *        /page.jsx (file as contact code)
 * Example route: localhost:3000/contact
 *
 */

/*
 * Assets Note
 * Add folder "src" in top-level folder to keep assets files
 * Example:
 *  /src:
 *    /images
 *      /image.png
 *    /styles
 *      /globals.css
 */
