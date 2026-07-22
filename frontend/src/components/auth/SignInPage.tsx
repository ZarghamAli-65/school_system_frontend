"use client";

import { useState } from "react";
import Link from "next/link";

interface AuthFormProps {
  isSignIn: boolean;
  onSubmit?: (data: any) => void;
}

export default function AuthForm({ isSignIn, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    universityId: "",
    universityCard: null as File | null,
    password: "",
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
    setFormData((prev) => ({ ...prev, universityCard: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    if (onSubmit) onSubmit(formData);
  };

  const fields = isSignIn
    ? (["email", "password"] as const)
    : (["fullName", "email", "universityId", "universityCard"] as const);

  const fieldLabels: Record<string, string> = {
    fullName: "Full Name",
    email: "Email",
    universityId: "University ID",
    universityCard: "University ID Card",
    password: "Password",
  };

  const fieldTypes: Record<string, string> = {
    fullName: "text",
    email: "email",
    universityId: "text",
    universityCard: "file",
    password: "password",
  };


  return (
    <main>
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-gray-200 flex flex-col gap-6">
      <h1 className="text-3xl font-bold justify-center text-center text-gray-900">
        <span className="text-purple-400">
          {isSignIn ? "Welcome back" : "Create Account"}
        </span>{" "}
        <br />Z-School Portal
      </h1>

      <p className="text-sm leading-6 text-gray-500 flex flex-wrap text-center justify-center">
        {isSignIn
          ? "Access to vast collection of resources, and stay updated"
          : "Please complete all fields and upload a valid I.D to gain access to the portal"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        {fields.map((field) => (
          <div key={field} className="space-y-2">
            <label
              htmlFor={field}
              className="block text-sm font-semibold text-gray-700"
            >
              {fieldLabels[field]}
            </label>

            {field === "universityCard" ? (
              <div className="flex flex-col items-start gap-2">
                <input
                  type="file"
                  id={field}
                  name={field}
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded-xl border-2 border-dashed border-purple-300 bg-purple-50 px-4 py-6 text-gray-600 cursor-pointer transition hover:border-purple-500 hover:bg-purple-100 file:mr-4 file:rounded-lg file:border-0 file:bg-purple-300 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-purple-400"
                />
                {preview && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Upload preview"
                    className="w-36 h-36 rounded-xl object-cover border-4 border-yellow-300 shadow-md"
                  />
                )}
              </div>
            ) : (
              <input
                type={fieldTypes[field]}
                id={field}
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-200"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full rounded-xl bg-purple-400 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <p className="text-center justify-center text-sm text-gray-500">
        {isSignIn ? "New to Z-School Portal? " : "Already have an account? "}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="flex items-center justify-center text-center gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-sky-300"
        >
          {isSignIn ? "Create an account" : "Sign In"}
        </Link>
      </p>
    </div>
    </main>
  );
}