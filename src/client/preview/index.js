import { start } from '@storybook/core/client';

import './globals'
import { renderToDOM } from './render';

const framework = 'linki-ui';
const api = start(renderToDOM);

export const storiesOf = function (kind, m) {
    return api.clientApi.storiesOf(kind, m).addParameters({
        framework: framework,
    });
};
export const configure = (loadable, module) => api.configure(framework, loadable, module);
export const addDecorator = api.clientApi.addDecorator;
export const addParameters = api.clientApi.addParameters;
export const clearDecorators = api.clientApi.clearDecorators;
export const setAddon = api.clientApi.setAddon;
export const forceReRender = api.forceReRender;
export const getStorybook = api.clientApi.getStorybook;
export const raw = api.clientApi.raw;
