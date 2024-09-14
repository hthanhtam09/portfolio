import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 flex space-x-2 justify-center items-center dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="size-7 bg-neutral-900 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="size-7 bg-neutral-900 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="size-7 bg-neutral-900 rounded-full animate-bounce" />
    </div>
  );
};

export default Loading;