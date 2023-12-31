"use client";

import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";
import Prism from "prismjs";

interface CodeBlockProps {
  className: string;
  children: string | React.ReactNode;
}

const CodeBlock = ({ className = "lang-js", children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 3000);
    }
  }, [isCopied]);

  return (
    <div className="flex flex-col">
      <pre className="relative">
        <code className={`language-${language}`}>{children}</code>
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <CopyToClipboard
            text={children as string}
            onCopy={() => setIsCopied(true)}
          >
            <button className="flex self-center">
              {isCopied ? (
                <FaRegClipboard className="mx-2 self-center" />
              ) : (
                <FaRegCopy className="mx-2 self-center" />
              )}{" "}
            </button>
          </CopyToClipboard>
        </div>
      </pre>
    </div>
  );
};

export default CodeBlock;
