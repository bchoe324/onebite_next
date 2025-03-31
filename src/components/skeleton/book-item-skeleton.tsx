export default function BookItemSkeleton() {
  return (
    <div className="flex gap-[15px] py-[20px] px-[10px] border-b border-gray-200">
      <div className="w-[80px] h-[105px] bg-gray-200"></div>
      <div className="flex-1 *:w-full *:h-[20px] *:bg-gray-200">
        <div className=""></div>
        <div className=""></div>
        <br />
        <div className=""></div>
      </div>
    </div>
  );
}
