import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomePage, BattleGrid, Calendarr, Login, AdminPage, Battle1x1, Role, CreateEventPage, EventPage, SignUp } from './pages';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/battles", element: _jsx(Battle1x1, {}) }), _jsx(Route, { path: "/battle/:id/grid", element: _jsx(BattleGrid, {}) }), _jsx(Route, { path: "/Calendar", element: _jsx(Calendarr, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminPage, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/role", element: _jsx(Role, {}) }), _jsx(Route, { path: "/createEvents", element: _jsx(CreateEventPage, {}) }), _jsx(Route, { path: "/event/:id", element: _jsx(EventPage, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
