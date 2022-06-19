# Toast

Toast is a component that displays a message to the user globally.

## Usage

```typescript
Toast.success("Success", 5000);
```

## Method

- `success`: Display a success toast.
- `error`: Display an error toast.
- `warning`: Display a warning toast.
- `info`: Display an info toast.

Above methods accept a message and a duration. The duration is optional, default is 2000ms.

`Toast.error` also accepts an `Error` object as the message.
