import Head from "next/head";
import Link from "next/link";
import { MdEast } from "react-icons/md";
import { AboutStyled } from "../../styles/About.Styled";

const About = () => {
  return (
    <AboutStyled>
      <Head>
        <title>
          About - Metricks | Affiliate Marketing Program Tracking software
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="top_circle"></div>

        <div className="morph"></div>
        <div className="morph_base"></div>

        <section className="header_content">
          <div className="title">
            <div>
              <div className="top_content">
                <div className="snippet">
                  <div className="horizontal-rule"></div>
                  <h4>{"about us".toUpperCase()}</h4>
                </div>
                <h2>Built for SaaS and E-commerce</h2>
              </div>
            </div>

            <div className="base">
              <div className="empty"></div>
              <p>
                Our tools are easy to set up and use with a user friendly
                dashboard that enables you to set up, launch, automate and
                manage multi-affiliate campaigns in 5 minutes
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className="about">
        <h2>
          Metricks was developed because just like you, we needed a product that
          good give us <strong>good value</strong>.
        </h2>
      </section>

      <section className="values">
        <div className="morph"></div>
        <div className="morph_base"></div>

        <div className="content_wrapper">
          <div className="content_left">
            <div className="serial_container">
              <div className="serial_num">
                <h4>01</h4>
                <div className="horizontal_rule"></div>
              </div>
              <h3>{"why us".toUpperCase()}</h3>
            </div>
            <div className="content">
              <p>
                We pride ourselves in the ability to innovate and create
                world-class tools that provide relaible and efficient
                touchpoints between advertisers and affiliates
              </p>
            </div>
          </div>

          <div className="content_right">
            <div className="serial_container">
              <div className="serial_num">
                <h4>02</h4>
                <div className="horizontal_rule"></div>
              </div>
              <h3>{"growing with you".toUpperCase()}</h3>
            </div>
            <div className="content">
              <p>
                Leveraging the best technology, we have developed an all-in-one
                affliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influecer campaigns, all from
                one dashboard.
              </p>

              <p>
                Our team of experts are constantly brainstorming, testing and
                developing new solutoons with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta_morph_base"></div>
      <section className="cta">
        <div className="content">
          <h3>Got a Question?</h3>
          <p>
            See how Metricks can help your business grow with the best affiliate
            marketing tracking software.
          </p>

          <Link href="/">
            <a>
              <span>Contact Us</span>
              <MdEast />
            </a>
          </Link>
        </div>
      </section>
    </AboutStyled>
  );
};

export default About;
