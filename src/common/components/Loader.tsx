export const Loader = () => {
  return (
    <div
      aria-label="loading"
      className="w text-blue-sky-300 inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
