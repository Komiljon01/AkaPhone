import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default RootLayout;
