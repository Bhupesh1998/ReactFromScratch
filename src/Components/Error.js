import { useRouteError } from "react-router";

const Error = () => {
  const ErrormessageIS = useRouteError();

  return (
    <div>
      <h1>Ooops!</h1>
      <h2>Something went wrong</h2>
      <h1>{ErrormessageIS?.error?.message}</h1>
      <h2>status is : {ErrormessageIS?.status}</h2>
    </div>
  );
};

export default Error;
