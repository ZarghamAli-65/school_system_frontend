import SignInForm from "@/components/auth/SignInPage";
import { NotificationProvider } from "@/components/NotificationProvider";

export default function SignInPage() {
  return (
    <NotificationProvider>

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <SignInForm />
    </div>
    </NotificationProvider>
  );
}