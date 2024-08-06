type Props = {
  statusCode: number;
  message: string;
}

const ErrorPage = (props: Props) => {
  const { statusCode, message } = props;
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{ statusCode }</p>
      <p>{ message }</p>
      <button>Try again</button>
    </div>
  )
}

export default ErrorPage;
