import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import { Section } from "./components/Section";

const App = () => {
  return (
    <div>
      <Heading title="Hello" />
      <Section title="Subheading">
        <div>The is my section.</div>
      </Section>
      <Counter />
      <List
        items={["Coffee", "Code"]}
        render={(item: string) => <span className="bold gold">{item}</span>}
      />
    </div>
  );
};

export default App;
