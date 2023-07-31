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
const options = [
  {
    key: 1,
    name: "Weekly",
    id: "weekly",
  },
  {
    key: 2,
    name: "Monthly",
    id: "monthly",
  },
  {
    key: 3,
    name: "Occasionally",
    id: "occasionally",
  },
  {
    key: 4,
    name: "Rarely",
    id: "rarely",
  },
  {
    key: 5,
    name: "Seasonally (Summer etc.)",
    id: "seasonally",
  },
];
export default function ThirdQuestion({ handleChange, formValues }: Props) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-6">
        <label className="block text-md font-medium leading-6 text-gray-900 text-left">
          How frequently do you actively search for African fashionable wears?
          (e.g. Ankara, Kente, Senators, Djellaba, Kitenge etc.) in your country
          or online?
        </label>
        <div className="mt-2">
          {options.map((option) => {
            return (
              <div key={option.key} className="flex items-center">
                <input
                  id={option.id}
                  name="frequency"
                  type="radio"
                  value={option.name}
                  className="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300"
                  onChange={handleChange}
                  checked = {formValues.frequency === option.name}
                />
                <label
                  htmlFor={option.id}
                  className="ml-3 block text-md font-medium text-gray-700"
                >
                  {option.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
