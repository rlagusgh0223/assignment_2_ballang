import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./contexts/auth.context";
import MyPage from "./pages/MyPage";
import { ProfileProvider } from "./contexts/profile.context";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/my-page" element={<MyPage />} />
                <Route path="/cart-Page" element={<CartPage />} />
              </Route>
            </Routes>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
