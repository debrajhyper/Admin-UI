import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import EditableRow from "../Components/EditableRow";

afterEach(cleanup);

test("render without crashing", () => {
    const users = { id: 1, name: "Aaron Miles", email: "aaron@mailinator.com", role: "member" };
    render(<EditableRow user={users} />);

    const TrElement = screen.getByTestId("editable-rows");
    expect(TrElement).toBeInTheDocument();
    expect(TrElement).toContainHTML("<tr>");
    expect(TrElement).toContainHTML("<td>");
})

test("snapshot", () => {
    const users = { id: 1, name: "Aaron Miles", email: "aaron@mailinator.com", role: "member" };

    const tree = renderer.create(<EditableRow user={users} />).toJSON();
    expect(tree).toMatchSnapshot();
})