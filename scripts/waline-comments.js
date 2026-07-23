/* global hexo */

const REQUIRED_ENV = ['WALINE_SERVER_URL', 'WALINE_TURNSTILE_SITE_KEY'];

// Both values are public client configuration: every rendered post ships them
// to the browser. Keeping the deployed values here prevents fresh clones from
// silently dropping the comment widget when a local shell has no env file.
const PUBLIC_DEFAULTS = {
    WALINE_SERVER_URL: 'https://comments.poul.kr',
    WALINE_TURNSTILE_SITE_KEY: '0x4AAAAAAD3niZNbZU7wcpMV'
};

function readConfig() {
    const values = Object.fromEntries(REQUIRED_ENV.map(name => [
        name,
        (process.env[name] || PUBLIC_DEFAULTS[name]).trim()
    ]));

    let serverUrl;
    try {
        serverUrl = new URL(values.WALINE_SERVER_URL);
    } catch {
        throw new Error('WALINE_SERVER_URL must be a valid absolute URL.');
    }
    if (!['http:', 'https:'].includes(serverUrl.protocol) || serverUrl.username || serverUrl.password || serverUrl.search || serverUrl.hash) {
        throw new Error('WALINE_SERVER_URL must be a plain http(s) server URL without credentials, query, or fragment.');
    }

    return {
        type: 'waline',
        server_url: serverUrl.toString().replace(/\/$/, ''),
        turnstile_key: values.WALINE_TURNSTILE_SITE_KEY,
        meta: ['nick'],
        required_meta: ['nick'],
        login: 'disable',
        word_limit: 500,
        page_size: 10,
        image_uploader: false,
        highlighter: false,
        tex_renderer: false,
        search: false,
        reaction: false
    };
}

hexo.extend.filter.register('before_generate', () => {
    const comment = readConfig();
    if (!comment) {
        return;
    }

    // Theme schema validation has already completed, so secrets never need to live in YAML.
    hexo.theme.config.comment = comment;
    hexo.log.info('Waline comments enabled for this build.');
});
