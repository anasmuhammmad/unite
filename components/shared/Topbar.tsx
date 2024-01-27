import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";
function Topbar() {
  const isUserLoggedIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flexitems-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Unite</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden"></div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              OrganizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}
export default Topbar;
