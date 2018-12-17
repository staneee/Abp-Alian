(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v6.1.10
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('6.1.10');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/account/account-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/account/account-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _tenant_register_tenant_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenant-register/tenant-register.component */ "./src/account/tenant-register/tenant-register.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/account/register/register.component.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.component */ "./src/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
                        children: [
                            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                            {
                                path: 'tenant-register',
                                component: _tenant_register_tenant_register_component__WEBPACK_IMPORTED_MODULE_0__["TenantRegisterComponent"],
                            },
                        ],
                    },
                ]),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/account/account.component.html":
/*!********************************************!*\
  !*** ./src/account/account.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"top\">\n    <div class=\"head\">\n      <a [routerLink]=\"['/']\">\n        <!-- <img class=\"logo\" src=\"/assets/images/logos/logo-color-shield.svg\"> -->\n        <img class=\"logo\" src=\"/assets/images/logos/logo-txt-color-shield.svg\">\n\n\n        <!-- <span class=\"title\">52ABP</span> -->\n      </a>\n    </div>\n    <p class=\"desc\">您现在使用的是免费开源版本；欢迎到\n      <a href=\"http://www.52abp.com/\" target=\"_blank\">52ABP.COM</a>了解更多的框架信息\n    </p>\n\n    <div *ngIf=\"showTenantChange()\">\n      <tenant-change></tenant-change>\n    </div>\n\n    <!-- <div>\n      <img class=\"logo\" src=\"/assets/images/52abp_logo.svg\">\n      <img class=\"logo\" src=\"/assets/images/52abp_txt.svg\">\n    </div> -->\n  </div>\n\n  <router-outlet></router-outlet>\n\n  <br>\n  <account-languages></account-languages>\n\n  <global-footer [links]=\"links\">\n    Copyright\n    <i class=\"anticon anticon-copyright\"></i> {{currentYear}}\n    <b>Version </b>{{versionText}}\n    <a href=\"http://www.52abp.com/\" target=\"_blank\">52ABP.COM</a>出品\n  </global-footer>\n\n</div>\n"

/***/ }),

/***/ "./src/account/account.component.less":
/*!********************************************!*\
  !*** ./src/account/account.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/account/account.component.ts":
/*!******************************************!*\
  !*** ./src/account/account.component.ts ***!
  \******************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function (_super) {
    __extends(AccountComponent, _super);
    function AccountComponent(injector, _loginService) {
        var _this = _super.call(this, injector) || this;
        _this._loginService = _loginService;
        _this.links = [
            {
                title: 'ABP',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
        _this.currentYear = new Date().getFullYear();
        _this.versionText =
            _this.appSession.application.version +
                ' [' +
                _this.appSession.application.releaseDate.format('YYYYDDMM') +
                ']';
        return _this;
    }
    AccountComponent.prototype.showTenantChange = function () {
        return abp.multiTenancy.isEnabled;
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.less */ "./src/account/account.component.less")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AccountComponent);
    return AccountComponent;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/account.module.ts":
/*!***************************************!*\
  !*** ./src/account/account.module.ts ***!
  \***************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routing.module */ "./src/account/account-routing.module.ts");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.component */ "./src/account/account.component.ts");
/* harmony import */ var _tenant_tenant_change_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tenant/tenant-change.component */ "./src/account/tenant/tenant-change.component.ts");
/* harmony import */ var _tenant_tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tenant/tenant-change-modal.component */ "./src/account/tenant/tenant-change-modal.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/account/register/register.component.ts");
/* harmony import */ var _layout_account_languages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/account-languages.component */ "./src/account/layout/account-languages.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _abp_abp_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @abp/abp.module */ "./node_modules/abp-ng2-module/dist/src/abp.module.js");
/* harmony import */ var _tenant_register_tenant_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tenant-register/tenant-register.component */ "./src/account/tenant-register/tenant-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_14__["NgZorroAntdModule"],
                _abp_abp_module__WEBPACK_IMPORTED_MODULE_15__["AbpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProxyModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
            ],
            declarations: [
                _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                _tenant_tenant_change_component__WEBPACK_IMPORTED_MODULE_8__["TenantChangeComponent"],
                _tenant_tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_9__["TenantChangeModalComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _layout_account_languages_component__WEBPACK_IMPORTED_MODULE_12__["AccountLanguagesComponent"],
                _tenant_register_tenant_register_component__WEBPACK_IMPORTED_MODULE_16__["TenantRegisterComponent"],
            ],
            entryComponents: [_tenant_tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_9__["TenantChangeModalComponent"]],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"]],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/account/layout/account-languages.component.html":
/*!*************************************************************!*\
  !*** ./src/account/layout/account-languages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"account-language-switch-list\">\n    <li *ngFor=\"let language of languages\">\n        <a *ngIf=\"language.name != currentLanguage.name\" href=\"javascript:void();\" title=\"{{language.displayName}}\" (click)=\"changeLanguage(language.name)\"><i class=\"{{language.icon}}\"></i></a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/account/layout/account-languages.component.less":
/*!*************************************************************!*\
  !*** ./src/account/layout/account-languages.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYWNjb3VudC9sYXlvdXQvYWNjb3VudC1sYW5ndWFnZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/account/layout/account-languages.component.ts":
/*!***********************************************************!*\
  !*** ./src/account/layout/account-languages.component.ts ***!
  \***********************************************************/
/*! exports provided: AccountLanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLanguagesComponent", function() { return AccountLanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountLanguagesComponent = /** @class */ (function (_super) {
    __extends(AccountLanguagesComponent, _super);
    function AccountLanguagesComponent(injector) {
        return _super.call(this, injector) || this;
    }
    AccountLanguagesComponent.prototype.ngOnInit = function () {
        this.languages = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.localization.languages, function (l) { return !l.isDisabled; });
        this.currentLanguage = this.localization.currentLanguage;
    };
    AccountLanguagesComponent.prototype.changeLanguage = function (languageName) {
        abp.utils.setCookieValue('Abp.Localization.CultureName', languageName, new Date(new Date().getTime() + 5 * 365 * 86400000), // 5 year
        abp.appPath);
        location.reload();
    };
    AccountLanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'account-languages',
            template: __webpack_require__(/*! ./account-languages.component.html */ "./src/account/layout/account-languages.component.html"),
            styles: [__webpack_require__(/*! ./account-languages.component.less */ "./src/account/layout/account-languages.component.less")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AccountLanguagesComponent);
    return AccountLanguagesComponent;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/login/login.component.html":
/*!************************************************!*\
  !*** ./src/account/login/login.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <nz-spin [nzTip]=\"l('LogIningWithThreeDot')\" [nzSpinning]=\"submitting\">\n    <nz-card [nzTitle]=\"nzTitle\" nzHoverable='true'>\n      <ng-template #nzTitle>\n        <div class=\"text-center\">\n          <i class=\"anticon anticon-login\"></i>\n          <span>{{l('LogIn')}}</span>\n        </div>\n      </ng-template>\n      <form nz-form #loginForm=\"ngForm\" role=\"form\" novalidate (ngSubmit)=\"login()\" method=\"post\" class=\"login-form\">\n        <br>\n        <!-- 账号 -->\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-user\">\n              <input nz-input name=\"userNameOrEmailAddress\" #userNameOrEmailAddressInput=\"ngModel\" [(ngModel)]=\"loginService.authenticateModel.userNameOrEmailAddress\"\n                [placeholder]=\"l('UserNameOrEmail')\" required maxlength=\"255\">\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 密码 -->\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-lock\">\n              <input nz-input name=\"password\" #passwordInput=\"ngModel\" [(ngModel)]=\"loginService.authenticateModel.password\"\n                [placeholder]=\"l('Password')\" type=\"password\" required maxlength=\"32\">\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 记住我 -->\n\n        <nz-form-item>\n          <nz-col [nzSpan]=\"12\">\n\n            <label nz-checkbox [(ngModel)]=\"loginService.rememberMe\" name=\"rememberMe\" id=\"rememberme\">\n              <span>{{l(\"RememberMe\")}}</span>\n            </label>\n\n          </nz-col>\n\n          <nz-col [nzSpan]=\"12\" class=\"text-right\">\n            <a routerLink=\"/account/forgot-password\" class=\"forgot forget-password\">{{l(\"ForgotPassword\")}}</a>\n\n          </nz-col>\n\n        </nz-form-item>\n\n        <!-- 登陆按钮 -->\n\n        <button nz-button [nzType]=\"'primary'\" [nzLoading]=\"submitting\" class=\"yoyo__block\" [disabled]=\"!loginForm.form.valid||submitting\">\n          <i class=\"anticon anticon-login\"></i>\n          <span>{{l(\"LogIn\")}}</span>\n        </button>\n\n      </form>\n      <!-- 注册 -->\n      <!-- <nz-form-item>\n        <nz-col [nzSpan]=\"12\">\n        </nz-col>\n        <nz-col [nzSpan]=\"12\" class=\"text-right\" *ngIf=\"isSelfRegistrationAllowed\">\n          <a [routerLink]=\"['../register']\">{{l(\"Register\")}}</a>\n        </nz-col>\n      </nz-form-item> -->\n\n      <div class=\"login-action-items\">\n        <div class=\"links\">\n          <!-- 用户注册 -->\n          <br>\n          <span *ngIf=\"isSelfRegistrationAllowed\">\n            <a routerLink=\"/account/register\">{{l(\"CreateAnAccount\")}}</a>\n            <nz-divider nzType=\"vertical\"></nz-divider>\n          </span>\n          <!-- 租户注册 -->\n          <span *ngIf=\"!appSession.tenantId\">\n            <a routerLink=\"/account/tenant-register\">{{l(\"TenantRegister\")}}</a>\n            <nz-divider nzType=\"vertical\"></nz-divider>\n          </span>\n\n          <!-- //todo: 等待有缘人帮我们完善吧 -->\n          <!-- <span>\n            <a routerLink=\"/account/email-activation\">{{l(\"EmailActivation\")}}</a>\n          </span> -->\n        </div>\n      </div>\n\n\n    </nz-card>\n  </nz-spin>\n</div>"

/***/ }),

/***/ "./src/account/login/login.component.less":
/*!************************************************!*\
  !*** ./src/account/login/login.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/account/login/login.component.ts":
/*!**********************************************!*\
  !*** ./src/account/login/login.component.ts ***!
  \**********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
/* harmony import */ var _abp_session_abp_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abp/session/abp-session.service */ "./node_modules/abp-ng2-module/dist/src/session/abp-session.service.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(injector, fb, loginService, _sessionService, _sessionAppService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.fb = fb;
        _this.loginService = loginService;
        _this._sessionService = _sessionService;
        _this._sessionAppService = _sessionAppService;
        _this._router = _router;
        _this.submitting = false;
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "multiTenancySideIsTeanant", {
        get: function () {
            return this.appSession.tenantId > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "isSelfRegistrationAllowed", {
        get: function () {
            if (!this.appSession.tenantId) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitting = true;
        this.loginService.authenticate(function () {
            _this.submitting = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/account/login/login.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["appModuleAnimation"])()],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _abp_session_abp_session_service__WEBPACK_IMPORTED_MODULE_6__["AbpSessionService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__["SessionServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_5__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/login/login.service.ts":
/*!********************************************!*\
  !*** ./src/account/login/login.service.ts ***!
  \********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/helpers/UrlHelper */ "./src/shared/helpers/UrlHelper.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _abp_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/message/message.service */ "./node_modules/abp-ng2-module/dist/src/message/message.service.js");
/* harmony import */ var _abp_log_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abp/log/log.service */ "./node_modules/abp-ng2-module/dist/src/log/log.service.js");
/* harmony import */ var _abp_auth_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/auth/token.service */ "./node_modules/abp-ng2-module/dist/src/auth/token.service.js");
/* harmony import */ var _abp_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/utils/utils.service */ "./node_modules/abp-ng2-module/dist/src/utils/utils.service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginService = /** @class */ (function () {
    function LoginService(_tokenAuthService, _router, _utilsService, _messageService, _tokenService, _logService) {
        this._tokenAuthService = _tokenAuthService;
        this._router = _router;
        this._utilsService = _utilsService;
        this._messageService = _messageService;
        this._tokenService = _tokenService;
        this._logService = _logService;
        this.clear();
    }
    LoginService.prototype.authenticate = function (finallyCallback) {
        var _this = this;
        finallyCallback = finallyCallback || (function () { });
        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(finallyCallback))
            .subscribe(function (result) {
            _this.processAuthenticateResult(result);
        });
    };
    LoginService.prototype.processAuthenticateResult = function (authenticateResult) {
        this.authenticateResult = authenticateResult;
        if (authenticateResult.accessToken) {
            // Successfully logged in
            // tslint:disable-next-line:max-line-length
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe);
        }
        else {
            // Unexpected result!
            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['account/login']);
        }
    };
    LoginService.prototype.login = function (accessToken, encryptedAccessToken, expireInSeconds, rememberMe) {
        var tokenExpireDate = rememberMe
            ? new Date(new Date().getTime() + 1000 * expireInSeconds)
            : undefined;
        this._tokenService.setToken(accessToken, tokenExpireDate);
        this._utilsService.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].authorization.encrptedAuthTokenName, encryptedAccessToken, tokenExpireDate, abp.appPath);
        var initialUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_3__["UrlHelper"].initialUrl;
        if (initialUrl.indexOf('/login') > 0) {
            initialUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].appBaseUrl;
        }
        location.href = initialUrl;
    };
    LoginService.prototype.clear = function () {
        this.authenticateModel = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["AuthenticateModel"]();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    };
    LoginService.twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["TokenAuthServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _abp_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            _abp_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _abp_auth_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
            _abp_log_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/account/register/register.component.html":
/*!******************************************************!*\
  !*** ./src/account/register/register.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <nz-spin [nzTip]=\"l('Registering')\" [nzSpinning]=\"saving\">\n    <nz-card [nzTitle]=\"nzTitle\" nzHoverable='true'>\n      <ng-template #nzTitle>\n        <div class=\"text-center\">\n          <i class=\"anticon anticon-login\"></i>\n          <span>{{l('Register')}}</span>\n        </div>\n      </ng-template>\n      <form nz-form #validateForm=\"ngForm\" (ngSubmit)=\"save()\">\n\n        <br>\n\n        <!-- 名 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-user\">\n              <input nz-input name=\"name\" #name='ngModel' [(ngModel)]=\"model.name\" [placeholder]=\"l('Name')\" required>\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"name.control.dirty&&name.control.errors\">\n              <ng-container *ngIf=\"name.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 姓 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-user\">\n              <input nz-input name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"model.surname\" [placeholder]=\"l('Surname')\"\n                required>\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"surname.control.dirty&&surname.control.errors\">\n              <ng-container *ngIf=\"surname.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n\n        <!-- 邮箱 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-mail\">\n              <input nz-input type=\"email\" name=\"emailAddress\" #emailAddress=\"ngModel\" [(ngModel)]=\"model.emailAddress\"\n                [placeholder]=\"l('EmailAddress')\" required email>\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"emailAddress.control.dirty&&emailAddress.control.errors\">\n              <ng-container *ngIf=\"emailAddress.control.hasError('email')\">{{l('NotEmail')}}</ng-container>\n              <ng-container *ngIf=\"emailAddress.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n\n        <!-- 用户账号 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-user\">\n              <input nz-input name=\"userName\" #userName=\"ngModel\" [(ngModel)]=\"model.userName\" [placeholder]=\"l('UserName')\"\n                required maxlength=\"32\">\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"userName.control.dirty&&userName.control.errors\">\n              <ng-container *ngIf=\"userName.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 密码 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-lock\">\n              <input nz-input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" type=\"password\"\n                [placeholder]=\"l('Password')\" required maxlength=\"32\" minlength=\"6\">\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"password.control.dirty&&password.control.errors\">\n              <ng-container *ngIf=\"password.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n              <ng-container *ngIf=\"password.control.hasError('minlength')\">{{l('MinLength')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 功能按钮 -->\n        <nz-form-item>\n          <nz-col [nzSpan]=\"12\">\n            <button (click)=\"back()\" type=\"button\" nz-button [disabled]=\"saving\">{{l(\"Back\")}}</button>\n          </nz-col>\n          <nz-col [nzSpan]=\"12\" class=\"text-right\">\n            <button nz-button nzType=\"primary\" type=\"submit\" [disabled]=\"!validateForm.valid||saving\">{{l(\"Submit\")}}</button>\n          </nz-col>\n        </nz-form-item>\n\n      </form>\n\n    </nz-card>\n  </nz-spin>\n</div>"

/***/ }),

/***/ "./src/account/register/register.component.less":
/*!******************************************************!*\
  !*** ./src/account/register/register.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/account/register/register.component.ts":
/*!****************************************************!*\
  !*** ./src/account/register/register.component.ts ***!
  \****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(injector, _accountService, _router, _loginService) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this._router = _router;
        _this._loginService = _loginService;
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (!this.appSession.tenant) {
            this.back();
            return;
        }
        this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RegisterInput"]();
    };
    RegisterComponent.prototype.back = function () {
        this._router.navigate(['/account/login']);
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this._accountService
            .register(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
            _this.saving = false;
        }))
            .subscribe(function (result) {
            if (!result.canLogin) {
                _this.notify.success(_this.l('SuccessfullyRegistered'));
                _this._router.navigate(['/login']);
                return;
            }
            _this.saving = true;
            // Autheticate
            _this._loginService.authenticateModel.userNameOrEmailAddress = _this.model.userName;
            _this._loginService.authenticateModel.password = _this.model.password;
            _this._loginService.authenticate(function () {
                _this.saving = false;
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/account/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/account/register/register.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["appModuleAnimation"])()],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], RegisterComponent);
    return RegisterComponent;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_6__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/tenant-register/tenant-register.component.html":
/*!********************************************************************!*\
  !*** ./src/account/tenant-register/tenant-register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <nz-spin [nzTip]=\"l('Registering')\" [nzSpinning]=\"saving\">\n    <nz-card [nzTitle]=\"nzTitle\" nzHoverable='true'>\n      <ng-template #nzTitle>\n        <div class=\"text-center\">\n          <i class=\"anticon anticon-login\"></i>\n          <span>{{l('TenantRegister')}}</span>\n        </div>\n      </ng-template>\n\n      <form nz-form #validateForm=\"ngForm\" (ngSubmit)=\"save()\" role=\"form\" novalidate method=\"post\">\n\n        <br>\n\n        <!-- 租户名称 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-cloud\">\n              <input nz-input type=\"text\" name=\"tenancyName\" #tenancyName=\"ngModel\" [(ngModel)]=\"model.tenancyName\"\n                [placeholder]=\"l('TenancyName')\" required>\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"tenancyName.control.dirty&&tenancyName.control.errors\">\n              <ng-container *ngIf=\"tenancyName.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n\n        <!-- 管理员账号 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-user\">\n              <input nz-input name=\"name\" #name=\"ngModel\" [(ngModel)]=\"model.name\" [placeholder]=\"l('UserName')\"\n                required maxlength=\"32\">\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"name.control.dirty&&name.control.errors\">\n              <ng-container *ngIf=\"name.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 管理员邮箱 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-mail\">\n              <input nz-input type=\"email\" name=\"adminEmailAddress\" #adminEmailAddress=\"ngModel\" [(ngModel)]=\"model.adminEmailAddress\"\n                [placeholder]=\"l('AdminEmailAddress')\" required email>\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"adminEmailAddress.control.dirty&&adminEmailAddress.control.errors\">\n              <ng-container *ngIf=\"adminEmailAddress.control.hasError('email')\">{{l('NotEmail')}}</ng-container>\n              <ng-container *ngIf=\"adminEmailAddress.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 管理员密码 -->\n        <nz-form-item>\n          <nz-form-control nzHasFeedback>\n            <nz-input-group nzPrefixIcon=\"anticon anticon-lock\">\n              <input nz-input type=\"password\" name=\"tenantAdminPassword\" #tenantAdminPassword=\"ngModel\" [(ngModel)]=\"model.tenantAdminPassword\"\n                [placeholder]=\"l('Password')\" required maxlength=\"32\" minlength=\"6\">\n            </nz-input-group>\n            <nz-form-explain *ngIf=\"tenantAdminPassword.control.dirty&&tenantAdminPassword.control.errors\">\n              <ng-container *ngIf=\"tenantAdminPassword.control.hasError('required')\">{{l('CanNotNull')}}</ng-container>\n              <ng-container *ngIf=\"tenantAdminPassword.control.hasError('minlength')\">{{l('MinLength')}}</ng-container>\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- 功能按钮 -->\n        <button nz-button [nzType]=\"'primary'\" [nzLoading]=\"saving\" class=\"yoyo__block\" type=\"submit\" [disabled]=\"!validateForm.valid||saving\">\n          <i class=\"anticon anticon-login\"></i>\n          <span>{{l(\"Register\")}}</span>\n        </button>\n      </form>\n\n      <nz-form-item>\n        <nz-col [nzSpan]=\"12\">\n        </nz-col>\n        <nz-col [nzSpan]=\"12\" class=\"text-right\">\n          <a (click)=\"back()\">{{l(\"Back\")}}</a>\n        </nz-col>\n      </nz-form-item>\n\n      <p class=\"register-protocal\" style=\"margin-top: 24px;\">点击“注册”，即代表你同意<a href=\"/\" target=\"_blank\">《服务协议》</a></p>\n    </nz-card>\n  </nz-spin>\n</div>"

/***/ }),

/***/ "./src/account/tenant-register/tenant-register.component.less":
/*!********************************************************************!*\
  !*** ./src/account/tenant-register/tenant-register.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYWNjb3VudC90ZW5hbnQtcmVnaXN0ZXIvdGVuYW50LXJlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/account/tenant-register/tenant-register.component.ts":
/*!******************************************************************!*\
  !*** ./src/account/tenant-register/tenant-register.component.ts ***!
  \******************************************************************/
/*! exports provided: TenantRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantRegisterComponent", function() { return TenantRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var account_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! account/login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TenantRegisterComponent = /** @class */ (function (_super) {
    __extends(TenantRegisterComponent, _super);
    function TenantRegisterComponent(injector, _router, _loginService, _tenantRegisterService) {
        var _this = _super.call(this, injector) || this;
        _this._router = _router;
        _this._loginService = _loginService;
        _this._tenantRegisterService = _tenantRegisterService;
        _this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["CreateTenantDto"]();
        return _this;
    }
    TenantRegisterComponent.prototype.ngOnInit = function () { };
    TenantRegisterComponent.prototype.back = function () {
        this._router.navigate(['/account/login']);
    };
    TenantRegisterComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this._tenantRegisterService
            .registerTenantAsync(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.saving = false;
        }))
            .subscribe(function (result) {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.saving = true;
            abp.multiTenancy.setTenantIdCookie(result.id);
            _this._loginService.authenticateModel.userNameOrEmailAddress = _this.model.adminEmailAddress;
            _this._loginService.authenticateModel.password = _this.model.tenantAdminPassword;
            _this._loginService.authenticate(function () {
                _this.saving = false;
            });
        });
    };
    TenantRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenant-register',
            template: __webpack_require__(/*! ./tenant-register.component.html */ "./src/account/tenant-register/tenant-register.component.html"),
            styles: [__webpack_require__(/*! ./tenant-register.component.less */ "./src/account/tenant-register/tenant-register.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_5__["appModuleAnimation"])()],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            account_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantRegistrationServiceProxy"]])
    ], TenantRegisterComponent);
    return TenantRegisterComponent;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/tenant/tenant-change-modal.component.html":
/*!***************************************************************!*\
  !*** ./src/account/tenant/tenant-change-modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form #changeTenantForm=\"ngForm\" (ngSubmit)=\"save()\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\">\n      <i class=\"anticon anticon-home\"></i> {{l(\"ChangeTenant\")}}\n    </div>\n  </div>\n\n\n  <fieldset>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"4\" nzFor=\"TenancyName\">\n        {{l(\"TenancyName\")}}\n      </nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"20\">\n        <nz-input-group nzPrefixIcon=\"anticon anticon-home\">\n          <input nz-input name=\"TenancyName\" [(ngModel)]=\"tenancyName\" type=\"text\" [placeholder]=\"l('TenancyName')\" />\n        </nz-input-group>\n        <span class=\"text-sm text-grey\">{{l(\"LeaveEmptyToSwitchToHost\")}}</span>\n\n      </nz-form-control>\n    </nz-form-item>\n  </fieldset>\n\n  <div class=\"modal-footer\">\n    <button nz-button [nzType]=\"'default'\" type=\"button\" (click)=\"close()\" [disabled]=\"saving\">\n      <i class=\"anticon anticon-close-circle-o\"></i> {{l(\"Cancel\")}}\n    </button>\n    <button nz-button [nzType]=\"'primary'\" type=\"submit\" [disabled]=\"!changeTenantForm.form.valid\" [disabled]=\"saving\"\n      [nzLoading]=\"saving\">\n      <i class=\"anticon anticon-save\"></i> {{l(\"Save\")}}\n    </button>\n  </div>\n\n\n\n</form>"

/***/ }),

/***/ "./src/account/tenant/tenant-change-modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/account/tenant/tenant-change-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: TenantChangeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantChangeModalComponent", function() { return TenantChangeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_component_base_modal_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/component-base/modal-component-base */ "./src/shared/component-base/modal-component-base.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TenantChangeModalComponent = /** @class */ (function (_super) {
    __extends(TenantChangeModalComponent, _super);
    function TenantChangeModalComponent(injector, _accountService) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this.tenancyName = '';
        _this.beforeTenancyName = '';
        _this.saving = false;
        return _this;
    }
    TenantChangeModalComponent.prototype.ngOnInit = function () {
        this.beforeTenancyName = this.tenancyName;
    };
    TenantChangeModalComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        if (this.tenancyName === this.beforeTenancyName) {
            this.close();
            return;
        }
        if (!this.tenancyName || this.tenancyName === '') {
            abp.multiTenancy.setTenantIdCookie(undefined);
            this.close();
            location.reload();
            return;
        }
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["IsTenantAvailableInput"]();
        input.tenancyName = this.tenancyName;
        this._accountService
            .isTenantAvailable(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.saving = false;
        }))
            .subscribe(function (result) {
            switch (result.state) {
                case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["AppTenantAvailabilityState"].Available:
                    abp.multiTenancy.setTenantIdCookie(result.tenantId);
                    _this.success();
                    location.reload();
                    return;
                case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["AppTenantAvailabilityState"].InActive:
                    _this.message.warn(_this.l('TenantIsNotActive', _this.tenancyName));
                    break;
                case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["AppTenantAvailabilityState"].NotFound: // NotFound
                    _this.message.warn(_this.l('ThereIsNoTenantDefinedWithName{0}', _this.tenancyName));
                    break;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TenantChangeModalComponent.prototype, "tenancyName", void 0);
    TenantChangeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenant-change-modal',
            template: __webpack_require__(/*! ./tenant-change-modal.component.html */ "./src/account/tenant/tenant-change-modal.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["AccountServiceProxy"]])
    ], TenantChangeModalComponent);
    return TenantChangeModalComponent;
}(_shared_component_base_modal_component_base__WEBPACK_IMPORTED_MODULE_3__["ModalComponentBase"]));



/***/ }),

/***/ "./src/account/tenant/tenant-change.component.html":
/*!*********************************************************!*\
  !*** ./src/account/tenant/tenant-change.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isMultiTenancyEnabled\" class=\"card tenant-change-component\" style=\"margin-bottom: 3px;\">\n  <div class=\"body text-center\">\n    <span>\n      {{l(\"CurrentTenant\")}}:\n      <span *ngIf=\"tenancyName\" title=\"{{name}}\">\n        <strong>{{tenancyName}}</strong>\n      </span>\n      <span *ngIf=\"!tenancyName\">{{l(\"NotSelected\")}}</span>\n      (\n      <a href=\"javascript:void();\" (click)=\"showChangeModal()\">{{l(\"Change\")}}</a>)\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/account/tenant/tenant-change.component.ts":
/*!*******************************************************!*\
  !*** ./src/account/tenant/tenant-change.component.ts ***!
  \*******************************************************/
/*! exports provided: TenantChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantChangeComponent", function() { return TenantChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
/* harmony import */ var _tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tenant-change-modal.component */ "./src/account/tenant/tenant-change-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantChangeComponent = /** @class */ (function (_super) {
    __extends(TenantChangeComponent, _super);
    function TenantChangeComponent(injector) {
        return _super.call(this, injector) || this;
    }
    TenantChangeComponent.prototype.ngOnInit = function () {
        if (this.appSession.tenant) {
            this.tenancyName = this.appSession.tenant.tenancyName;
            this.name = this.appSession.tenant.name;
        }
    };
    Object.defineProperty(TenantChangeComponent.prototype, "isMultiTenancyEnabled", {
        get: function () {
            return abp.multiTenancy.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    TenantChangeComponent.prototype.showChangeModal = function () {
        this.modalHelper
            .open(_tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_2__["TenantChangeModalComponent"], { tenancyName: this.tenancyName }, 'md', {
            nzMask: true,
        })
            .subscribe(function () { });
    };
    TenantChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tenant-change',
            template: __webpack_require__(/*! ./tenant-change.component.html */ "./src/account/tenant/tenant-change.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TenantChangeComponent);
    return TenantChangeComponent;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/shared/AppEnums.ts":
/*!********************************!*\
  !*** ./src/shared/AppEnums.ts ***!
  \********************************/
/*! exports provided: AppTenantAvailabilityState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTenantAvailabilityState", function() { return AppTenantAvailabilityState; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");

var AppTenantAvailabilityState = /** @class */ (function () {
    function AppTenantAvailabilityState() {
    }
    AppTenantAvailabilityState.Available = _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["IsTenantAvailableOutputState"]._1;
    AppTenantAvailabilityState.InActive = _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["IsTenantAvailableOutputState"]._2;
    AppTenantAvailabilityState.NotFound = _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["IsTenantAvailableOutputState"]._3;
    return AppTenantAvailabilityState;
}());



/***/ }),

/***/ "./src/shared/animations/routerTransition.ts":
/*!***************************************************!*\
  !*** ./src/shared/animations/routerTransition.ts ***!
  \***************************************************/
/*! exports provided: appModuleAnimation, accountModuleAnimation, slideFromBottom, slideFromUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appModuleAnimation", function() { return appModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountModuleAnimation", function() { return accountModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromUp", function() { return slideFromUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function appModuleAnimation() {
    return slideFromBottom();
}
function accountModuleAnimation() {
    return slideFromUp();
}
function slideFromBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '20px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.33s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'padding-top': '0px' }))
        ])
    ]);
}
function slideFromUp() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '-10px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'margin-top': '0px' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/shared/component-base/app-component-base.ts":
/*!*********************************************************!*\
  !*** ./src/shared/component-base/app-component-base.ts ***!
  \*********************************************************/
/*! exports provided: AppComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentBase", function() { return AppComponentBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/session/app-session.service */ "./src/shared/session/app-session.service.ts");
/* harmony import */ var _abp_localization_localization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/localization/localization.service */ "./node_modules/abp-ng2-module/dist/src/localization/localization.service.js");
/* harmony import */ var _abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/auth/permission-checker.service */ "./node_modules/abp-ng2-module/dist/src/auth/permission-checker.service.js");
/* harmony import */ var _abp_features_feature_checker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/features/feature-checker.service */ "./node_modules/abp-ng2-module/dist/src/features/feature-checker.service.js");
/* harmony import */ var _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abp/notify/notify.service */ "./node_modules/abp-ng2-module/dist/src/notify/notify.service.js");
/* harmony import */ var _abp_settings_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/settings/setting.service */ "./node_modules/abp-ng2-module/dist/src/settings/setting.service.js");
/* harmony import */ var _abp_message_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/message/message.service */ "./node_modules/abp-ng2-module/dist/src/message/message.service.js");
/* harmony import */ var _abp_multi_tenancy_abp_multi_tenancy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @abp/multi-tenancy/abp-multi-tenancy.service */ "./node_modules/abp-ng2-module/dist/src/multi-tenancy/abp-multi-tenancy.service.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");











var AppComponentBase = /** @class */ (function () {
    function AppComponentBase(injector) {
        this.localizationSourceName = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].localization.defaultLocalizationSourceName;
        /**
         * 保存状态
         */
        this.saving = false;
        this.localization = injector.get(_abp_localization_localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]);
        this.permission = injector.get(_abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_4__["PermissionCheckerService"]);
        this.feature = injector.get(_abp_features_feature_checker_service__WEBPACK_IMPORTED_MODULE_5__["FeatureCheckerService"]);
        this.notify = injector.get(_abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"]);
        this.setting = injector.get(_abp_settings_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]);
        this.message = injector.get(_abp_message_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]);
        this.multiTenancy = injector.get(_abp_multi_tenancy_abp_multi_tenancy_service__WEBPACK_IMPORTED_MODULE_9__["AbpMultiTenancyService"]);
        this.appSession = injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]);
        this.elementRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        this.modalHelper = injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_10__["ModalHelper"]);
    }
    AppComponentBase.prototype.l = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var localizedText = this.localization.localize(key, this.localizationSourceName);
        if (!localizedText) {
            localizedText = key;
        }
        if (!args || !args.length) {
            return localizedText;
        }
        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    };
    AppComponentBase.prototype.isGranted = function (permissionName) {
        return this.permission.isGranted(permissionName);
    };
    return AppComponentBase;
}());



/***/ }),

/***/ "./src/shared/component-base/modal-component-base.ts":
/*!***********************************************************!*\
  !*** ./src/shared/component-base/modal-component-base.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponentBase", function() { return ModalComponentBase; });
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/component-base/app-component-base */ "./src/shared/component-base/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *
 *基于模态框弹出 Form表单提交的基类信息
 */
var ModalComponentBase = /** @class */ (function (_super) {
    __extends(ModalComponentBase, _super);
    /**
     * 构造函数
     * @param injector 注入器
     * @param _nzModalRef nzModal 模态框关闭、销毁等处理帮助，只能在modal中打开的组件中注入，非modal打开的组件注入null即可，否则报错。因为nzModalRef是建立在nzModalComponent之上的。
     */
    function ModalComponentBase(injector) {
        var _this = _super.call(this, injector) || this;
        _this.title = '';
        _this.nzModalRef = injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_0__["NzModalRef"]);
        return _this;
    }
    /**
     * 带参数回传关闭
     * @param result 回传参数
     */
    ModalComponentBase.prototype.success = function (result) {
        if (result === void 0) { result = true; }
        if (result) {
            this.nzModalRef.close(result);
        }
        else {
            this.close();
        }
    };
    ModalComponentBase.prototype.close = function ($event) {
        this.nzModalRef.close();
    };
    return ModalComponentBase;
}(_shared_component_base_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/shared/helpers/UrlHelper.ts":
/*!*****************************************!*\
  !*** ./src/shared/helpers/UrlHelper.ts ***!
  \*****************************************/
/*! exports provided: UrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHelper", function() { return UrlHelper; });
var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    UrlHelper.getQueryParameters = function () {
        return document.location.search
            .replace(/(^\?)/, '')
            .split('&')
            .map(function (n) {
            return (n = n.split('=')), (this[n[0]] = n[1]), this;
        }.bind({}))[0];
    };
    /**
     * The URL requested, before initial routing.
     */
    UrlHelper.initialUrl = location.href;
    return UrlHelper;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map