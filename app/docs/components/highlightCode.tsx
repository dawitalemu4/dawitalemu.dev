"use client";
import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/base16/google-dark.css";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import django from "highlight.js/lib/languages/django";
import lua from "highlight.js/lib/languages/lua";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import csharp from "highlight.js/lib/languages/csharp";

hljs.registerLanguage("go", go);
hljs.registerLanguage("java", java);
hljs.registerLanguage("django", django);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("csharp", csharp);

interface HighlightCodeProps {
    code: string;
};

const HighlightCode: React.FC<HighlightCodeProps> = ({ code }) => {

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

export default HighlightCode;
