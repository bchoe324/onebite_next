import type { BookData } from "@/types";
import Link from "next/link";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link
      href={`/book/${id}`}
      className="flex gap-[15px] py-[20px] px-[10px] border-b border-gray-200 text-black "
    >
      <img src={coverImgUrl} className="w-[80px]" />
      <div>
        <div className="font-bold">{title}</div>
        <div className="break-keep">{subTitle}</div>
        <br />
        <div className="text-gray-500">
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
