---
---

window.MAIN_PAGE_INFO = {};

{% for mp in site.main_pages %}
window.MAIN_PAGE_INFO['{{mp.short}}'] = {
    colors : JSON.parse('{{mp.colors | jsonify}}'),
    short : '{{mp.short}}',
    glyph : '{{mp.glyph}}',
    // title : '{{mp.title}}'
    display : '{{mp.display}}',
    subtitle : '{{mp.subtitle}}',
    content_class : '{{mp.content_class}}'
};
// JSON.parse('{{mp | jsonify}}');
{% endfor %} 
