# RadioGroup

RadioGroup is a component that allows the user to select one option from a list of options.

## Usage

```typescript
<RadioGroup
  options={["Maui", "Kauai", "Oahu"]}
  labelExtractor={(t) => t}
  keyExtractor={(t) => t}
  value={radio}
  onChange={(option) => {
    setRadio(option);
  }}
/>
```

## Props

- `options`: The options to display in the radio group. Can be an array of strings or objects.
- `labelExtractor`: The function to use to extract the label from the option.
- `keyExtractor`: The function to use to extract the key from the option.
- `value`: The value of the radio group.
- `onChange`: The function to call when the value changes.
- `renderOption`: The function to use to render the option.
