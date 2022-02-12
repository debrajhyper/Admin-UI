import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Skeleton } from "../Components";

afterEach(cleanup);

test("render without crashing", () => {
    const { container } = render(<Skeleton />);
    expect(container).toBeInTheDocument();
    expect(container).toContainHTML("<tr>");
    expect(container).toContainHTML("<td>");
})

test("snapshot", () => {
    const tree = renderer.create(<Skeleton />).toJSON();
    expect(tree).toMatchSnapshot();
})