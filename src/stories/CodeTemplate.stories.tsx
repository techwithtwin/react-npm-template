import type { Meta, StoryFn } from "@storybook/react";
import CodeTemplate from "../CodeTemplate";

export default {
	title: "CodeTemplate",
	component: CodeTemplate,
	argTypes: {},
} as Meta<typeof CodeTemplate>;

const Template: StoryFn<typeof CodeTemplate> = () => <CodeTemplate />;

export const Primary = Template.bind({});
