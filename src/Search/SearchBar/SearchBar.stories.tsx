import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "./SearchBar";

export default {
  title: "Example/SearchBar",
  component: SearchBar,
  label: {
    name: "label",
    type: { name: "string", required: false },
    defaultValue: "Hello",
    description: "demo description",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "Hello" },
    },
    control: {
      type: "text",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = () => (
  <SearchBar
    value="DAAMMN"
    placeholder="PlaceHolder"
    loading={false}
    results={[
      {
        img: "https://images.unsplash.com/photo-1650945751889-3b9454fb1ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "nika",
        subTitle: "gvaramia",
        redirectUrl: "https://www.google.com",
      },
      {
        img: "https://images.unsplash.com/photo-1650945751889-3b9454fb1ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "nika",
        subTitle: "gvaramia",
        redirectUrl: "https://www.google.com",
      },
    ]}
  />
);

export const Primary = Template.bind({});
