import { Container } from "@/ui";
import Image from "next/image";
import { Facebook, Google, LinkedIn, LogoDark } from "@/assets/svgs";
import Link from "next/link";
import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <section className={classes["footer-nav"]}>
      <Container>
        <header className={classes["footer-header"]}>
          <Link href="/">
            <Image
              src={LogoDark}
              alt="foodcs logo"
              width={124.6}
              height={44}
              priority
            />
          </Link>
          <nav>
            <ul>
              <li>
                <a href="mailto:info@foodcs.co.uk">
                  <Image
                    src={Google}
                    alt="gmail logo"
                    width={40}
                    height={40}
                    priority
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/105999765"
                  target="blank_"
                >
                  <Image
                    src={LinkedIn}
                    alt="LinkedIn logo"
                    width={40}
                    height={40}
                    priority
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/share/14tkMGSENg/"
                  target="blank_"
                >
                  <Image
                    src={Facebook}
                    alt="Facebook logo"
                    width={40}
                    height={40}
                    priority
                  />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </section>
  );
};

export default FooterNav;
