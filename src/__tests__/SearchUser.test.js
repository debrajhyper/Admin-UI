import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchUser from "../Components/SearchUser";

afterEach(cleanup);

test("render without crashing", () => {
    render(<SearchUser searchResult="abh" />);

    const SearchUserElement = screen.getByTestId("search-user");
    expect(SearchUserElement).toBeInTheDocument();
    expect(SearchUserElement).toContainHTML("<input");
})

test("snapshot", () => {
    const tree = renderer.create(<SearchUser searchResult="abh" />).toJSON();
    expect(tree).toMatchSnapshot();
})