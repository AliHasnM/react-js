import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Container from "./Container/Container";
import Logo from "./Logo";
import LogoutBtn from "./Header/LogoutBtn";
import Button from "./Button";
import Input from "./Input";
import PostCard from "./PostCard";
import Select from "./Select";
import RTE from "./RTE";
import Protected from "./AuthLayout";
import Login from "./Login";
import Signup from "./Signup";

export {
  Header,
  Footer,
  Container,
  Logo,
  LogoutBtn,
  Button,
  Input,
  PostCard,
  Select,
  RTE,
  Protected,
  Login,
  Signup,
};

/*
Reason and Why Use:
1. **Centralized Exports**: Groups all imports in one file, making imports cleaner in other components (e.g., `import { Header, Footer } from './components';`).
2. **Modular Structure**: Keeps components organized in their respective folders for better readability and maintainability.
3. **Scalability**: Makes it easy to add or remove components without modifying multiple files.
*/
