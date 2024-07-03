import { Sidebar } from "../../components/sidebar/Sidebar";

export const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="absolute right-0 w-[82vw]">
        <div className="p-5">
          <h1 className="text-2xl font-bold">
            Welcome! Dashboard Movie Analitic
          </h1>
          <p>
            A dashboard tools to analyze the 5 most popular films based on the
            most photos uploaded by viewers
          </p>
        </div>
      </div>
    </div>
  );
};
