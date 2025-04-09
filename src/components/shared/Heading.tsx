'use client';

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <h1
      className="text-3xl max-sm:text-2xl font-bold text-gray-600 mb-14
                 self-start dark:text-white transition-colors"
    >
      {text}
    </h1>
  );
};

export default Heading;
