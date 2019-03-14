function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

import './help.css';

var Help = function (_React$Component) {
		_inherits(Help, _React$Component);

		function Help(props) {
				_classCallCheck(this, Help);

				var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

				_this.onClick = function (e) {
						e.preventDefault();
						_this.setState({ helpVisible: !_this.state.helpVisible });
				};

				_this.render = function () {
						var label = _this.props.label || 'Help';
						var labelClass = _this.props.labelClass || '';
						var bodyClass = _this.props.bodyClass || '';
						return React.createElement(
								'span',
								{ className: 'buttonControl-group-container' },
								React.createElement(
										'span',
										{ className: 'buttonControl-group' },
										React.createElement(
												'a',
												{ onClick: _this.onClick, className: labelClass, 'aria-controls': 't1', 'aria-expanded': 'true' },
												React.createElement(
														'span',
														null,
														label
												)
										)
								),
								_this.state.helpVisible ? React.createElement(
										'span',
										{ className: "topic " + bodyClass, role: 'region', tabIndex: '0', 'data-id': 'help-description' },
										React.createElement('span', { dangerouslySetInnerHTML: { __html: _this.props.text } })
								) : null
						);
				};

				_this.state = {
						helpVisible: false
				};
				return _this;
		}

		return Help;
}(React.Component);

export default Help;