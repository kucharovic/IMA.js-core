import ns from 'ima/namespace';
import MetaManagerInterface from 'ima/meta/metaManager';

ns.namespace('Ima.Meta');

/**
 * Default implementation of the {@codelink Ima.Meta.MetaManager}
 * interface.
 *
 * @class MetaManagerImpl
 * @implements Ima.Meta.MetaManager
 * @namespace Ima.Meta
 * @module Ima
 * @submodule Ima.Meta
 */
export default class MetaManagerImpl extends MetaManagerInterface {
	/**
	 * Initializes the meta page attributes manager.
	 *
	 * @method constructor
	 * @constructor
	 */
	constructor() {
		super();

		/**
		 * The page title.
		 *
		 * @property _title
		 * @private
		 * @type {string}
		 * @default ''
		 */
		this._title = '';

		/**
		 * Storage of generic meta information.
		 *
		 * @property _metaName
		 * @type {Map<string, string>}
		 */
		this._metaName = new Map();

		/**
		 * Storage of specialized meta information.
		 *
		 * @property _metaProperty
		 * @type {Map<string, string>}
		 */
		this._metaProperty = new Map();

		/**
		 * Storage of generic link information.
		 *
		 * @property _link
		 * @type {Map<string, string>}
		 */
		this._link = new Map();
	}

	/**
	 * @inheritdoc
	 * @method setTitle
	 */
	setTitle(title) {
		this._title = title;
	}

	/**
	 * @inheritdoc
	 * @method getTitle
	 */
	getTitle() {
		return this._title;
	}

	/**
	 * @inheritdoc
	 * @method setMetaName
	 */
	setMetaName(name, value) {
		this._metaName.set(name, value);
	}

	/**
	 * @inheritdoc
	 * @method getMetaName
	 */
	getMetaName(name) {
		return this._metaName.get(name) || '';
	}

	/**
	 * @inheritdoc
	 * @method getMetaNames
	 */
	getMetaNames() {
		return Array.from(this._metaName.keys());
	}

	/**
	 * @inheritdoc
	 * @method setMetaProperty
	 */
	setMetaProperty(name, value) {
		this._metaProperty.set(name, value);
	}

	/**
	 * @inheritdoc
	 * @method getMetaProperty
	 */
	getMetaProperty(name) {
		return this._metaProperty.get(name) || '';
	}

	/**
	 * @inheritdoc
	 * @method getMetaProperties
	 */
	getMetaProperties() {
		return Array.from(this._metaProperty.keys());
	}

	/**
	 * @inheritdoc
	 * @method setLink
	 */
	setLink(relation, value) {
		this._link.set(relation, value);
	}

	/**
	 * @inheritdoc
	 * @method getLink
	 */
	getLink(relation) {
		return this._link.get(relation) || '';
	}

	/**
	 * @inheritdoc
	 * @method getLinks
	 */
	getLinks() {
		return Array.from(this._link.keys());
	}
}

ns.Ima.Meta.MetaManagerImpl = MetaManagerImpl;