/**
 * A component that renders an icon for a symbol with the given name.
 */

const React = require('react');
const {StyleSheet} = require('aphrodite');

const MathIcon = require('./math-icon');
const SvgIcon = require('./svg-icon');
const TextIcon = require('./text-icon');
const {IconTypes} = require('../consts');
const {iconPropType} = require('./prop-types');
const {gray25} = require('./common-style');

const focusedColor = '#FFF';
const unfocusedColor = gray25;

class Icon extends React.PureComponent {
    static propTypes = {
        focused: React.PropTypes.bool,
        icon: iconPropType.isRequired,
        // An Aphrodite style object, or an array of Aphrodite style objects.
        // Note that custom styles will only be applied to text and math icons
        // (and not SVG icons).
        style: React.PropTypes.any,
    };

    render() {
        const {focused, icon, style} = this.props;

        const styleWithFocus = [
            focused ? styles.focused : styles.unfocused,
            ...(Array.isArray(style) ? style : [style]),
        ];

        switch (icon.type) {
            // 右下角4个选项
            case IconTypes.MATH:
                return <MathIcon
                    math={icon.data}
                    style={styleWithFocus}
                />;

            // 数学公式，包括加减乘除
            case IconTypes.SVG:
                // TODO(charlie): Support passing style objects to `SvgIcon`.
                // This will require migrating the individual icons to use
                // `currentColor` and accept a `className` prop, rather than
                // relying on an explicit color prop.
                return <SvgIcon
                    name={icon.data}
                    color={focused ? focusedColor : unfocusedColor}
                />;

            // 数字键盘内容
            case IconTypes.TEXT:
                return <TextIcon
                    character={icon.data}
                    style={styleWithFocus}
                />;
        }

        throw new Error("No icon or symbol provided");
    }
}

const styles = StyleSheet.create({
    unfocused: {
        color: unfocusedColor,
    },

    focused: {
        color: focusedColor,
    },
});

module.exports = Icon;
