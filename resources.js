// Self-hosted React. support.js checks window.__resources[url] before falling back to unpkg
// (see cdnScriptFor). Must load BEFORE support.js. Files live in vendor/ (react@18.3.1, react-dom@18.3.1).
window.__resources = {
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js': 'vendor/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': 'vendor/react-dom.production.min.js',
};
