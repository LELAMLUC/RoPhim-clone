// AppProviders.jsx
import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { DataProvider } from "./DataContext";
export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <DataProvider>{children}</DataProvider>
      </ToastProvider>
    </AuthProvider>
  );
}
