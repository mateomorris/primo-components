/** @typedef {typeof __propDef.props}  TesterProps */
/** @typedef {typeof __propDef.events}  TesterEvents */
/** @typedef {typeof __propDef.slots}  TesterSlots */
export default class Tester extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TesterProps = typeof __propDef.props;
export type TesterEvents = typeof __propDef.events;
export type TesterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
