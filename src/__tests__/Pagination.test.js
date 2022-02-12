import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Pagination from "../Components/Pagination";

afterEach(cleanup);

test("render without crashing", () => {
    const users = [
        { id: 1, name: "Aaron Miles", email: "aaron@mailinator.com", role: "member" },
        { id: 2, name: "Aishwarya Naik", email: "aishwarya@mailinator.com", role: "member" },
        { id: 3, name: "Arvind Kumar", email: "arvind@mailinator.com", role: "admin" },
    ];
    render(<Pagination filteredUsers={users} itemPerPage={10} currentPage={1} />);

    const PaginationElement = screen.getByTestId("pagination");
    expect(PaginationElement).toBeInTheDocument();
    expect(PaginationElement).toContainHTML("<nav");
    expect(PaginationElement).toContainHTML("<ul");
    expect(PaginationElement).toContainHTML("<li");
})

test("snapshot", () => {
    const users = [
        { id: 1, name: "Aaron Miles", email: "aaron@mailinator.com", role: "member" },
        { id: 2, name: "Aishwarya Naik", email: "aishwarya@mailinator.com", role: "member" },
        { id: 3, name: "Arvind Kumar", email: "arvind@mailinator.com", role: "admin" },
    ];

    const tree = renderer.create(<Pagination filteredUsers={users} itemPerPage={10} currentPage={1} />).toJSON();
    expect(tree).toMatchSnapshot();
})