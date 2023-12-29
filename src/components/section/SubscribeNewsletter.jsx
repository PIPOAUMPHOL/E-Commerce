import { useState } from "react";

function SectionSubcribeNewsletter() {
  const [email, setEmil] = useState("");
  return (
    <section className="bg-gray-200 py-20">
      <div className="flex flex-col max-w-2xl container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Subscribe Newsletter</h2>
        <form className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email here"
            required
            onChange={(event) => {
              setEmil(event.target.value);
            }}
            value={email}
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
            onClick={(event) => {
              event.preventDefault();
              alert(`${email} has been subscribed`);
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default SectionSubcribeNewsletter;
