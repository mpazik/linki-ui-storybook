import { createComponentRenderer } from "linki-ui";

export const renderToDOM = ({storyFn, selectedKind, selectedStory, showMain, showError, storyContext}, domElement) => {
    const element = storyFn()
    const render = createComponentRenderer(domElement)
    domElement.innerHTML = ""
    domElement.appendChild(parent)

    showMain();
    if (typeof element === 'string' || typeof element === 'undefined' || Array.isArray(element)) {
        render(element)
        storyContext.abortSignal.addEventListener("abort", () => {
            parent.dispatchEvent(new CustomEvent("disconnected"));
        })
    }
    else {
        showError({
            title: "Expecting JsonHtml from the story : \"" + selectedStory + "\" of \"" + selectedKind + "\".",
            description: "Did you forget to return the JsonHtml snippet from the story?",
        });
    }
};
