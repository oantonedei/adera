interface Props {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formValues: {
    email: string;
    country: string;
    difficulty: string;
    frequency: string;
    recommendation: string;
    designer: string;
  };
}
function FirstQuestion({ handleChange, formValues }: Props) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900 text-left"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900 text-left"
        >
          Country
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            value={formValues.country}
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 pl-2"
            onChange={handleChange}
          >
            <option value="">-Make Selection-</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FirstQuestion;
