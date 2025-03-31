import { BookData } from "@/types";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const paramsID = (await params).id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${paramsID}`
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다.</div>;
  }
  const bookData: BookData = await response.json();
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    bookData;
  return (
    <div className="flex flex-col gap-[10px]">
      <div
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
        className="flex justify-center p-[20px] bg-cover bg-center bg-no-repeat relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/70"
      >
        <img src={coverImgUrl} className="z-1 max-h-[350px] h-full" />
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="text-gray-500">{subTitle}</div>
      <div className="text-gray-500">
        {author} | {publisher}
      </div>
      <div className="bg-[rgb(245,245,245)] p-[15px] rounded-[5px] whitespace-pre-line">
        {description}
      </div>
    </div>
  );
}
