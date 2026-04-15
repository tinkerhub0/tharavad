(function () {
  var el = document.getElementById('wiki-sidebar');
  if (!el) return;

  var script = document.currentScript;
  var root = script ? (script.getAttribute('data-root') || './') : './';
  var page = document.body.getAttribute('data-page') || '';

  var sections = [
    {
      label: 'Overview',
      links: [
        { id: 'index',           text: 'Introduction',      href: 'index.html' },
        { id: 'getting-started', text: 'Getting started',   href: 'getting-started/index.html' },
      ]
    },
    {
      label: 'Guides',
      links: [
        { id: 'request-access', text: 'Request access',     href: 'request-access/index.html' },
        { id: 'ssh-keys',       text: 'SSH keys',           href: 'ssh-keys/index.html' },
        { id: 'connecting',     text: 'Connecting via SSH', href: 'connecting/index.html' },
      ]
    },
    {
      label: 'Hosting',
      links: [
        { id: 'hosting',    text: 'Hosting a project', href: 'hosting/index.html' },
        { id: 'ports',      text: 'Ports',             href: 'ports/index.html' },
        { id: 'subdomains', text: 'Subdomains',        href: 'subdomains/index.html' },
        { id: 'tmux',       text: 'Using tmux',        href: 'tmux/index.html' },
      ]
    },
    {
      label: 'Auto-deploy',
      links: [
        { id: 'deploy-scripts-cron', text: 'Deploy scripts &amp; cron', href: 'deploy-scripts-cron/index.html' },
        { id: 'caddy-pipeline',      text: 'Caddy &amp; full pipeline',  href: 'caddy-pipeline/index.html' },
      ]
    },
    {
      label: 'Reference',
      links: [
        { id: 'tinker',      text: 'tinker CLI',  href: 'tinker/index.html' },
        { id: 'environment', text: 'Environment', href: 'environment/index.html' },
      ]
    },
  ];

  var html = '';
  sections.forEach(function (section) {
    html += '<div class="sidebar-section">';
    html += '<span class="sidebar-label">' + section.label + '</span>';
    section.links.forEach(function (link) {
      var active = link.id === page ? ' class="active"' : '';
      html += '<a href="' + root + link.href + '"' + active + '>' + link.text + '</a>';
    });
    html += '</div>';
  });

  el.innerHTML = html;
})();
