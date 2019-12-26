import { css, jsx } from '@emotion/core';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

var hexRgb = (hex, options = {}) => {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alpha = 1;

	if (hex.length === 8) {
		alpha = parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const num = parseInt(hex, 16);
	const red = num >> 16;
	const green = (num >> 8) & 255;
	const blue = num & 255;

	return options.format === 'array' ?
		[red, green, blue, alpha] :
		{red, green, blue, alpha};
};

var rgba = function rgba(hex, alpha) {
  var rgb = hexRgb(hex, {
    format: 'array'
  }).slice(0, -1).join(',');
  return "".concat(rgb, ",").concat(alpha);
};

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    height: 3rem;\n    font-size: 1.125rem;\n    padding: 0 1.5rem;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    height: 2.5rem;\n    font-size: 1rem;\n    padding: 0 1rem;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 1.75rem;\n    font-size: 0.75rem;\n    padding: 0 0.875rem;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      background: none;\n      color: ", ";\n      &:hover:enabled {\n        background: rgba(", ");\n      }\n      &:active:enabled {\n        background: rgba(", ");\n      }\n      &:disabled {\n        background: rgba(", ");\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: #e9ecef;\n      color: #343a40;\n\n      &:hover:enabled {\n        opacity: 0.8;\n      }\n      &:active:enabled {\n        opacity: 0.8;\n      }\n      &:disabled {\n        opacity: 0.8;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n      color: white;\n      &:hover:enabled {\n        opacity: 0.8;\n      }\n      &:active:enabled {\n        opacity: 0.8;\n      }\n      &:disabled {\n        opacity: 0.8;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  user-select: none;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  height: 2rem;\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n  color: white;\n  border-radius: 0.25rem;\n  line-height: 1;\n  font-weight: 600;\n\n  &:active {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var button = css(_templateObject());
var themes = function themes(theme, mainColor) {
  var btnTheme;

  if (theme === 'primary') {
    btnTheme = css(_templateObject2(), mainColor);
  } else if (theme === 'secondary') {
    btnTheme = css(_templateObject3());
  } else if (theme === 'tertiary') {
    btnTheme = css(_templateObject4(), mainColor, rgba(mainColor, 0.2), rgba(mainColor, 0.2), rgba(mainColor, 0.2));
  }

  return btnTheme;
};
var sizes = {
  small: css(_templateObject5()),
  medium: css(_templateObject6()),
  big: css(_templateObject7())
};

/** @jsx jsx */

/** `Button` component is used when something process is triggered */
var Button = function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      type = _ref.type,
      size = _ref.size,
      mainColor = _ref.mainColor,
      width = _ref.width,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return jsx("button", {
    css: [button, themes(theme, mainColor), sizes[size], {
      width: width
    }],
    type: type,
    disabled: disabled,
    onClick: onClick
  }, children);
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: 'medium',
  mainColor: '#20c997',
  disabled: false
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var alignStyle = function alignStyle(direction, align, gap) {
  var marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  var alignType = direction === 'row' ? 'justifyContent' : 'alignItems';
  return css({
    '&': _defineProperty({}, alignType, align),
    '* + *': _defineProperty({}, marginType, gap)
  });
};

/** @jsx jsx */

var ButtonGroup = function ButtonGroup(_ref) {
  var direction = _ref.direction,
      align = _ref.align,
      gap = _ref.gap,
      children = _ref.children,
      className = _ref.className;
  return jsx("div", {
    css: [{
      display: 'flex',
      flexDirection: direction
    }, alignStyle(direction, align, gap)],
    className: className
  }, children);
};

ButtonGroup.defaultProps = {
  direction: 'row',
  align: 'flex-start',
  gap: '1rem',
  className: ''
};

export { Button, ButtonGroup };
