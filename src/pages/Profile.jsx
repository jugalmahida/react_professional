import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    role: "user",
  });

  // In a real app, this would come from authentication context/state
  const userData = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    role: "user",
    memberSince: "January 2024",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Profile updated:", formData);
    setIsEditing(false);
    // In a real app, you would make an API call to update the profile
  };

  const handleCancel = () => {
    // Reset form data to original
    setFormData({
      fullName: userData.fullName,
      email: userData.email,
      role: userData.role,
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    // In a real app, you would clear auth tokens and redirect
    navigate("/login");
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

      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
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
          Profile Settings
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Manage your account information and preferences
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white/5 px-4 py-8 shadow-lg ring-1 ring-white/10 sm:rounded-2xl sm:px-10">
          {/* Profile Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-indigo-500 flex items-center justify-center ring-4 ring-white/10">
                <UserIcon className="h-12 w-12 text-white" />
              </div>
              {isEditing && (
                <button
                  type="button"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center ring-2 ring-gray-900 hover:bg-indigo-400 transition-colors"
                >
                  <PencilIcon className="h-4 w-4 text-white" />
                </button>
              )}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Member since {userData.memberSince}
            </p>
          </div>

          {/* Profile Information Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                {isEditing ? (
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm/6"
                    placeholder="John Doe"
                  />
                ) : (
                  <div className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white sm:text-sm/6">
                    {formData.fullName}
                  </div>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                {isEditing ? (
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm/6"
                    placeholder="you@example.com"
                  />
                ) : (
                  <div className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white sm:text-sm/6">
                    {formData.email}
                  </div>
                )}
              </div>
            </div>

            {/* Role Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Role
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShieldCheckIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                {isEditing ? (
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white focus:outline-2 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm/6"
                  >
                    <option value="user" className="bg-gray-800">
                      User
                    </option>
                    <option value="admin" className="bg-gray-800">
                      Admin
                    </option>
                  </select>
                ) : (
                  <div className="block w-full rounded-md bg-white/5 border-0 py-2.5 pl-10 pr-3 text-white sm:text-sm/6 capitalize">
                    {formData.role}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-3 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-200"
                  >
                    <CheckIcon className="h-5 w-5" />
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 flex items-center justify-center gap-2 rounded-md bg-white/5 px-3 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 transition-colors duration-200"
                  >
                    <XMarkIcon className="h-5 w-5" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-3 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-200"
                >
                  <PencilIcon className="h-5 w-5" />
                  Edit Profile
                </button>
              )}
            </div>
          </form>

          {/* Divider */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-red-500/10 px-3 py-2.5 text-sm font-semibold text-red-400 ring-1 ring-inset ring-red-500/20 hover:bg-red-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-colors duration-200"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Back to home link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
          >
            ← Back to home
          </Link>
        </div>
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
