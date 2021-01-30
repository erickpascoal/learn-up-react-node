import React from 'react'
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

interface Props {
  value: string;
}

const MarkdownView: React.FC<Props> = ({ value }) => {
  // const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("preview");
  return (
    <div className="container">
      <ReactMde
        value={value}
        disablePreview={true}
        // onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
}

export default MarkdownView;