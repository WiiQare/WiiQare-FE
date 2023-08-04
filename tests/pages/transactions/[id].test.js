import Page from "@/pages/transactions/[id]";
import { render } from "@testing-library/react";

describe("Transactions id page", () => {
  it("should render the page", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});