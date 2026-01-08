// This default values is actually production ready practices.
export default function IndigoButton({
  onClick = () => {},
  title = "Submit",
  disabled = false,
}) {
  return (
    <div>
      <button
        type="submit"
        className={`flex w-full justify-center rounded-md px-3 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-200 ${
          disabled
            ? "bg-indigo-300 cursor-not-allowed opacity-60"
            : "bg-indigo-500 hover:bg-indigo-400 cursor-pointer"
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
}
