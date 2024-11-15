import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Container from "./Container/Container";
import Logo from "./Logo";
import LogoutBtn from "./Header/LogoutBtn";

export { Header, Footer, Container, Logo, LogoutBtn };

/*
Reason and Why Use:
1. **Centralized Exports**: Groups all imports in one file, making imports cleaner in other components (e.g., `import { Header, Footer } from './components';`).
2. **Modular Structure**: Keeps components organized in their respective folders for better readability and maintainability.
3. **Scalability**: Makes it easy to add or remove components without modifying multiple files.
*/
