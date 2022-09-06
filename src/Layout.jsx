import "./App.css";
import "antd/dist/antd.css";
import RequestLogs from "./components/RequestLogs";
import AuditLogPage from "./pages/logs/AuditLogPage";
import ErrorLogPage from "./pages/logs/ErrorLogPage";
import SqlLogPage from "./pages/logs/SqlLogPage";
import RequestLogPage from "./pages/logs/RequestLogPage";
import {Routes, Route, Link, BrowserRouter} from "../node_modules/react-router-dom/index";
import Menu from "./Menu";

function Layout() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <nav>
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/error">Error Logs</Link>
              </li>
              <li>
                <Link to="/sql">DB Logs</Link>
              </li>
              <li>
                <Link to="/audit">Audit Logs</Link>
              </li>
              <li>
                <Link to="/request">Reuest Logs</Link>
              </li>
            </ul> */}
            <Menu />
          </nav>

          <Routes>
            <Route path="/" element={<RequestLogs />} />
            <Route path="request" element={<RequestLogPage />} />
            <Route path="audit" element={<AuditLogPage />} />
            <Route path="sql" element={<SqlLogPage />} />
            <Route path="error" element={<ErrorLogPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Layout;
