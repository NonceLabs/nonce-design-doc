# CheckBoxGroup

CheckBoxGroup is a component that allows the user to select one or more options from a list of checkboxes.

## Usage

```typescript
<CheckBoxGroup
  options={["Maui", "Kauai", "Oahu"]}
  labelExtractor={(t) => t}
  keyExtractor={(t) => t}
  value={checked}
  onChange={(options) => {
    setChecked(options);
  }}
/>
```

## Props

- `options`: The options to display in the checkbox group. Can be an array of strings or objects.
- `labelExtractor`: The function to use to extract the label from the option.
- `keyExtractor`: The function to use to extract the key from the option.
- `value`: The value of the checkbox group.
- `onChange`: The function to call when the value changes.
- `renderOption`: **[optional]** The function to use to render the option.
