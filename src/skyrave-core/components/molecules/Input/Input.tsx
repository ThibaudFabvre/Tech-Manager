import { FC } from 'react';

type InputProps = {
  placeholder: string
  defaultValue?: string
  value: string
  onChange: (data: any) => void
  type: string
}

const Input: FC<InputProps> = ({
  type, placeholder, defaultValue, value, onChange,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      style={{
        width: '100%',
        marginBottom: 18,
        border: '1px solid #ccc',
        borderRadius: 5,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
      }}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
    />
  );
};

export default Input;
