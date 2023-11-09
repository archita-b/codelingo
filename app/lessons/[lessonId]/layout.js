import AuthProvider from "@/app/auth/provider";

export default function lessonIdLayout({ children }) {
  return (
    <div>
      <AuthProvider>
        <main>{children}</main>
      </AuthProvider>
    </div>
  );
}
