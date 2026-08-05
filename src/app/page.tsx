import DashboardPage from "@/components/features/Dashboard/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#ebcfc6] font-sans dark:bg-[#ebcfc6]">
      <main className="flex w-full items-center bg-white dark:bg-[#ebcfc6] sm:items-start">
        <DashboardPage />
      </main>
    </div>
  );
}
