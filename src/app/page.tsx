
import BilanBank from "@/components/features/BilanBank/BilanBank";
import DashboardPage from "@/components/features/Dashboard/DashboardPage";
import Header from "@/components/features/Header/page";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#f8d1b3] font-sans dark:bg-[#ebcfc6]">
        <main className="flex w-full items-center bg-white dark:bg-[#ebcfc6] sm:items-start">

          <DashboardPage />
        </main>
      </div>
    </>
  );
}
