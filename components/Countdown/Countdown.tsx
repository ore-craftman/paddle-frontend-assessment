import { useCountDown } from "../../hooks/useCountDown";
import { CountdownStyled } from "./Countdown.Styled";

export const CountDown = ({ toDate }: { toDate: string }) => {
  const [days, hours, minutes, seconds] = useCountDown(toDate);

  return (
    <CountdownStyled>
      {days + hours + minutes + seconds <= 0 ? (
        <h3>It&apos;s launch hour</h3>
      ) : (
        <section className="time-container">
          <div>
            <h2>{days}</h2>
            <p>Days</p>
          </div>

          <div>
            <h2>{hours}</h2>
            <p>Hours</p>
          </div>

          <div>
            <h2>{minutes}</h2>
            <p>Minutes</p>
          </div>

          <div>
            <h2>{seconds}</h2>
            <p>Seconds</p>
          </div>
        </section>
      )}
    </CountdownStyled>
  );
};
