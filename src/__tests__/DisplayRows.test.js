import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import DisplayRows from "../Components/DisplayRows";

afterEach(cleanup);

test("render without crashing", () => {
    const users = [
        { id: 1, name: "Aaron Miles", email: "aaron@mailinator.com", role: "member" },
        { id: 2, name: "Aishwarya Naik", email: "aishwarya@mailinator.com", role: "member" },
        { id: 3, name: "Arvind Kumar", email: "arvind@mailinator.com", role: "admin" },
    ];
    render(<DisplayRows user={users[0]} users={users} />);

    const TrElement = screen.getByTestId("display-rows");
    expect(TrElement).toBeInTheDocument();
    expect(TrElement).toContainHTML("<tr>");
    expect(TrElement).toContainHTML("<td>");
})

test("snapshot", () => {
    const users = [
        { id: 1, name: "Aaron Miles", email: "aaron@mailinator.com", role: "member" },
        { id: 2, name: "Aishwarya Naik", email: "aishwarya@mailinator.com", role: "member" },
        { id: 3, name: "Arvind Kumar", email: "arvind@mailinator.com", role: "admin" },
    ];

    const tree = renderer.create(<DisplayRows user={users[0]} users={users} />).toJSON();
    expect(tree).toMatchSnapshot();
})