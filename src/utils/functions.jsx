import NumberFormat from 'react-number-format';

export function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      decimalScale={2}
      fixedDecimalScale
    />
  );
}
export const numberFormatText = (
  value,
  currency = '',
  suffix = '',
  isDecimal = false,
) => (
  <NumberFormat
    value={value}
    displayType={'text'}
    thousandSeparator={true}
    prefix={currency + ` `}
    suffix={` ` + suffix}
    decimalSeparator="."
    decimalScale={isDecimal ? 0 : 2}
    fixedDecimalScale
    isNumericString
    allowNegative
    renderText={(value, props) => <div {...props}>{value}</div>}
  />
);
