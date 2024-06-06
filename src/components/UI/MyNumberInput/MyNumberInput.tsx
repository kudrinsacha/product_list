import { forwardRef, memo } from 'react';
import { Unstable_NumberInput as BaseNumberInput, NumberInputProps, numberInputClasses } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';

const StyledInputRoot = styled('div')(
  `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: #C7D0DD;
  --tw-bg-opacity: 1;
  background-color: rgb(28 25 23 / var(--tw-bg-opacity));
  border: 1px solid #434D5B;
  box-shadow: 0px 2px 2px #1C2025;
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;

  &.${numberInputClasses.focused} {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px #0072E5;
  }

  &:hover {
    border-color: #3399FF;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const StyledInputElement = styled('input')(
  `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: #C7D0DD;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`
);

const InputAdornment = styled('div')(
  `
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-row: 1/3;
  color: #9DA8B7;
`
);

const MyNumberInput = memo(
  forwardRef(function CustomNumberInput(props: NumberInputProps, ref: React.ForwardedRef<HTMLDivElement>) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInputElement,
        }}
        min={0}
        endAdornment={<InputAdornment>$</InputAdornment>}
        {...props}
        ref={ref}
      />
    );
  })
);

export default MyNumberInput;
