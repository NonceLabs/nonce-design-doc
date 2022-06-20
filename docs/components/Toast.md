# Toast

Toast is a component that displays a message to the user globally.

## Preview

![Info](@site/static/img/components/toast-info.png)
![Warning](@site/static/img/components/toast-warning.png)
![Error](@site/static/img/components/toast-error.png)
![Success](@site/static/img/components/toast-success.png)

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
