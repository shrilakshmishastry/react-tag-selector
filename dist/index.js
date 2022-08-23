import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var TagsModal = function TagsModal(_ref) {
  var tags = _ref.tags,
    inputString = _ref.inputString,
    selectedTag = _ref.selectedTag;
  useEffect(function () { }, [inputString, tags]);
  return /*#__PURE__*/React.createElement("div", {
    id: "tagOptions",
    className: "tagsContiner",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "all",
    role: 'region'
  }, /*#__PURE__*/React.createElement("div", {
    "aria-label": "available tags ".concat(tags.toString(), "\n          Use Tab and shift tab to access tags\n          Press enter button to select \n          ")
  }, tags && tags.map(function (value, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: value + index.toString()
    }, /*#__PURE__*/React.createElement("button", {
      className: "tagButton",
      value: value,
      onClick: function onClick(e) {
        e.currentTarget.blur();
        selectedTag(value);
      }
    }, value));
  })), tags && tags.length === 0 && /*#__PURE__*/React.createElement("p", null, "no match"));
};

TagsModal.propTypes = {
  tags: PropTypes.array,
  inputString: PropTypes.string,
  selectedTag: PropTypes.func
};

var TagSelector = function TagSelector(_ref) {
  var tagsFilter = _ref.tagsFilter,
    selectedTag = _ref.selectedTag,
    removeTag = _ref.removeTag;
  _ref.lableForInputTag;

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    inputString = _useState2[0],
    setInputString = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tags = _useState4[0],
    setSelectedTags = _useState4[1];

  var _useState5 = useState(tagsFilter),
    _useState6 = _slicedToArray(_useState5, 2),
    notSelectedTags = _useState6[0],
    setNotSelectedTags = _useState6[1];

  var _useState7 = useState(tagsFilter),
    _useState8 = _slicedToArray(_useState7, 2),
    availableTagsForModal = _useState8[0],
    setAllavailableTagsForModal = _useState8[1];

  var inputRef = useRef(null);

  var handleRemoveTag = function handleRemoveTag(value, index) {
    var interMediateArr = _toConsumableArray(tags);

    inputRef.current.focus();
    interMediateArr.splice(index, 1);
    setSelectedTags(_toConsumableArray(interMediateArr));
    setNotSelectedTags([].concat(_toConsumableArray(notSelectedTags), [value]));
    setAllavailableTagsForModal([].concat(_toConsumableArray(notSelectedTags), [value]));
    removeTag(index);
  };

  var handleSelectedTag = function handleSelectedTag(value) {
    setSelectedTags([].concat(_toConsumableArray(tags), [value]));

    var interMediateArr = _toConsumableArray(notSelectedTags);

    var index = notSelectedTags.indexOf(value);
    interMediateArr.splice(index, 1);
    setInputString('');
    inputRef.current.focus();
    setNotSelectedTags(_toConsumableArray(interMediateArr));
    setAllavailableTagsForModal(_toConsumableArray(interMediateArr));
    selectedTag(value);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Backspace' && tags.length > 0 && inputRef.current.value.length === 0) {
      var intermediateArr = _toConsumableArray(tags);

      var removed = intermediateArr.pop();
      setSelectedTags(intermediateArr);
      selectedTag(intermediateArr);
      setNotSelectedTags([].concat(_toConsumableArray(notSelectedTags), [removed]));
      setAllavailableTagsForModal([].concat(_toConsumableArray(notSelectedTags), [removed]));
    }
  };

  var handleInputChange = function handleInputChange(value) {
    setInputString(value.target.value);

    var interArr = _toConsumableArray(notSelectedTags);

    var res = interArr.filter(function (val) {
      return val.includes(value.target.value);
    });
    setAllavailableTagsForModal(_toConsumableArray(res));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "tagSelectionContainer"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-label": 'Search Tag',
    className: "tagSelectedWrap",
    id: "tagSearchContainer",
    tabIndex: 0,
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown(event);
    }
  }, tags && tags.map(function (value, index) {
    return /*#__PURE__*/React.createElement("button", {
      className: "tagButtonCancelable",
      key: value,
      "aria-live": "polite",
      "aria-atomic": "true",
      "aria-relevant": "all",
      value: value,
      tabIndex: 0,
      "aria-label": "Press enter to deselect ".concat(value),
      onClick: function onClick(e) {
        e.currentTarget.remove();
        handleRemoveTag(value, index);
      }
    }, value, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-x svgCancel",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      // eslint-disable-next-line max-len
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    })));
  }), /*#__PURE__*/React.createElement("input", {
    className: "tagInput",
    id: "tag-input",
    ref: inputRef,
    "aria-labelledby": "tagSearchContainer",
    type: "text",
    onChange: function onChange(e) {
      handleInputChange(e);
    },
    placeholder: 'Tags'
  })), inputString && /*#__PURE__*/React.createElement(TagsModal, {
    selectedTag: function selectedTag(value) {
      handleSelectedTag(value);
      inputRef.current.value = '';
      setInputString('');
    },
    tags: availableTagsForModal,
    inputString: inputString
  }));
};

TagSelector.propTypes = {
  tagsFilter: PropTypes.array,
  selectedTag: PropTypes.func,
  removeTag: PropTypes.func
};

export { TagSelector as default };
