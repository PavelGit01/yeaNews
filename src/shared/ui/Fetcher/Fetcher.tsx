import { ReactNode, useEffect } from "react";

type FetchResponce<T> = {
  data?: T;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

interface Props<T, U> {
  queryArg: U;
  fetchFn: (queryArg: U) => FetchResponce<T>;
  sideFn?: (data: T, queryArg: U) => void;
  loader?: ReactNode;
  error?: ReactNode;
  render: (data: T) => ReactNode;
}

const Fetcher = <T, U>({
  queryArg,
  fetchFn,
  sideFn,
  loader,
  error,
  render,
}: Props<T, U>) => {
  const { data, isLoading, isError, isSuccess } = fetchFn(queryArg);

  useEffect(() => {
    if (isSuccess && data && sideFn) {
      sideFn(data, queryArg);
    }
  }, [isSuccess, data, queryArg]);

  if (isLoading) {
    return loader && <p>Loading...</p>;
  }

  if (isError || !data) {
    return error && <p>Ошибка при запросе данных.</p>;
  }

  return render(data);
};

export default Fetcher;
