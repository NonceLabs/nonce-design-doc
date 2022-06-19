# Box

Box is a layout component that provides a simple way to contain content.

## Usage

```typescript
<Box direction="column" align="center" justify="center" gap="medium">
  <Text>Title</Text>
  <Text>Subtitle</Text>
</Box>
```

## Props

- `direction`: The direction of the box. Can be `row`, `column`, or `row-reverse` or `column-reverse`.
- `align`: The alignment of the box. Can be `flex-start`, `center`, `flex-end`, or `stretch`.
- `justify`: The justification of the box. Can be `flex-start`, `center`, `flex-end`, `space-between`, or `space-around`.
- `gap`: The gap between the children of the box. Can be `small`, `medium`, or `large`.
- `full`: Whether the box should fill the entire parent.
- `style`: The style of the box.
