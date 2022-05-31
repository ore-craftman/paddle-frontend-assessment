import { useState } from "react";
import { Input } from "../SimpleInput/Input";
import { WaitListStyled } from "./WaitList.Styled";

export const WaitList = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const formHandler = (e: any) => {
    e.preventDefault();
    const userData = { firstname, lastname, email };
    console.table(userData);
  };

  return (
    <WaitListStyled>
      <form onSubmit={formHandler}>
        <section className="bi_input">
          <Input
            type="text"
            holder="First name..."
            value={firstname}
            stateHandler={setFirstName}
            isRequired={true}
          />

          <Input
            type="text"
            holder="Last name..."
            value={lastname}
            stateHandler={setLastName}
            isRequired={true}
          />
        </section>

        <section className="email_section">
          <input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <button type="submit">{"Join our waiting list".toUpperCase()}</button>
        </section>
      </form>
    </WaitListStyled>
  );
};
