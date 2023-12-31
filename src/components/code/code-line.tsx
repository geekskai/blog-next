"use client";

import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";
import Prism from "prismjs";

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock = ({ className = "lang-js", children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  return (
    <span className="inline-code">
      <code className={`language-${language}`}>{children}</code>
    </span>
  );
};

export default CodeBlock;
