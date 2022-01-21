import dynamic from "next/dynamic";

export default function Home() {
  const Desktop = dynamic(() => import("./components/Desktop/Desktop"));
  return (
    <div>
      <Desktop />
    </div>
  );
}
