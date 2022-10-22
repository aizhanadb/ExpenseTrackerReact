import { AddTransaction } from "./components/AddTransaction";
import { Balanse } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import "./styles.css";
import { GlobalProvider } from "./Context/GlobalState";
export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balanse />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
