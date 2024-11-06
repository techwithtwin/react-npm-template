import renderer from "react-test-renderer";
import { expect, it } from "vitest";
import CodeTemplate from "../src/CodeTemplate";

it("renders correctly", () => {
	const tree = renderer.create(<CodeTemplate />).toJSON();
	expect(tree).toMatchSnapshot();
});
