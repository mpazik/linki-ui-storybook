import global from "global";
import { renderJsonHtmlToDom } from "linki-ui";

var rootElement = global.document.getElementById('root');

export const renderToDOM = ({storyFn, selectedKind, selectedStory, showMain, showError}) => {
    const element = storyFn();
    showMain();
    if (typeof element === 'string' || typeof element === 'undefined' || Array.isArray(element)) {
        rootElement.innerHTML = ""
        rootElement.appendChild(renderJsonHtmlToDom(element))
    }
    else {
        showError({
            title: "Expecting JsonHtml from the story : \"" + selectedStory + "\" of \"" + selectedKind + "\".",
            description: "Did you forget to return the JsonHtml snippet from the story?",
        });
    }
};
