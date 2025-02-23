import React from "react";
import { Skeleton } from "../ui";

interface Props {
    isFetching: boolean;
}

const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  count: number
) => {
  return (props: P & Props) => {
    const { isFetching, ...restProps } = props;

    if (isFetching) {
      return <Skeleton count={count} />;
    }

    return <Component {...(restProps as P)} />;
  };
};

export default withSkeleton;
