/* global hexo */

const REQUIRED_ENV = ['WALINE_SERVER_URL', 'WALINE_TURNSTILE_SITE_KEY'];

function readConfig() {
    const values = Object.fromEntries(REQUIRED_ENV.map(name => [name, (process.env[name] || '').trim()]));
    const present = Object.values(values).filter(Boolean).length;

    if (present === 0) {
        return null;
    }
    if (present !== REQUIRED_ENV.length) {
        throw new Error(`${REQUIRED_ENV.join(' and ')} must be set together to enable comments.`);
    }

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
