import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import DeleteSelectedBtn from "../Components/DeleteSelectedBtn";

afterEach(cleanup);

test("render without crashing", () => {
    render(<DeleteSelectedBtn />);

    const BtnElement = screen.getByTestId("delete-selected-btn");
    expect(BtnElement).toBeInTheDocument();
    expect(BtnElement).toHaveAttribute("title", "Delete selected");
    expect(BtnElement).toHaveTextContent("Delete Selected");
})

test("snapshot", () => {
    const tree = renderer.create(<DeleteSelectedBtn />).toJSON();
    expect(tree).toMatchSnapshot();
})