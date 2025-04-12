import { useFormContext } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
}

const FormInput = ({ label, name }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <input
        type="text"
        className={`w-full border rounded-md bg-gray-100 px-4 py-2 text-md tracking-wider text-gray-500 outline-none 
                   ${
                     errors[name]
                       ? 'border-red-400 dark:border-red-400 focus:border-red-400'
                       : 'border-gray-300 dark:border-gray-500 focus:border-sky-400'
                   }`}
        {...register(name)}
        placeholder={label}
      />
      {errors[name] && (
        <div className="text-sm text-red-400 pl-4 tracking-wide">
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  );
};

export default FormInput;
