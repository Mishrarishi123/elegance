"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle, Lock, Mail } from "lucide-react";

// Fake credentials for demo
const FAKE_CREDENTIALS = {
  email: "test1234@gmail.com",
  password: "123456789",
};

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setSuccess(false);
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      email === FAKE_CREDENTIALS.email &&
      password === FAKE_CREDENTIALS.password
    ) {
      setSuccess(true);
      setLoading(false);

      // Redirect after success
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && email && password) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">
              Sign in to your account to continue
            </p>
          </div>

          {/* Demo Info */}
          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Demo Credentials
            </p>
            <p className="text-sm text-blue-800">
              Email: <span className="font-mono">demo@example.com</span>
            </p>
            <p className="text-sm text-blue-800">
              Password: <span className="font-mono">password123</span>
            </p>
          </div> */}

          {/* Error */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-green-800">
                Login successful! Redirecting…
              </p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-black font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-11 pr-4 text-gray-600 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-11 text-gray-600 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !email || !password}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
