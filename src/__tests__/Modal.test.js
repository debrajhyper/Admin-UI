import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Modal } from "../Components";

afterEach(cleanup);

test("render without crashing", () => {
    const { container } = render(<Modal />);
    expect(container).toBeInTheDocument();
    expect(container).toContainHTML("<div");
})

test("snapshot", () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
})