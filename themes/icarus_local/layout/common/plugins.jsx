const createLogger = require('hexo-log');
const logger = (createLogger.default || createLogger)();
const { Component, Fragment } = require('inferno');
const view = require('hexo-component-inferno/lib/core/view');

module.exports = class extends Component {
    render() {
        const { site, config, page, helper, head } = this.props;
        const { plugins = [] } = config;

        return <Fragment>
            {Object.keys(plugins).map(name => {
                // plugin is not enabled
                if (!plugins[name]) {
                    return null;
                }
                try {
                    let pluginConfig = plugins[name];
                    if (config.preview === true && name === 'cookie_consent' && pluginConfig && typeof pluginConfig === 'object') {
                        pluginConfig = Object.assign({}, pluginConfig, {
                            policyLink: helper.url_for('/privacy/')
                        });
                    }
                    let Plugin = view.require('plugin/' + name);
                    Plugin = Plugin.Cacheable ? Plugin.Cacheable : Plugin;
                    return <Plugin site={site} config={config} page={page} helper={helper} plugin={pluginConfig} head={head} />;
                } catch (e) {
                    logger.w(`Icarus cannot load plugin "${name}"`);
                    return null;
                }
            })}
        </Fragment>;
    }
};
