'use client';
import { useRouter } from 'next/navigation';
import { setApiKey } from '@/api/rainbarrel-api';

export const AuthForm = () => {
  const { push } = useRouter();

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
    console.log("Push /")
    // push("/")
  };

  return (
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
  );
}

export default AuthForm;