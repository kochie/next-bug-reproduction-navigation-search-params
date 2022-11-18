import Image from "next/image";

import testImage from "../../assets/test.png";

const DynamicPage: React.FC<any> = ({ params }) => {
  return (
    <div>
      <h1>DynamicPage Component</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <Image src={testImage} alt="" />
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
