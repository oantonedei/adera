interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formValues: {
    email: string;
    country: string;
    difficulty: string;
    frequency: string;
    recommendation: string;
    designer: string;
  };
}

export default function FifthQuestion({ handleChange, formValues }: Props) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-6">
        <label
          htmlFor="designer"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Which African fashion designer/tailor would you like to see on Adera
          or you frequently wear?
        </label>
        <div className="mt-2">
          <input
            id="designer"
            name="designer"
            type="text"
            autoComplete="text"
            value={formValues.designer}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
