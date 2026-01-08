import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import IndigoButton from "@/components/ui/IndigoButton";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import OAuthButtons from "@/components/ui/OAuthButtons";
import FormDivider from "@/components/ui/FormDivider";
import { GeneratePassword } from "@/utils/PasswordGenerator";

export default function Register() {
  // For password hide show
  const [showPassword, setShowPassword] = useState(false);

  // For the form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
  });

  // For Password Generators local states
  const passwordRef = useRef();
  const [length, setLength] = useState(6);
  const [isNumbersIncluded, setIsNumbersIncluded] = useState(false);
  const [isSpecialCharsIncluded, setIsSpecialCharsIncluded] = useState(false);
  const [generatePasswordButtonClick, setGeneratePasswordButtonClick] =
    useState(false);
  const [isPasswordCopied, setIsPasswordCopied] = useState(false);

  // Using the useCallBack hook of it cached the all data memory (this is not for the function calling)
  const generatePassword = useCallback(() => {
    const pass = GeneratePassword({
      length,
      isNumbersIncluded,
      isSpecialCharsIncluded,
    });
    setFormData((prev) => ({ ...prev, password: pass }));
  }, [length, isNumbersIncluded, isSpecialCharsIncluded, setFormData]);

  // Applied useEffect for the function calling, call only when generatePasswordButtonClick is true.
  // else it will run on page only, end up we get the password even generate password button is not clicked.
  useEffect(() => {
    if (generatePasswordButtonClick) {
      // console.log(
      //   "from calling ",
      //   length,
      //   isNumbersIncluded,
      //   isSpecialCharsIncluded
      // );
      generatePassword();
    }
  }, [
    length,
    isNumbersIncluded,
    isSpecialCharsIncluded,
    generatePasswordButtonClick,
  ]);

  const copyToClipBoard = async () => {
    setIsPasswordCopied(true);
    passwordRef.current?.select();
    await window.navigator.clipboard.writeText(formData.password);
    // Reset back to "Copy" after 2 seconds
    setTimeout(() => {
      setIsPasswordCopied(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 pb-8 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <Link to="/" className="flex justify-center">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-12 w-auto"
          />
        </Link>

        {/* Header */}
        <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/5 px-4 py-8 shadow-lg ring-1 ring-white/10 sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm/6"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm/6"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-10 text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm/6"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeSlashIcon
                      className="h-5 w-5 text-gray-400 hover:text-gray-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-400 hover:text-gray-300"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <div className="mt-2 text-white">
                <div className="flex flex-row">
                  <button
                    onClick={() => setGeneratePasswordButtonClick(true)}
                    type="button"
                    className=" flex-7 bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600 "
                  >
                    Generate Strong Password ✨
                  </button>

                  <button
                    disabled={isPasswordCopied || !formData.password}
                    onClick={copyToClipBoard}
                    type="button"
                    className={`flex-3 ml-2 rounded-md cursor-pointer transition-colors ${
                      isPasswordCopied
                        ? "bg-green-500 hover:bg-green-400"
                        : "bg-indigo-500 hover:bg-indigo-400"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isPasswordCopied ? "Copied! ✓" : "Copy"}
                  </button>
                </div>
                <div className="flex flex-row mt-2">
                  <input
                    type="range"
                    min={6}
                    max={25}
                    className="mt-2 w-full flex-7"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                  />
                  <label className="ml-2 flex-3">Length : {length}</label>
                </div>
                <div className="flex flex-row mt-2">
                  <div className="flex-5">
                    <input
                      type="checkbox"
                      defaultChecked={isNumbersIncluded}
                      onChange={() => setIsNumbersIncluded((prev) => !prev)}
                    />
                    <label className="ml-2">Numbers</label>
                  </div>
                  <div className="flex-5">
                    <input
                      type="checkbox"
                      defaultChecked={isSpecialCharsIncluded}
                      onChange={() =>
                        setIsSpecialCharsIncluded((prev) => !prev)
                      }
                    />
                    <label className="ml-2">Special Characters</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Role
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="role-user"
                    name="role"
                    type="radio"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-600 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="role-user"
                    className="ml-3 block text-sm text-gray-300 cursor-pointer"
                  >
                    <span className="font-medium">User</span>
                    <span className="text-gray-400 ml-2">
                      Standard user account
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="role-admin"
                    name="role"
                    type="radio"
                    value="admin"
                    checked={formData.role === "admin"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-600 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="role-admin"
                    className="ml-3 block text-sm text-gray-300 cursor-pointer"
                  >
                    <span className="font-medium">Admin</span>
                    <span className="text-gray-400 ml-2">
                      Administrator account
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <IndigoButton
              disabled={
                !formData.email || !formData.password || !formData.fullName
              }
              title="Create Account"
              onClick={() => {}}
            />
          </form>

          {/* Divider */}
          <div className="mt-6">
            <FormDivider />

            {/* Social Login Buttons */}
            <OAuthButtons />
          </div>
        </div>

        {/* Back to home link */}
        <BackToHomeButton />
      </div>

      {/* Bottom decorative element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 translate-y-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}
