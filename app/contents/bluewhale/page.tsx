import Bluewhale from "@/app/markdown/Bluewhale.mdx";
export default function Home() {
  return (
    <main className="flex justify-center items-center my-5">
      <div className="relative flex flex-col max-w-7xl w-full justify-center items-center sm:px-5">
        <Bluewhale />
      </div>
    </main>
  );
}
