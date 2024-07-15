import React, { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherName, setOtherName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form submission to enable custom validation

    // Custom email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Password confirmation validation
    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    // Terms and conditions acceptance validation
    if (!termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }

    setError(''); // Clear error if validation passes

    // Implement your sign-up logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="w-144 flex flex-col rounded-xl bg-white text-gray-700 shadow-md"
        noValidate
      >
        <div className="relative mx-4 -mt-6 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#63AFFF] to-[#63AFFF] text-white shadow-lg shadow-[#63AFFF]/40">
          <h3 className="block text-3xl font-semibold">Sign Up</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              First Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Last Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Other Name"
              value={otherName}
              onChange={(e) => setOtherName(e.target.value)}
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Other Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Username
            </label>
          </div>
          <div className="relative col-span-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              minLength="6"
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Confirm Password
            </label>
          </div>
        </div>
        <div className="flex items-center px-6 pb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
            className="mr-2 h-4 w-4 text-[#63AFFF] border-gray-300 rounded focus:ring-[#63AFFF]"
          />
          <label className="text-sm text-gray-700">
            I accept the <a href="#terms" className="text-[#63AFFF]">terms and conditions</a>
          </label>
        </div>
        {error && <p className="text-red-500 text-sm text-center px-6">{error}</p>}
        <div className="p-6 pt-0">
          <button
            type="submit"
            className="block w-full rounded-lg bg-portBlue hover:bg-portBlue py-3 text-center text-xs font-bold uppercase"
          >
            Sign Up
          </button>
          <p className="mt-4 flex justify-center text-sm font-light text-gray-700">
            Already have an account?
            <a className="ml-1 text-sm font-bold text-[#63AFFF]" href="/login">
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
