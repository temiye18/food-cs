import { Container } from "@/ui";
import Image from "next/image";
import { Google, LinkedIn } from "@/assets/svgs";
import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <section className={classes["footer-nav"]}>
      <Container>
        <header className={classes["footer-header"]}>
          <h1>
            Food<span>CS</span>
          </h1>
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
                  href="https://www.linkedin.com/in/food-cs-164532344/"
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
            </ul>
          </nav>
        </header>
      </Container>
    </section>
  );
};

export default FooterNav;
