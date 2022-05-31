import Head from "next/head";
import { useEffect, useState } from "react";
import { CountDown } from "../../components/Countdown/Countdown";
import { WaitList } from "../../components/WaitList/WaitList";
import { ComingSoonStyled } from "../../styles/ComingSoon.Styled";

const CommingSoon = () => {
  const [fullyRendered, setFullyRendered] = useState(false);
  useEffect(() => {
    setFullyRendered(true);
  }, []);
  return (
    <ComingSoonStyled>
      <Head>
        <title>Metricks | Affiliate Marketing Program Tracking software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="inner_section">
          {/* Couldn't access the design assests from
          the XD Link shared including the svg shapes
          so I decieded recreate by drawing with CSS */}
          <section className="circle_left"></section>
          <section className="circle_right"></section>
          <section className="circle_bottom"></section>
          <h1>{"Something Awesome Is Coming Soon".toUpperCase()}</h1>
          <p>
            Your all-in-one affiliate marketing tracking software <b>track</b>,{" "}
            <b>automate</b> and <b>optimize</b> your campaigns.
          </p>

          {fullyRendered && <CountDown toDate="Jun 8, 2022" />}
          <WaitList />
        </section>
      </main>
    </ComingSoonStyled>
  );
};

export default CommingSoon;
