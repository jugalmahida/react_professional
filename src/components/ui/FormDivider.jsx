export default function FormDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white/5 px-2 text-gray-400">Or continue with</span>
      </div>
    </div>
  );
}
