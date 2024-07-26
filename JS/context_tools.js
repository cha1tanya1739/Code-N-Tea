function refresh() {
    location.reload();
}

function copy_page_address() {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl);
}