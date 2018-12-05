/**
 * An autogenerated component that renders the COS iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

class Circ extends React.Component {
    static propTypes = {
        color: React.PropTypes.string.isRequired,
    };

    render() {
        return (
            <svg width="48" height="48" viewBox="0 0 48 48">
                <g>
                    <rect x="-0.5" y="-0.5" display="none" opacity="0.2" width="48" height="48"/>
                    <rect x="13.5" y="13.5" display="none" opacity="0.2" width="20" height="20"/>
                    <rect x="7.5" y="7.5" display="none" opacity="0.2" width="32" height="32"/>
                    <g>
                        <path d="M28,18.612H14.8v13.2H28V18.612L28,18.612z M16,30.612v-10.8h10.8v10.8H16L16,30.612z"/>
                    </g>
                    <g>
                        <circle fill="none" stroke="#000000" stroke-miterlimit="10" cx="30.992" cy="17.48" r="2"/>
                    </g>
                </g>
			</svg>
        )
    }
}

module.exports = Circ;