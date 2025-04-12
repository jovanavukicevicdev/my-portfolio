import { useFormContext } from 'react-hook-form';

interface FormTextareaProps {
  label: string;
  name: string;
}

const ROWS = 5;
const MAX_LENGTH = 250;

const FormTextarea = ({ label, name }: FormTextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <textarea
        className={`w-full border rounded-md bg-gray-100 px-4 py-2 text-md tracking-wider text-gray-500 outline-none 
                   ${
                     errors[name]
                       ? 'border-red-400 dark:border-red-400 focus:border-red-400'
                       : 'border-gray-300 dark:border-gray-500 focus:border-sky-400'
                   }`}
        {...register(name)}
        placeholder={label}
        rows={ROWS}
        maxLength={MAX_LENGTH}
      />
      {errors[name] && (
        <div className="text-sm text-red-400 pl-4 -mt-1.5 tracking-wide">
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  );
};

export default FormTextarea;
