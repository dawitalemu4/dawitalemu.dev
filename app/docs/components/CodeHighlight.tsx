"use client";
import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/base16/google-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);
import csharp from "highlight.js/lib/languages/csharp";
hljs.registerLanguage("csharp", csharp);

interface CodeHighlightProps {
    code: string;
};

const CodeHighlight: React.FC<CodeHighlightProps> = ({ code }) => {

    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {

        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        };

    }, [code]);

    return (
        <pre>
            <code ref={codeRef}>
                {code}
            </code>
        </pre>
    );
};

export default CodeHighlight;