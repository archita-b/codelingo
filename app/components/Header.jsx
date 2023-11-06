export default function Header({ percentageOfProgress }) {
  return (
    <div className="w-3/5">
      <div className="h-2.5 bg-gray-300 rounded-full">
        <div
          className="h-full bg-green-600 rounded-full"
          style={{ width: `${percentageOfProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
