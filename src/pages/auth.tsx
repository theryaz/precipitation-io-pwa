'use client';

import { setApiKey } from '@/api/rainbarrel-api';

export const AuthPage = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const apiKey = formData.get("api_key") as string;
    console.log("formData", {
      formData,
      apiKey,
    })
    setApiKey(apiKey);
    window.location.href = '/';
  };

  return (
    <div>
      <div className='py-6'>
        Enter your API key to continue
      </div>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="API Key"
          name="api_key"
          className="border border-gray-300 p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthPage;