import { StyledInput } from "./style";

export const Input = ({ id, label, type, placeholder, register, disable }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disable}
      />
    </StyledInput>
  );
};
