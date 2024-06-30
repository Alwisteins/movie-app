import { Navbar } from "../navbar/Navbar";

export const Bottombar = () => {
  return (
    <div className="fixed sm:hidden flex items-center h-16 w-full bottom-0 bg-slate-950">
      <Navbar />
    </div>
  );
};
