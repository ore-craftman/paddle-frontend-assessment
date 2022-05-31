interface PropSchema {
  holder: string;
  type: string;
  value: any;
  stateHandler: React.Dispatch<React.SetStateAction<any>>;
  isRequired: boolean;
}

export const Input = ({
  holder,
  type,
  value,
  stateHandler,
  isRequired,
}: PropSchema) => {
  return (
    <input
      type={type}
      placeholder={holder}
      value={value}
      required={isRequired}
      onChange={(e) => stateHandler && stateHandler(e.target.value)}
    />
  );
};
