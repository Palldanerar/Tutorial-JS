import React, { useContext, useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import PasteIcon from '../assets/PasteIcon';
import CopyIcon from '../assets/CopyIcon';
import { ThemeContext } from '../App';

const Code = ({ children }: any) => {

    const [copied, setCopied] = useState(false);
    const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [copied])

    return (
        <div className="code">
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                <button className='icon copy-icon'>
                    {copied ? <PasteIcon /> : <CopyIcon />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language="javascript"
                style={isDark ? materialDark : materialLight}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code