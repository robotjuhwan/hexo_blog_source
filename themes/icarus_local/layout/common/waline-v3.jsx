const { Component } = require('inferno');

const WALINE_CLIENT_URL = 'https://unpkg.com/@waline/client@v3/dist/waline.js';

function escapeForInlineModule(value) {
    return JSON.stringify(value)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026');
}

module.exports = class extends Component {
    render() {
        const { comment } = this.props;
        if (!comment || !comment.server_url || !comment.turnstile_key) {
            return null;
        }

        const options = {
            el: '#waline-thread',
            serverURL: comment.server_url,
            meta: comment.meta || ['nick'],
            requiredMeta: comment.required_meta || ['nick'],
            login: comment.login || 'disable',
            wordLimit: comment.word_limit || 500,
            pageSize: comment.page_size || 10,
            imageUploader: comment.image_uploader === undefined ? false : comment.image_uploader,
            highlighter: comment.highlighter === undefined ? false : comment.highlighter,
            texRenderer: comment.tex_renderer === undefined ? false : comment.tex_renderer,
            search: comment.search === undefined ? false : comment.search,
            reaction: comment.reaction === undefined ? false : comment.reaction,
            emoji: false,
            turnstileKey: comment.turnstile_key
        };
        const optionsJson = escapeForInlineModule(options);
        const script = `import { init } from '${WALINE_CLIENT_URL}';
const options = ${optionsJson};
options.path = (window.location.pathname || '/').replace(/\\/$/, '') || '/';
init(options);`;

        return <div id="waline-thread">
            <script type="module" dangerouslySetInnerHTML={{ __html: script }}></script>
        </div>;
    }
};
