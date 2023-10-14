import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      {/* 実際は、jsでURLを動的に生成することが多い */}
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
