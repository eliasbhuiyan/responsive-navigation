import { useState } from "react";

const CopyButton = ({ containerId }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const container = document.getElementById(containerId);
    if (container) {
      const range = document.createRange();
      range.selectNode(container);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <button className="copy-button" onClick={copyToClipboard}>{copied ? "Copied!" : "Copy"}</button>
  );
};

export default CopyButton;
