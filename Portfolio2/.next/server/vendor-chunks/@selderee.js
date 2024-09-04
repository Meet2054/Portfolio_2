"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@selderee";
exports.ids = ["vendor-chunks/@selderee"];
exports.modules = {

/***/ "(action-browser)/./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hp2Builder: () => (/* binding */ hp2Builder)\n/* harmony export */ });\n/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ \"(action-browser)/./node_modules/domhandler/lib/esm/index.js\");\n/* harmony import */ var selderee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selderee */ \"(action-browser)/./node_modules/selderee/lib/selderee.mjs\");\n\n\n\nfunction hp2Builder(nodes) {\n    return new selderee__WEBPACK_IMPORTED_MODULE_1__.Picker(handleArray(nodes));\n}\nfunction handleArray(nodes) {\n    const matchers = nodes.map(handleNode);\n    return (el, ...tail) => matchers.flatMap(m => m(el, ...tail));\n}\nfunction handleNode(node) {\n    switch (node.type) {\n        case 'terminal': {\n            const result = [node.valueContainer];\n            return (el, ...tail) => result;\n        }\n        case 'tagName':\n            return handleTagName(node);\n        case 'attrValue':\n            return handleAttrValueName(node);\n        case 'attrPresence':\n            return handleAttrPresenceName(node);\n        case 'pushElement':\n            return handlePushElementNode(node);\n        case 'popElement':\n            return handlePopElementNode(node);\n    }\n}\nfunction handleTagName(node) {\n    const variants = {};\n    for (const variant of node.variants) {\n        variants[variant.value] = handleArray(variant.cont);\n    }\n    return (el, ...tail) => {\n        const continuation = variants[el.name];\n        return (continuation) ? continuation(el, ...tail) : [];\n    };\n}\nfunction handleAttrPresenceName(node) {\n    const attrName = node.name;\n    const continuation = handleArray(node.cont);\n    return (el, ...tail) => (Object.prototype.hasOwnProperty.call(el.attribs, attrName))\n        ? continuation(el, ...tail)\n        : [];\n}\nfunction handleAttrValueName(node) {\n    const callbacks = [];\n    for (const matcher of node.matchers) {\n        const predicate = matcher.predicate;\n        const continuation = handleArray(matcher.cont);\n        callbacks.push((attr, el, ...tail) => (predicate(attr) ? continuation(el, ...tail) : []));\n    }\n    const attrName = node.name;\n    return (el, ...tail) => {\n        const attr = el.attribs[attrName];\n        return (attr || attr === '')\n            ? callbacks.flatMap(cb => cb(attr, el, ...tail))\n            : [];\n    };\n}\nfunction handlePushElementNode(node) {\n    const continuation = handleArray(node.cont);\n    const leftElementGetter = (node.combinator === '+')\n        ? getPrecedingElement\n        : getParentElement;\n    return (el, ...tail) => {\n        const next = leftElementGetter(el);\n        if (next === null) {\n            return [];\n        }\n        return continuation(next, el, ...tail);\n    };\n}\nconst getPrecedingElement = (el) => {\n    const prev = el.prev;\n    if (prev === null) {\n        return null;\n    }\n    return ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(prev)) ? prev : getPrecedingElement(prev);\n};\nconst getParentElement = (el) => {\n    const parent = el.parent;\n    return (parent && (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(parent)) ? parent : null;\n};\nfunction handlePopElementNode(node) {\n    const continuation = handleArray(node.cont);\n    return (el, next, ...tail) => continuation(next, ...tail);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9Ac2VsZGVyZWUvcGx1Z2luLWh0bWxwYXJzZXIyL2xpYi9ocDItYnVpbGRlci5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ0Q7O0FBRWxDO0FBQ0EsZUFBZSw0Q0FBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvMi8uL25vZGVfbW9kdWxlcy9Ac2VsZGVyZWUvcGx1Z2luLWh0bWxwYXJzZXIyL2xpYi9ocDItYnVpbGRlci5tanM/YTIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1RhZyB9IGZyb20gJ2RvbWhhbmRsZXInO1xuaW1wb3J0IHsgUGlja2VyIH0gZnJvbSAnc2VsZGVyZWUnO1xuXG5mdW5jdGlvbiBocDJCdWlsZGVyKG5vZGVzKSB7XG4gICAgcmV0dXJuIG5ldyBQaWNrZXIoaGFuZGxlQXJyYXkobm9kZXMpKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFycmF5KG5vZGVzKSB7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBub2Rlcy5tYXAoaGFuZGxlTm9kZSk7XG4gICAgcmV0dXJuIChlbCwgLi4udGFpbCkgPT4gbWF0Y2hlcnMuZmxhdE1hcChtID0+IG0oZWwsIC4uLnRhaWwpKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZU5vZGUobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rlcm1pbmFsJzoge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW25vZGUudmFsdWVDb250YWluZXJdO1xuICAgICAgICAgICAgcmV0dXJuIChlbCwgLi4udGFpbCkgPT4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3RhZ05hbWUnOlxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVRhZ05hbWUobm9kZSk7XG4gICAgICAgIGNhc2UgJ2F0dHJWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXR0clZhbHVlTmFtZShub2RlKTtcbiAgICAgICAgY2FzZSAnYXR0clByZXNlbmNlJzpcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVBdHRyUHJlc2VuY2VOYW1lKG5vZGUpO1xuICAgICAgICBjYXNlICdwdXNoRWxlbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHVzaEVsZW1lbnROb2RlKG5vZGUpO1xuICAgICAgICBjYXNlICdwb3BFbGVtZW50JzpcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQb3BFbGVtZW50Tm9kZShub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVUYWdOYW1lKG5vZGUpIHtcbiAgICBjb25zdCB2YXJpYW50cyA9IHt9O1xuICAgIGZvciAoY29uc3QgdmFyaWFudCBvZiBub2RlLnZhcmlhbnRzKSB7XG4gICAgICAgIHZhcmlhbnRzW3ZhcmlhbnQudmFsdWVdID0gaGFuZGxlQXJyYXkodmFyaWFudC5jb250KTtcbiAgICB9XG4gICAgcmV0dXJuIChlbCwgLi4udGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBjb250aW51YXRpb24gPSB2YXJpYW50c1tlbC5uYW1lXTtcbiAgICAgICAgcmV0dXJuIChjb250aW51YXRpb24pID8gY29udGludWF0aW9uKGVsLCAuLi50YWlsKSA6IFtdO1xuICAgIH07XG59XG5mdW5jdGlvbiBoYW5kbGVBdHRyUHJlc2VuY2VOYW1lKG5vZGUpIHtcbiAgICBjb25zdCBhdHRyTmFtZSA9IG5vZGUubmFtZTtcbiAgICBjb25zdCBjb250aW51YXRpb24gPSBoYW5kbGVBcnJheShub2RlLmNvbnQpO1xuICAgIHJldHVybiAoZWwsIC4uLnRhaWwpID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZWwuYXR0cmlicywgYXR0ck5hbWUpKVxuICAgICAgICA/IGNvbnRpbnVhdGlvbihlbCwgLi4udGFpbClcbiAgICAgICAgOiBbXTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUF0dHJWYWx1ZU5hbWUobm9kZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuICAgIGZvciAoY29uc3QgbWF0Y2hlciBvZiBub2RlLm1hdGNoZXJzKSB7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZSA9IG1hdGNoZXIucHJlZGljYXRlO1xuICAgICAgICBjb25zdCBjb250aW51YXRpb24gPSBoYW5kbGVBcnJheShtYXRjaGVyLmNvbnQpO1xuICAgICAgICBjYWxsYmFja3MucHVzaCgoYXR0ciwgZWwsIC4uLnRhaWwpID0+IChwcmVkaWNhdGUoYXR0cikgPyBjb250aW51YXRpb24oZWwsIC4uLnRhaWwpIDogW10pKTtcbiAgICB9XG4gICAgY29uc3QgYXR0ck5hbWUgPSBub2RlLm5hbWU7XG4gICAgcmV0dXJuIChlbCwgLi4udGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyID0gZWwuYXR0cmlic1thdHRyTmFtZV07XG4gICAgICAgIHJldHVybiAoYXR0ciB8fCBhdHRyID09PSAnJylcbiAgICAgICAgICAgID8gY2FsbGJhY2tzLmZsYXRNYXAoY2IgPT4gY2IoYXR0ciwgZWwsIC4uLnRhaWwpKVxuICAgICAgICAgICAgOiBbXTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaGFuZGxlUHVzaEVsZW1lbnROb2RlKG5vZGUpIHtcbiAgICBjb25zdCBjb250aW51YXRpb24gPSBoYW5kbGVBcnJheShub2RlLmNvbnQpO1xuICAgIGNvbnN0IGxlZnRFbGVtZW50R2V0dGVyID0gKG5vZGUuY29tYmluYXRvciA9PT0gJysnKVxuICAgICAgICA/IGdldFByZWNlZGluZ0VsZW1lbnRcbiAgICAgICAgOiBnZXRQYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiAoZWwsIC4uLnRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IGxlZnRFbGVtZW50R2V0dGVyKGVsKTtcbiAgICAgICAgaWYgKG5leHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGludWF0aW9uKG5leHQsIGVsLCAuLi50YWlsKTtcbiAgICB9O1xufVxuY29uc3QgZ2V0UHJlY2VkaW5nRWxlbWVudCA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2O1xuICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGlzVGFnKHByZXYpKSA/IHByZXYgOiBnZXRQcmVjZWRpbmdFbGVtZW50KHByZXYpO1xufTtcbmNvbnN0IGdldFBhcmVudEVsZW1lbnQgPSAoZWwpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnQ7XG4gICAgcmV0dXJuIChwYXJlbnQgJiYgaXNUYWcocGFyZW50KSkgPyBwYXJlbnQgOiBudWxsO1xufTtcbmZ1bmN0aW9uIGhhbmRsZVBvcEVsZW1lbnROb2RlKG5vZGUpIHtcbiAgICBjb25zdCBjb250aW51YXRpb24gPSBoYW5kbGVBcnJheShub2RlLmNvbnQpO1xuICAgIHJldHVybiAoZWwsIG5leHQsIC4uLnRhaWwpID0+IGNvbnRpbnVhdGlvbihuZXh0LCAuLi50YWlsKTtcbn1cblxuZXhwb3J0IHsgaHAyQnVpbGRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs\n");

/***/ })

};
;