import ns from 'ima/namespace';

ns.namespace('Ima.Interface');

/**
 * The page renderer is a utility for rendering the page at either the
 * client-side or the server-side, handling the differences in the environment.
 *
 * @interface PageRender
 * @namespace Ima.Interface
 * @module Ima
 * @submodule Ima.Interface
 */
export default class PageRender {
	/**
	 * Renders the page using the provided controller and view. The actual
	 * behavior of this method differs at the client-side and the at
	 * server-side in the following way:
	 *
	 * At the server, the method first waits for all the resources to load, and
	 * then renders the page to a string containing HTML markup to send to the
	 * client.
	 *
	 * At the client, the method uses the already available resources to render
	 * the page into DOM, re-using the DOM created from the HTML markup send by
	 * the server if possible. After this the method will re-render the page
	 * every time another resource being loaded finishes its loading and
	 * becomes available.
	 *
	 * Note that the method renders the page at the client-side only after all
	 * resources have been loaded if this is the first time this method is
	 * invoked at the client.
	 *
	 * @method mount
	 * @param {Ima.Controller.Controller} controller The current page
	 *        controller.
	 * @param {React.Component} view The page's view.
	 * @param {Object<string, (*|Promise<*>)>} pageResources The resources for
	 *        the view loaded by the controller.
	 * @return {Promise<{status: number, content: ?string}>} A promise that
	 *         will resolve to information about the rendered page. The
	 *         {@code status} will contain the HTTP status code to send to the
	 *         client (at the server side) or determine the type of error page
	 *         to navigate to (at the client side).
	 *         The {@code content} field will contain the rendered markup of
	 *         the page at the server-side, or {@code null} at the client-side.
	 */
	mount(controller, view, pageResources) {}

	/**
	 * Handles update of the current route that does not replace the current
	 * controller and view.
	 *
	 * The method will use the already available resource to update the
	 * controller's state and the view immediately. After that, the method will
	 * update the controller's state and view with every resource that becomes
	 * resolved.
	 *
	 * @method update
	 * @param {Ima.Controller.Controller} controller The current page
	 *        controller.
	 * @param {Object<string, (*|Promise<*>)>} resourcesUpdate The resources
	 *        that represent the update the of current state according to the
	 *        current route and its parameters.
	 * @return {Promise<undefined>} A promise that will resolve when all
	 *         resources have been loaded and the page controller's and view's
	 *         state have been updated.
	 */
	update(controller, resourcesUpdate) {}

	/**
	 * Unmounts the current view from the DOM.
	 *
	 * This method has no effect at the server-side.
	 *
	 * @method unmount
	 */
	unmount() {}

	/**
	 * Sets the provided state to the currently rendered view.
	 *
	 * This method has no effect at the server-side.
	 *
	 * @method setState
	 * @param {Object<string, *>=} [state={}] The state to set to the currently
	 *        rendered view.
	 */
	setState(state = {}) {}
}

ns.Ima.Interface.PageRender = PageRender;