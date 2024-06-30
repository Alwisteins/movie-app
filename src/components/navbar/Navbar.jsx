import navMenu from "./navMenu";

export const Navbar = () => {
  return (
    <nav className="block order-1 sm:static sm:order-none w-full sm:w-auto">
      <ul className="flex sm:space-x-10 w-full justify-around sm:justify-normal items-center">
        {navMenu.map((nav) => (
          <li key={nav.name} className="">
            <a href={nav.path} className="flex flex-col items-center">
              <nav.icon className="w-5 h-5 block sm:hidden" />
              <span className="text-sm sm:text-base font-medium sm:font-normal">
                {nav.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
