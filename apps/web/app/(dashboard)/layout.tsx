import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganisationGuard } from "@/modules/auth/ui/components/organisation-guard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // AuthGuard makes sure the private routes are protected even though our middleware fails
  return (
    <AuthGuard>
      <OrganisationGuard>{children}</OrganisationGuard>
    </AuthGuard>
  );
};

export default Layout;
