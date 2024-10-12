import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Dnews</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 ${
                      isActive ? "text-orange-700" : "text-black"
                    } rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Business"
                  className={({ isActive }) =>
                    `px-3 py-2 ${
                      isActive ? "text-orange-700" : "text-black"
                    } rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary`
                  }
                >
                  Business
                </NavLink>
                <NavLink
                  to="/Technology"
                  className={({ isActive }) =>
                    `px-3 py-2 ${
                      isActive ? "text-orange-700" : "text-black"
                    } rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary`
                  }
                >
                  Technology
                </NavLink>
                <NavLink
                  to="/Sports"
                  className={({ isActive }) =>
                    `px-3 py-2 ${
                      isActive ? "text-orange-700" : "text-black"
                    } rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary`
                  }
                >
                  Sports
                </NavLink>
                <NavLink
                  to="Entertainment"
                  className={({ isActive }) =>
                    `px-3 py-2 ${
                      isActive ? "text-orange-700" : "text-black"
                    } rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary`
                  }
                >
                  Entertainment
                </NavLink>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
