import { h } from 'preact';
export interface HTMLContentProps {
    content: string;
    parentElement?: string;
}
export declare function HTMLElement(props: HTMLContentProps): import("preact").VNode<import("preact").ClassAttributes<HTMLElement> & h.JSX.HTMLAttributes<EventTarget> & h.JSX.SVGAttributes<SVGElement>>;
