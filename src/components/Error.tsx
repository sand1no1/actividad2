interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className="w-30 h-10 bg-red-500 text-white flex items-center justify-center rounded">
      {message}
    </div>
  );
}
