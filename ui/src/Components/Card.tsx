interface PropType {
  content: string;
}

export default function Card(props: PropType) {
  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
      {props.content}
    </div>
  );
}
