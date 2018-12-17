(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var list = [];
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    var ret = list.slice();
    var pi = +params.pi, ps = +params.ps, start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    var item = list.find(function (w) { return w.id === id; });
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
var USERS = {
    '/user': function (req) { return genData(req.queryString); },
    '/user/:id': function (req) { return list.find(function (w) { return w.id === +req.params.id; }); },
    'POST /user/:id': function (req) { return saveData(+req.params.id, req.body); },
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': function (req) {
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') ||
            data.password !== 'ng-alain.com') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["USERS"]; });




/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"account/account.module": [
		"./src/account/account.module.ts",
		"account-account-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/AppPreBootstrap.ts":
/*!********************************!*\
  !*** ./src/AppPreBootstrap.ts ***!
  \********************************/
/*! exports provided: AppPreBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPreBootstrap", function() { return AppPreBootstrap; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var AppPreBootstrap = /** @class */ (function () {
    function AppPreBootstrap() {
    }
    AppPreBootstrap.run = function (injector, callback) {
        var httpClient = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]);
        console.log("由52ABP模板构建,详情请访问 https://www.52abp.com");
        AppPreBootstrap.getApplicationConfig(httpClient, function () {
            AppPreBootstrap.getUserConfiguration(httpClient, callback);
        });
    };
    AppPreBootstrap.bootstrap = function (moduleType, compilerOptions) {
        return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(moduleType, compilerOptions);
    };
    AppPreBootstrap.getApplicationConfig = function (httpClient, callback) {
        var envName = '';
        if (_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            envName = 'prod';
        }
        else {
            envName = 'dev';
        }
        var url = '/assets/appconfig.' + envName + '.json';
        httpClient.get(url, {
            headers: {
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie() + '',
            }
        }).subscribe(function (result) {
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].appBaseUrl = window.location.protocol + '//' + window.location.host;
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl = result.remoteServiceBaseUrl;
            callback();
        });
    };
    AppPreBootstrap.getCurrentClockProvider = function (currentProviderName) {
        if (currentProviderName === 'unspecifiedClockProvider') {
            return abp.timing.unspecifiedClockProvider;
        }
        if (currentProviderName === 'utcClockProvider') {
            return abp.timing.utcClockProvider;
        }
        return abp.timing.localClockProvider;
    };
    AppPreBootstrap.getUserConfiguration = function (httpClient, callback) {
        var _this = this;
        var url = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl + '/AbpUserConfiguration/GetAll';
        var token = abp.auth.getToken() || '';
        httpClient.get(url, {
            headers: {
                "Authorization": "Bearer " + token,
                '.AspNetCore.Culture': abp.utils.getCookieValue('Abp.Localization.CultureName'),
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie() + '',
            }
        }).subscribe(function (result) {
            debugger;
            lodash__WEBPACK_IMPORTED_MODULE_7__["merge"](abp, result);
            abp.clock.provider = _this.getCurrentClockProvider(result.clock.provider);
            moment__WEBPACK_IMPORTED_MODULE_0__["locale"](abp.localization.currentLanguage.name);
            window.moment.locale(abp.localization.currentLanguage.name);
            if (abp.clock.provider.supportsMultipleTimezone) {
                moment__WEBPACK_IMPORTED_MODULE_0__["tz"].setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
                window.moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }
            // 注册语言,NG-Zorro的DataPicker要使用
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a);
            callback();
        });
    };
    return AppPreBootstrap;
}());



/***/ }),

/***/ "./src/delon.module.ts":
/*!*****************************!*\
  !*** ./src/delon.module.ts ***!
  \*****************************/
/*! exports provided: fnPageHeaderConfig, fnSTConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return fnPageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return fnSTConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/module-import-guard */ "./src/shared/module-import-guard.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm5/chart.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/cache */ "./node_modules/@delon/cache/fesm5/cache.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm5/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_mock */ "./_mock/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_abc_reuse_tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @delon/abc/reuse-tab */ "./node_modules/@delon/abc/fesm5/reuseTab.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */








// #region mock



var MOCK_MODULES = !_env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
    ? [_delon_mock__WEBPACK_IMPORTED_MODULE_8__["DelonMockModule"].forRoot({ data: _mock__WEBPACK_IMPORTED_MODULE_9__ })]
    : [];
// #endregion
// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、增加 `REUSETAB_PROVIDES`
 * 2、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab></reuse-tab>
 *    <router-outlet></router-outlet>
 *  </section>
 *  ```
 */


var REUSETAB_PROVIDES = [
    {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"],
        useClass: _delon_abc_reuse_tab__WEBPACK_IMPORTED_MODULE_12__["ReuseTabStrategy"],
        deps: [_delon_abc_reuse_tab__WEBPACK_IMPORTED_MODULE_12__["ReuseTabService"]],
    },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_3__["PageHeaderConfig"](), { homeI18n: 'home' });
}
function fnSTConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STConfig"](), {
        modal: { size: 'lg' },
    });
}
var GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
];
// #endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(_shared_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    DelonModule_1 = DelonModule;
    DelonModule.forRoot = function () {
        return {
            ngModule: DelonModule_1,
            providers: REUSETAB_PROVIDES.concat(GLOBAL_CONFIG_PROVIDES),
        };
    };
    var DelonModule_1;
    DelonModule = DelonModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _delon_theme__WEBPACK_IMPORTED_MODULE_2__["AlainThemeModule"].forRoot(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_3__["DelonABCModule"].forRoot(),
                _delon_chart__WEBPACK_IMPORTED_MODULE_4__["DelonChartModule"].forRoot(),
                _delon_acl__WEBPACK_IMPORTED_MODULE_5__["DelonACLModule"].forRoot(),
                _delon_cache__WEBPACK_IMPORTED_MODULE_6__["DelonCacheModule"].forRoot(),
                _delon_util__WEBPACK_IMPORTED_MODULE_7__["DelonUtilModule"].forRoot(),
            ],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    SERVER_URL: "./",
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], null);
        if (modalService)
            modalService.closeAll();
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");
/* harmony import */ var root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! root.module */ "./src/root.module.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");






Object(_delon_theme__WEBPACK_IMPORTED_MODULE_5__["preloaderFinished"])();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(root_module__WEBPACK_IMPORTED_MODULE_4__["RootModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    }).then(function (res) {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "./src/root-routing.module.ts":
/*!************************************!*\
  !*** ./src/root-routing.module.ts ***!
  \************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: 'account/account.module#AccountModule',
        data: { preload: true },
    },
    {
        path: '**',
        redirectTo: 'account',
    },
];
var RootRoutingModule = /** @class */ (function () {
    function RootRoutingModule() {
    }
    RootRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [],
        })
    ], RootRoutingModule);
    return RootRoutingModule;
}());



/***/ }),

/***/ "./src/root.component.ts":
/*!*******************************!*\
  !*** ./src/root.component.ts ***!
  \*******************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = /** @class */ (function () {
    function RootComponent(_modalService, _messageService, _notifyService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
        this._notifyService = _notifyService;
    }
    RootComponent.prototype.ngOnInit = function () {
        // // 覆盖abp自带的通知和mssage
        // AppConsts.overrideAbpMessageByMini(
        //   this._messageService,
        //   this._modalService,
        // );
        // //  覆盖abp.message替换为ng-zorro的全局message
        // //  AppConsts.overrideAbpMessageByNgModal(this._modalService); /// 覆盖abp.message替换为ng-zorro的模态框
        // AppConsts.overrideAbpNotify(this._notifyService);
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzNotificationService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/root.module.ts":
/*!****************************!*\
  !*** ./src/root.module.ts ***!
  \****************************/
/*! exports provided: appInitializerFactory, getRemoteServiceBaseUrl, getCurrentLanguage, getBaseHref, RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitializerFactory", function() { return appInitializerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRemoteServiceBaseUrl", function() { return getRemoteServiceBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function() { return getCurrentLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseHref", function() { return getBaseHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! root.component */ "./src/root.component.ts");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/session/app-session.service */ "./src/shared/session/app-session.service.ts");
/* harmony import */ var AppPreBootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! AppPreBootstrap */ "./src/AppPreBootstrap.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var root_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! root-routing.module */ "./src/root-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delon.module */ "./src/delon.module.ts");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style-icons-auto */ "./src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style-icons */ "./src/style-icons.ts");
/* harmony import */ var _abp_abp_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @abp/abp.module */ "./node_modules/abp-ng2-module/dist/src/abp.module.js");
/* harmony import */ var _abp_abpHttpInterceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @abp/abpHttpInterceptor */ "./node_modules/abp-ng2-module/dist/src/abpHttpInterceptor.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function appInitializerFactory(injector) {
    // 导入图标
    var iconSrv = injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzIconService"]);
    iconSrv.addIcon.apply(iconSrv, _style_icons_auto__WEBPACK_IMPORTED_MODULE_16__["ICONS_AUTO"].concat(_style_icons__WEBPACK_IMPORTED_MODULE_17__["ICONS"]));
    return function () {
        return new Promise(function (resolve, reject) {
            AppPreBootstrap__WEBPACK_IMPORTED_MODULE_4__["AppPreBootstrap"].run(injector, function () {
                var appSessionService = injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__["AppSessionService"]);
                appSessionService.init().then(function (result) {
                    resolve(result);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
}
function getRemoteServiceBaseUrl() {
    return _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].remoteServiceBaseUrl;
}
function getCurrentLanguage() {
    return abp.localization.currentLanguage.name;
}
function getBaseHref(platformLocation) {
    var baseUrl = platformLocation.getBaseHrefFromDOM();
    if (baseUrl) {
        return baseUrl;
    }
    return '/';
}
function getDocumentOrigin() {
    if (!document.location.origin) {
        return document.location.protocol + "//" + document.location.hostname + (document.location.port ? ':' + document.location.port : '');
    }
    return document.location.origin;
}
var RootModule = /** @class */ (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _abp_abp_module__WEBPACK_IMPORTED_MODULE_18__["AbpModule"],
                // 引入DelonMdule
                _delon_module__WEBPACK_IMPORTED_MODULE_15__["DelonModule"].forRoot(),
                _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_8__["ServiceProxyModule"],
                root_routing_module__WEBPACK_IMPORTED_MODULE_12__["RootRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                /** 导入 ng-zorro-antd 模块 **/
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
                /** 必须导入 ng-zorro 才能导入此项 */
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"].forRoot(),
            ],
            declarations: [root_component__WEBPACK_IMPORTED_MODULE_2__["RootComponent"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _abp_abpHttpInterceptor__WEBPACK_IMPORTED_MODULE_19__["AbpHttpInterceptor"], multi: true },
                { provide: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_11__["API_BASE_URL"], useFactory: getRemoteServiceBaseUrl },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: appInitializerFactory,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
                    useFactory: getCurrentLanguage,
                },
                _delon_theme__WEBPACK_IMPORTED_MODULE_14__["TitleService"],
            ],
            bootstrap: [root_component__WEBPACK_IMPORTED_MODULE_2__["RootComponent"]],
        })
    ], RootModule);
    return RootModule;
}());



/***/ }),

/***/ "./src/shared/AppConsts.ts":
/*!*********************************!*\
  !*** ./src/shared/AppConsts.ts ***!
  \*********************************/
/*! exports provided: AppConsts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConsts", function() { return AppConsts; });
var AppConsts = /** @class */ (function () {
    function AppConsts() {
    }
    // // 封装个建议的本地化方法
    // static L(key: string): string {
    //   return abp.localization.localize(
    //     key,
    //     AppConsts.localization.defaultLocalizationSourceName,
    //   );
    // }
    AppConsts.l = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var localizedText = abp.localization.localize(key, AppConsts.localization.defaultLocalizationSourceName);
        if (!localizedText) {
            localizedText = key;
        }
        if (!args || !args.length) {
            return localizedText;
        }
        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    };
    AppConsts.uploadApiUrl = '/api/File/Upload';
    AppConsts.userManagement = {
        defaultAdminUserName: 'admin',
    };
    AppConsts.localization = {
        defaultLocalizationSourceName: 'ABP402',
    };
    AppConsts.authorization = {
        encrptedAuthTokenName: 'enc_auth_token',
    };
    AppConsts.maxProfilPictureMb = 1; // 个人头像上传最大MB
    /**
     * 数据表格设置
     */
    // tslint:disable-next-line:member-ordering
    AppConsts.grid = {
        /**
         * 每页显示条目数
         */
        defaultPageSize: 10,
        /**
         * 每页显示条目数下拉框值
         */
        defaultPageSizes: [5, 10, 15, 20, 25, 30, 50, 80, 100],
    };
    return AppConsts;
}());



/***/ }),

/***/ "./src/shared/auth/app-auth.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/auth/app-auth.service.ts ***!
  \*********************************************/
/*! exports provided: AppAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthService", function() { return AppAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppAuthService = /** @class */ (function () {
    function AppAuthService() {
    }
    AppAuthService.prototype.logout = function (reload) {
        abp.auth.clearToken();
        if (reload !== false) {
            location.href = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].appBaseUrl;
        }
    };
    AppAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppAuthService);
    return AppAuthService;
}());



/***/ }),

/***/ "./src/shared/auth/auth-route-guard.ts":
/*!*********************************************!*\
  !*** ./src/shared/auth/auth-route-guard.ts ***!
  \*********************************************/
/*! exports provided: AppRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteGuard", function() { return AppRouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/auth/permission-checker.service */ "./node_modules/abp-ng2-module/dist/src/auth/permission-checker.service.js");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/session/app-session.service */ "./src/shared/session/app-session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRouteGuard = /** @class */ (function () {
    function AppRouteGuard(_permissionChecker, _router, _sessionService) {
        this._permissionChecker = _permissionChecker;
        this._router = _router;
        this._sessionService = _sessionService;
    }
    AppRouteGuard.prototype.canActivate = function (route, state) {
        if (!this._sessionService.user) {
            this._router.navigate(['/account/login']);
            return false;
        }
        if (!route.data || !route.data['permission']) {
            return true;
        }
        if (this._permissionChecker.isGranted(route.data['permission'])) {
            return true;
        }
        this._router.navigate([this.selectBestRoute()]);
        return false;
    };
    AppRouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AppRouteGuard.prototype.selectBestRoute = function () {
        if (!this._sessionService.user) {
            return '/account/login';
        }
        if (this._permissionChecker.isGranted('Pages.Users')) {
            return '/app/admin/users';
        }
        return '/app/home';
    };
    AppRouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_1__["PermissionCheckerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]])
    ], AppRouteGuard);
    return AppRouteGuard;
}());



/***/ }),

/***/ "./src/shared/components/custom-components.module.ts":
/*!***********************************************************!*\
  !*** ./src/shared/components/custom-components.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentModule", function() { return CustomComponentModule; });
/* harmony import */ var _validation_messages_validation_equal_validator_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-messages/validation/equal-validator.directive */ "./src/shared/components/validation-messages/validation/equal-validator.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/no-data/no-data.component */ "./src/shared/components/no-data/no-data.component.ts");
/* harmony import */ var _shared_components_validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/validation-messages/validation-messages.component */ "./src/shared/components/validation-messages/validation-messages.component.ts");
/* harmony import */ var _shared_components_validation_messages_auto_focus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/validation-messages/auto-focus.directive */ "./src/shared/components/validation-messages/auto-focus.directive.ts");
/* harmony import */ var _shared_components_validation_messages_validation_min_value_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/validation-messages/validation/min-value-validator.directive */ "./src/shared/components/validation-messages/validation/min-value-validator.directive.ts");
/* harmony import */ var _shared_components_validation_messages_validation_password_complexity_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/validation-messages/validation/password-complexity-validator.directive */ "./src/shared/components/validation-messages/validation/password-complexity-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var COMPONENTS = [_shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_3__["NoDataComponent"], _shared_components_validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessagesComponent"]];
var ThirdDirectives = [
    _shared_components_validation_messages_auto_focus_directive__WEBPACK_IMPORTED_MODULE_5__["AutoFocusDirective"],
    _validation_messages_validation_equal_validator_directive__WEBPACK_IMPORTED_MODULE_0__["EqualValidator"],
    _shared_components_validation_messages_validation_min_value_validator_directive__WEBPACK_IMPORTED_MODULE_6__["MinValueValidator"],
    _shared_components_validation_messages_validation_password_complexity_validator_directive__WEBPACK_IMPORTED_MODULE_7__["PasswordComplexityValidator"],
];
var CustomComponentModule = /** @class */ (function () {
    /**自定义组件模块 */
    function CustomComponentModule() {
    }
    CustomComponentModule_1 = CustomComponentModule;
    CustomComponentModule.forRoot = function () {
        return { ngModule: CustomComponentModule_1 };
    };
    var CustomComponentModule_1;
    CustomComponentModule = CustomComponentModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: COMPONENTS.concat(ThirdDirectives),
            exports: COMPONENTS.slice(),
        })
        /**自定义组件模块 */
    ], CustomComponentModule);
    return CustomComponentModule;
}());



/***/ }),

/***/ "./src/shared/components/no-data/no-data.component.ts":
/*!************************************************************!*\
  !*** ./src/shared/components/no-data/no-data.component.ts ***!
  \************************************************************/
/*! exports provided: NoDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataComponent", function() { return NoDataComponent; });
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoDataComponent = /** @class */ (function () {
    // endregion
    function NoDataComponent() {
        /**
         * 图标
         */
        this.icon = 'anticon anticon-frown-o';
    }
    NoDataComponent.prototype.ngOnInit = function () {
        if (!this.text) {
            this.text = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].l('NoData');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], NoDataComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], NoDataComponent.prototype, "icon", void 0);
    NoDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'no-data',
            template: "\n   <span class=\"no-result-data\">\n    <i *ngIf=\"icon\" [class]=\"icon\"></i>\n    <span>{{text}}</span>\n   </span>\n  ",
            styles: [
                "\n      .no-result-data {\n        color: rgba(0, 0, 0, 0.25);\n        text-align: center;\n        line-height: 64px;\n        font-size: 16px;\n        margin: 0 auto;\n      }\n      .no-result-data i {\n        font-size: 24px;\n        margin-right: 16px;\n        position: relative;\n        top: 3px;\n      }\n    ",
            ],
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [])
    ], NoDataComponent);
    return NoDataComponent;
}());



/***/ }),

/***/ "./src/shared/components/validation-messages/auto-focus.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/components/validation-messages/auto-focus.directive.ts ***!
  \***************************************************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(_element) {
        this._element = _element;
    }
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        // $(this._element.nativeElement).focus();
        var ele = this._element.nativeElement;
        ele.focus();
    };
    AutoFocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[autoFocus]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());



/***/ }),

/***/ "./src/shared/components/validation-messages/validation-messages.component.ts":
/*!************************************************************************************!*\
  !*** ./src/shared/components/validation-messages/validation-messages.component.ts ***!
  \************************************************************************************/
/*! exports provided: ValidationMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessagesComponent", function() { return ValidationMessagesComponent; });
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationMessagesComponent = /** @class */ (function () {
    function ValidationMessagesComponent() {
        this.errorDefs = [];
    }
    ValidationMessagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var targetElement = document.querySelector('[name=\'' + _this.formCtrl.name + '\']');
            if (!targetElement) {
                return;
            }
            targetElement = targetElement;
            if (targetElement.getAttribute('required') ||
                targetElement.getAttributeNode('required')) {
                _this.errorDefs.push({
                    required: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].l('ThisFieldIsRequired'),
                });
            }
            if (targetElement.getAttribute('minlength')) {
                _this.errorDefs.push({
                    minlength: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].l('PleaseEnterAtLeastNCharacter', targetElement.getAttribute('minlength')),
                });
            }
            if (targetElement.getAttribute('maxlength')) {
                _this.errorDefs.push({
                    maxlength: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].l('PleaseEnterNoMoreThanNCharacter', targetElement.getAttribute('maxlength')),
                });
            }
        });
    };
    ValidationMessagesComponent.prototype.getErrorDefinitionIsValid = function (errorDef) {
        return !!this.formCtrl.errors[Object.keys(errorDef)[0]];
    };
    ValidationMessagesComponent.prototype.getErrorDefinitionMessage = function (errorDef) {
        return errorDef[Object.keys(errorDef)[0]];
    };
    ValidationMessagesComponent.prototype.addValidationDefinitionIfNotExists = function (validationKey, validationMessage) {
        if (this.errorDefs[validationKey]) {
            return;
        }
        this.errorDefs.push({ validationKey: validationMessage });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ValidationMessagesComponent.prototype, "formCtrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ValidationMessagesComponent.prototype, "errorDefs", void 0);
    ValidationMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'validation-messages',
            template: "\n    <ng-container *ngIf=\"formCtrl.invalid && formCtrl.dirty\">\n        <div *ngFor=\"let errorDef of errorDefs\">\n           <span *ngIf=\"getErrorDefinitionIsValid(errorDef)\">\n                 {{getErrorDefinitionMessage(errorDef)}}\n            </span>\n        </div>\n  </ng-container>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], ValidationMessagesComponent);
    return ValidationMessagesComponent;
}());



/***/ }),

/***/ "./src/shared/components/validation-messages/validation/equal-validator.directive.ts":
/*!*******************************************************************************************!*\
  !*** ./src/shared/components/validation-messages/validation/equal-validator.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// Got from: https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true';
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (control) {
        var pairControl = control.root.get(this.validateEqual);
        if (!pairControl) {
            return null;
        }
        var value = control.value;
        var pairValue = pairControl.value;
        if (!value && !pairValue) {
            return null;
        }
        if (this.isReverse) {
            if (value === pairValue) {
                if (pairControl.errors) {
                    delete pairControl.errors['validateEqual'];
                }
                if (!Object.keys(pairControl.errors).length) {
                    pairControl.setErrors(null);
                }
            }
            else {
                pairControl.setErrors({
                    validateEqual: false,
                });
            }
            return null;
        }
        else {
            if (value !== pairValue) {
                return {
                    validateEqual: false,
                };
            }
        }
    };
    var EqualValidator_1;
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }),
                    multi: true,
                },
            ],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/shared/components/validation-messages/validation/min-value-validator.directive.ts":
/*!***********************************************************************************************!*\
  !*** ./src/shared/components/validation-messages/validation/min-value-validator.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: MinValueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValueValidator", function() { return MinValueValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinValueValidator = /** @class */ (function () {
    function MinValueValidator() {
    }
    MinValueValidator_1 = MinValueValidator;
    MinValueValidator.prototype.validate = function (control) {
        var givenvalue = control.value;
        var validationResult = null;
        var minValue = this.minValue;
        if (minValue && givenvalue < minValue) {
            validationResult = validationResult || {};
            validationResult.minValue = true;
        }
        return validationResult;
    };
    var MinValueValidator_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('minValue'),
        __metadata("design:type", Number)
    ], MinValueValidator.prototype, "minValue", void 0);
    MinValueValidator = MinValueValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[minValue]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MinValueValidator_1; }),
                    multi: true,
                },
            ],
        })
    ], MinValueValidator);
    return MinValueValidator;
}());



/***/ }),

/***/ "./src/shared/components/validation-messages/validation/password-complexity-validator.directive.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/shared/components/validation-messages/validation/password-complexity-validator.directive.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PasswordComplexityValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComplexityValidator", function() { return PasswordComplexityValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordComplexityValidator = /** @class */ (function () {
    function PasswordComplexityValidator() {
    }
    PasswordComplexityValidator_1 = PasswordComplexityValidator;
    PasswordComplexityValidator.prototype.validate = function (control) {
        var givenPassword = control.value;
        var validationResult = null;
        var requireDigit = this.requireDigit;
        if (requireDigit && givenPassword && !/[0-9]/.test(givenPassword)) {
            validationResult = validationResult || {};
            validationResult.requireDigit = true;
        }
        var requireUppercase = this.requireUppercase;
        if (requireUppercase && givenPassword && !/[A-Z]/.test(givenPassword)) {
            validationResult = validationResult || {};
            validationResult.requireUppercase = true;
        }
        var requireLowercase = this.requireLowercase;
        if (requireLowercase && givenPassword && !/[a-z]/.test(givenPassword)) {
            validationResult = validationResult || {};
            validationResult.requireLowercase = true;
        }
        var requiredLength = this.requiredLength;
        if (requiredLength &&
            givenPassword &&
            givenPassword.length < requiredLength) {
            validationResult = validationResult || {};
            validationResult.requiredLength = true;
        }
        // use upperCaseLetters
        var requireNonAlphanumeric = this.requireNonAlphanumeric;
        if (requireNonAlphanumeric &&
            givenPassword &&
            /^[0-9a-zA-Z]+$/.test(givenPassword)) {
            validationResult = validationResult || {};
            validationResult.requireNonAlphanumeric = true;
        }
        return validationResult;
    };
    var PasswordComplexityValidator_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('requireDigit'),
        __metadata("design:type", Boolean)
    ], PasswordComplexityValidator.prototype, "requireDigit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('requireUppercase'),
        __metadata("design:type", Boolean)
    ], PasswordComplexityValidator.prototype, "requireUppercase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('requireLowercase'),
        __metadata("design:type", Boolean)
    ], PasswordComplexityValidator.prototype, "requireLowercase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('requireNonAlphanumeric'),
        __metadata("design:type", Boolean)
    ], PasswordComplexityValidator.prototype, "requireNonAlphanumeric", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('requiredLength'),
        __metadata("design:type", Number)
    ], PasswordComplexityValidator.prototype, "requiredLength", void 0);
    PasswordComplexityValidator = PasswordComplexityValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[requireDigit],[requireLowercase],[requireNonAlphanumeric],[requireUppercase],[requiredLength]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PasswordComplexityValidator_1; }),
                    multi: true,
                },
            ],
        })
    ], PasswordComplexityValidator);
    return PasswordComplexityValidator;
}());



/***/ }),

/***/ "./src/shared/module-import-guard.ts":
/*!*******************************************!*\
  !*** ./src/shared/module-import-guard.ts ***!
  \*******************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/shared/nav/app-url.service.ts":
/*!*******************************************!*\
  !*** ./src/shared/nav/app-url.service.ts ***!
  \*******************************************/
/*! exports provided: AppUrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUrlService", function() { return AppUrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/session/app-session.service */ "./src/shared/session/app-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppUrlService = /** @class */ (function () {
    function AppUrlService(_appSessionService) {
        this._appSessionService = _appSessionService;
    }
    AppUrlService_1 = AppUrlService;
    Object.defineProperty(AppUrlService.prototype, "appRootUrl", {
        get: function () {
            if (this._appSessionService.tenant) {
                return this.getAppRootUrlOfTenant(this._appSessionService.tenant.tenancyName);
            }
            else {
                return this.getAppRootUrlOfTenant(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returning url ends with '/'.
     */
    AppUrlService.prototype.getAppRootUrlOfTenant = function (tenancyName) {
        var baseUrl = this.ensureEndsWith(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].appBaseUrl, '/');
        if (baseUrl.indexOf(AppUrlService_1.tenancyNamePlaceHolder) < 0) {
            return baseUrl;
        }
        if (baseUrl.indexOf(AppUrlService_1.tenancyNamePlaceHolder + '.') >= 0) {
            baseUrl = baseUrl.replace(AppUrlService_1.tenancyNamePlaceHolder + '.', AppUrlService_1.tenancyNamePlaceHolder);
            if (tenancyName) {
                tenancyName = tenancyName + '.';
            }
        }
        if (!tenancyName) {
            return baseUrl.replace(AppUrlService_1.tenancyNamePlaceHolder, '');
        }
        return baseUrl.replace(AppUrlService_1.tenancyNamePlaceHolder, tenancyName);
    };
    AppUrlService.prototype.ensureEndsWith = function (str, c) {
        if (str.charAt(str.length - 1) !== c) {
            str = str + c;
        }
        return str;
    };
    AppUrlService.prototype.removeFromEnd = function (str, c) {
        if (str.charAt(str.length - 1) === c) {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    var AppUrlService_1;
    AppUrlService.tenancyNamePlaceHolder = '{TENANCY_NAME}';
    AppUrlService = AppUrlService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]])
    ], AppUrlService);
    return AppUrlService;
}());



/***/ }),

/***/ "./src/shared/service-proxies/service-proxies.ts":
/*!*******************************************************!*\
  !*** ./src/shared/service-proxies/service-proxies.ts ***!
  \*******************************************************/
/*! exports provided: API_BASE_URL, AccountServiceProxy, ConfigurationServiceProxy, RoleServiceProxy, SessionServiceProxy, TenantServiceProxy, TenantRegistrationServiceProxy, TokenAuthServiceProxy, UserServiceProxy, IsTenantAvailableInput, IsTenantAvailableOutput, RegisterInput, RegisterOutput, ChangeUiThemeInput, CreateRoleDto, RoleDto, ListResultDtoOfPermissionDto, PermissionDto, PagedResultDtoOfRoleDto, GetCurrentLoginInformationsOutput, ApplicationInfoDto, UserLoginInfoDto, TenantLoginInfoDto, CreateTenantDto, TenantDto, PagedResultDtoOfTenantDto, AuthenticateModel, AuthenticateResultModel, ExternalLoginProviderInfoModel, ExternalAuthenticateModel, ExternalAuthenticateResultModel, CreateUserDto, UserDto, ListResultDtoOfRoleDto, ChangeUserLanguageDto, PagedResultDtoOfUserDto, IsTenantAvailableOutputState, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountServiceProxy", function() { return AccountServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationServiceProxy", function() { return ConfigurationServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleServiceProxy", function() { return RoleServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionServiceProxy", function() { return SessionServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantServiceProxy", function() { return TenantServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantRegistrationServiceProxy", function() { return TenantRegistrationServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAuthServiceProxy", function() { return TokenAuthServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceProxy", function() { return UserServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTenantAvailableInput", function() { return IsTenantAvailableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTenantAvailableOutput", function() { return IsTenantAvailableOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterInput", function() { return RegisterInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterOutput", function() { return RegisterOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUiThemeInput", function() { return ChangeUiThemeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleDto", function() { return CreateRoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDto", function() { return RoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResultDtoOfPermissionDto", function() { return ListResultDtoOfPermissionDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDto", function() { return PermissionDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultDtoOfRoleDto", function() { return PagedResultDtoOfRoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentLoginInformationsOutput", function() { return GetCurrentLoginInformationsOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationInfoDto", function() { return ApplicationInfoDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginInfoDto", function() { return UserLoginInfoDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantLoginInfoDto", function() { return TenantLoginInfoDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenantDto", function() { return CreateTenantDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDto", function() { return TenantDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultDtoOfTenantDto", function() { return PagedResultDtoOfTenantDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return AuthenticateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateResultModel", function() { return AuthenticateResultModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLoginProviderInfoModel", function() { return ExternalLoginProviderInfoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAuthenticateModel", function() { return ExternalAuthenticateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAuthenticateResultModel", function() { return ExternalAuthenticateResultModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserDto", function() { return CreateUserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResultDtoOfRoleDto", function() { return ListResultDtoOfRoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserLanguageDto", function() { return ChangeUserLanguageDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultDtoOfUserDto", function() { return PagedResultDtoOfUserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTenantAvailableOutputState", function() { return IsTenantAvailableOutputState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
/* harmony import */ var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/finally */ "./node_modules/rxjs-compat/_esm5/add/operator/finally.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.18.6.0 (NJsonSchema v9.10.67.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('API_BASE_URL');
var AccountServiceProxy = /** @class */ (function () {
    function AccountServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param input (optional)
     * @return Success
     */
    AccountServiceProxy.prototype.isTenantAvailable = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processIsTenantAvailable(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processIsTenantAvailable(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AccountServiceProxy.prototype.processIsTenantAvailable = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? IsTenantAvailableOutput.fromJS(resultData200) : new IsTenantAvailableOutput();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param input (optional)
     * @return Success
     */
    AccountServiceProxy.prototype.register = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/Register";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processRegister(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processRegister(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AccountServiceProxy.prototype.processRegister = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RegisterOutput.fromJS(resultData200) : new RegisterOutput();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AccountServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], AccountServiceProxy);
    return AccountServiceProxy;
}());

var ConfigurationServiceProxy = /** @class */ (function () {
    function ConfigurationServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param input (optional)
     * @return Success
     */
    ConfigurationServiceProxy.prototype.changeUiTheme = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Configuration/ChangeUiTheme";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processChangeUiTheme(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processChangeUiTheme(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    ConfigurationServiceProxy.prototype.processChangeUiTheme = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    ConfigurationServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], ConfigurationServiceProxy);
    return ConfigurationServiceProxy;
}());

var RoleServiceProxy = /** @class */ (function () {
    function RoleServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param input (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processCreate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RoleDto.fromJS(resultData200) : new RoleDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param input (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RoleDto.fromJS(resultData200) : new RoleDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Delete?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.getAllPermissions = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetAllPermissions";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAllPermissions(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAllPermissions(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGetAllPermissions = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? ListResultDtoOfPermissionDto.fromJS(resultData200) : new ListResultDtoOfPermissionDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Get?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RoleDto.fromJS(resultData200) : new RoleDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    RoleServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetAll?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    RoleServiceProxy.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultDtoOfRoleDto.fromJS(resultData200) : new PagedResultDtoOfRoleDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    RoleServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], RoleServiceProxy);
    return RoleServiceProxy;
}());

var SessionServiceProxy = /** @class */ (function () {
    function SessionServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    SessionServiceProxy.prototype.getCurrentLoginInformations = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetCurrentLoginInformations(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetCurrentLoginInformations(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    SessionServiceProxy.prototype.processGetCurrentLoginInformations = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? GetCurrentLoginInformationsOutput.fromJS(resultData200) : new GetCurrentLoginInformationsOutput();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    SessionServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], SessionServiceProxy);
    return SessionServiceProxy;
}());

var TenantServiceProxy = /** @class */ (function () {
    function TenantServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param input (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processCreate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Delete?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Get?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/GetAll?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultDtoOfTenantDto.fromJS(resultData200) : new PagedResultDtoOfTenantDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param input (optional)
     * @return Success
     */
    TenantServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TenantServiceProxy.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    TenantServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], TenantServiceProxy);
    return TenantServiceProxy;
}());

var TenantRegistrationServiceProxy = /** @class */ (function () {
    function TenantRegistrationServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param input (optional)
     * @return Success
     */
    TenantRegistrationServiceProxy.prototype.registerTenantAsync = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/TenantRegistration/RegisterTenantAsync";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processRegisterTenantAsync(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processRegisterTenantAsync(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TenantRegistrationServiceProxy.prototype.processRegisterTenantAsync = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    TenantRegistrationServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], TenantRegistrationServiceProxy);
    return TenantRegistrationServiceProxy;
}());

var TokenAuthServiceProxy = /** @class */ (function () {
    function TokenAuthServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param model (optional)
     * @return Success
     */
    TokenAuthServiceProxy.prototype.authenticate = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(model);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processAuthenticate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processAuthenticate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processAuthenticate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? AuthenticateResultModel.fromJS(resultData200) : new AuthenticateResultModel();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.getExternalAuthenticationProviders = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetExternalAuthenticationProviders(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetExternalAuthenticationProviders(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processGetExternalAuthenticationProviders = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(ExternalLoginProviderInfoModel.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param model (optional)
     * @return Success
     */
    TokenAuthServiceProxy.prototype.externalAuthenticate = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(model);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processExternalAuthenticate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processExternalAuthenticate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    TokenAuthServiceProxy.prototype.processExternalAuthenticate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? ExternalAuthenticateResultModel.fromJS(resultData200) : new ExternalAuthenticateResultModel();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    TokenAuthServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], TokenAuthServiceProxy);
    return TokenAuthServiceProxy;
}());

var UserServiceProxy = /** @class */ (function () {
    function UserServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @param input (optional)
     * @return Success
     */
    UserServiceProxy.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processCreate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param input (optional)
     * @return Success
     */
    UserServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    UserServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Delete?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.getRoles = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetRoles";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetRoles(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetRoles(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processGetRoles = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? ListResultDtoOfRoleDto.fromJS(resultData200) : new ListResultDtoOfRoleDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param input (optional)
     * @return Success
     */
    UserServiceProxy.prototype.changeLanguage = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/ChangeLanguage";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processChangeLanguage(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processChangeLanguage(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processChangeLanguage = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    UserServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Get?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    UserServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetAll?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    UserServiceProxy.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultDtoOfUserDto.fromJS(resultData200) : new PagedResultDtoOfUserDto();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    UserServiceProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], UserServiceProxy);
    return UserServiceProxy;
}());

var IsTenantAvailableInput = /** @class */ (function () {
    function IsTenantAvailableInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    IsTenantAvailableInput.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
        }
    };
    IsTenantAvailableInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new IsTenantAvailableInput();
        result.init(data);
        return result;
    };
    IsTenantAvailableInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        return data;
    };
    IsTenantAvailableInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new IsTenantAvailableInput();
        result.init(json);
        return result;
    };
    return IsTenantAvailableInput;
}());

var IsTenantAvailableOutput = /** @class */ (function () {
    function IsTenantAvailableOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    IsTenantAvailableOutput.prototype.init = function (data) {
        if (data) {
            this.state = data["state"];
            this.tenantId = data["tenantId"];
        }
    };
    IsTenantAvailableOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new IsTenantAvailableOutput();
        result.init(data);
        return result;
    };
    IsTenantAvailableOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["state"] = this.state;
        data["tenantId"] = this.tenantId;
        return data;
    };
    IsTenantAvailableOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new IsTenantAvailableOutput();
        result.init(json);
        return result;
    };
    return IsTenantAvailableOutput;
}());

var RegisterInput = /** @class */ (function () {
    function RegisterInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RegisterInput.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.password = data["password"];
            this.captchaResponse = data["captchaResponse"];
        }
    };
    RegisterInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RegisterInput();
        result.init(data);
        return result;
    };
    RegisterInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["password"] = this.password;
        data["captchaResponse"] = this.captchaResponse;
        return data;
    };
    RegisterInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RegisterInput();
        result.init(json);
        return result;
    };
    return RegisterInput;
}());

var RegisterOutput = /** @class */ (function () {
    function RegisterOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RegisterOutput.prototype.init = function (data) {
        if (data) {
            this.canLogin = data["canLogin"];
        }
    };
    RegisterOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RegisterOutput();
        result.init(data);
        return result;
    };
    RegisterOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["canLogin"] = this.canLogin;
        return data;
    };
    RegisterOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RegisterOutput();
        result.init(json);
        return result;
    };
    return RegisterOutput;
}());

var ChangeUiThemeInput = /** @class */ (function () {
    function ChangeUiThemeInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ChangeUiThemeInput.prototype.init = function (data) {
        if (data) {
            this.theme = data["theme"];
        }
    };
    ChangeUiThemeInput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ChangeUiThemeInput();
        result.init(data);
        return result;
    };
    ChangeUiThemeInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["theme"] = this.theme;
        return data;
    };
    ChangeUiThemeInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ChangeUiThemeInput();
        result.init(json);
        return result;
    };
    return ChangeUiThemeInput;
}());

var CreateRoleDto = /** @class */ (function () {
    function CreateRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateRoleDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.normalizedName = data["normalizedName"];
            this.description = data["description"];
            this.isStatic = data["isStatic"];
            if (data["permissions"] && data["permissions"].constructor === Array) {
                this.permissions = [];
                for (var _i = 0, _a = data["permissions"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.permissions.push(item);
                }
            }
        }
    };
    CreateRoleDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateRoleDto();
        result.init(data);
        return result;
    };
    CreateRoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["normalizedName"] = this.normalizedName;
        data["description"] = this.description;
        data["isStatic"] = this.isStatic;
        if (this.permissions && this.permissions.constructor === Array) {
            data["permissions"] = [];
            for (var _i = 0, _a = this.permissions; _i < _a.length; _i++) {
                var item = _a[_i];
                data["permissions"].push(item);
            }
        }
        return data;
    };
    CreateRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateRoleDto();
        result.init(json);
        return result;
    };
    return CreateRoleDto;
}());

var RoleDto = /** @class */ (function () {
    function RoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.normalizedName = data["normalizedName"];
            this.description = data["description"];
            this.isStatic = data["isStatic"];
            if (data["permissions"] && data["permissions"].constructor === Array) {
                this.permissions = [];
                for (var _i = 0, _a = data["permissions"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.permissions.push(item);
                }
            }
            this.id = data["id"];
        }
    };
    RoleDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RoleDto();
        result.init(data);
        return result;
    };
    RoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["normalizedName"] = this.normalizedName;
        data["description"] = this.description;
        data["isStatic"] = this.isStatic;
        if (this.permissions && this.permissions.constructor === Array) {
            data["permissions"] = [];
            for (var _i = 0, _a = this.permissions; _i < _a.length; _i++) {
                var item = _a[_i];
                data["permissions"].push(item);
            }
        }
        data["id"] = this.id;
        return data;
    };
    RoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleDto();
        result.init(json);
        return result;
    };
    return RoleDto;
}());

var ListResultDtoOfPermissionDto = /** @class */ (function () {
    function ListResultDtoOfPermissionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ListResultDtoOfPermissionDto.prototype.init = function (data) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(PermissionDto.fromJS(item));
                }
            }
        }
    };
    ListResultDtoOfPermissionDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ListResultDtoOfPermissionDto();
        result.init(data);
        return result;
    };
    ListResultDtoOfPermissionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    ListResultDtoOfPermissionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ListResultDtoOfPermissionDto();
        result.init(json);
        return result;
    };
    return ListResultDtoOfPermissionDto;
}());

var PermissionDto = /** @class */ (function () {
    function PermissionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PermissionDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.id = data["id"];
        }
    };
    PermissionDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PermissionDto();
        result.init(data);
        return result;
    };
    PermissionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["id"] = this.id;
        return data;
    };
    PermissionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PermissionDto();
        result.init(json);
        return result;
    };
    return PermissionDto;
}());

var PagedResultDtoOfRoleDto = /** @class */ (function () {
    function PagedResultDtoOfRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfRoleDto.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(RoleDto.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfRoleDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultDtoOfRoleDto();
        result.init(data);
        return result;
    };
    PagedResultDtoOfRoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfRoleDto();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfRoleDto;
}());

var GetCurrentLoginInformationsOutput = /** @class */ (function () {
    function GetCurrentLoginInformationsOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GetCurrentLoginInformationsOutput.prototype.init = function (data) {
        if (data) {
            this.application = data["application"] ? ApplicationInfoDto.fromJS(data["application"]) : undefined;
            this.user = data["user"] ? UserLoginInfoDto.fromJS(data["user"]) : undefined;
            this.tenant = data["tenant"] ? TenantLoginInfoDto.fromJS(data["tenant"]) : undefined;
        }
    };
    GetCurrentLoginInformationsOutput.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GetCurrentLoginInformationsOutput();
        result.init(data);
        return result;
    };
    GetCurrentLoginInformationsOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["application"] = this.application ? this.application.toJSON() : undefined;
        data["user"] = this.user ? this.user.toJSON() : undefined;
        data["tenant"] = this.tenant ? this.tenant.toJSON() : undefined;
        return data;
    };
    GetCurrentLoginInformationsOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GetCurrentLoginInformationsOutput();
        result.init(json);
        return result;
    };
    return GetCurrentLoginInformationsOutput;
}());

var ApplicationInfoDto = /** @class */ (function () {
    function ApplicationInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ApplicationInfoDto.prototype.init = function (data) {
        if (data) {
            this.version = data["version"];
            this.releaseDate = data["releaseDate"] ? moment__WEBPACK_IMPORTED_MODULE_5__(data["releaseDate"].toString()) : undefined;
            if (data["features"]) {
                this.features = {};
                for (var key in data["features"]) {
                    if (data["features"].hasOwnProperty(key))
                        this.features[key] = data["features"][key];
                }
            }
        }
    };
    ApplicationInfoDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ApplicationInfoDto();
        result.init(data);
        return result;
    };
    ApplicationInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["version"] = this.version;
        data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : undefined;
        if (this.features) {
            data["features"] = {};
            for (var key in this.features) {
                if (this.features.hasOwnProperty(key))
                    data["features"][key] = this.features[key];
            }
        }
        return data;
    };
    ApplicationInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ApplicationInfoDto();
        result.init(json);
        return result;
    };
    return ApplicationInfoDto;
}());

var UserLoginInfoDto = /** @class */ (function () {
    function UserLoginInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserLoginInfoDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.id = data["id"];
        }
    };
    UserLoginInfoDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserLoginInfoDto();
        result.init(data);
        return result;
    };
    UserLoginInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["id"] = this.id;
        return data;
    };
    UserLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserLoginInfoDto();
        result.init(json);
        return result;
    };
    return UserLoginInfoDto;
}());

var TenantLoginInfoDto = /** @class */ (function () {
    function TenantLoginInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantLoginInfoDto.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.id = data["id"];
        }
    };
    TenantLoginInfoDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TenantLoginInfoDto();
        result.init(data);
        return result;
    };
    TenantLoginInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["id"] = this.id;
        return data;
    };
    TenantLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantLoginInfoDto();
        result.init(json);
        return result;
    };
    return TenantLoginInfoDto;
}());

var CreateTenantDto = /** @class */ (function () {
    function CreateTenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateTenantDto.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.adminEmailAddress = data["adminEmailAddress"];
            this.connectionString = data["connectionString"];
            this.isActive = data["isActive"];
            this.tenantAdminPassword = data["tenantAdminPassword"];
        }
    };
    CreateTenantDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateTenantDto();
        result.init(data);
        return result;
    };
    CreateTenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["adminEmailAddress"] = this.adminEmailAddress;
        data["connectionString"] = this.connectionString;
        data["isActive"] = this.isActive;
        data["tenantAdminPassword"] = this.tenantAdminPassword;
        return data;
    };
    CreateTenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateTenantDto();
        result.init(json);
        return result;
    };
    return CreateTenantDto;
}());

var TenantDto = /** @class */ (function () {
    function TenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantDto.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.isActive = data["isActive"];
            this.id = data["id"];
        }
    };
    TenantDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TenantDto();
        result.init(data);
        return result;
    };
    TenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["isActive"] = this.isActive;
        data["id"] = this.id;
        return data;
    };
    TenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantDto();
        result.init(json);
        return result;
    };
    return TenantDto;
}());

var PagedResultDtoOfTenantDto = /** @class */ (function () {
    function PagedResultDtoOfTenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfTenantDto.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(TenantDto.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfTenantDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultDtoOfTenantDto();
        result.init(data);
        return result;
    };
    PagedResultDtoOfTenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfTenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfTenantDto();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfTenantDto;
}());

var AuthenticateModel = /** @class */ (function () {
    function AuthenticateModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthenticateModel.prototype.init = function (data) {
        if (data) {
            this.userNameOrEmailAddress = data["userNameOrEmailAddress"];
            this.password = data["password"];
            this.rememberClient = data["rememberClient"];
        }
    };
    AuthenticateModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthenticateModel();
        result.init(data);
        return result;
    };
    AuthenticateModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
        data["password"] = this.password;
        data["rememberClient"] = this.rememberClient;
        return data;
    };
    AuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthenticateModel();
        result.init(json);
        return result;
    };
    return AuthenticateModel;
}());

var AuthenticateResultModel = /** @class */ (function () {
    function AuthenticateResultModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthenticateResultModel.prototype.init = function (data) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.userId = data["userId"];
        }
    };
    AuthenticateResultModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthenticateResultModel();
        result.init(data);
        return result;
    };
    AuthenticateResultModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["userId"] = this.userId;
        return data;
    };
    AuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthenticateResultModel();
        result.init(json);
        return result;
    };
    return AuthenticateResultModel;
}());

var ExternalLoginProviderInfoModel = /** @class */ (function () {
    function ExternalLoginProviderInfoModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalLoginProviderInfoModel.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.clientId = data["clientId"];
        }
    };
    ExternalLoginProviderInfoModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ExternalLoginProviderInfoModel();
        result.init(data);
        return result;
    };
    ExternalLoginProviderInfoModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["clientId"] = this.clientId;
        return data;
    };
    ExternalLoginProviderInfoModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalLoginProviderInfoModel();
        result.init(json);
        return result;
    };
    return ExternalLoginProviderInfoModel;
}());

var ExternalAuthenticateModel = /** @class */ (function () {
    function ExternalAuthenticateModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalAuthenticateModel.prototype.init = function (data) {
        if (data) {
            this.authProvider = data["authProvider"];
            this.providerKey = data["providerKey"];
            this.providerAccessCode = data["providerAccessCode"];
        }
    };
    ExternalAuthenticateModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ExternalAuthenticateModel();
        result.init(data);
        return result;
    };
    ExternalAuthenticateModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["authProvider"] = this.authProvider;
        data["providerKey"] = this.providerKey;
        data["providerAccessCode"] = this.providerAccessCode;
        return data;
    };
    ExternalAuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalAuthenticateModel();
        result.init(json);
        return result;
    };
    return ExternalAuthenticateModel;
}());

var ExternalAuthenticateResultModel = /** @class */ (function () {
    function ExternalAuthenticateResultModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalAuthenticateResultModel.prototype.init = function (data) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.waitingForActivation = data["waitingForActivation"];
        }
    };
    ExternalAuthenticateResultModel.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ExternalAuthenticateResultModel();
        result.init(data);
        return result;
    };
    ExternalAuthenticateResultModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["waitingForActivation"] = this.waitingForActivation;
        return data;
    };
    ExternalAuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalAuthenticateResultModel();
        result.init(json);
        return result;
    };
    return ExternalAuthenticateResultModel;
}());

var CreateUserDto = /** @class */ (function () {
    function CreateUserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateUserDto.prototype.init = function (data) {
        if (data) {
            this.userName = data["userName"];
            this.name = data["name"];
            this.surname = data["surname"];
            this.emailAddress = data["emailAddress"];
            this.isActive = data["isActive"];
            if (data["roleNames"] && data["roleNames"].constructor === Array) {
                this.roleNames = [];
                for (var _i = 0, _a = data["roleNames"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.roleNames.push(item);
                }
            }
            this.password = data["password"];
        }
    };
    CreateUserDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateUserDto();
        result.init(data);
        return result;
    };
    CreateUserDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        if (this.roleNames && this.roleNames.constructor === Array) {
            data["roleNames"] = [];
            for (var _i = 0, _a = this.roleNames; _i < _a.length; _i++) {
                var item = _a[_i];
                data["roleNames"].push(item);
            }
        }
        data["password"] = this.password;
        return data;
    };
    CreateUserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateUserDto();
        result.init(json);
        return result;
    };
    return CreateUserDto;
}());

var UserDto = /** @class */ (function () {
    function UserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserDto.prototype.init = function (data) {
        if (data) {
            this.userName = data["userName"];
            this.name = data["name"];
            this.surname = data["surname"];
            this.emailAddress = data["emailAddress"];
            this.isActive = data["isActive"];
            this.fullName = data["fullName"];
            this.lastLoginTime = data["lastLoginTime"] ? moment__WEBPACK_IMPORTED_MODULE_5__(data["lastLoginTime"].toString()) : undefined;
            this.creationTime = data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_5__(data["creationTime"].toString()) : undefined;
            if (data["roleNames"] && data["roleNames"].constructor === Array) {
                this.roleNames = [];
                for (var _i = 0, _a = data["roleNames"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.roleNames.push(item);
                }
            }
            this.id = data["id"];
        }
    };
    UserDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserDto();
        result.init(data);
        return result;
    };
    UserDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        data["fullName"] = this.fullName;
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        if (this.roleNames && this.roleNames.constructor === Array) {
            data["roleNames"] = [];
            for (var _i = 0, _a = this.roleNames; _i < _a.length; _i++) {
                var item = _a[_i];
                data["roleNames"].push(item);
            }
        }
        data["id"] = this.id;
        return data;
    };
    UserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserDto();
        result.init(json);
        return result;
    };
    return UserDto;
}());

var ListResultDtoOfRoleDto = /** @class */ (function () {
    function ListResultDtoOfRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ListResultDtoOfRoleDto.prototype.init = function (data) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(RoleDto.fromJS(item));
                }
            }
        }
    };
    ListResultDtoOfRoleDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ListResultDtoOfRoleDto();
        result.init(data);
        return result;
    };
    ListResultDtoOfRoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    ListResultDtoOfRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ListResultDtoOfRoleDto();
        result.init(json);
        return result;
    };
    return ListResultDtoOfRoleDto;
}());

var ChangeUserLanguageDto = /** @class */ (function () {
    function ChangeUserLanguageDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ChangeUserLanguageDto.prototype.init = function (data) {
        if (data) {
            this.languageName = data["languageName"];
        }
    };
    ChangeUserLanguageDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ChangeUserLanguageDto();
        result.init(data);
        return result;
    };
    ChangeUserLanguageDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["languageName"] = this.languageName;
        return data;
    };
    ChangeUserLanguageDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ChangeUserLanguageDto();
        result.init(json);
        return result;
    };
    return ChangeUserLanguageDto;
}());

var PagedResultDtoOfUserDto = /** @class */ (function () {
    function PagedResultDtoOfUserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfUserDto.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(UserDto.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfUserDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultDtoOfUserDto();
        result.init(data);
        return result;
    };
    PagedResultDtoOfUserDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfUserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfUserDto();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfUserDto;
}());

var IsTenantAvailableOutputState;
(function (IsTenantAvailableOutputState) {
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_1"] = 1] = "_1";
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_2"] = 2] = "_2";
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_3"] = 3] = "_3";
})(IsTenantAvailableOutputState || (IsTenantAvailableOutputState = {}));
var SwaggerException = /** @class */ (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function () {
                observer.next(this.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./src/shared/service-proxies/service-proxy.module.ts":
/*!************************************************************!*\
  !*** ./src/shared/service-proxies/service-proxy.module.ts ***!
  \************************************************************/
/*! exports provided: ServiceProxyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProxyModule", function() { return ServiceProxyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _abp_abpHttpInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/abpHttpInterceptor */ "./node_modules/abp-ng2-module/dist/src/abpHttpInterceptor.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceProxyModule = /** @class */ (function () {
    function ServiceProxyModule() {
    }
    ServiceProxyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RoleServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["SessionServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["TenantServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["TokenAuthServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["ConfigurationServiceProxy"],
                _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["TenantRegistrationServiceProxy"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _abp_abpHttpInterceptor__WEBPACK_IMPORTED_MODULE_2__["AbpHttpInterceptor"], multi: true },
            ],
        })
    ], ServiceProxyModule);
    return ServiceProxyModule;
}());



/***/ }),

/***/ "./src/shared/session/app-session.service.ts":
/*!***************************************************!*\
  !*** ./src/shared/session/app-session.service.ts ***!
  \***************************************************/
/*! exports provided: AppSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSessionService", function() { return AppSessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_multi_tenancy_abp_multi_tenancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/multi-tenancy/abp-multi-tenancy.service */ "./node_modules/abp-ng2-module/dist/src/multi-tenancy/abp-multi-tenancy.service.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSessionService = /** @class */ (function () {
    function AppSessionService(_sessionService, _abpMultiTenancyService) {
        this._sessionService = _sessionService;
        this._abpMultiTenancyService = _abpMultiTenancyService;
    }
    Object.defineProperty(AppSessionService.prototype, "application", {
        get: function () {
            return this._application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "userId", {
        get: function () {
            return this.user ? this.user.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenantId", {
        get: function () {
            return this.tenant ? this.tenant.id : null;
        },
        enumerable: true,
        configurable: true
    });
    AppSessionService.prototype.getShownLoginName = function () {
        var userName = this._user.userName;
        if (!this._abpMultiTenancyService.isEnabled) {
            return userName;
        }
        return (this._tenant ? this._tenant.tenancyName : '.') + '\\' + userName;
    };
    AppSessionService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sessionService
                .getCurrentLoginInformations()
                .toPromise()
                .then(function (result) {
                _this._application = result.application;
                _this._user = result.user;
                _this._tenant = result.tenant;
                resolve(true);
            }, function (err) {
                reject(err);
            });
        });
    };
    AppSessionService.prototype.changeTenantIfNeeded = function (tenantId) {
        if (this.isCurrentTenant(tenantId)) {
            return false;
        }
        abp.multiTenancy.setTenantIdCookie(tenantId);
        location.reload();
        return true;
    };
    AppSessionService.prototype.isCurrentTenant = function (tenantId) {
        if (!tenantId && this.tenant) {
            return false;
        }
        else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
            return false;
        }
        return true;
    };
    AppSessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SessionServiceProxy"],
            _abp_multi_tenancy_abp_multi_tenancy_service__WEBPACK_IMPORTED_MODULE_1__["AbpMultiTenancyService"]])
    ], AppSessionService);
    return AppSessionService;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _shared_components_custom_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/custom-components.module */ "./src/shared/components/custom-components.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_abp_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/abp.module */ "./node_modules/abp-ng2-module/dist/src/abp.module.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/session/app-session.service */ "./src/shared/session/app-session.service.ts");
/* harmony import */ var _shared_nav_app_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/nav/app-url.service */ "./src/shared/nav/app-url.service.ts");
/* harmony import */ var _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/auth/app-auth.service */ "./src/shared/auth/app-auth.service.ts");
/* harmony import */ var _shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/auth/auth-route-guard */ "./src/shared/auth/auth-route-guard.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _utils_validation_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/validation/index */ "./src/shared/utils/validation/index.ts");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm5/chart.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// region: third libs


/**
 * 第三方的一些组件模块
 */
var THIRDMODULES = [
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
    ngx_countdown__WEBPACK_IMPORTED_MODULE_11__["CountdownModule"],
    _shared_components_custom_components_module__WEBPACK_IMPORTED_MODULE_0__["CustomComponentModule"],
];



// endregion


var PIPES = [_utils_validation_index__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__["AppSessionService"],
                _shared_nav_app_url_service__WEBPACK_IMPORTED_MODULE_7__["AppUrlService"],
                _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_8__["AppAuthService"],
                _shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_9__["AppRouteGuard"]
            ],
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _abp_abp_module__WEBPACK_IMPORTED_MODULE_4__["AbpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_14__["AlainThemeModule"].forChild(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_12__["DelonABCModule"],
                // DelonACLModule,
                _delon_chart__WEBPACK_IMPORTED_MODULE_16__["DelonChartModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_13__["DelonFormModule"]
            ].concat(THIRDMODULES),
            declarations: PIPES.slice(),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_14__["AlainThemeModule"],
                _delon_abc__WEBPACK_IMPORTED_MODULE_12__["DelonABCModule"],
                // DelonACLModule,
                _delon_chart__WEBPACK_IMPORTED_MODULE_16__["DelonChartModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_13__["DelonFormModule"]
            ].concat(PIPES, THIRDMODULES),
            providers: [
                _delon_theme__WEBPACK_IMPORTED_MODULE_14__["ModalHelper"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/shared/utils/validation/equal-validator.directive.ts":
/*!******************************************************************!*\
  !*** ./src/shared/utils/validation/equal-validator.directive.ts ***!
  \******************************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//Got from: https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true';
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (control) {
        var pairControl = control.root.get(this.validateEqual);
        if (!pairControl) {
            return null;
        }
        var value = control.value;
        var pairValue = pairControl.value;
        if (!value && !pairValue) {
            return null;
        }
        if (this.isReverse) {
            if (value === pairValue) {
                if (pairControl.errors) {
                    delete pairControl.errors['validateEqual'];
                }
                if (!Object.keys(pairControl.errors).length) {
                    pairControl.setErrors(null);
                }
            }
            else {
                pairControl.setErrors({
                    validateEqual: true
                });
            }
            return null;
        }
        else {
            if (value !== pairValue) {
                return {
                    validateEqual: true
                };
            }
        }
    };
    var EqualValidator_1;
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/shared/utils/validation/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/utils/validation/index.ts ***!
  \**********************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equal_validator_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equal-validator.directive */ "./src/shared/utils/validation/equal-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return _equal_validator_directive__WEBPACK_IMPORTED_MODULE_0__["EqualValidator"]; });




/***/ }),

/***/ "./src/style-icons-auto.ts":
/*!*********************************!*\
  !*** ./src/style-icons-auto.ts ***!
  \*********************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

var ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EllipsisOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SearchOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["WeiboCircleOutline"]
];


/***/ }),

/***/ "./src/style-icons.ts":
/*!****************************!*\
  !*** ./src/style-icons.ts ***!
  \****************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
// Custom icon static resources

var ICONS = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["InfoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ProfileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ExceptionOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LinkOutline"],
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Z_D\Develop\staneee\Abp-Alian\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map