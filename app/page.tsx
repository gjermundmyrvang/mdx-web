import Content from "@/app/markdown/Content.mdx";
export default function Home() {
  return (
    <main className="flex justify-center items-center my-5">
      <div className="relative flex flex-col max-w-7xl w-full justify-center items-center sm:p-5">
        <Content />
      </div>
    </main>
  );
}
