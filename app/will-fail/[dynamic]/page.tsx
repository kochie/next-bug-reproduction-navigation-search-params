import { copyFile, mkdir } from "fs/promises";
import Image from "next/image";
import SearchHook from "../../SearchHook";

const DynamicPage = async ({ params }) => {
  await mkdir("public/images", { recursive: true });
  await copyFile("assets/test.png", "public/images/test.png");

  return (
    <div>
      <h1>DynamicPage Component</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <SearchHook />
      <Image src="/images/test.png" alt="" />
    </div>
  );
};

export default DynamicPage;

/**
 * @see https://beta.nextjs.org/docs/api-reference/generate-static-params
 * @returns
 */
export async function generateStaticParams() {
  return [...Array(1000)].map((_, index) => ({
    dynamic: `page-${index}`,
  }));
}
