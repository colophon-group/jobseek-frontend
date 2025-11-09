import { Fragment } from "react";
import type { ReactNode } from "react";

/**
 * Replaces markdown-style inline code spans (`like this`) with <code> elements.
 */
export function renderInlineCode(text: string): ReactNode {
    const parts = text.split(/(`[^`]+`)/g);

    return parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
            return (
                <code key={`code-${index}`}>
                    {part.slice(1, -1)}
                </code>
            );
        }

        if (!part) {
            return null;
        }

        return (
            <Fragment key={`text-${index}`}>
                {part}
            </Fragment>
        );
    });
}
